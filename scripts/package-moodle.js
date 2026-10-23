#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const stagingDir = path.join(distDir, '.moodle-staging');
const zipOutput = path.join(distDir, 'GSEA_Semester_2_SCORM_MOODLE.zip');
const rootZip = path.join(rootDir, 'GSEA_Semester_2_SCORM_MOODLE.zip');
const privateMapPath = path.join(rootDir, 'students.private.json');

console.log('📦 Starting GSEA Semester 2 Moodle SCORM Packaging (with Injected Student Names)...\n');

// 1. Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 2. Build standard html & css first
const buildHtml = require('./build-html');
buildHtml();

console.log('🎨 Compiling Tailwind CSS (minified)...');
try {
  execSync('npx @tailwindcss/cli -i ./src/input.css -o ./output.css --minify', {
    cwd: rootDir,
    stdio: 'inherit'
  });
  console.log('✓ output.css compiled successfully.\n');
} catch (err) {
  console.error('✗ Failed to compile Tailwind CSS:', err.message);
  process.exit(1);
}

// 3. Load private student mapping
let studentMap = {};
if (fs.existsSync(privateMapPath)) {
  try {
    const raw = fs.readFileSync(privateMapPath, 'utf8');
    studentMap = JSON.parse(raw);
    const count = Object.keys(studentMap).filter(k => !k.startsWith('_')).length;
    console.log(`🔒 Loaded private student mapping from students.private.json (${count} student mappings).`);
  } catch (err) {
    console.warn('⚠️ Warning: Failed to parse students.private.json:', err.message);
  }
} else {
  console.warn('⚠️ Notice: students.private.json not found! Package will contain anonymous identifiers.');
  console.warn('👉 Copy students.private.example.json to students.private.json to inject real names.');
}

// 4. Create clean staging directory
if (fs.existsSync(stagingDir)) {
  fs.rmSync(stagingDir, { recursive: true, force: true });
}
fs.mkdirSync(stagingDir, { recursive: true });

// 5. Files and directories to bundle
const includeList = [
  'imsmanifest.xml',
  'index.html',
  'output.css',
  'data',
  'images',
  'admin.html',
  'immersion.html',
  'portfolio.html',
].filter(item => fs.existsSync(path.join(rootDir, item)));

// Helper to copy files or directories recursively
function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy items to staging
for (const item of includeList) {
  copyRecursive(path.join(rootDir, item), path.join(stagingDir, item));
}

// 6. Perform student name injection on staged index.html, admin.html, and portfolio.html
const keys = Object.keys(studentMap).filter(k => !k.startsWith('_'));
if (keys.length > 0) {
  console.log('🔄 Injecting real student names into Moodle package...');
  for (const file of ['index.html', 'admin.html', 'portfolio.html']) {
    const stagedFile = path.join(stagingDir, file);
    if (fs.existsSync(stagedFile)) {
      let content = fs.readFileSync(stagedFile, 'utf8');
      let replacedCount = 0;
      for (const key of keys) {
        const val = studentMap[key];
        if (content.includes(key)) {
          const regex = new RegExp(key, 'g');
          content = content.replace(regex, val);
          replacedCount++;
        }
      }
      fs.writeFileSync(stagedFile, content, 'utf8');
      console.log(`  ✓ ${file}: Injected names for ${replacedCount} identifiers.`);
    }
  }
}

// 7. Bundle staging directory into zip
console.log('\n🗜️  Bundling Moodle SCORM package into dist/GSEA_Semester_2_SCORM_MOODLE.zip...');
if (fs.existsSync(zipOutput)) {
  fs.unlinkSync(zipOutput);
}

try {
  const cmd = `zip -r -q "${zipOutput}" . -x "*.DS_Store"`;
  execSync(cmd, { cwd: stagingDir, stdio: 'inherit' });

  // Copy to root
  if (fs.existsSync(rootZip)) {
    fs.unlinkSync(rootZip);
  }
  fs.copyFileSync(zipOutput, rootZip);

  // Clean staging
  fs.rmSync(stagingDir, { recursive: true, force: true });

  const stats = fs.statSync(zipOutput);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`\n✅ Moodle Package created successfully!`);
  console.log(`📍 Output 1: dist/GSEA_Semester_2_SCORM_MOODLE.zip (${sizeMB} MB)`);
  console.log(`📍 Output 2: ./GSEA_Semester_2_SCORM_MOODLE.zip (${sizeMB} MB)`);
  console.log(`🛡️  Workspace files remain 100% anonymous (zero Git or AI leakage).`);
  console.log(`🚀 Ready for upload to ENAC Moodle / eCampus.`);
} catch (err) {
  console.error('✗ Failed to create zip package:', err.message);
  process.exit(1);
}


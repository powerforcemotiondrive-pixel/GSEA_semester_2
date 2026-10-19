#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.join(rootDir, 'images');

console.log('🚀 Starting Comprehensive Asset Optimization & Weight Stripping...\n');

// 1. Remove PDFs
console.log('📄 Step 1: Removing unused PDFs...');
const pdfs = ['agmod1.pdf', 'ws1.pdf'];
pdfs.forEach(pdf => {
  const p = path.join(rootDir, pdf);
  if (fs.existsSync(p)) {
    const size = (fs.statSync(p).size / (1024 * 1024)).toFixed(2);
    fs.unlinkSync(p);
    console.log(`  ✓ Deleted ${pdf} (${size} MB)`);
  }
});

// 2. Remove 14 Orphaned Legacy Images
console.log('\n🖼️  Step 2: Purging 14 orphaned legacy image prototypes...');
const legacyImages = [
  'card1.png', 'card2.png', 'card3.png', 'card4.png', 'card5.png', 'card6.png',
  'm2card1.png', 'm2card2.png', 'm2card3.png', 'm2card4.png',
  'm3card1.png', 'm3card2.png', 'm3card3.png', 'm3card4.png'
];
let legacyBytes = 0;
legacyImages.forEach(img => {
  const p = path.join(imagesDir, img);
  if (fs.existsSync(p)) {
    const s = fs.statSync(p).size;
    legacyBytes += s;
    fs.unlinkSync(p);
    console.log(`  ✓ Purged legacy ${img} (${(s / 1024).toFixed(0)} KB)`);
  }
});
console.log(`  Total legacy image space freed: ${(legacyBytes / (1024 * 1024)).toFixed(2)} MB`);

// 3. Convert and compress 34 photographic PNGs to 1024px Web JPEG at 82% quality
console.log('\n🎨 Step 3: Compressing active photographic images to Web JPEG (1024px @ 82% quality)...');
const imagesToConvert = [
  // Module 1 AG
  'ag_m1card1.png', 'ag_m1card2.png', 'ag_m1card3.png', 'ag_m1card4.png', 'ddrs_ag_mod1.png',
  // Module 1 AAS
  'aas_m1card1.png', 'aas_m1card2.png', 'aas_m1card3.png', 'aas_m1card4.png', 'ddrs_aas_mod1.png', 'fe_aas_mod1.png',
  // Module 2 AG
  'ag_m2card1.png', 'ag_m2card2.png', 'ag_m2card3.png', 'ag_m2card4.png', 'ddrs_ag_mod2.png',
  // Module 2 AAS
  'aas_m2card1.png', 'aas_m2card2.png', 'aas_m2card3.png', 'aas_m2card4.png', 'ddrs_aas_mod2.png', 'fe_aas_mod2.png',
  // Module 3 AG
  'ag_m3card1.png', 'ag_m3card2.png', 'ag_m3card3.png', 'ag_m3card4.png', 'ddrs_ag_mod3.png', 'immersion_card.png',
  // Module 3 AAS
  'aas_m3card1.png', 'aas_m3card2.png', 'aas_m3card3.png', 'aas_m3card4.png', 'ddrs_aas_mod3.png',
  // Shared
  'course_admin.png'
];

let totalOldBytes = 0;
let totalNewBytes = 0;

imagesToConvert.forEach(pngName => {
  const pngPath = path.join(imagesDir, pngName);
  if (!fs.existsSync(pngPath)) {
    console.warn(`  ⚠️ Warning: Source PNG not found: ${pngName}`);
    return;
  }
  const oldSize = fs.statSync(pngPath).size;
  totalOldBytes += oldSize;

  const jpgName = pngName.replace('.png', '.jpg');
  const jpgPath = path.join(imagesDir, jpgName);

  // Use sips to resample width to 1024px and compress to JPEG 82%
  const cmd = `sips --resampleWidth 1024 -s format jpeg -s formatOptions 82 "${pngPath}" --out "${jpgPath}" > /dev/null 2>&1`;
  execSync(cmd);

  if (fs.existsSync(jpgPath)) {
    const newSize = fs.statSync(jpgPath).size;
    totalNewBytes += newSize;
    fs.unlinkSync(pngPath);
    const reduction = (((oldSize - newSize) / oldSize) * 100).toFixed(0);
    console.log(`  ✓ ${pngName} (${(oldSize / 1024).toFixed(0)} KB) ➔ ${jpgName} (${(newSize / 1024).toFixed(0)} KB) [-${reduction}%]`);
  }
});

// Also optimize turnaround_apron.jpg
const apronJpg = path.join(imagesDir, 'turnaround_apron.jpg');
if (fs.existsSync(apronJpg)) {
  const oldSize = fs.statSync(apronJpg).size;
  totalOldBytes += oldSize;
  const tempPath = path.join(imagesDir, 'turnaround_apron_temp.jpg');
  execSync(`sips --resampleWidth 1024 -s format jpeg -s formatOptions 82 "${apronJpg}" --out "${tempPath}" > /dev/null 2>&1`);
  if (fs.existsSync(tempPath)) {
    fs.unlinkSync(apronJpg);
    fs.renameSync(tempPath, apronJpg);
    const newSize = fs.statSync(apronJpg).size;
    totalNewBytes += newSize;
    console.log(`  ✓ turnaround_apron.jpg (${(oldSize / 1024).toFixed(0)} KB) ➔ ${(newSize / 1024).toFixed(0)} KB`);
  }
}

console.log(`\n  Images converted: ${(totalOldBytes / (1024 * 1024)).toFixed(2)} MB ➔ ${(totalNewBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log(`  Images space saved: ${((totalOldBytes - totalNewBytes) / (1024 * 1024)).toFixed(2)} MB (${(((totalOldBytes - totalNewBytes) / totalOldBytes) * 100).toFixed(1)}% reduction)`);

// 4. Update References in Codebase
console.log('\n📝 Step 4: Updating image references across source files...');

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let count = 0;
  replacements.forEach(([from, to]) => {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      count++;
    }
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✓ Updated ${path.relative(rootDir, filePath)} (${count} patterns updated)`);
}

// Generate replacement mapping for the 34 converted images
const replacements = imagesToConvert.map(png => [
  `images/${png}`,
  `images/${png.replace('.png', '.jpg')}`
]);

// Also add legacy fallback replacements
replacements.push(
  ['images/card1.png', 'images/ag_m1card1.jpg'],
  ['images/card2.png', 'images/ag_m1card2.jpg'],
  ['images/card3.png', 'images/ag_m1card3.jpg'],
  ['images/card4.png', 'images/ag_m1card4.jpg'],
  ['images/card5.png', 'images/fe_progress_check.png'],
  ['images/card6.png', 'images/ddrs_ag_mod1.jpg']
);

const filesToUpdate = [
  path.join(rootDir, 'src', 'js', '02-config.js'),
  path.join(rootDir, 'src', 'js', '05-templates-mod1.js'),
  path.join(rootDir, 'src', 'js', '06-templates-ag2.js'),
  path.join(rootDir, 'src', 'js', '07-templates-ag3.js'),
  path.join(rootDir, 'src', 'js', '08-templates-aas2.js'),
  path.join(rootDir, 'src', 'js', '08b-templates-aas3.js'),
  path.join(rootDir, 'data', 'course-data.js')
];

filesToUpdate.forEach(f => replaceInFile(f, replacements));

// 5. Update imsmanifest.xml
console.log('\n📜 Step 5: Updating imsmanifest.xml...');
const manifestPath = path.join(rootDir, 'imsmanifest.xml');
let manifest = fs.readFileSync(manifestPath, 'utf8');

// Remove PDF entries
manifest = manifest.replace(/\s*<file href="agmod1\.pdf"\/>/g, '');
manifest = manifest.replace(/\s*<file href="ws1\.pdf"\/>/g, '');

// Remove legacy image entries
legacyImages.forEach(img => {
  const reg = new RegExp(`\\s*<file href="images/${img}"\\/>`, 'g');
  manifest = manifest.replace(reg, '');
});

// Update .png to .jpg in manifest
imagesToConvert.forEach(png => {
  const jpg = png.replace('.png', '.jpg');
  manifest = manifest.replace(`images/${png}`, `images/${jpg}`);
});

fs.writeFileSync(manifestPath, manifest, 'utf8');
console.log('  ✓ imsmanifest.xml cleaned and updated.');

// 6. Update package-scorm.js
console.log('\n📦 Step 6: Updating scripts/package-scorm.js...');
const packScriptPath = path.join(rootDir, 'scripts', 'package-scorm.js');
let packScript = fs.readFileSync(packScriptPath, 'utf8');
packScript = packScript.replace(/\s*'agmod1\.pdf',\s*'ws1\.pdf'/, '');
fs.writeFileSync(packScriptPath, packScript, 'utf8');
console.log('  ✓ scripts/package-scorm.js updated.');

console.log('\n✨ Asset optimization script completed successfully!');


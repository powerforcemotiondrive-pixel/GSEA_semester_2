#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const templatePath = path.join(rootDir, 'src', 'template.html');
const jsDir = path.join(rootDir, 'src', 'js');
const outputPath = path.join(rootDir, 'index.html');

function buildHtml() {
  console.log('🏗️  Compiling index.html from src/ modules...');

  if (!fs.existsSync(templatePath)) {
    console.error(`✗ Error: Template not found at ${templatePath}`);
    process.exit(1);
  }

  const templateContent = fs.readFileSync(templatePath, 'utf8');

  // Read all .js files in src/js sorted by numerical prefix
  const jsFiles = fs.readdirSync(jsDir)
    .filter(file => file.endsWith('.js'))
    .sort();

  console.log(`  Found ${jsFiles.length} source JS modules in src/js:`);
  let combinedJs = '';
  jsFiles.forEach(file => {
    const filePath = path.join(jsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`    ✓ [${file}] (${content.split('\n').length} lines)`);
    combinedJs += content;
  });

  const placeholder = '  <!-- INLINE_APP_SCRIPTS -->\n';
  if (!templateContent.includes(placeholder)) {
    console.error(`✗ Error: Placeholder '${placeholder}' not found in ${templatePath}`);
    process.exit(1);
  }

  const outputHtml = templateContent.replace(placeholder, combinedJs);

  fs.writeFileSync(outputPath, outputHtml, 'utf8');
  console.log(`✓ index.html successfully compiled (${outputHtml.split('\n').length} lines).\n`);
}

if (require.main === module) {
  buildHtml();
}

module.exports = buildHtml;


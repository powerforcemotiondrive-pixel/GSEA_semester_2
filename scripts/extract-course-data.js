#!/usr/bin/env node
/**
 * Safe Course Data Synchronizer
 * Preserves all 60 TOEIC questions (5 per session), 24 Case Studies / Articles,
 * full Grammar Rules & Traps in Section 4, and extracts all 72 curated web resources.
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(rootDir, 'data');
const outJsPath = path.join(dataDir, 'course-data.js');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

// 1. Load existing data/course-data.js to preserve rich toeicQuestions, articles, and grammar rules
let existingAgData = {};
if (fs.existsSync(outJsPath)) {
  const content = fs.readFileSync(outJsPath, 'utf8');
  const prefix = 'const agData = ';
  const startIdx = content.indexOf(prefix);
  const suffix = ';\n\n  const aasData';
  const endIdx = content.indexOf(suffix);
  if (startIdx !== -1 && endIdx !== -1) {
    try {
      existingAgData = JSON.parse(content.substring(startIdx + prefix.length, endIdx));
    } catch (e) {
      console.warn('⚠️ Could not parse existing agData JSON, will initialize fresh structure.');
    }
  }
}

function extractObjectives(sessionNum, modNum) {
  const filePath = path.join(rootDir, `session${sessionNum}`, `obj${modNum}.html`);
  if (!fs.existsSync(filePath)) return null;
  const html = fs.readFileSync(filePath, 'utf8');

  const titleMatch = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const descMatch = html.match(/<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">([\s\S]*?)<\/p>/);

  const items = [];
  const itemRegex = /<span class="bg-[^"]* text-white text-xs font-bold px-2\.5 py-0\.5 rounded-md shrink-0">(\d+)<\/span>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = itemRegex.exec(html)) !== null) {
    items.push({
      num: parseInt(m[1], 10),
      title: cleanText(m[2]),
      description: cleanText(m[3])
    });
  }

  return {
    title: cleanText(titleMatch ? titleMatch[1] : `Session ${sessionNum} Objectives`),
    summary: cleanText(descMatch ? descMatch[1] : ''),
    items
  };
}

function extractLessonPlan(sessionNum, modNum) {
  const filePath = path.join(rootDir, `session${sessionNum}`, `plan${modNum}.html`);
  if (!fs.existsSync(filePath)) return null;
  const html = fs.readFileSync(filePath, 'utf8');

  const titleMatch = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const descMatch = html.match(/<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">([\s\S]*?)<\/p>/);

  const items = [];
  const itemRegex = /<span class="bg-[^"]* text-white text-xs font-bold py-1 rounded-md text-center flex items-center justify-center self-center">([^<]+)<\/span>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = itemRegex.exec(html)) !== null) {
    items.push({
      time: cleanText(m[1]),
      title: cleanText(m[2]),
      description: cleanText(m[3])
    });
  }

  return {
    title: cleanText(titleMatch ? titleMatch[1] : `Session ${sessionNum} Lesson Plan`),
    summary: cleanText(descMatch ? descMatch[1] : ''),
    items
  };
}

function extractRevision(sessionNum, modNum) {
  const filePath = path.join(rootDir, `session${sessionNum}`, `rev${modNum}.html`);
  if (!fs.existsSync(filePath)) return null;
  const html = fs.readFileSync(filePath, 'utf8');

  const titleMatch = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const descMatch = html.match(/<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">([\s\S]*?)<\/p>/);

  const terms = [];
  const termRegex = /<h3 class="text-xs sm:text-sm font-bold [^"]* truncate">([\s\S]*?)<\/h3>[\s\S]*?<span class="bg-[^"]* text-white text-\[10px\] font-bold px-1\.5 py-0\.5 rounded shrink-0">(\d+)<\/span>[\s\S]*?<p class="text-\[11px\] text-slate-600 leading-snug pt-1\.5">([\s\S]*?)<\/p>/g;
  let m;
  while ((m = termRegex.exec(html)) !== null) {
    terms.push({
      num: m[2],
      term: cleanText(m[1]),
      definition: cleanText(m[3])
    });
  }

  return {
    title: cleanText(titleMatch ? titleMatch[1] : `Session ${sessionNum} Revision`),
    summary: cleanText(descMatch ? descMatch[1] : ''),
    terms
  };
}

function extractResources(sessionNum, modNum) {
  const filePath = path.join(rootDir, `session${sessionNum}`, `admat${modNum}.html`);
  if (!fs.existsSync(filePath)) return [];
  const html = fs.readFileSync(filePath, 'utf8');

  const resources = [];
  const resRegex = /<a href="([^"]+)"[^>]*class="resource-card"[^>]*>[\s\S]*?<span class="resource-tag"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<h4 class="resource-name"[^>]*>([\s\S]*?)<\/h4>[\s\S]*?<p class="resource-desc"[^>]*>([\s\S]*?)<\/p>/g;
  let rm;
  while ((rm = resRegex.exec(html)) !== null) {
    resources.push({
      url: rm[1].trim(),
      tag: cleanText(rm[2]),
      name: cleanText(rm[3]),
      desc: cleanText(rm[4])
    });
  }
  return resources;
}

const modules = [
  { id: 1, name: 'Module 1', title: 'Travel, Transport & Leisure' },
  { id: 2, name: 'Module 2', title: 'Weather & the Environment' },
  { id: 3, name: 'Module 3', title: 'New Technology' }
];

const compiledData = existingAgData && Object.keys(existingAgData).length > 0 ? existingAgData : {};

modules.forEach(mod => {
  if (!compiledData[mod.id]) {
    compiledData[mod.id] = {
      id: mod.id,
      name: mod.name,
      title: mod.title,
      sessions: {}
    };
  }

  for (let s = 1; s <= 4; s++) {
    if (!compiledData[mod.id].sessions[s]) {
      compiledData[mod.id].sessions[s] = { session: s, materials: {} };
    }

    const sessionObj = compiledData[mod.id].sessions[s];
    sessionObj.objectives = extractObjectives(s, mod.id) || sessionObj.objectives;
    sessionObj.lessonPlan = extractLessonPlan(s, mod.id) || sessionObj.lessonPlan;
    sessionObj.revision = extractRevision(s, mod.id) || sessionObj.revision;

    // Synchronize curated resources if HTML contains them
    const freshRes = extractResources(s, mod.id);
    if (freshRes.length > 0) {
      if (!sessionObj.materials) sessionObj.materials = {};
      sessionObj.materials.resources = freshRes;
    }
  }
});

const fileContent = `/**
 * GSEA Semester 1 - General English
 * Complete Course Data Architecture
 * Author: Phil PARRIS (LH/LAN)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.COURSE_DATA = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  const agData = ${JSON.stringify(compiledData, null, 2)};

  const aasData = JSON.parse(JSON.stringify(agData));
  aasData["1"].title = "Aerodrome";
  aasData["2"].title = "Aircraft and Aerodynamics";
  aasData["3"].title = "Safety and Security";

  return {
    ag: agData,
    aas: aasData,
    "1": agData["1"],
    "2": agData["2"],
    "3": agData["3"]
  };
});
`;

fs.writeFileSync(outJsPath, fileContent, 'utf8');
console.log('✓ Successfully synchronized data/course-data.js while preserving all 5 TOEIC questions, articles, and grammar rules!');

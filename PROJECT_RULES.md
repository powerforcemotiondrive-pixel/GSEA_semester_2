# GSEA SEMESTER 2 — PROJECT RULES & ARCHITECTURAL CONSTITUTION
**Course**: ENAC GSEA Semester 2 (Aeronautical & General English)  
**Coordinator & Instructor**: Phil PARRIS (LH/LAN)  
**Primary LMS Target**: ENAC Moodle / eCampus (SCORM 1.2 Package)  
**Version**: 1.0.0  
**Last Updated**: October 2026

---

## 1. INVIOLABLE RULES FOR FUTURE AI AGENTS

Before modifying any file in this repository, any AI assistant MUST adhere to the following non-negotiable architectural constraints:

1. **NO EXTERNAL FRAMEWORKS OR HEAVY RUNTIMES**:
   - The platform is strictly built with **Plain HTML5, Vanilla JavaScript (ES6+), and locally compiled Tailwind CSS v4**.
   - Do NOT introduce React, Vue, Svelte, jQuery, Bootstrap, Lodash, or npm frontend runtime dependencies.
2. **STRICT RELATIVE PATHS (MOODLE COMPATIBILITY)**:
   - When unzipped in Moodle, files run from dynamic hashed subdirectories.
   - Root files must link CSS as `href="output.css"`. Subdirectories (`session1/`, `session2/`, etc.) must link CSS as `href="../output.css"`.
   - **NEVER use root-relative paths** (e.g., `/output.css` or `/images/...`) as they completely break when hosted inside an LMS.
3. **ZERO EXTERNAL CDNs / ZERO GOOGLE FONTS**:
   - The package must be 100% self-contained and offline-capable.
   - Do NOT load fonts from `fonts.googleapis.com` or icons from FontAwesome/unpkg/cdnjs.
   - All typography uses system font stacks (`font-sans`, `font-mono`). All icons are inline SVGs.
4. **DO NOT BREAK GOOGLE INGESTION (`mode: "no-cors"`)**:
   - The Google Form submission script in `portfolio.html` uses `fetch(..., { method: "POST", mode: "no-cors", ... })`.
   - **DO NOT change `mode: "no-cors"` to "cors"** and do not replace this dual-route architecture with a raw Google iframe.
5. **ALWAYS USE `npm run package` TO BUNDLE**:
   - Never manually zip the project folder. Always run `npm run package`.
   - This script minifies Tailwind CSS, validates all resources in `imsmanifest.xml`, and builds `dist/GSEA_Semester_2_SCORM.zip`.
6. **DUAL ADMIN HUB SYNCHRONIZATION**:
   - Any changes to schedules, teacher assignments, or student groups MUST be made to both `src/js/11-admin-hub.js` (in-deck drawer) and `admin.html` (standalone portal).
7. **MANDATORY PRE-IMPLEMENTATION RESPONSE & APPROVAL GATE**:
   - ALL user questions, requests, and feature suggestions require a thorough review, report, and recommendation response from the AI assistant **BEFORE** implementing any changes.
   - The assistant must always conclude with an explicit prompt asking the user to **proceed or ignore/adjust** and await explicit confirmation before modifying any files.
8. **AUTOMATED DATED BACKUPS (`backup1` & `backup2`)**:
   - `backup1` creates a full dated zip archive into `~/Documents/moodle_backups/GSEA_semester_1/`.
   - `backup2` creates a full dated zip archive into `~/Documents/moodle_backups/GSEA_semester_2/`.
   - Automated via `scripts/backup.js` and executable directly via `npm run backup1` / `npm run backup2`.
9. **CROSS-PROJECT SYNCHRONIZATION (`Semester 1` <-> `Semester 2`)**:
   - Any new rules, operational guidelines, or shared tooling scripts must immediately be synchronized across both `GSEA_semester_1` and `GSEA_semester_2`.

---

## 2. PEDAGOGICAL IDENTITY & DUAL-TRACK CURRICULUM

The platform hosts two parallel English curricula sharing a unified flight-deck interface, tailored for Semester 2:

### Track A: General English (AG • LV101E)
- **Schedule**: Fridays 08h00 – 10h00 (Start Week 44)
- **Scope**: Exactly 2 Modules (4 sessions each + 1 FE tutorial session):
  - **Module 1**: *Travel, Transport & Society*
  - **Module 2**: *Weather, Environment & Ecological Transition*
- **Pedagogical Features**:
  - 4 weekly communicative lessons + 1 Formative Evaluation (FE) tutorial week per module.
  - Weekly TOEIC preparation reflections and Global Exam practice tracking.
  - Dedicated DDRS (Sustainable Development & Corporate Social Responsibility) sessions.
  - English Immersion preparation milestone (Card 8 in Module 2).

### Track B: Aeronautical English (AAS • LV121E)
- **Schedule**: Wednesdays 13h15 – 15h15 (Start Week 44)
- **Naming**: Strictly **AAS** (Aeronautical English / Anglais Aéronautique Spécialisé).
- **Scope**: Exactly 2 Modules (4 sessions each + 1 FE tutorial session):
  - **Module 1**: *Aerodromes, Air Traffic & Surface Operations*
  - **Module 2**: *Aircraft & Aerodynamics*
- **Pedagogical Features**:
  - Standard ICAO phraseology and aeronautical technical communication.
  - **TOEIC fields are auto-muted/hidden** in AAS track (both in questions and ratings).

### Formative Evaluation (FE) Dynamic Rotation Roster
- **Milestones**: **FE1** (Week 48) and **FE2** (Week 03).
- **Slots**: Exactly 4 slots of 30 minutes (2 hours total per session).
- **Rotation**: Alternating pairs and trios to maximize peer collaboration and ensure fairness.

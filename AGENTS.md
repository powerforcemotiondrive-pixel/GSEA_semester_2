# ENAC GSEA English Semester 2 — AI Agent Guidelines & Architecture Rules

This repository houses the official **Semester 2 English Learning Portal and SCORM 1.2 Package** for ENAC (École Nationale de l'Aviation Civile). It serves as both the live learning interface for students and a reusable template platform for future cohorts and semesters.

---

## 1. System Architecture & Invariant Rules (Permanent)

These rules apply across all cohorts and must be strictly maintained during any modification or refactoring:

### A. SCORM 1.2 Strict Offline Self-Containment
- **Zero External Dependencies**: The package must run completely offline within LMS environments (ENAC Moodle / eCampus). Do not use external CDNs for scripts, fonts, icons, or stylesheets.
- **Asset Indexing**: All distributed assets (HTML, compiled CSS, local scripts, local images, audio, PDFs) must be tracked in `imsmanifest.xml`.
- **Packaging Integrity**: Every file listed in `imsmanifest.xml` must exist on disk. Use `npm run package` to automatically compile minified CSS, validate all manifest assets, and bundle `dist/GSEA_Semester_2_SCORM.zip`.

### B. Dual-File Admin Hub Synchronization
Course administration (student lists, teacher assignments, weekly schedules, and Formative Evaluation rotas) exists in **two interfaces**:
1. **In-Deck Slide-Over Drawer**: Embedded in `index.html` (triggered via Card 07).
2. **Standalone Admin Portal**: Located in `admin.html`.

> **CRITICAL RULE**: Whenever changes are made to timetables, session dates, room allocations, student pairings, or teacher assignments, both `index.html` and `admin.html` **must** be updated simultaneously to maintain complete parity.

### C. Build & Deployment Runbook
- **Source Architecture**:
  - The human-editable code lives cleanly in modular source files under `src/`:
    - `src/template.html`: Base application HTML shell
    - `src/js/01-scorm-engine.js`: SCORM 1.2 runtime API
    - `src/js/02-config.js`: Course & program configuration (2 modules: AG & AAS)
    - `src/js/03-core-deck.js`: Navigation, deck state, themes, and audio controllers
    - `src/js/04-templates-dispatcher.js`: Lesson content & activity instruction dispatcher
    - `src/js/05-templates-mod1.js`: Module 1 lesson content (AAS & AG)
    - `src/js/06-templates-ag2.js`: Module 2 General English lesson content
    - `src/js/07-templates-ag3.js`: Module 3 General English lesson content (archive/reference)
    - `src/js/08-templates-aas2.js`: Module 2 Aeronautical English lesson content
    - `src/js/08b-templates-aas3.js`: Module 3 Aeronautical English lesson content (archive/reference)
    - `src/js/09-templates-materials-ddrs.js`: Vocabulary revision, study materials, TOEIC, and DDRS tabs
    - `src/js/10-fe-guidelines.js`: Formative evaluation guidelines, rubrics, and criteria
    - `src/js/11-admin-hub.js`: Promotion rosters, timetables, rota schedules, and immersion hub
    - `src/js/12-footer-init.js`: Interactive quiz handlers and DOMContentLoaded initialization
- **Build & Package**:
  - `npm run build`: Compiles `src/` modules into `index.html` and builds minified CSS.
  - `npm run package`:
  ```bash
  npm run package
  ```
  *(Compiles `src/` into `index.html`, compiles Tailwind CSS v4 minified, validates manifest integrity, and outputs `dist/GSEA_Semester_2_SCORM.zip`).*
- **Release Versioning**:
  - Main production code lives on branch `main`.
  - Production releases are tagged with `v1.0.0-live` (or semantic version increments).

### D. Mandatory Pre-Implementation Response & Approval Gate
- **No Direct Changes Without Prior Response**: ALL questions, requests, or suggested modifications from the user require a thorough review, report, and recommendation from the AI assistant **BEFORE** implementing any changes.
- **Proceed / Ignore Prompt**: Every proposal or review must conclude with an explicit prompt asking the user whether to **proceed or ignore/adjust** (e.g. *"Please let me know if you would like me to proceed with these changes, or ignore/adjust."*).
- **Explicit Confirmation Required**: The assistant must wait for explicit approval (such as *"Proceed"*, *"Approved"*, or further instructions) before modifying any codebase files.

### E. Automated Project Backups (`backup1` & `backup2`)
- **`backup1` Trigger**: Whenever the user sends `backup1`, the assistant immediately runs `npm run backup1` (or `node scripts/backup.js semester1`) to bundle a full dated archive into `/Users/philparris/Documents/moodle_backups/GSEA_semester_1/` and confirms the file path and archive size.
- **`backup2` Trigger**: Whenever the user sends `backup2`, the assistant immediately runs `npm run backup2` (or `node scripts/backup.js semester2`) to bundle a full dated archive into `/Users/philparris/Documents/moodle_backups/GSEA_semester_2/` and confirms the file path and archive size.
- **Archive Convention**: Archives are named `GSEA_Semester_X_backup_YYYY-MM-DD_HHmm.zip`, containing the full project source and compiled assets while omitting `node_modules` and `.git`.

### F. Cross-Project Rule & Tooling Synchronization
- **Mandatory Dual-Project Propagation**: Any time an architectural rule, governance guideline, operational command (e.g. `backup1`/`backup2`), or utility script is created or modified in `GSEA_semester_2`, the assistant MUST immediately mirror and synchronize that change into `GSEA_semester_1` (and vice-versa) within the same session.

---

## 2. Active Cohort Configuration (GSEA25B • Template & Standard Roster)

*This section defines the active variables for Semester 2. Update this section when rotating students or semesters.*

### Courses & Timetable Structure
- **Aeronautical English (AAS • LV121E)**
  - **Structure**: 8 Sessions continuous (Module 1: Sessions 1, 2, 3 + FE1 as Session 4; Module 2: Sessions 5, 6, 7 + FE2 as Session 8)
  - **Schedule**: Wednesdays 13h15 – 15h15 (2 Hours)
  - **Group A Teacher**: [Group A Teacher]
  - **Group B Teacher**: [Group B Teacher]
  - **Evaluation Dates / Milestones**:
    - FE1 (Session 4): Wednesday Week 47
    - FE2 (Session 8): Wednesday Week 02
- **General English (AG • LV101E)**
  - **Structure**: 8 Sessions continuous (Module 1: Sessions 1, 2, 3 + FE1 as Session 4; Module 2: Sessions 5, 6, 7 + FE2 as Session 8)
  - **Schedule**: Fridays 08h00 – 10h00 (2 Hours)
  - **Group A Teacher**: [Group A Teacher]
  - **Group B Teacher**: [Group B Teacher]
  - **Evaluation Dates / Milestones**:
    - FE1 (Session 4): Friday Week 47
    - FE2 (Session 8): Friday Week 02

### Evaluation Structure
- **Slot Length**: 30 minutes per evaluation slot.
- **Session Capacity**: 4 slots per 2-hour session:
  - AAS Slots: `13h15–13h45`, `13h45–14h15`, `14h15–14h45`, `14h45–15h15`
  - AG Slots: `08h00–08h30`, `08h30–09h00`, `09h00–09h30`, `09h30–10h00`
- **Slot Formats**: Alternating student pairs and trios rotated dynamically across FE1 (Session 4) and FE2 (Session 8) to ensure diverse peer interactions.

---

## 3. Cohort Upgrade & Scaling Guide (e.g., April Cohort / 3 Groups)

When onboarding a new cohort or scaling up from 2 groups to 3 groups (Group A, Group B, Group C):

1. **Update `AGENTS.md`**:
   - Update Section 2 with new student names, group counts, faculty, and timetables.
2. **Update Data Structures in `index.html` & `admin.html`**:
   - Add `groupC` into `ADMIN_GROUPS_DATA` with the third teacher and student roster.
   - Add `groupC` slot schedules into `ADMIN_ROTA_SCHEDULES` for FE1 and FE2.
   - In both files, extend the rota rendering loop to include a third group row block:
     ```html
     <!-- Group C Rows -->
     <tr class="bg-slate-50/80 font-bold text-slate-800 text-[11px]">
       <td colspan="3" class="py-2 px-3 tracking-wide uppercase bg-slate-100">
         Group C (${...})
       </td>
     </tr>
     ```
3. **Validate & Build**:
   - Run `npm run package` to ensure Tailwind styles and asset manifests remain 100% verified.

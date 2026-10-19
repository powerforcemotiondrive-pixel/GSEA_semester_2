    /* ==========================================================================
       AT MODULE 3 LESSON CONTENT TEMPLATES (SESSIONS 1 - 4)
       Module 3: Health, Meteorology, Safety & Security (LV121E)
       4-Pillar Pedagogical Standard: modeBadges, instructions, deliverable, teacherNotes
       ========================================================================== */

    // Global toggle helper for AT Module 3 revealable answers
    if (typeof window.toggleAas3Answer !== 'function') {
      window.toggleAas3Answer = function(id) {
        const el = document.getElementById(id);
        const btn = document.getElementById('btn-' + id);
        if (!el) return;
        const isHidden = el.classList.contains('hidden');
        if (isHidden) {
          el.classList.remove('hidden');
          if (btn) btn.innerHTML = '<span>Hide Technical Explanation</span> &larr;';
        } else {
          el.classList.add('hidden');
          if (btn) btn.innerHTML = '<span>Reveal Operational Explanation</span> &rarr;';
        }
      };
    }

    if (typeof window.toggleGrandPrixAnswer !== 'function') {
      window.toggleGrandPrixAnswer = function(id) {
        const el = document.getElementById(id);
        const btn = document.getElementById('btn-' + id);
        if (!el) return;
        const isHidden = el.classList.contains('hidden');
        if (isHidden) {
          el.classList.remove('hidden');
          if (btn) btn.innerHTML = '<span>Hide Official Solution</span> &uarr;';
        } else {
          el.classList.add('hidden');
          if (btn) btn.innerHTML = '<span>Reveal Official Solution &amp; Award Points</span> &darr;';
        }
      };
    }

    /* --------------------------------------------------------------------------
       SESSION 1: Health, Medical Emergencies & Human Factors in Aviation
       -------------------------------------------------------------------------- */
    function renderAas3LessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const medLexis = content.medicalIncidentsLexis || {};
      const fatigue = content.fatigueHumanFactorsClinic || {};
      const diversion = content.medicalDiversionSimulation || {};
      const humanFactors = content.humanFactorsDebrief || {};
      const closing = content.closingReview || {};

      const conditions = Array.isArray(medLexis.conditions) ? medLexis.conditions : [];
      const ftlRules = Array.isArray(fatigue.ftlRules) ? fatigue.ftlRules : [];
      const scenarios = Array.isArray(diversion.scenarios) ? diversion.scenarios : [];
      const illusions = Array.isArray(humanFactors.illusions) ? humanFactors.illusions : [];
      const pronunciationFocus = Array.isArray(closing.pronunciationFocus) ? closing.pronunciationFocus : [];
      const checkpoints = Array.isArray(closing.checkpoints) ? closing.checkpoints : [];

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 3 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Health, Medical Emergencies & Human Factors in Aviation'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m3card1.jpg'}" alt="${hero.title || 'Aviation Health & Human Factors'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m3card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-red-300 uppercase tracking-wider">Aeronautical Physiology &amp; Operational Safety</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Health, Medical Emergencies &amp; Human Factors'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Common In-Flight Conditions, Crew Fatigue, Circadian Low, Hypoxia &amp; Medical Diversions'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Flight Crew / Cabin Crew / En-Route ATCO &amp; Medical Teleconsultation</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Aviation Health News & Quick Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation Health News &amp; Quick Check (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Analyze recent airborne medical incidents and evaluate entry knowledge of aeromedical regulations.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- Aviation News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Aeronautical Health &amp; Crew Fitness Briefing Prompts</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Aeromedical Quick Check: In-Flight Physiology & Emergency Protocols'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Quick Check 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="s1-diag-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Operational Standard:</span> ${q.answer}
                      </div>
                      <button type="button" id="btn-s1-diag-${q.id}" onclick="window.toggleAas3Answer('s1-diag-${q.id}')" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Operational Explanation</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: In-Flight Medical Emergencies & Triage Vocabulary -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-30m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${medLexis.title || 'Activity 2: In-Flight Medical Emergencies &amp; Triage Vocabulary (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${medLexis.summary || 'Master essential medical terms, clinical symptoms, and cabin response procedures.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Medical Vocabulary &amp; Triage</span>
            </div>

            ${renderActivityInstructions(medLexis, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              ${conditions.map(c => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 mb-1">
                      <span class="text-xs font-black text-slate-900">${c.term}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded ${c.urgency.includes('Critical') ? 'bg-red-100 text-red-800' : c.urgency.includes('High') ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}">${c.urgency}</span>
                    </div>
                    <div class="p-2.5 bg-white border border-slate-200 rounded-lg space-y-1.5 text-[11px] text-slate-700">
                      <p><span class="font-bold text-slate-900">Protocol:</span> ${c.protocol}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Crew & Controller Fatigue, Circadian Rhythms & FTL -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">30-50m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${fatigue.title || 'Activity 3: Crew &amp; Controller Fatigue, Circadian Rhythms &amp; FTL (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${fatigue.summary || 'Analyze Flight Time Limitations, Window of Circadian Low, and FRMS countermeasures.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Human Factors &amp; FTL</span>
            </div>

            ${renderActivityInstructions(fatigue, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              ${ftlRules.map(r => `
                <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-2">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <h5 class="text-xs font-black text-slate-900">${r.concept}</h5>
                  </div>
                  <p class="text-xs text-slate-600 leading-relaxed">${r.definition}</p>
                </div>
              `).join('')}
            </div>

            <!-- IMSAFE Self-Assessment Interactive Matrix -->
            <div class="p-4 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-2">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-black text-indigo-950 uppercase tracking-wide">The IMSAFE Pre-Flight Fitness Model</span>
                  <span class="text-[10px] font-bold bg-indigo-200 text-indigo-900 px-2 py-0.5 rounded">ICAO Human Performance</span>
                </div>
                <span class="text-[11px] text-indigo-800 font-semibold">Self-Assessment Standard</span>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-1 text-xs text-center">
                <div class="p-2 bg-white rounded-lg border border-indigo-100 shadow-2xs">
                  <span class="font-black text-indigo-900 block text-sm">I</span>
                  <span class="font-bold text-slate-800 block text-[11px]">Illness</span>
                  <span class="text-[10px] text-slate-500 block">Symptoms?</span>
                </div>
                <div class="p-2 bg-white rounded-lg border border-indigo-100 shadow-2xs">
                  <span class="font-black text-indigo-900 block text-sm">M</span>
                  <span class="font-bold text-slate-800 block text-[11px]">Medication</span>
                  <span class="text-[10px] text-slate-500 block">Drowsiness?</span>
                </div>
                <div class="p-2 bg-white rounded-lg border border-indigo-100 shadow-2xs">
                  <span class="font-black text-indigo-900 block text-sm">S</span>
                  <span class="font-bold text-slate-800 block text-[11px]">Stress</span>
                  <span class="text-[10px] text-slate-500 block">Psychological?</span>
                </div>
                <div class="p-2 bg-white rounded-lg border border-indigo-100 shadow-2xs">
                  <span class="font-black text-indigo-900 block text-sm">A</span>
                  <span class="font-bold text-slate-800 block text-[11px]">Alcohol</span>
                  <span class="text-[10px] text-slate-500 block">8h bottle-throttle</span>
                </div>
                <div class="p-2 bg-white rounded-lg border border-indigo-100 shadow-2xs">
                  <span class="font-black text-indigo-900 block text-sm">F</span>
                  <span class="font-bold text-slate-800 block text-[11px]">Fatigue</span>
                  <span class="text-[10px] text-slate-500 block">Cumulative rest?</span>
                </div>
                <div class="p-2 bg-white rounded-lg border border-indigo-100 shadow-2xs">
                  <span class="font-black text-indigo-900 block text-sm">E</span>
                  <span class="font-bold text-slate-800 block text-[11px]">Eating</span>
                  <span class="text-[10px] text-slate-500 block">Hydration &amp; fuel</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Activity 4: Airborne Medical Diversion Simulation & Decision Guide -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">50-85m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${diversion.title || 'Activity 4: Airborne Medical Diversion Simulation &amp; Decision Guide (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${diversion.summary || 'Simulate high-stakes airborne medical emergencies requiring real-time ATC and flight dispatch coordination.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">In-Flight Crisis Simulation</span>
            </div>

            ${renderActivityInstructions(diversion, theme)}

            <div class="space-y-4">
              ${scenarios.map(sc => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2">
                    <div class="flex items-center gap-2">
                      <span class="w-6 h-6 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center shrink-0">${sc.id}</span>
                      <h5 class="text-xs sm:text-sm font-black text-slate-900">${sc.title}</h5>
                    </div>
                    <span class="text-[11px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">Emergency Scenario</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                      <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Airborne Situation &amp; Patient Vitals</span>
                      <p class="text-slate-800 leading-relaxed">${sc.context}</p>
                    </div>
                    <div class="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                      <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Operational Dilemma &amp; Route Tradeoffs</span>
                      <p class="text-slate-800 leading-relaxed">${sc.challenge}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Aeromedical Physics: Spatial Disorientation, Hypoxia & Emergency Descent -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">85-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${humanFactors.title || 'Activity 5: Aeromedical Physics: Spatial Disorientation, Hypoxia &amp; Emergency Descent (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${humanFactors.summary || 'Analyze vestibular illusions, hypoxia onset, and rapid depressurization descent profiles.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Aeromedical Physics</span>
            </div>

            ${renderActivityInstructions(humanFactors, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${illusions.map(il => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <div class="flex items-center gap-2">
                    <svg width="16" height="16" class="text-red-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                    <h5 class="text-xs font-black text-slate-900">${il.name}</h5>
                  </div>
                  <p class="text-xs text-slate-700 leading-relaxed">${il.cause}</p>
                </div>
              `).join('')}
            </div>

            <!-- Time of Useful Consciousness (TUC) Operational Scale -->
            <div class="p-3.5 bg-slate-900 text-white rounded-xl space-y-2 text-xs">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="font-bold text-amber-400 uppercase tracking-wider text-[11px]">Time of Useful Consciousness (TUC) Reference Scale</span>
                <span class="text-slate-400 text-[10px]">ICAO Doc 8984 Manual of Civil Aviation Medicine</span>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
                <div class="p-2 bg-slate-800/80 rounded-lg border border-slate-700">
                  <span class="text-slate-400 block text-[10px]">FL 180 (18,000 ft)</span>
                  <span class="font-black text-emerald-400 text-xs">20 to 30 mins</span>
                </div>
                <div class="p-2 bg-slate-800/80 rounded-lg border border-slate-700">
                  <span class="text-slate-400 block text-[10px]">FL 250 (25,000 ft)</span>
                  <span class="font-black text-amber-400 text-xs">3 to 5 mins</span>
                </div>
                <div class="p-2 bg-slate-800/80 rounded-lg border border-slate-700">
                  <span class="text-slate-400 block text-[10px]">FL 350 (35,000 ft)</span>
                  <span class="font-black text-orange-400 text-xs">30 to 60 secs</span>
                </div>
                <div class="p-2 bg-slate-800/80 rounded-lg border border-slate-700">
                  <span class="text-slate-400 block text-[10px]">FL 400 (40,000 ft)</span>
                  <span class="font-black text-red-400 text-xs">15 to 20 secs</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Activity 6: Medical & Human Factors Consolidation & Syllable Stress -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Medical &amp; Human Factors Consolidation &amp; Syllable Stress (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Master syllable stress patterns and review aeromedical safety competencies.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            ${pronunciationFocus.length > 0 ? `
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div class="flex items-center gap-2 text-slate-800">
                  <svg width="15" height="15" class="text-indigo-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold">Pronunciation Practice: Aeromedical Syllable Stress</h5>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs pt-1">
                  ${pronunciationFocus.map(p => `
                    <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                      <span class="font-bold text-slate-800">${typeof p === 'object' && p !== null ? (p.word || '') : p.replace(/-/g, '')}</span>
                      <span class="text-indigo-600 font-mono font-bold text-[11px]">${typeof p === 'object' && p !== null ? (p.stress || '') : p}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div class="space-y-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Session 1 Consolidation Checkpoints</span>
                <ul class="space-y-1 text-slate-700">
                  ${checkpoints.map(cp => `<li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">&check;</span> ${cp}</li>`).join('')}
                </ul>
              </div>
              <div class="flex flex-wrap items-center gap-2 shrink-0">
                <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 shadow-2xs hover:bg-slate-100 transition-all cursor-pointer">
                  <span>Vocabulary Flashcards</span>
                </button>
                <button onclick="switchModalTab('fe_guidelines')" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer" style="background-color: ${theme.primary};">
                  <span>View FE3 Guidelines</span> &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    /* --------------------------------------------------------------------------
       SESSION 2: Meteorology & Severe Weather Impacts on Aviation Operations
       -------------------------------------------------------------------------- */
    function renderAas3LessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const phenomenaAct = content.weatherPhenomenaLexis || {};
      const briefingClinic = content.weatherBriefingClinic || {};
      const caseStudiesAct = content.weatherCaseStudiesSprint || {};
      const simAct = content.weatherDiversionSimulation || {};
      const closing = content.closingReview || {};

      const phenomena = Array.isArray(phenomenaAct.phenomena) ? phenomenaAct.phenomena : [];
      const weatherReports = Array.isArray(briefingClinic.weatherReports) ? briefingClinic.weatherReports : [];
      const caseStudies = Array.isArray(caseStudiesAct.caseStudies) ? caseStudiesAct.caseStudies : [];
      const simParams = simAct.simulationParameters || {};
      const alternates = Array.isArray(simParams.alternates) ? simParams.alternates : [];
      const pronunciationFocus = Array.isArray(closing.pronunciationFocus) ? closing.pronunciationFocus : [];
      const checkpoints = Array.isArray(closing.checkpoints) ? closing.checkpoints : [];

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 3 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Meteorology & Severe Weather Impacts on Aviation Operations'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m3card2.jpg'}" alt="${hero.title || 'Meteorology & Severe Weather'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m3card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-sky-300 uppercase tracking-wider">Atmospheric Dynamics &amp; Flight Hazards</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Meteorology &amp; Severe Weather Impacts'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Convective Hazards, Microbursts, Clear Air Turbulence, Decoding METAR/TAF &amp; Case Studies'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Flight Crew / Dispatcher / Approach &amp; En-Route ATCO</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Aviation Weather Briefing & Meteorological Quick Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation Weather Briefing &amp; Meteorological Quick Check (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Analyze real-time meteorological advisories and test baseline aviation weather comprehension.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- Weather News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Operational Weather Briefing Discussion Prompts</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Meteorological Quick Check: Atmospheric Physics & Barometric Altimetry'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Weather Quick Check 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="s2-diag-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Meteorological Rationale:</span> ${q.answer}
                      </div>
                      <button type="button" id="btn-s2-diag-${q.id}" onclick="window.toggleAas3Answer('s2-diag-${q.id}')" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Operational Explanation</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Severe Atmospheric Phenomena & Flight Impacts -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-30m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${phenomenaAct.title || 'Activity 2: Severe Atmospheric Phenomena &amp; Flight Impacts (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${phenomenaAct.summary || 'Analyze severe hazards: windshear, microbursts, CAT, supercooled icing, and volcanic ash.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Severe Hazards Vocabulary</span>
            </div>

            ${renderActivityInstructions(phenomenaAct, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              ${phenomena.map(ph => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-black text-slate-900">${ph.term}</h5>
                    <div class="mt-2 p-2.5 bg-white border border-slate-200 rounded-lg space-y-1 text-[11px] text-slate-700">
                      <p><span class="font-bold text-red-700">Flight Risk:</span> ${ph.risk}</p>
                      <p><span class="font-bold text-emerald-700">Mitigation:</span> ${ph.mitigation}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus: Decoding METAR, TAF & SIGMET Advisories -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">30-50m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${briefingClinic.title || 'Activity 3: Language Focus: Decoding METAR, TAF &amp; SIGMET Advisories (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${briefingClinic.summary || 'Deconstruct raw international meteorological telecommunication strings into fluent operational English.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Aviation Weather Telecommunications</span>
            </div>

            ${renderActivityInstructions(briefingClinic, theme)}

            <div class="space-y-3">
              ${weatherReports.map((wr, idx) => `
                <div class="p-4 bg-slate-900 text-white rounded-xl space-y-2.5">
                  <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">${wr.type}</span>
                    <span class="text-[10px] text-slate-400 font-mono">ICAO Annex 3 Standard</span>
                  </div>
                  <div class="p-2.5 bg-black/60 border border-slate-800 rounded-lg">
                    <span class="text-[10px] uppercase font-bold text-amber-400 block mb-1">Raw Telecommunication String:</span>
                    <code class="text-xs font-mono text-emerald-400 break-all">${wr.raw}</code>
                  </div>
                  <div class="p-2.5 bg-slate-800/80 border border-slate-700 rounded-lg">
                    <span class="text-[10px] uppercase font-bold text-slate-300 block mb-1">Decoded Spoken Operational English:</span>
                    <p class="text-xs text-slate-200 leading-relaxed">${wr.decoded}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: 15-Minute Group Research Sprint: Landmark Weather Case Studies -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">50-65m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${caseStudiesAct.title || 'Activity 4: 15-Minute Group Research Sprint: Landmark Weather Case Studies (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${caseStudiesAct.summary || 'Analyze pivotal weather accidents that transformed commercial aviation technology and training.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Accident Case Studies</span>
            </div>

            ${renderActivityInstructions(caseStudiesAct, theme)}

            <div class="space-y-4">
              ${caseStudies.map(cs => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2">
                    <h5 class="text-xs sm:text-sm font-black text-slate-900">${cs.title}</h5>
                    <span class="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-2.5 py-0.5 rounded shadow-2xs">${cs.aircraft}</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div class="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                      <span class="text-[10px] font-black uppercase tracking-wider text-red-600">Weather Hazard</span>
                      <p class="text-slate-800 leading-relaxed">${cs.weather}</p>
                    </div>
                    <div class="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                      <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Investigation Findings</span>
                      <p class="text-slate-800 leading-relaxed">${cs.investigation}</p>
                    </div>
                    <div class="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                      <span class="text-[10px] font-black uppercase tracking-wider text-emerald-600">Lasting Safety Legacy</span>
                      <p class="text-slate-800 leading-relaxed">${cs.safetyOutcome}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Severe Weather En-Route & Terminal Diversion Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">65-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${simAct.title || 'Activity 5: Severe Weather En-Route &amp; Terminal Diversion Simulation (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${simAct.summary || 'Execute an in-flight weather diversion decision guide evaluating fuel reserves, alternates, and ATC limits.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Flight Dispatch &amp; Cockpit Simulation</span>
            </div>

            ${renderActivityInstructions(simAct, theme)}

            <div class="p-4 bg-slate-900 text-white rounded-xl space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <div>
                  <span class="text-xs font-black text-amber-400 uppercase tracking-wider">Flight Dispatch Console: ${simParams.flight || 'AF7842 (A320)'}</span>
                  <span class="text-slate-300 text-xs block">${simParams.route || 'Toulouse (LFBO) to Brussels (EBBR)'} &bull; Fuel on Board: ${simParams.fuelOnBoard || '4,200 kg'}</span>
                </div>
                <span class="text-[11px] font-bold bg-red-950 text-red-300 border border-red-800 px-2.5 py-1 rounded">DESTINATION AIRPORT CLOSED</span>
              </div>
              <div class="p-3 bg-red-900/30 border border-red-700/60 rounded-lg text-xs space-y-1">
                <span class="font-bold text-red-300 uppercase text-[10px]">Destination Status:</span>
                <p class="text-slate-200">${simParams.destinationStatus || 'EBBR Closed - Wind 320/28G45KT, Standing Water on Runway, LLWS Alert'}</p>
              </div>

              <!-- Alternates Comparison Matrix -->
              <div class="space-y-2 pt-1">
                <span class="text-xs font-bold text-slate-300 uppercase tracking-wide">Available Alternates Evaluation:</span>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                  ${alternates.map(alt => `
                    <div class="p-3 bg-slate-800 border border-slate-700 rounded-lg space-y-1.5 text-xs">
                      <div class="flex items-center justify-between border-b border-slate-700 pb-1">
                        <span class="font-bold text-sky-400">${alt.airport}</span>
                        <span class="text-[10px] text-slate-400 font-mono">${alt.dist}</span>
                      </div>
                      <p class="text-slate-300 text-[11px]"><span class="text-slate-400">Weather:</span> ${alt.weather}</p>
                      <p class="text-emerald-400 text-[11px] font-bold"><span class="text-slate-400">Fuel Burn:</span> ${alt.fuelReq}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Activity 6: Meteorology Consolidation & Pronunciation Wrap-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Meteorology Consolidation &amp; Pronunciation Wrap-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Master syllable stress in meteorological vocabulary and consolidate operational takeaways.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            ${pronunciationFocus.length > 0 ? `
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div class="flex items-center gap-2 text-slate-800">
                  <svg width="15" height="15" class="text-indigo-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold">Pronunciation Practice: Meteorological Syllable Stress</h5>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs pt-1">
                  ${pronunciationFocus.map(p => `
                    <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                      <span class="font-bold text-slate-800">${typeof p === 'object' && p !== null ? (p.word || '') : p.replace(/-/g, '')}</span>
                      <span class="text-indigo-600 font-mono font-bold text-[11px]">${typeof p === 'object' && p !== null ? (p.stress || '') : p}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div class="space-y-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Session 2 Consolidation Checkpoints</span>
                <ul class="space-y-1 text-slate-700">
                  ${checkpoints.map(cp => `<li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">&check;</span> ${cp}</li>`).join('')}
                </ul>
              </div>
              <div class="flex flex-wrap items-center gap-2 shrink-0">
                <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 shadow-2xs hover:bg-slate-100 transition-all cursor-pointer">
                  <span>Vocabulary Flashcards</span>
                </button>
                <button onclick="switchModalTab('fe_guidelines')" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer" style="background-color: ${theme.primary};">
                  <span>View FE3 Guidelines</span> &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    /* --------------------------------------------------------------------------
       SESSION 3: Aviation Safety vs. Security: Airport Protection & Aircraft Inspections
       -------------------------------------------------------------------------- */
    function renderAas3LessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const safetyLexis = content.safetyVsSecurityLexis || {};
      const secArch = content.airportSecurityArchitecture || {};
      const walkaroundAct = content.aircraftSafetyChecksClinic || {};
      const crisisAct = content.securityThreatSimulation || {};
      const closing = content.closingReview || {};

      const matrix = Array.isArray(safetyLexis.matrix) ? safetyLexis.matrix : [];
      const screeningLayers = Array.isArray(secArch.screeningLayers) ? secArch.screeningLayers : [];
      const walkaroundCheckpoints = Array.isArray(walkaroundAct.walkaroundCheckpoints) ? walkaroundAct.walkaroundCheckpoints : [];
      const crisisParams = crisisAct.crisisParameters || {};
      const pronunciationFocus = Array.isArray(closing.pronunciationFocus) ? closing.pronunciationFocus : [];
      const checkpoints = Array.isArray(closing.checkpoints) ? closing.checkpoints : [];

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 3 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Aviation Safety vs. Security: Airport Protection & Aircraft Inspections'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m3card3.jpg'}" alt="${hero.title || 'Safety vs Security'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m3card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">Annex 19 Safety Management &bull; Annex 17 Security</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Aviation Safety vs. Security'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Literal &amp; Operational Distinction, Airport Screening Layers, Aircraft Walkaround &amp; Threat Management'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Airport Security / Maintenance Engineer / Ramp Officer &amp; ATCO</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Safety & Security News & Quick Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Safety &amp; Security News &amp; Quick Check (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Analyze recent global airport security events and test legal understanding of ICAO annexes.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Airport Protection &amp; Aircraft Safety Discussion Prompts</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Safety vs. Security Quick Check: Legal & Regulatory Frameworks'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Regulatory Quick Check 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="s3-diag-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Regulatory Framework:</span> ${q.answer}
                      </div>
                      <button type="button" id="btn-s3-diag-${q.id}" onclick="window.toggleAas3Answer('s3-diag-${q.id}')" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Operational Explanation</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: The Literal & Operational Distinction: Safety vs. Security -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-30m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safetyLexis.title || 'Activity 2: The Literal &amp; Operational Distinction: Safety vs. Security (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${safetyLexis.summary || 'Compare ICAO Annex 19 Safety Management and ICAO Annex 17 Security standards.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Safety vs. Security Comparison Table</span>
            </div>

            ${renderActivityInstructions(safetyLexis, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${matrix.map(m => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h5 class="text-xs sm:text-sm font-black text-slate-900">${m.domain}</h5>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-900">${m.legalBasis}</span>
                  </div>
                  <div class="space-y-2 text-xs">
                    <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                      <span class="text-[10px] font-black uppercase text-red-700 block mb-0.5">Target Threat / Hazard:</span>
                      <p class="text-slate-800 leading-relaxed">${m.targetThreat}</p>
                    </div>
                    <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                      <span class="text-[10px] font-black uppercase text-emerald-700 block mb-0.5">Operational Methods &amp; Philosophy:</span>
                      <p class="text-slate-800 leading-relaxed">${m.methods}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- French vs English False Friends Warning -->
            <div class="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs space-y-1">
              <span class="font-bold text-amber-900 uppercase text-[10px]">Aviation English Linguistic Distinction Note (False Friends Alert):</span>
              <p class="text-amber-900/90 leading-relaxed">
                In French, the single word <em class="font-bold">sécurité</em> is commonly used for both concepts. In international aviation English, conflating them is a critical error: <strong class="text-slate-900">Safety</strong> = protection against accidents, human error, component fatigue, and technical failures (unintended); <strong class="text-slate-900">Security</strong> = protection against unlawful interference, sabotage, terrorism, and unauthorized access (deliberate/malicious).
              </p>
            </div>
          </div>

          <!-- Activity 3: Airport Security Architecture: Landside to Airside -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">30-50m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${secArch.title || 'Activity 3: Airport Security Architecture: Landside to Airside (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${secArch.summary || 'Analyze the 5 concentric concentric security screening perimeters protecting civil aviation.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Airport Security Layers</span>
            </div>

            ${renderActivityInstructions(secArch, theme)}

            <div class="space-y-2.5">
              ${screeningLayers.map((sl, idx) => `
                <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div class="flex items-center gap-2.5">
                    <span class="w-6 h-6 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center shrink-0">${idx + 1}</span>
                    <span class="text-xs font-black text-slate-900">${sl.zone}</span>
                  </div>
                  <p class="text-xs text-slate-700 sm:text-right max-w-xl leading-relaxed">${sl.measures}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: Aircraft Safety Checks & Pre-Flight Walkaround Inspection -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">50-75m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${walkaroundAct.title || 'Activity 4: Aircraft Safety Checks &amp; Pre-Flight Walkaround Inspection (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${walkaroundAct.summary || 'Conduct a clockwise external airframe inspection and evaluate critical airworthiness checkpoints.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">External Walkaround Inspection</span>
            </div>

            ${renderActivityInstructions(walkaroundAct, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              ${walkaroundCheckpoints.map(wp => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-black text-slate-900">${wp.station}</h5>
                    <p class="text-xs text-slate-700 mt-1 leading-relaxed bg-white p-2.5 border border-slate-200 rounded-lg">${wp.items}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Dual-Track Safety & Security Crisis Scenario -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">75-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${crisisAct.title || 'Activity 5: Dual-Track Safety &amp; Security Crisis Scenario (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${crisisAct.summary || 'Manage a simultaneous active ramp security breach and runway brake fire emergency.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Crisis Coordination Simulation</span>
            </div>

            ${renderActivityInstructions(crisisAct, theme)}

            <div class="p-4 bg-slate-900 text-white rounded-xl space-y-3 text-xs">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="font-black text-red-400 uppercase tracking-wider text-xs">Simultaneous Dual Emergency Scenario</span>
                <span class="text-[10px] text-slate-400">Tactical Command Guide</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <div class="p-3 bg-red-950/50 border border-red-800 rounded-lg space-y-1">
                  <span class="text-[10px] font-bold uppercase text-red-400">Track 1: Security Breach (Annex 17)</span>
                  <p class="text-slate-200">${crisisParams.securityIncident || 'Stolen SUV breached gate Juliet 4, driver on foot near stand Echo 12.'}</p>
                </div>
                <div class="p-3 bg-amber-950/50 border border-amber-800 rounded-lg space-y-1">
                  <span class="text-[10px] font-bold uppercase text-amber-400">Track 2: Safety Emergency (Annex 19)</span>
                  <p class="text-slate-200">${crisisParams.safetyIncident || 'Airbus A350 stopped on runway 26L with smoke pouring from left main landing gear brakes.'}</p>
                </div>
              </div>
              <div class="p-3 bg-slate-800 border border-slate-700 rounded-lg space-y-1">
                <span class="text-[10px] font-bold uppercase text-sky-400">Critical Command Dilemma:</span>
                <p class="text-slate-300">${crisisParams.challenge || 'Prevent police vehicles chasing the intruder from crossing runway 26L while fire rescue vehicles are rushing to cool the overheated aircraft brakes.'}</p>
              </div>
            </div>
          </div>

          <!-- Activity 6: Safety vs. Security Wrap-Up & FE3 Preview -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Safety vs. Security Wrap-Up &amp; FE3 Preview (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Review essential distinctions and review preparation milestones for Formative Evaluation 3.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            ${pronunciationFocus.length > 0 ? `
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div class="flex items-center gap-2 text-slate-800">
                  <svg width="15" height="15" class="text-indigo-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold">Pronunciation Practice: Safety vs. Security Vocabulary</h5>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs pt-1">
                  ${pronunciationFocus.map(p => `
                    <div class="p-2.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                      <span class="font-bold text-slate-800">${typeof p === 'object' && p !== null ? (p.word || '') : p.replace(/-/g, '')}</span>
                      <span class="text-indigo-600 font-mono font-bold text-[11px]">${typeof p === 'object' && p !== null ? (p.stress || '') : p}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div class="space-y-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Session 3 Consolidation Checkpoints</span>
                <ul class="space-y-1 text-slate-700">
                  ${checkpoints.map(cp => `<li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">&check;</span> ${cp}</li>`).join('')}
                </ul>
              </div>
              <div class="flex flex-wrap items-center gap-2 shrink-0">
                <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 shadow-2xs hover:bg-slate-100 transition-all cursor-pointer">
                  <span>Vocabulary Flashcards</span>
                </button>
                <button onclick="switchModalTab('fe_guidelines')" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer" style="background-color: ${theme.primary};">
                  <span>View FE3 Guidelines</span> &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    /* --------------------------------------------------------------------------
       SESSION 4: Global Semester Review & 3-Team Aviation Grand Prix Quiz
       -------------------------------------------------------------------------- */
    function renderAas3LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const round1 = content.teamGrandPrixRound1 || {};
      const round2 = content.teamGrandPrixRound2 || {};
      const round3 = content.teamGrandPrixRound3 || {};
      const fe3Workshop = content.fe3MasteryWorkshop || {};
      const closing = content.closingReview || {};

      const squadRosters = Array.isArray(opening.squadRosters) ? opening.squadRosters : [];
      const questionsR1 = Array.isArray(round1.questions) ? round1.questions : [];
      const questionsR2 = Array.isArray(round2.questions) ? round2.questions : [];
      const questionsR3 = Array.isArray(round3.questions) ? round3.questions : [];
      const briefingFramework = Array.isArray(fe3Workshop.briefingFramework) ? fe3Workshop.briefingFramework : [];
      const checkpoints = Array.isArray(closing.checkpoints) ? closing.checkpoints : [];

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 3 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Global Semester Review & 3-Team Aviation Grand Prix Quiz'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m3card4.jpg'}" alt="${hero.title || 'Aviation Grand Prix'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m3card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Semester 1 Grand Prix Tournament &bull; 3-Team Battle</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Global Semester Review &amp; 3-Team Grand Prix'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Competitive 3-Team Grand Prix Tournament Synthesizing Modules 1, 2, and 3 &amp; FE3 Masterclass'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Tournament Format:</span>
                <span class="text-slate-600">3 Squads: Team Alpha &bull; Team Bravo &bull; Team Charlie</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Semester 1 Retrospective & Competition Rules -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Semester 1 Retrospective &amp; Competition Rules (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Form 3 squads, establish buzzer protocol, and review tournament point structure.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Tournament Launch</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- 3-Squad Rosters -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${squadRosters.map((sq, idx) => `
                <div class="p-4 rounded-xl border ${idx === 0 ? 'bg-blue-50/70 border-blue-200' : idx === 1 ? 'bg-purple-50/70 border-purple-200' : 'bg-emerald-50/70 border-emerald-200'} space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-sm ${idx === 0 ? 'text-blue-950' : idx === 1 ? 'text-purple-950' : 'text-emerald-950'}">${sq.team}</span>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-white border shadow-2xs">Squad 0${idx + 1}</span>
                  </div>
                  <div class="p-2.5 bg-white rounded-lg border border-slate-200/80 space-y-1 text-xs">
                    <p class="text-slate-800"><span class="font-bold">Specialty:</span> ${sq.focus}</p>
                    <p class="text-slate-500 italic text-[11px]">&ldquo;${sq.motto}&rdquo;</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Tournament Live Scoreboard UI -->
            <div class="p-4 bg-slate-900 text-white rounded-xl space-y-3">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="text-xs font-black text-amber-400 uppercase tracking-wider">Tournament Live Scoreboard Tracker</span>
                <span class="text-[10px] text-slate-400">Classroom Projection Console</span>
              </div>
              <div class="grid grid-cols-3 gap-3 text-center">
                <div class="p-3 bg-slate-800 rounded-lg border border-blue-500/50">
                  <span class="text-xs font-bold text-blue-400 block">Team Alpha</span>
                  <span class="text-2xl font-black text-white mt-1 block font-mono" id="score-alpha">0</span>
                  <div class="no-print flex items-center justify-center gap-1.5 mt-2">
                    <button type="button" onclick="const el=document.getElementById('score-alpha'); el.innerText=Math.max(0, parseInt(el.innerText)-50);" class="px-2 py-0.5 rounded bg-slate-700 text-[10px] font-bold hover:bg-slate-600">-50</button>
                    <button type="button" onclick="const el=document.getElementById('score-alpha'); el.innerText=parseInt(el.innerText)+100;" class="px-2 py-0.5 rounded bg-blue-600 text-[10px] font-bold hover:bg-blue-500">+100</button>
                  </div>
                </div>
                <div class="p-3 bg-slate-800 rounded-lg border border-purple-500/50">
                  <span class="text-xs font-bold text-purple-400 block">Team Bravo</span>
                  <span class="text-2xl font-black text-white mt-1 block font-mono" id="score-bravo">0</span>
                  <div class="no-print flex items-center justify-center gap-1.5 mt-2">
                    <button type="button" onclick="const el=document.getElementById('score-bravo'); el.innerText=Math.max(0, parseInt(el.innerText)-50);" class="px-2 py-0.5 rounded bg-slate-700 text-[10px] font-bold hover:bg-slate-600">-50</button>
                    <button type="button" onclick="const el=document.getElementById('score-bravo'); el.innerText=parseInt(el.innerText)+100;" class="px-2 py-0.5 rounded bg-purple-600 text-[10px] font-bold hover:bg-purple-500">+100</button>
                  </div>
                </div>
                <div class="p-3 bg-slate-800 rounded-lg border border-emerald-500/50">
                  <span class="text-xs font-bold text-emerald-400 block">Team Charlie</span>
                  <span class="text-2xl font-black text-white mt-1 block font-mono" id="score-charlie">0</span>
                  <div class="no-print flex items-center justify-center gap-1.5 mt-2">
                    <button type="button" onclick="const el=document.getElementById('score-charlie'); el.innerText=Math.max(0, parseInt(el.innerText)-50);" class="px-2 py-0.5 rounded bg-slate-700 text-[10px] font-bold hover:bg-slate-600">-50</button>
                    <button type="button" onclick="const el=document.getElementById('score-charlie'); el.innerText=parseInt(el.innerText)+100;" class="px-2 py-0.5 rounded bg-emerald-600 text-[10px] font-bold hover:bg-emerald-500">+100</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Activity 2: Grand Prix Round 1: Aerodromes, Aircraft Anatomy & Systems -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${round1.title || 'Activity 2: Grand Prix Round 1: Aerodromes, Aircraft Anatomy &amp; Systems (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${round1.summary || 'Test knowledge of aerodrome signage, runway markings, hydraulics, flight controls, and bleed air.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grand Prix Round 1</span>
            </div>

            ${renderActivityInstructions(round1, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${questionsR1.map(q => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2">
                      <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${q.id}</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-black bg-amber-100 text-amber-900">${q.pts} PTS</span>
                    </div>
                    <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                  </div>
                  <div>
                    <div id="gp-r1-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                      <span class="font-bold text-emerald-700">Official Solution:</span> ${q.answer}
                    </div>
                    <button type="button" id="btn-gp-r1-${q.id}" onclick="window.toggleGrandPrixAnswer('gp-r1-${q.id}')" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                      <span>Reveal Official Solution &amp; Award Points</span> &darr;
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Grand Prix Round 2: Human Factors, Health & Severe Meteorology -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-60m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${round2.title || 'Activity 3: Grand Prix Round 2: Human Factors, Health &amp; Severe Meteorology (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${round2.summary || 'Test mastery of airborne medical triage, circadian fatigue, METAR/TAF codes, and microbursts.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grand Prix Round 2</span>
            </div>

            ${renderActivityInstructions(round2, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${questionsR2.map(q => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2">
                      <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${q.id}</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-black bg-amber-100 text-amber-900">${q.pts} PTS</span>
                    </div>
                    <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                  </div>
                  <div>
                    <div id="gp-r2-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                      <span class="font-bold text-emerald-700">Official Solution:</span> ${q.answer}
                    </div>
                    <button type="button" id="btn-gp-r2-${q.id}" onclick="window.toggleGrandPrixAnswer('gp-r2-${q.id}')" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                      <span>Reveal Official Solution &amp; Award Points</span> &darr;
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: Grand Prix Round 3: Safety vs. Security & Landmark Case Studies -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">60-85m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${round3.title || 'Activity 4: Grand Prix Round 3: Safety vs. Security &amp; Landmark Case Studies (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${round3.summary || 'Test command of airport screening layers, pre-flight inspections, Annex 17 vs 19, and the Golden Tiebreaker.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grand Prix Round 3 &amp; Tiebreaker</span>
            </div>

            ${renderActivityInstructions(round3, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${questionsR3.map(q => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between ${q.pts >= 400 ? 'border-amber-300 bg-amber-50/50' : ''}">
                  <div>
                    <div class="flex items-center justify-between gap-2">
                      <span class="text-[10px] font-black uppercase tracking-wider ${q.pts >= 400 ? 'text-amber-800' : 'text-slate-500'}">${q.pts >= 400 ? 'GOLDEN TIEBREAKER' : `Question 0${q.id}`}</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-black ${q.pts >= 400 ? 'bg-amber-400 text-slate-950 font-black' : 'bg-amber-100 text-amber-900'}">${q.pts} PTS</span>
                    </div>
                    <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                  </div>
                  <div>
                    <div id="gp-r3-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                      <span class="font-bold text-emerald-700">Official Solution:</span> ${q.answer}
                    </div>
                    <button type="button" id="btn-gp-r3-${q.id}" onclick="window.toggleGrandPrixAnswer('gp-r3-${q.id}')" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                      <span>Reveal Official Solution &amp; Award Points</span> &darr;
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: FE3 Current Events Press Briefing Masterclass -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">85-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${fe3Workshop.title || 'Activity 5: FE3 Current Events Press Briefing Masterclass (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${fe3Workshop.summary || 'Rehearse the 4-stage press briefing architecture and field aggressive journalistic inquiries.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">FE3 Final Rehearsal</span>
            </div>

            ${renderActivityInstructions(fe3Workshop, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${briefingFramework.map((bf, idx) => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0">${idx + 1}</span>
                    <h5 class="text-xs font-black text-slate-900">${bf.stage}</h5>
                  </div>
                  <p class="text-xs text-slate-700 leading-relaxed bg-white p-2.5 border border-slate-200 rounded-lg">${bf.content}</p>
                </div>
              `).join('')}
            </div>

            <!-- Press Q&A Defense Strategy Callout -->
            <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5 text-xs">
              <span class="font-bold text-indigo-950 uppercase text-[10px]">Teacher-Journalist Q&amp;A Defense Survival Rules:</span>
              <ul class="space-y-1 text-indigo-900 pl-4 list-disc">
                <li><strong class="text-indigo-950">Never speculate:</strong> If a fact is unverified, state: <em>&ldquo;That is currently under investigation by the BEA, and we will not speculate prematurely.&rdquo;</em></li>
                <li><strong class="text-indigo-950">Bridge back to safety:</strong> Acknowledge the journalist's concern, then pivot to standard operating procedures and verified facts.</li>
                <li><strong class="text-indigo-950">Divide peer speaking time:</strong> In pairs and trios, balance technical engineering details and passenger management seamlessly.</li>
              </ul>
            </div>
          </div>

          <!-- Activity 6: Semester 1 Grand Finale & FE3 Action Plan -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Semester 1 Grand Finale &amp; FE3 Action Plan (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Crown the winning Grand Prix squad and confirm individual FE3 examination slots.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grand Finale &amp; FE3 Rota</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div class="space-y-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-amber-800">Semester 1 Aeronautical English Milestones</span>
                <ul class="space-y-1 text-slate-800">
                  ${checkpoints.map(cp => `<li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">&check;</span> ${cp}</li>`).join('')}
                </ul>
              </div>
              <div class="flex flex-wrap items-center gap-2 shrink-0">
                <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 shadow-2xs hover:bg-slate-100 transition-all cursor-pointer">
                  <span>Vocabulary Flashcards</span>
                </button>
                <button onclick="switchModalTab('fe_guidelines')" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer" style="background-color: ${theme.primary};">
                  <span>View FE3 Guidelines &amp; Rota</span> &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

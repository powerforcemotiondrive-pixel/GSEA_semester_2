    function renderAg2LessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const survey = content.survey || {};
      const grammar = content.grammarClinic || {};
      const roleplay = content.roleplay || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Extreme Weather & Climate Hazards'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${ov.image || 'images/ag_m2card1.jpg'}" alt="${ov.title || 'Extreme Weather'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Extreme Weather & Climate Resilience'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Extreme Weather & Climate Hazards'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Atmospheric Rivers, Heat Domes, Flash Floods & Aerodrome Resilience'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Civil Infrastructure &amp; Airport Operations</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Extreme Weather News & Meteorological Diagnostic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Extreme Weather News & Meteorological Warm-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Weather &amp; Severe Climate Headlines</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Meteorological Concepts Quick Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Distinction 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag2-spotcheck-ans-1-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag2-spotcheck-btn-1-${q.id}" onclick="window.toggleAg2SpotCheckAnswer(1, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Severe Weather Incident Analysis: Speed Survey -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Severe Weather Incident Analysis: Speed Survey (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Structured Discussion</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Signposts -->
            ${survey.signposts ? `
              <div class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-emerald-950 uppercase tracking-wide">Key Spoken Signposts &amp; Linking Words:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-900">
                  ${survey.signposts.map(sp => `<div class="p-2 bg-white rounded border border-emerald-200/80 italic font-medium">${sp}</div>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Topics Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(survey.topics || []).map(t => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3 shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-black text-slate-900">Dilemma 0${t.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.primary};">${t.badge}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-800 mt-2">${t.statement}</h5>
                    <div class="mt-2.5 space-y-1.5 text-[11px] text-slate-600">
                      <p><strong class="text-emerald-700">Pro / Operational Mitigation:</strong> ${t.pro}</p>
                      <p><strong class="text-rose-700">Con / Constraint:</strong> ${t.con}</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] font-bold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <span>Interview Prompt:</span> ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus: Word Forms & Suffixes -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus: Word Forms & Suffixes in Technical English (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar in Context</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900">${r.type}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.usage}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Drills Grid -->
            ${(grammar.drills && grammar.drills.length) ? `
              <div class="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-3 mt-2">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Interactive Word Forms Accuracy Drills</h5>
                  <span class="text-[11px] text-emerald-800 font-medium">Select the best option, then verify</span>
                </div>
                <div class="space-y-2.5">
                  ${grammar.drills.map(q => `
                    <div class="p-3 bg-white border border-emerald-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag2-quiz-ans-s1-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag2-quiz-btn-s1-${q.id}" onclick="window.toggleAg2QuizAnswer('s1-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Airport Severe Weather Crisis Taskforce -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-100m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Airport Severe Weather Crisis Taskforce (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Collaborative emergency response taskforce simulation</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Classroom Simulation</span>
            </div>

            ${renderActivityInstructions(roleplay, theme)}

            <!-- Scenario Card -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Simulation Scenario Briefing</span>
              <p class="text-xs text-slate-700 leading-relaxed">${roleplay.scenario}</p>
            </div>

            <!-- Roles Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(roleplay.roles || []).map(r => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-bold text-slate-900">${r.title}</span>
                      <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                    </div>
                    <p class="text-xs text-slate-600 mt-2 leading-relaxed">${r.focus}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    Key Mandate: Defend position with data &amp; technical trade-offs
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Session 1 Wrap-Up & FE2 Preparation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">100-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 5: Wrap-Up & FE2 Preparation (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Consolidation, phonetics, and portfolio check</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Debrief &amp; Exit Ticket</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Session 1 Formative Evaluation Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-emerald-800">Verification</span>
              </div>
              <div class="space-y-2 text-xs text-emerald-900">
                ${(closing.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2">
                    <span class="text-emerald-600 font-bold">&check;</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderAg2LessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const survey = content.survey || {};
      const grammar = content.grammarClinic || {};
      const roleplay = content.roleplay || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Sustainable Cities & Low-Emission Urban Mobility'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${ov.image || 'images/ag_m2card2.jpg'}" alt="${ov.title || 'Sustainable Cities'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Sustainable Cities & Urban Design'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Sustainable Cities & Low-Emission Urban Mobility'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Sponge Cities, 15-Minute Urbanism, Urban Heat Islands & Transit Corridors'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Urban Planning &amp; Ecological Transition</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Sustainable Urbanism News & Diagnostic Warm-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Sustainable Urbanism News & Opening Warm-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Urban Mobility &amp; Resilience Headlines</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Urban Planning Vocabulary Quick Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Distinction 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag2-spotcheck-ans-2-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag2-spotcheck-btn-2-${q.id}" onclick="window.toggleAg2SpotCheckAnswer(2, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Resilient Urban Innovations: Speed Survey -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Resilient Urban Innovations: Speed Survey (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Structured Discussion</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Signposts -->
            ${survey.signposts ? `
              <div class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-emerald-950 uppercase tracking-wide">Key Spoken Signposts &amp; Linking Words:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-900">
                  ${survey.signposts.map(sp => `<div class="p-2 bg-white rounded border border-emerald-200/80 italic font-medium">${sp}</div>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Topics Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(survey.topics || []).map(t => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3 shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-black text-slate-900">Dilemma 0${t.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.primary};">${t.badge}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-800 mt-2">${t.statement}</h5>
                    <div class="mt-2.5 space-y-1.5 text-[11px] text-slate-600">
                      <p><strong class="text-emerald-700">Pro / Urban Benefit:</strong> ${t.pro}</p>
                      <p><strong class="text-rose-700">Con / Constraint:</strong> ${t.con}</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] font-bold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <span>Interview Prompt:</span> ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus: Subject-Verb Agreement with Collective Nouns -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus: Subject-Verb Agreement with Collective Nouns (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar in Context</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900">${r.type}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.usage}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Drills Grid -->
            ${(grammar.drills && grammar.drills.length) ? `
              <div class="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-3 mt-2">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Interactive Agreement Accuracy Drills</h5>
                  <span class="text-[11px] text-emerald-800 font-medium">Select the best option, then verify</span>
                </div>
                <div class="space-y-2.5">
                  ${grammar.drills.map(q => `
                    <div class="p-3 bg-white border border-emerald-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag2-quiz-ans-s2-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag2-quiz-btn-s2-${q.id}" onclick="window.toggleAg2QuizAnswer('s2-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Urban Eco-District Redesign Committee -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-100m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Urban Eco-District Redesign Committee (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Collaborative municipal redevelopment steering committee</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Classroom Simulation</span>
            </div>

            ${renderActivityInstructions(roleplay, theme)}

            <!-- Scenario Card -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Simulation Scenario Briefing</span>
              <p class="text-xs text-slate-700 leading-relaxed">${roleplay.scenario}</p>
            </div>

            <!-- Roles Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(roleplay.roles || []).map(r => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-bold text-slate-900">${r.title}</span>
                      <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                    </div>
                    <p class="text-xs text-slate-600 mt-2 leading-relaxed">${r.focus}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    Key Mandate: Defend position with data &amp; technical trade-offs
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Session 2 Wrap-Up & FE2 Alignment -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">100-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 5: Wrap-Up & FE2 Alignment (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Consolidation, phonetics, and portfolio check</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Debrief &amp; Exit Ticket</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Session 2 Formative Evaluation Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-emerald-800">Verification</span>
              </div>
              <div class="space-y-2 text-xs text-emerald-900">
                ${(closing.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2">
                    <span class="text-emerald-600 font-bold">&check;</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderAg2LessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const survey = content.survey || {};
      const grammar = content.grammarClinic || {};
      const roleplay = content.roleplay || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Building & Defending Environmental Arguments'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${ov.image || 'images/ag_m2card3.jpg'}" alt="${ov.title || 'Building Arguments'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Environmental Argumentation & Policy'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Building & Defending Environmental Arguments'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Structuring Arguments, Linking Words, Polite Disagreement & Policy Debates'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Debate, Advocacy &amp; Technical Defense</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Environmental Policy News & Argument Diagnostic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Environmental Policy News & Argument Warm-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Environmental Policy &amp; Regulatory Debates</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Argumentation & Linking Words Quick Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Distinction 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag2-spotcheck-ans-3-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag2-spotcheck-btn-3-${q.id}" onclick="window.toggleAg2SpotCheckAnswer(3, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Environmental Policy Dilemmas: Speed Sparring -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Environmental Policy Dilemmas: Speed Sparring (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Structured Debate</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Signposts -->
            ${survey.signposts ? `
              <div class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-emerald-950 uppercase tracking-wide">Key Spoken Signposts &amp; Linking Words:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-900">
                  ${survey.signposts.map(sp => `<div class="p-2 bg-white rounded border border-emerald-200/80 italic font-medium">${sp}</div>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Topics Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(survey.topics || []).map(t => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3 shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-black text-slate-900">Dilemma 0${t.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.primary};">${t.badge}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-800 mt-2">${t.statement}</h5>
                    <div class="mt-2.5 space-y-1.5 text-[11px] text-slate-600">
                      <p><strong class="text-emerald-700">Pro / Advocacy:</strong> ${t.pro}</p>
                      <p><strong class="text-rose-700">Con / Counter:</strong> ${t.con}</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] font-bold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <span>Interview Prompt:</span> ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus: Gerunds vs. Infinitives & Concessive Signposts -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus: Gerunds vs. Infinitives & Concessive Signposts (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar in Context</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900">${r.type}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.usage}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Drills Grid -->
            ${(grammar.drills && grammar.drills.length) ? `
              <div class="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-3 mt-2">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Interactive Verb Complementation Drills</h5>
                  <span class="text-[11px] text-emerald-800 font-medium">Select the best option, then verify</span>
                </div>
                <div class="space-y-2.5">
                  ${grammar.drills.map(q => `
                    <div class="p-3 bg-white border border-emerald-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag2-quiz-ans-s3-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag2-quiz-btn-s3-${q.id}" onclick="window.toggleAg2QuizAnswer('s3-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Public Inquiry Hearing Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-100m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Public Inquiry Hearing Simulation (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Formal administrative inquiry and stakeholder Q&amp;A</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Classroom Simulation</span>
            </div>

            ${renderActivityInstructions(roleplay, theme)}

            <!-- Scenario Card -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Simulation Scenario Briefing</span>
              <p class="text-xs text-slate-700 leading-relaxed">${roleplay.scenario}</p>
            </div>

            <!-- Roles Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(roleplay.roles || []).map(r => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-bold text-slate-900">${r.title}</span>
                      <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                    </div>
                    <p class="text-xs text-slate-600 mt-2 leading-relaxed">${r.focus}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    Key Mandate: Defend position with data &amp; technical trade-offs
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Session 3 Wrap-Up & FE2 Argument Defense -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">100-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 5: Wrap-Up & FE2 Argument Defense (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Consolidation, phonetics, and portfolio check</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Debrief &amp; Exit Ticket</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Session 3 Formative Evaluation Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-emerald-800">Verification</span>
              </div>
              <div class="space-y-2 text-xs text-emerald-900">
                ${(closing.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2">
                    <span class="text-emerald-600 font-bold">&check;</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderAg2LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const survey = content.survey || {};
      const grammar = content.grammarClinic || {};
      const roleplay = content.roleplay || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 2 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Biodiversity in Urban Areas & Transport Hubs'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${ov.image || 'images/ag_m2card4.jpg'}" alt="${ov.title || 'Biodiversity'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m2card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Biodiversity & Ecological Infrastructure'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Biodiversity in Urban Areas & Transport Hubs'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Nature-Based Solutions, Constructed Wetlands, Ecological Corridors & Wildlife Hazard Mitigation'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Ecological Engineering &amp; Aviation Safety</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Aerodrome Ecology News & Diagnostic Warm-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Airport Ecology News & Opening Warm-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Transport Biodiversity &amp; Ecological News</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Ecological & Airport Vocabulary Quick Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Distinction 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag2-spotcheck-ans-4-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag2-spotcheck-btn-4-${q.id}" onclick="window.toggleAg2SpotCheckAnswer(4, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Biodiversity & Safety Dilemmas: Speed Survey -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Biodiversity & Safety Dilemmas: Speed Survey (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Structured Debate</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Signposts -->
            ${survey.signposts ? `
              <div class="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-emerald-950 uppercase tracking-wide">Key Spoken Signposts &amp; Linking Words:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-900">
                  ${survey.signposts.map(sp => `<div class="p-2 bg-white rounded border border-emerald-200/80 italic font-medium">${sp}</div>`).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Topics Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(survey.topics || []).map(t => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-3 shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-black text-slate-900">Dilemma 0${t.id}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.primary};">${t.badge}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-800 mt-2">${t.statement}</h5>
                    <div class="mt-2.5 space-y-1.5 text-[11px] text-slate-600">
                      <p><strong class="text-emerald-700">Pro / Ecological Argument:</strong> ${t.pro}</p>
                      <p><strong class="text-rose-700">Con / Aviation Safety Concern:</strong> ${t.con}</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] font-bold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    <span>Interview Prompt:</span> ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus: Pronouns & Determiners in Technical English -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus: Pronouns & Determiners in Technical English (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar in Context</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900">${r.type}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.usage}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Drills Grid -->
            ${(grammar.drills && grammar.drills.length) ? `
              <div class="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-3 mt-2">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Interactive Pronoun &amp; Determiner Drills</h5>
                  <span class="text-[11px] text-emerald-800 font-medium">Select the best option, then verify</span>
                </div>
                <div class="space-y-2.5">
                  ${grammar.drills.map(q => `
                    <div class="p-3 bg-white border border-emerald-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag2-quiz-ans-s4-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag2-quiz-btn-s4-${q.id}" onclick="window.toggleAg2QuizAnswer('s4-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Aerodrome Wildlife Hazard & Ecological Transition Committee -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-100m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Aerodrome Wildlife Hazard & Ecological Transition Committee (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Joint wildlife hazard mitigation and nature-based solutions committee</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Classroom Simulation</span>
            </div>

            ${renderActivityInstructions(roleplay, theme)}

            <!-- Scenario Card -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Simulation Scenario Briefing</span>
              <p class="text-xs text-slate-700 leading-relaxed">${roleplay.scenario}</p>
            </div>

            <!-- Roles Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(roleplay.roles || []).map(r => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="text-xs font-bold text-slate-900">${r.title}</span>
                      <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                    </div>
                    <p class="text-xs text-slate-600 mt-2 leading-relaxed">${r.focus}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                    Key Mandate: Defend position with data &amp; technical trade-offs
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Session 4 Wrap-Up & FE2 Launch Briefing -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">100-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 5: Wrap-Up & FE2 Launch Briefing (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Final Formative Evaluation 2 checklist &amp; topic confirmation</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Debrief &amp; Exit Ticket</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Formative Evaluation 2 (FE2) Launch &amp; Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-emerald-800">Final Verification</span>
              </div>
              <div class="space-y-2 text-xs text-emerald-900">
                ${(closing.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2">
                    <span class="text-emerald-600 font-bold">&check;</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }



    /* =========================================================================
       GENERAL ENGLISH (AG) • MODULE 3 SESSIONS 1 TO 4 LESSON CONTENT
       ========================================================================= */

    window.toggleAg3SpotCheckAnswer = function(sessNum, qId) {
      const el = document.getElementById(`ag3-spotcheck-ans-${sessNum}-${qId}`);
      const btn = document.getElementById(`ag3-spotcheck-btn-${sessNum}-${qId}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &uarr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleAg3QuizAnswer = function(id) {
      const el = document.getElementById(`ag3-quiz-ans-${id}`);
      const btn = document.getElementById(`ag3-quiz-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Explanation</span> &uarr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Check Answer &amp; Explanation</span> &rarr;';
      }
    };


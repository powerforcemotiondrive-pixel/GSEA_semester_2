    function renderAas2LessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const forcesPrinciples = content.forcesPrinciples || {};
      const forces = forcesPrinciples.forces || [];
      const grammar = content.grammarClinic || {};
      const axesGame = content.axesGame || {};
      const axes = axesGame.axes || [];
      const roleplayCards = axesGame.roleplayCards || [];
      const stall = content.stallScenario || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 2 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Aerodynamics &amp; Flight Principles</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m2card1.jpg'}" alt="${hero.title || 'Aerodynamics & Flight Principles'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m2card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Flight Physics &amp; Aerodynamic Controls</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Aerodynamics &amp; Flight Principles'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'The Four Forces of Flight, The Three Axes &amp; Aerodynamic Control'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Flight Crew / Flight Test Engineer &amp; ATCO</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Aviation News & Entry Diagnostic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Principles Warm-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- Aviation News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Aviation Headlines &amp; Aerodynamic Innovations</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Aerodynamics Quick Check: Foundational Principles'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="diagnostic-ans-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Operational Explanation:</span> ${q.answer}
                      </div>
                      <button type="button" id="diagnostic-btn-${q.id}" onclick="window.toggleDiagnosticAnswer(${q.id})" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: The Four Forces in Equilibrium -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-30m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${forcesPrinciples.title || 'Activity 2: The Four Forces in Equilibrium &amp; Maneuvers (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${forcesPrinciples.summary || 'Analyze the four forces acting on an aircraft and explain how pilots create unbalance to climb, descend, turn, and accelerate.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Aerodynamic Equilibrium</span>
            </div>

            ${renderActivityInstructions(forcesPrinciples, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${forces.map(f => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="font-bold text-sm text-slate-900">${f.name}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white font-mono" style="background-color: ${theme.accent};">${f.badge}</span>
                    </div>
                    <p class="text-xs text-slate-600 mt-2 leading-relaxed">${f.description}</p>
                    <div class="mt-2.5 p-2 bg-white rounded border border-slate-200 text-[11px] text-slate-700">
                      <strong>Operational Application:</strong> ${f.operationalNote}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus: Cause & Effect in Flight Physics -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">30-50m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus: Cause & Effect in Flight Physics (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Conditionals &amp; Connectors</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(grammar.structures || []).map(s => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h5 class="text-xs font-bold uppercase tracking-wider text-slate-800 pb-1 border-b border-slate-200">${s.pattern}</h5>
                  <ul class="text-xs text-slate-600 space-y-1.5 pl-4 list-disc pt-1">
                    ${s.examples.map(ex => `<li class="italic font-medium text-slate-700">&ldquo;${ex}&rdquo;</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>

            <!-- Transformation Drills -->
            <div class="space-y-2.5 pt-2">
              <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Interactive Sentence Transformation Drills</h5>
              <div class="space-y-2">
                ${(grammar.drills || []).map(d => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between gap-2">
                    <p class="text-xs font-bold text-slate-800">${d.id}. ${d.prompt}</p>
                    <div id="drill-ans-${d.id}" class="hidden p-2 bg-white border border-emerald-300 rounded text-[11px] text-emerald-950 font-medium">
                      &check; <strong>Model Response:</strong> ${d.answer}
                    </div>
                    <button type="button" onclick="document.getElementById('drill-ans-${d.id}').classList.toggle('hidden')" class="no-print text-left text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer">
                      <span>Toggle Model Answer &rarr;</span>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: The 3 Axes & Control Surfaces Game -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">50-80m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${axesGame.title || 'Activity 4: The 3 Axes &amp; Control Surfaces Game / Role-Play (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${axesGame.summary || 'Interactive kinesthetic \'Human Flight Simulator\' game and pilot-to-flight-test-engineer debrief role-play.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Kinesthetic Simulation</span>
            </div>

            ${renderActivityInstructions(axesGame, theme)}

            <!-- Axes Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${axes.map(a => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span class="font-bold text-xs sm:text-sm text-slate-900">${a.axis}</span>
                    </div>
                    <p class="text-[11px] text-slate-600 mt-2"><strong>Direction:</strong> ${a.direction}</p>
                    <p class="text-[11px] text-slate-600"><strong>Movement:</strong> ${a.movement}</p>
                    <p class="text-[11px] text-slate-800 font-bold mt-1"><strong>Primary Surface:</strong> ${a.controlSurface}</p>
                    <p class="text-[11px] text-slate-500"><strong>Cockpit Input:</strong> ${a.cockpitInput}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Roleplay Prompt -->
            <div class="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-2">
              <h5 class="text-xs font-bold text-indigo-900 uppercase tracking-wider">Pilot &amp; Flight Test Engineer Spoken Debrief:</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-indigo-950">
                ${roleplayCards.map(c => `
                  <div class="p-2.5 bg-white rounded-lg border border-indigo-200 space-y-1">
                    <strong class="text-indigo-900 block">${c.role}:</strong>
                    <p class="text-slate-700 leading-relaxed">${c.prompt}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 5: Operational Scenario: Stall Recovery -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">80-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${stall.title || 'Activity 5: Operational Scenario: Stall Recovery & High-Altitude Turbulence (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${stall.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Case Study</span>
            </div>

            ${renderActivityInstructions(stall, theme)}

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs text-slate-700 leading-relaxed">
              <strong class="text-slate-900 block text-xs uppercase tracking-wide">Flight Scenario Briefing:</strong>
              <p>${stall.scenarioText || ''}</p>
            </div>

            <div class="space-y-2">
              <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Crew Analysis Tasks (Work in Pairs):</h5>
              <ol class="list-decimal pl-5 space-y-1.5 text-xs text-slate-600">
                ${(stall.tasks || []).map(t => `<li class="leading-relaxed">${t}</li>`).join('')}
              </ol>
            </div>
          </div>

          <!-- Activity 6: Wrap-up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Vocabulary Review & Class Wrap-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Consolidate the 18 key aerodynamic terms, verify pronunciation stress, and prepare for Session 2 Aircraft Anatomy.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            ${(closing.checkpoints && closing.checkpoints.length) ? `
              <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Aerodynamics Mastery Checkpoints</h5>
                  <span class="text-[11px] font-bold text-emerald-800">Verification</span>
                </div>
                <div class="space-y-2 text-xs text-emerald-900">
                  ${closing.checkpoints.map(cp => `
                    <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2">
                      <span class="text-emerald-600 font-bold">&check;</span>
                      <span>${cp}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
              <span class="text-[11px] text-slate-600">Review all 18 aerodynamic vocabulary terms and practice pronunciation flashcards.</span>
              <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
                <span>View Vocabulary Flashcards</span> &rarr;
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderAas2LessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const diagramLabeling = content.diagramLabeling || {};
      const externalParts = diagramLabeling.externalParts || [];
      const spatialClinic = content.spatialClinic || {};
      const spatialPatterns = spatialClinic.patterns || [];
      const walkaroundRoleplay = content.walkaroundRoleplay || {};
      const defectCards = walkaroundRoleplay.defectCards || [];
      const cockpitSystemsHandover = content.cockpitSystemsHandover || {};
      const melItems = cockpitSystemsHandover.melItems || [];
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 2 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Aircraft Anatomy: Structure &amp; Systems'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m2card2.jpg'}" alt="${hero.title || 'Aircraft Anatomy'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m2card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Airframe Structures &amp; Walkaround Inspection</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Aircraft Anatomy: Structure &amp; Systems'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'External Airframe Components, Flight Deck Controls &amp; Pre-Flight Walkaround Inspections'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Flight Crew / Line Maintenance Engineer</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: News & Session 1 Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Session 1 Spot-Check (10 mins)'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Aircraft Maintenance &amp; Structural News</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Spot check -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                  <p class="text-xs font-bold text-slate-800">${q.id}. ${q.q}</p>
                  <div id="diag-ans-s2-${q.id}" class="hidden p-2 bg-white border border-slate-200 rounded text-[11px] text-slate-700 mt-2">
                    ${q.answer}
                  </div>
                  <button type="button" onclick="document.getElementById('diag-ans-s2-${q.id}').classList.toggle('hidden')" class="no-print text-left text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer mt-2">
                    <span>Toggle Answer &rarr;</span>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 2: Airframe Diagram Labeling -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${diagramLabeling.title || 'Activity 2: Airframe Anatomy Labeling Challenge (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${diagramLabeling.summary || 'Identify and describe key external parts and internal zones of commercial aircraft.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Aircraft Components Chart</span>
            </div>

            ${renderActivityInstructions(diagramLabeling, theme)}

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${externalParts.map(p => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1 border-b border-slate-200">
                      <span class="font-bold text-xs text-slate-900">${p.name}</span>
                      <span class="text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded" style="background-color: ${theme.accent};">${p.id}</span>
                    </div>
                    <p class="text-[11px] text-slate-500 mt-1.5"><strong>Location:</strong> ${p.location}</p>
                    <p class="text-[11px] text-slate-700 mt-1 leading-relaxed">${p.purpose}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus: Spatial Prepositions -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${spatialClinic.title || 'Activity 3: Language Focus: Spatial Prepositions &amp; Functions (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${spatialClinic.summary || 'Mastering precise spatial locations and functional relative clauses for maintenance communication.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Spatial Descriptors</span>
            </div>

            ${renderActivityInstructions(spatialClinic, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${spatialPatterns.map(p => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <h5 class="text-xs font-bold uppercase tracking-wider text-slate-800 pb-1 border-b border-slate-200">${p.title}</h5>
                  <ul class="text-xs text-slate-700 space-y-1.5 pl-4 list-disc pt-1">
                    ${p.examples.map(ex => `<li class="italic font-medium">&ldquo;${ex}&rdquo;</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: Walkaround Inspection Role-Play -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-85m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${walkaroundRoleplay.title || 'Activity 4: Pre-Flight Exterior Walkaround Role-Play (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${walkaroundRoleplay.summary || 'Captain &amp; Line Maintenance Engineer simulation: reporting and assessing airframe defects.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Walkaround Role-Play</span>
            </div>

            ${renderActivityInstructions(walkaroundRoleplay, theme)}

            <div class="space-y-3">
              ${defectCards.map(d => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <div class="flex items-center justify-between pb-1 border-b border-slate-200">
                    <span class="font-bold text-xs text-slate-900 uppercase">${d.item}</span>
                    <span class="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">Simulated Defect</span>
                  </div>
                  <p class="text-xs text-slate-700 font-medium"><strong>Observed Defect:</strong> ${d.defect}</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pt-1">
                    <div class="p-2.5 bg-white border border-slate-200 rounded">
                      <strong class="text-indigo-900 block mb-0.5">Captain Dialogue:</strong>
                      <p class="italic text-slate-600">&ldquo;${d.pilotDialogue}&rdquo;</p>
                    </div>
                    <div class="p-2.5 bg-white border border-slate-200 rounded">
                      <strong class="text-emerald-900 block mb-0.5">Engineer Dialogue:</strong>
                      <p class="italic text-slate-600">&ldquo;${d.engineerDialogue}&rdquo;</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: MEL Handover -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">85-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${cockpitSystemsHandover.title || 'Activity 5: Minimum Equipment List (MEL) Dispatch Workshop (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${cockpitSystemsHandover.summary || 'Reviewing the Minimum Equipment List (MEL) to make safe dispatch decisions for inoperative equipment.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">MEL Workshop</span>
            </div>

            ${renderActivityInstructions(cockpitSystemsHandover, theme)}

            <p class="text-xs text-slate-600">Review these 3 maintenance status items and decide whether the aircraft is legally permitted to dispatch:</p>
            <div class="space-y-2 text-xs">
              ${melItems.map(m => `
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span class="font-bold text-slate-800">${m.item}</span>
                  <span class="text-[11px] p-1.5 bg-white rounded border border-slate-200 text-slate-600">${m.status}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 6: Wrap-up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Vocabulary Review &amp; Class Wrap-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Drill tricky aeronautical component pronunciation and consolidate learning logs ahead of Session 3.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Pronunciation Syllable Badges -->
            ${(closing.wordsToPronounce && closing.wordsToPronounce.length) ? `
              <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Syllable Stress &amp; Pronunciation Focus:</span>
                <div class="flex flex-wrap gap-2">
                  ${closing.wordsToPronounce.map(w => `
                    <span class="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-white border border-slate-300 text-slate-800 shadow-2xs">${w}</span>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Technical Checkpoints -->
            ${(closing.checkpoints && closing.checkpoints.length) ? `
              <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Aircraft Anatomy Mastery Checkpoints</h5>
                  <span class="text-[11px] font-bold text-emerald-800">Verification</span>
                </div>
                <div class="space-y-2 text-xs text-emerald-900">
                  ${closing.checkpoints.map(cp => `
                    <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2">
                      <span class="text-emerald-600 font-bold">&check;</span>
                      <span>${cp}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
              <span class="text-[11px] text-slate-600">Review all 18 aircraft anatomy vocabulary terms and practice pronunciation flashcards.</span>
              <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
                <span>View Vocabulary Flashcards</span> &rarr;
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderAas2LessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const fleetTaxonomy = content.fleetTaxonomy || {};
      const categories = fleetTaxonomy.categories || [];
      const comparativeClinic = content.comparativeClinic || {};
      const rules = comparativeClinic.rules || [];
      const fleetCommitteeSimulation = content.fleetCommitteeSimulation || {};
      const cases = fleetCommitteeSimulation.cases || [];
      const globalLandscapeDebate = content.globalLandscapeDebate || {};
      const topics = globalLandscapeDebate.topics || [];
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 2 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Commercial Aircraft &amp; Airlines</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m2card3.jpg'}" alt="Commercial Aircraft & Airlines" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m2card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Commercial Aircraft Types &amp; Fleet Strategy</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Commercial Aircraft &amp; Airlines'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Commercial Aircraft Types, Aerospace Manufacturers &amp; Airline Business Models'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Airline Fleet Planner / Network Strategy Director</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: News & Session 2 Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Session 2 Spot-Check (10 mins)'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Airline Fleet &amp; Order News</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Spot check -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                  <p class="text-xs font-bold text-slate-800">${q.id}. ${q.q}</p>
                  <div id="diag-ans-s3-${q.id}" class="hidden p-2 bg-white border border-slate-200 rounded text-[11px] text-slate-700 mt-2">
                    ${q.answer}
                  </div>
                  <button type="button" onclick="document.getElementById('diag-ans-s3-${q.id}').classList.toggle('hidden')" class="no-print text-left text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer mt-2">
                    <span>Toggle Answer &rarr;</span>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 2: Commercial Aircraft Classification -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${fleetTaxonomy.title || 'Activity 2: Commercial Aircraft Classification Table (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${fleetTaxonomy.summary || 'Classify commercial passenger and freighter aircraft into operational categories.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Fleet Table</span>
            </div>

            ${renderActivityInstructions(fleetTaxonomy, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${categories.map(c => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <h5 class="font-bold text-sm text-slate-900 pb-1 border-b border-slate-200">${c.category}</h5>
                    <p class="text-xs text-indigo-900 font-bold mt-2">Examples: ${c.examples}</p>
                    <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-600 mt-2">
                      <p><strong>Capacity:</strong> ${c.capacity}</p>
                      <p><strong>Range:</strong> ${c.range}</p>
                    </div>
                    <p class="text-[11px] text-slate-700 mt-2 leading-relaxed"><strong>Mission:</strong> ${c.typicalMission}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Comparative Language Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${comparativeClinic.title || 'Activity 3: Language Focus: Comparative &amp; Superlative Data (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${comparativeClinic.summary || 'Mastering modifiers and comparative structures to evaluate aircraft efficiency and fleet statistics.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Comparative Structures</span>
            </div>

            ${renderActivityInstructions(comparativeClinic, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${rules.map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h5 class="text-xs font-bold text-slate-900 uppercase">${r.structure}</h5>
                  <p class="text-[10px] font-mono text-slate-500 bg-white p-1 rounded border border-slate-200">${r.formula}</p>
                  <p class="text-[11px] italic text-slate-700 pt-1">&ldquo;${r.example}&rdquo;</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: Fleet Selection Committee Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-85m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${fleetCommitteeSimulation.title || 'Activity 4: Airline Fleet Selection Committee Simulation (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${fleetCommitteeSimulation.summary || 'Pairs act as airline fleet planning directors preparing an aircraft purchase pitch for new routes.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Executive Pitch</span>
            </div>

            ${renderActivityInstructions(fleetCommitteeSimulation, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${cases.map(cs => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 pb-1 border-b border-slate-200">${cs.title}</h5>
                    <p class="text-xs text-slate-600 mt-2"><strong>Network:</strong> ${cs.network}</p>
                    <div class="space-y-2 text-xs mt-3">
                      <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                        <strong class="text-indigo-900 block mb-0.5">Option A:</strong>
                        <p class="text-slate-700">${cs.optionA}</p>
                      </div>
                      <div class="p-2.5 bg-white border border-slate-200 rounded-lg">
                        <strong class="text-emerald-900 block mb-0.5">Option B:</strong>
                        <p class="text-slate-700">${cs.optionB}</p>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Industry Debate -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">85-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${globalLandscapeDebate.title || 'Activity 5: Global Manufacturer Debate &amp; Industry Trends (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${globalLandscapeDebate.summary || 'Class debate exploring the Airbus-Boeing duopoly, supply chain bottlenecks, and the emergence of COMAC.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Industry Debate</span>
            </div>

            ${renderActivityInstructions(globalLandscapeDebate, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-700">
              ${topics.map(tp => `
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2">
                  <span class="text-amber-600 font-bold">&bull;</span>
                  <p class="font-medium">${tp}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 6: Wrap-up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Vocabulary Review &amp; Pronunciation Wrap-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Consolidate the 18 commercial fleet terms and prepare for Session 4 Aviation Accidents.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            ${(closing.pronunciationFocus && closing.pronunciationFocus.length) ? `
              <div class="p-3.5 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-2">
                <span class="text-[11px] font-bold text-indigo-950 uppercase tracking-wide">Pronunciation &amp; Syllable Stress Focus:</span>
                <div class="flex flex-wrap gap-2 text-xs">
                  ${closing.pronunciationFocus.map(w => `<span class="px-2.5 py-1 bg-white rounded-lg border border-indigo-200 font-mono font-bold text-indigo-900 shadow-2xs">${w}</span>`).join('')}
                </div>
              </div>
            ` : ''}

            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div class="space-y-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Consolidation Checkpoints</span>
                <ul class="space-y-1 text-slate-700">
                  ${(closing.checkpoints || ['Mastered 18 commercial aircraft & fleet planning terms', 'Practiced comparative modifiers in oral pitches', 'Completed syllable stress drills on aeronautical vocabulary']).map(cp => `<li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">&check;</span> ${cp}</li>`).join('')}
                </ul>
              </div>
              <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer shrink-0" style="background-color: ${theme.primary};">
                <span>View Vocabulary Flashcards</span> &rarr;
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderAas2LessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const investigationLexis = content.investigationLexis || {};
      const vocabTerms = investigationLexis.terms || [];
      const pastNarrativesClinic = content.pastNarrativesClinic || {};
      const pastRules = pastNarrativesClinic.rules || [];
      const groupResearchSprint = content.groupResearchSprint || {};
      const caseStudies = groupResearchSprint.caseStudies || [];
      const presentationsDebrief = content.presentationsDebrief || {};
      const guidelines = presentationsDebrief.presentationGuidelines || [];
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 2 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Significant Aviation Accidents &amp; Aircraft Types</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m2card4.jpg'}" alt="Aviation Accidents & Aircraft Types" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m2card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Accident Investigation &amp; Safety Revolution</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Significant Aviation Accidents &amp; Aircraft Types'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Landmark Air Accidents, Technical Causal Analysis &amp; The Evolution of Flight Safety'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">Safety Investigator / Flight Safety Officer</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: News & Session 3 Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Session 3 Spot-Check (10 mins)'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Aviation Safety &amp; Investigation Briefs</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Spot check -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                  <p class="text-xs font-bold text-slate-800">${q.id}. ${q.q}</p>
                  <div id="diag-ans-s4-${q.id}" class="hidden p-2 bg-white border border-slate-200 rounded text-[11px] text-slate-700 mt-2">
                    ${q.answer}
                  </div>
                  <button type="button" onclick="document.getElementById('diag-ans-s4-${q.id}').classList.toggle('hidden')" class="no-print text-left text-[11px] font-bold text-slate-500 hover:text-slate-800 cursor-pointer mt-2">
                    <span>Toggle Answer &rarr;</span>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 2: Investigation Vocabulary -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-30m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${investigationLexis.title || 'Activity 2: Accident Investigation Terminology &amp; Causal Chains (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${investigationLexis.summary || 'Learn and deploy specialized safety vocabulary used by investigation authorities.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Investigation Vocabulary</span>
            </div>

            ${renderActivityInstructions(investigationLexis, theme)}

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${vocabTerms.map(lx => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                  <h5 class="text-xs font-bold text-slate-900">${lx.term}</h5>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${lx.role}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Narrative Past Tenses -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">30-50m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${pastNarrativesClinic.title || 'Activity 3: Language Focus: Narrative Past Tenses &amp; Sequencers (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${pastNarrativesClinic.summary || 'Combining Past Simple, Past Continuous, and Past Perfect to build clear chronological incident reports.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Narrative Grammar</span>
            </div>

            ${renderActivityInstructions(pastNarrativesClinic, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${pastRules.map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h5 class="text-xs font-bold text-slate-900 uppercase">${r.tense}</h5>
                  <p class="text-[10px] font-mono text-slate-500 bg-white p-1 rounded border border-slate-200">${r.formula}</p>
                  <p class="text-[11px] italic text-slate-700 pt-1">&ldquo;${r.example}&rdquo;</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: 15-Minute Group Research Sprint -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">50-65m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${groupResearchSprint.title || 'Activity 4: 15-Minute Group Research &amp; Preparation Sprint (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${groupResearchSprint.summary || 'In small groups (3-4 students), select one historical accident case study. You have 15 minutes to research and structure your 5-minute briefing.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0">15-Min Sprint</span>
            </div>

            ${renderActivityInstructions(groupResearchSprint, theme)}

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              ${caseStudies.map(cs => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between shadow-2xs">
                  <div>
                    <div class="flex items-center justify-between pb-1 border-b border-slate-200">
                      <span class="font-bold text-xs text-slate-900">${cs.title}</span>
                      <span class="text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded" style="background-color: ${theme.accent};">0${cs.id}</span>
                    </div>
                    <p class="text-[11px] text-indigo-900 font-bold mt-2">Aircraft: ${cs.aircraft}</p>
                    <p class="text-[11px] text-slate-600 mt-1 leading-relaxed"><strong>Context:</strong> ${cs.context}</p>
                  </div>
                  <div class="p-2 bg-emerald-50/70 border border-emerald-200 rounded text-[10.5px] text-emerald-950 mt-2">
                    <strong>Permanent Safety Fix:</strong> ${cs.safetyOutcome}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Spoken Group Presentations -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">65-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${presentationsDebrief.title || 'Activity 5: Spoken Group Presentations &amp; Safety Debrief (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${presentationsDebrief.summary || 'Each group presents their 5-minute accident analysis using whiteboard or bullet slides, followed by class Q&amp;A.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Class Presentations</span>
            </div>

            ${renderActivityInstructions(presentationsDebrief, theme)}

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Presentation Rubric &amp; Delivery Rules:</h5>
              <ul class="list-disc pl-5 text-xs text-slate-600 space-y-1">
                ${guidelines.map(g => `<li class="leading-relaxed">${g}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Activity 6: FE2 Prep & Wrap-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: Vocabulary Review &amp; Formative Evaluation 2 Prep (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || 'Review the 18 accident investigation terms and review expectations for Session 5 Formative Evaluation 2.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            ${closing.fe2Preview ? `
              <div class="p-3.5 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-indigo-950 uppercase tracking-wide">Session 5 Formative Evaluation 2 Format:</span>
                <p class="text-xs text-indigo-900 leading-relaxed">${closing.fe2Preview}</p>
              </div>
            ` : ''}

            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div class="space-y-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Consolidation Checkpoints</span>
                <ul class="space-y-1 text-slate-700">
                  ${(closing.checkpoints || ['Mastered 18 accident investigation & safety terms', 'Coordinated past simple, continuous, and perfect in chronology', 'Confirmed FE2 partner, topic, and presentation structure']).map(cp => `<li class="flex items-center gap-1.5"><span class="text-emerald-600 font-bold">&check;</span> ${cp}</li>`).join('')}
                </ul>
              </div>
              <div class="flex flex-wrap items-center gap-2 shrink-0">
                <button onclick="switchModalTab('revision')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 shadow-2xs hover:bg-slate-100 transition-all cursor-pointer">
                  <span>Vocabulary Flashcards</span>
                </button>
                <button onclick="switchModalTab('fe_guidelines')" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs hover:opacity-90 transition-all cursor-pointer" style="background-color: ${theme.primary};">
                  <span>View FE2 Guidelines</span> &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }


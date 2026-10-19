    function renderAg3LessonContentTabSession1(sessionData, theme) {
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
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Everyday AI & Workplace Automation'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${ov.image || 'images/ag_m3card1.jpg'}" alt="${ov.title || 'Everyday AI & Workplace Automation'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-blue-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Artificial Intelligence & Machine Learning'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Everyday AI & Workplace Automation'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Machine Learning, Predictive Analytics, Autonomous Systems & Human-in-the-Loop'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Emerging Technology &amp; Society</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: News Prompts & Quick Warm-Up Checks -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">0-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: News & Warm-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Opening warm-up and key concepts review'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            ${(opening.newsPrompts && opening.newsPrompts.length) ? `
              <div class="space-y-2">
                <span class="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Real-World Technical Briefings:</span>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  ${opening.newsPrompts.map((np, i) => `
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                      <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                      <span>${np}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Quick Warm-Up Checks -->
            ${(opening.diagnostic && opening.diagnostic.questions && opening.diagnostic.questions.length) ? `
              <div class="mt-4 pt-4 border-t border-slate-200 space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900">${opening.diagnostic.title || 'Concepts Quick Check'}</h5>
                  <span class="text-[11px] text-slate-500">${opening.diagnostic.instructions || 'Discuss in pairs before revealing'}</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  ${opening.diagnostic.questions.map(q => `
                    <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Distinction 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900">${q.q}</p>
                      <div id="ag3-spotcheck-ans-1-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag3-spotcheck-btn-1-${q.id}" onclick="window.toggleAg3SpotCheckAnswer(1, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 2: Speed Survey / Dilemmas -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Speed Survey'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Structured Discussion</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Transition Phrases & Linking Words -->
            ${survey.signposts ? `
              <div class="p-3 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-blue-950 uppercase tracking-wide">Key Spoken Transition Phrases &amp; Linking Words:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-900">
                  ${survey.signposts.map(sp => `<div class="p-2 bg-white rounded border border-blue-200/80 italic font-medium">${sp}</div>`).join('')}
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
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.accent};">${t.badge || ''}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-2">${t.statement}</h5>
                    <div class="mt-2.5 space-y-2 text-xs">
                      <div class="p-2 bg-emerald-50/80 border border-emerald-200 rounded-lg text-emerald-950">
                        <strong class="text-emerald-900 block mb-0.5">&plus; Argument (Pro / Opportunity):</strong>
                        ${t.pro}
                      </div>
                      <div class="p-2 bg-rose-50/80 border border-rose-200 rounded-lg text-rose-950">
                        <strong class="text-rose-900 block mb-0.5">&minus; Counter-Argument (Con / Risk):</strong>
                        ${t.con}
                      </div>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] text-slate-600 font-medium italic">
                    💬 ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar Focus</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
                  <span class="text-[10px] font-black uppercase text-blue-700 tracking-wider block">${r.type}</span>
                  <div class="p-2 bg-white rounded border border-slate-200 text-xs font-mono text-slate-800 font-semibold">${r.formula}</div>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${r.usage}</p>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Drills -->
            ${(grammar.drills && grammar.drills.length) ? `
              <div class="mt-4 pt-4 border-t border-slate-200 space-y-3">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Grammar Practice: Quick Drills</h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  ${grammar.drills.map(d => `
                    <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${d.id}</span>
                        <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Target: ${d.correct}</span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 leading-snug">${d.sentence}</p>
                      <div class="grid grid-cols-2 gap-1.5 text-[11px]">
                        ${d.options.map(opt => `
                          <div class="p-1.5 bg-white border border-slate-200 rounded text-slate-700 text-center font-medium">${opt}</div>
                        `).join('')}
                      </div>
                      <div id="ag3-quiz-ans-s1-${d.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 leading-relaxed shadow-xs">
                        <strong>Correct Answer:</strong> <span class="font-bold underline">${d.correct}</span><br>
                        <em>${d.explanation}</em>
                      </div>
                      <button type="button" id="ag3-quiz-btn-s1-${d.id}" onclick="window.toggleAg3QuizAnswer('s1-${d.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Pair Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-100m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Professional Roleplay & Simulation (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Collaborative spoken negotiation and defense</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Pair Simulation</span>
            </div>

            ${renderActivityInstructions(roleplay, theme)}

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[10px] font-black uppercase text-blue-700 tracking-wider">Mission Scenario:</span>
              <p class="text-xs text-slate-700 leading-relaxed">${roleplay.scenario || ''}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${(roleplay.roles || []).map((r, i) => `
                <div class="p-4 rounded-xl border flex flex-col justify-between space-y-3 ${i === 0 ? 'bg-blue-50/40 border-blue-200' : 'bg-slate-50 border-slate-200'}">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between pb-1.5 border-b ${i === 0 ? 'border-blue-200' : 'border-slate-200'}">
                      <span class="text-[10px] font-black uppercase tracking-wider ${i === 0 ? 'text-blue-900' : 'text-slate-700'}">${r.role}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.primary};">${r.title}</span>
                    </div>
                    <div class="space-y-1.5">
                      <span class="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Strategic Objectives:</span>
                      <ul class="text-xs text-slate-700 space-y-1 list-disc pl-4">
                        ${(r.objectives || []).map(obj => `<li>${obj}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                  ${(r.keyPhrases && r.keyPhrases.length) ? `
                    <div class="pt-2 border-t ${i === 0 ? 'border-blue-200' : 'border-slate-200'} space-y-1">
                      <span class="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Useful Spoken Phrases:</span>
                      ${r.keyPhrases.map(ph => `<p class="text-[11px] text-slate-600 italic leading-snug">${ph}</p>`).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Session Wrap-Up & FE3 Preparation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">100-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || "Activity 5: Wrap-Up &amp; FE3 Preparation (15 mins)"}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || "Consolidation, pronunciation practice, and portfolio check"}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Debrief &amp; Exit Ticket</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-blue-950">Session 1 Formative Evaluation Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-blue-800">Verification</span>
              </div>
              <div class="space-y-2 text-xs text-blue-900">
                ${(content.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-blue-200 rounded-lg flex items-center gap-2">
                    <span class="text-blue-600 font-bold">&check;</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }
    function renderAg3LessonContentTabSession2(sessionData, theme) {
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
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Future Mobility & Clean Energy Transport'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${ov.image || 'images/ag_m3card2.jpg'}" alt="${ov.title || 'Future Mobility & Clean Energy Transport'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-blue-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Clean Propulsion & Future Mobility'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Future Mobility & Clean Energy Transport'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Hydrogen Propulsion, Battery-Electric Aviation, Urban Air Mobility & Multi-Modal Corridors'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Emerging Technology &amp; Society</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: News Prompts & Quick Warm-Up Checks -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">0-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: News & Warm-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Opening warm-up and key concepts review'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            ${(opening.newsPrompts && opening.newsPrompts.length) ? `
              <div class="space-y-2">
                <span class="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Real-World Technical Briefings:</span>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  ${opening.newsPrompts.map((np, i) => `
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                      <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                      <span>${np}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Quick Warm-Up Checks -->
            ${(opening.diagnostic && opening.diagnostic.questions && opening.diagnostic.questions.length) ? `
              <div class="mt-4 pt-4 border-t border-slate-200 space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900">${opening.diagnostic.title || 'Concepts Quick Check'}</h5>
                  <span class="text-[11px] text-slate-500">${opening.diagnostic.instructions || 'Discuss in pairs before revealing'}</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  ${opening.diagnostic.questions.map(q => `
                    <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Distinction 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900">${q.q}</p>
                      <div id="ag3-spotcheck-ans-2-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag3-spotcheck-btn-2-${q.id}" onclick="window.toggleAg3SpotCheckAnswer(2, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 2: Speed Survey / Dilemmas -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Speed Survey'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Structured Discussion</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Transition Phrases & Linking Words -->
            ${survey.signposts ? `
              <div class="p-3 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-blue-950 uppercase tracking-wide">Key Spoken Transition Phrases &amp; Linking Words:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-900">
                  ${survey.signposts.map(sp => `<div class="p-2 bg-white rounded border border-blue-200/80 italic font-medium">${sp}</div>`).join('')}
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
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.accent};">${t.badge || ''}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-2">${t.statement}</h5>
                    <div class="mt-2.5 space-y-2 text-xs">
                      <div class="p-2 bg-emerald-50/80 border border-emerald-200 rounded-lg text-emerald-950">
                        <strong class="text-emerald-900 block mb-0.5">&plus; Argument (Pro / Opportunity):</strong>
                        ${t.pro}
                      </div>
                      <div class="p-2 bg-rose-50/80 border border-rose-200 rounded-lg text-rose-950">
                        <strong class="text-rose-900 block mb-0.5">&minus; Counter-Argument (Con / Risk):</strong>
                        ${t.con}
                      </div>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] text-slate-600 font-medium italic">
                    💬 ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar Focus</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
                  <span class="text-[10px] font-black uppercase text-blue-700 tracking-wider block">${r.type}</span>
                  <div class="p-2 bg-white rounded border border-slate-200 text-xs font-mono text-slate-800 font-semibold">${r.formula}</div>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${r.usage}</p>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Drills -->
            ${(grammar.drills && grammar.drills.length) ? `
              <div class="mt-4 pt-4 border-t border-slate-200 space-y-3">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Grammar Practice: Quick Drills</h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  ${grammar.drills.map(d => `
                    <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${d.id}</span>
                        <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Target: ${d.correct}</span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 leading-snug">${d.sentence}</p>
                      <div class="grid grid-cols-2 gap-1.5 text-[11px]">
                        ${d.options.map(opt => `
                          <div class="p-1.5 bg-white border border-slate-200 rounded text-slate-700 text-center font-medium">${opt}</div>
                        `).join('')}
                      </div>
                      <div id="ag3-quiz-ans-s2-${d.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 leading-relaxed shadow-xs">
                        <strong>Correct Answer:</strong> <span class="font-bold underline">${d.correct}</span><br>
                        <em>${d.explanation}</em>
                      </div>
                      <button type="button" id="ag3-quiz-btn-s2-${d.id}" onclick="window.toggleAg3QuizAnswer('s2-${d.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Pair Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-100m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Professional Roleplay & Simulation (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Collaborative spoken negotiation and defense</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Pair Simulation</span>
            </div>

            ${renderActivityInstructions(roleplay, theme)}

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[10px] font-black uppercase text-blue-700 tracking-wider">Mission Scenario:</span>
              <p class="text-xs text-slate-700 leading-relaxed">${roleplay.scenario || ''}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${(roleplay.roles || []).map((r, i) => `
                <div class="p-4 rounded-xl border flex flex-col justify-between space-y-3 ${i === 0 ? 'bg-blue-50/40 border-blue-200' : 'bg-slate-50 border-slate-200'}">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between pb-1.5 border-b ${i === 0 ? 'border-blue-200' : 'border-slate-200'}">
                      <span class="text-[10px] font-black uppercase tracking-wider ${i === 0 ? 'text-blue-900' : 'text-slate-700'}">${r.role}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.primary};">${r.title}</span>
                    </div>
                    <div class="space-y-1.5">
                      <span class="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Strategic Objectives:</span>
                      <ul class="text-xs text-slate-700 space-y-1 list-disc pl-4">
                        ${(r.objectives || []).map(obj => `<li>${obj}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                  ${(r.keyPhrases && r.keyPhrases.length) ? `
                    <div class="pt-2 border-t ${i === 0 ? 'border-blue-200' : 'border-slate-200'} space-y-1">
                      <span class="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Useful Spoken Phrases:</span>
                      ${r.keyPhrases.map(ph => `<p class="text-[11px] text-slate-600 italic leading-snug">${ph}</p>`).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Session Wrap-Up & FE3 Preparation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">100-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || "Activity 5: Wrap-Up &amp; FE3 Preparation (15 mins)"}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || "Consolidation, pronunciation practice, and portfolio check"}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Debrief &amp; Exit Ticket</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-blue-950">Session 2 Formative Evaluation Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-blue-800">Verification</span>
              </div>
              <div class="space-y-2 text-xs text-blue-900">
                ${(content.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-blue-200 rounded-lg flex items-center gap-2">
                    <span class="text-blue-600 font-bold">&check;</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }
    function renderAg3LessonContentTabSession3(sessionData, theme) {
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
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Technology Ethics & Automated Decisions in AI'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${ov.image || 'images/ag_m3card3.jpg'}" alt="${ov.title || 'Technology Ethics & Automated Decisions in AI'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-blue-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Technology Ethics & Algorithmic Accountability'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Technology Ethics & Automated Decisions in AI'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Algorithmic Fairness, Explainable AI (XAI), Digital Surveillance & Tech Governance'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Emerging Technology &amp; Society</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: News Prompts & Quick Warm-Up Checks -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">0-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: News & Warm-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Opening warm-up and key concepts review'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            ${(opening.newsPrompts && opening.newsPrompts.length) ? `
              <div class="space-y-2">
                <span class="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Real-World Technical Briefings:</span>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  ${opening.newsPrompts.map((np, i) => `
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                      <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                      <span>${np}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Quick Warm-Up Checks -->
            ${(opening.diagnostic && opening.diagnostic.questions && opening.diagnostic.questions.length) ? `
              <div class="mt-4 pt-4 border-t border-slate-200 space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900">${opening.diagnostic.title || 'Concepts Quick Check'}</h5>
                  <span class="text-[11px] text-slate-500">${opening.diagnostic.instructions || 'Discuss in pairs before revealing'}</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  ${opening.diagnostic.questions.map(q => `
                    <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Distinction 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900">${q.q}</p>
                      <div id="ag3-spotcheck-ans-3-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag3-spotcheck-btn-3-${q.id}" onclick="window.toggleAg3SpotCheckAnswer(3, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 2: Speed Survey / Dilemmas -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Speed Survey'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Structured Discussion</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Transition Phrases & Linking Words -->
            ${survey.signposts ? `
              <div class="p-3 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-blue-950 uppercase tracking-wide">Key Spoken Transition Phrases &amp; Linking Words:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-900">
                  ${survey.signposts.map(sp => `<div class="p-2 bg-white rounded border border-blue-200/80 italic font-medium">${sp}</div>`).join('')}
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
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.accent};">${t.badge || ''}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-2">${t.statement}</h5>
                    <div class="mt-2.5 space-y-2 text-xs">
                      <div class="p-2 bg-emerald-50/80 border border-emerald-200 rounded-lg text-emerald-950">
                        <strong class="text-emerald-900 block mb-0.5">&plus; Argument (Pro / Opportunity):</strong>
                        ${t.pro}
                      </div>
                      <div class="p-2 bg-rose-50/80 border border-rose-200 rounded-lg text-rose-950">
                        <strong class="text-rose-900 block mb-0.5">&minus; Counter-Argument (Con / Risk):</strong>
                        ${t.con}
                      </div>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] text-slate-600 font-medium italic">
                    💬 ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar Focus</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
                  <span class="text-[10px] font-black uppercase text-blue-700 tracking-wider block">${r.type}</span>
                  <div class="p-2 bg-white rounded border border-slate-200 text-xs font-mono text-slate-800 font-semibold">${r.formula}</div>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${r.usage}</p>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Drills -->
            ${(grammar.drills && grammar.drills.length) ? `
              <div class="mt-4 pt-4 border-t border-slate-200 space-y-3">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Grammar Practice: Quick Drills</h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  ${grammar.drills.map(d => `
                    <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${d.id}</span>
                        <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Target: ${d.correct}</span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 leading-snug">${d.sentence}</p>
                      <div class="grid grid-cols-2 gap-1.5 text-[11px]">
                        ${d.options.map(opt => `
                          <div class="p-1.5 bg-white border border-slate-200 rounded text-slate-700 text-center font-medium">${opt}</div>
                        `).join('')}
                      </div>
                      <div id="ag3-quiz-ans-s3-${d.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 leading-relaxed shadow-xs">
                        <strong>Correct Answer:</strong> <span class="font-bold underline">${d.correct}</span><br>
                        <em>${d.explanation}</em>
                      </div>
                      <button type="button" id="ag3-quiz-btn-s3-${d.id}" onclick="window.toggleAg3QuizAnswer('s3-${d.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Pair Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-100m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Professional Roleplay & Simulation (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Collaborative spoken negotiation and defense</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Pair Simulation</span>
            </div>

            ${renderActivityInstructions(roleplay, theme)}

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[10px] font-black uppercase text-blue-700 tracking-wider">Mission Scenario:</span>
              <p class="text-xs text-slate-700 leading-relaxed">${roleplay.scenario || ''}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${(roleplay.roles || []).map((r, i) => `
                <div class="p-4 rounded-xl border flex flex-col justify-between space-y-3 ${i === 0 ? 'bg-blue-50/40 border-blue-200' : 'bg-slate-50 border-slate-200'}">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between pb-1.5 border-b ${i === 0 ? 'border-blue-200' : 'border-slate-200'}">
                      <span class="text-[10px] font-black uppercase tracking-wider ${i === 0 ? 'text-blue-900' : 'text-slate-700'}">${r.role}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.primary};">${r.title}</span>
                    </div>
                    <div class="space-y-1.5">
                      <span class="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Strategic Objectives:</span>
                      <ul class="text-xs text-slate-700 space-y-1 list-disc pl-4">
                        ${(r.objectives || []).map(obj => `<li>${obj}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                  ${(r.keyPhrases && r.keyPhrases.length) ? `
                    <div class="pt-2 border-t ${i === 0 ? 'border-blue-200' : 'border-slate-200'} space-y-1">
                      <span class="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Useful Spoken Phrases:</span>
                      ${r.keyPhrases.map(ph => `<p class="text-[11px] text-slate-600 italic leading-snug">${ph}</p>`).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Session Wrap-Up & FE3 Preparation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">100-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || "Activity 5: Wrap-Up &amp; FE3 Preparation (15 mins)"}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || "Consolidation, pronunciation practice, and portfolio check"}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Debrief &amp; Exit Ticket</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-blue-950">Session 3 Formative Evaluation Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-blue-800">Verification</span>
              </div>
              <div class="space-y-2 text-xs text-blue-900">
                ${(content.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-blue-200 rounded-lg flex items-center gap-2">
                    <span class="text-blue-600 font-bold">&check;</span>
                    <span>${item}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }
    function renderAg3LessonContentTabSession4(sessionData, theme) {
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
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 3 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${ov.title || 'Biometrics, Digital IDs & Passenger Journey'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${ov.image || 'images/ag_m3card4.jpg'}" alt="${ov.title || 'Biometrics, Digital IDs & Passenger Journey'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m3card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-blue-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Biometrics & Digital Identity'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Biometrics, Digital IDs & Passenger Journey'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Contactless E-Gates, IATA One ID, Cybersecurity & Biometric Data Sovereignty'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Emerging Technology &amp; Society</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: News Prompts & Quick Warm-Up Checks -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">0-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: News & Warm-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Opening warm-up and key concepts review'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            ${(opening.newsPrompts && opening.newsPrompts.length) ? `
              <div class="space-y-2">
                <span class="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Real-World Technical Briefings:</span>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  ${opening.newsPrompts.map((np, i) => `
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed flex items-start gap-2">
                      <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                      <span>${np}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Quick Warm-Up Checks -->
            ${(opening.diagnostic && opening.diagnostic.questions && opening.diagnostic.questions.length) ? `
              <div class="mt-4 pt-4 border-t border-slate-200 space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900">${opening.diagnostic.title || 'Concepts Quick Check'}</h5>
                  <span class="text-[11px] text-slate-500">${opening.diagnostic.instructions || 'Discuss in pairs before revealing'}</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  ${opening.diagnostic.questions.map(q => `
                    <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Distinction 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900">${q.q}</p>
                      <div id="ag3-spotcheck-ans-4-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag3-spotcheck-btn-4-${q.id}" onclick="window.toggleAg3SpotCheckAnswer(4, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 2: Speed Survey / Dilemmas -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Speed Survey'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Structured Discussion</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Transition Phrases & Linking Words -->
            ${survey.signposts ? `
              <div class="p-3 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-blue-950 uppercase tracking-wide">Key Spoken Transition Phrases &amp; Linking Words:</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-900">
                  ${survey.signposts.map(sp => `<div class="p-2 bg-white rounded border border-blue-200/80 italic font-medium">${sp}</div>`).join('')}
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
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.accent};">${t.badge || ''}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-2">${t.statement}</h5>
                    <div class="mt-2.5 space-y-2 text-xs">
                      <div class="p-2 bg-emerald-50/80 border border-emerald-200 rounded-lg text-emerald-950">
                        <strong class="text-emerald-900 block mb-0.5">&plus; Argument (Pro / Opportunity):</strong>
                        ${t.pro}
                      </div>
                      <div class="p-2 bg-rose-50/80 border border-rose-200 rounded-lg text-rose-950">
                        <strong class="text-rose-900 block mb-0.5">&minus; Counter-Argument (Con / Risk):</strong>
                        ${t.con}
                      </div>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] text-slate-600 font-medium italic">
                    💬 ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Focus -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Language Focus'}</h4>
                  <p class="text-[11px] text-slate-500">${grammar.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar Focus</span>
            </div>

            ${renderActivityInstructions(grammar, theme)}

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(grammar.rules || []).map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
                  <span class="text-[10px] font-black uppercase text-blue-700 tracking-wider block">${r.type}</span>
                  <div class="p-2 bg-white rounded border border-slate-200 text-xs font-mono text-slate-800 font-semibold">${r.formula}</div>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${r.usage}</p>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Drills -->
            ${(grammar.drills && grammar.drills.length) ? `
              <div class="mt-4 pt-4 border-t border-slate-200 space-y-3">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Grammar Practice: Quick Drills</h5>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  ${grammar.drills.map(d => `
                    <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${d.id}</span>
                        <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Target: ${d.correct}</span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 leading-snug">${d.sentence}</p>
                      <div class="grid grid-cols-2 gap-1.5 text-[11px]">
                        ${d.options.map(opt => `
                          <div class="p-1.5 bg-white border border-slate-200 rounded text-slate-700 text-center font-medium">${opt}</div>
                        `).join('')}
                      </div>
                      <div id="ag3-quiz-ans-s4-${d.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 leading-relaxed shadow-xs">
                        <strong>Correct Answer:</strong> <span class="font-bold underline">${d.correct}</span><br>
                        <em>${d.explanation}</em>
                      </div>
                      <button type="button" id="ag3-quiz-btn-s4-${d.id}" onclick="window.toggleAg3QuizAnswer('s4-${d.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Pair Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-100m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Professional Roleplay & Simulation (45 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">Collaborative spoken negotiation and defense</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Pair Simulation</span>
            </div>

            ${renderActivityInstructions(roleplay, theme)}

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[10px] font-black uppercase text-blue-700 tracking-wider">Mission Scenario:</span>
              <p class="text-xs text-slate-700 leading-relaxed">${roleplay.scenario || ''}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${(roleplay.roles || []).map((r, i) => `
                <div class="p-4 rounded-xl border flex flex-col justify-between space-y-3 ${i === 0 ? 'bg-blue-50/40 border-blue-200' : 'bg-slate-50 border-slate-200'}">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between pb-1.5 border-b ${i === 0 ? 'border-blue-200' : 'border-slate-200'}">
                      <span class="text-[10px] font-black uppercase tracking-wider ${i === 0 ? 'text-blue-900' : 'text-slate-700'}">${r.role}</span>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white" style="background-color: ${theme.primary};">${r.title}</span>
                    </div>
                    <div class="space-y-1.5">
                      <span class="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Strategic Objectives:</span>
                      <ul class="text-xs text-slate-700 space-y-1 list-disc pl-4">
                        ${(r.objectives || []).map(obj => `<li>${obj}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                  ${(r.keyPhrases && r.keyPhrases.length) ? `
                    <div class="pt-2 border-t ${i === 0 ? 'border-blue-200' : 'border-slate-200'} space-y-1">
                      <span class="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Useful Spoken Phrases:</span>
                      ${r.keyPhrases.map(ph => `<p class="text-[11px] text-slate-600 italic leading-snug">${ph}</p>`).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Session Wrap-Up & FE3 Preparation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">100-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || "Activity 5: Wrap-Up &amp; FE3 Preparation (15 mins)"}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || "Consolidation, pronunciation practice, and portfolio check"}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Debrief &amp; Exit Ticket</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <div class="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-blue-950">Session 4 Formative Evaluation Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-blue-800">Verification</span>
              </div>
              <div class="space-y-2 text-xs text-blue-900">
                ${(content.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-blue-200 rounded-lg flex items-center gap-2">
                    <span class="text-blue-600 font-bold">&check;</span>
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
       AERONAUTICAL ENGLISH (AAS) • MODULE 2 SESSIONS 1 TO 4 LESSON CONTENT
       ========================================================================= */


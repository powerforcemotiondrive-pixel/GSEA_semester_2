    function renderLessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const survey = content.survey || {};
      const modals = content.modalsClinic || {};
      const caseStudy = content.operationalCaseStudy || {};
      const miniDebate = content.miniDebate || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Introduction &amp; Aviation Survey</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative w-full h-36 sm:h-44 rounded-t-xl" style="background-color: ${theme.primary}; background-image: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.25) 100%);">
              <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Commercial Aviation Dynamics</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Introduction & Aviation Survey'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Commercial Aviation Dilemmas, Passenger Disruption & Regulatory Modals'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">AFISO / Aerodrome Ground Operations &amp; Passenger Service</span>
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
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Warm-Up Check (10 mins)'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Aviation Headlines &amp; Industry Pulse</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Course Entry Check: Aviation Vocabulary Spot-Check'}</h5>
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
                        <span class="font-bold text-slate-900">Operational Distinction:</span> ${q.answer}
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

          <!-- Activity 2: The Global Aviation Survey -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: The Global Aviation Survey (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Speed-Dating Interviews</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Professional Opinion Signposts Box -->
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider">Professional Opinion Signposts (Use in Spoken Discussions):</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                ${(survey.signposts || []).map(sp => `
                  <div class="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-lg shadow-xs">
                    <span class="text-emerald-600 font-bold">&check;</span>
                    <span class="font-medium italic">${sp}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 4 Topic Cards with Agreement Scale -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              ${(survey.topics || []).map(t => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                      <span class="text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">${t.badge}</span>
                      <span class="text-[10px] font-bold text-slate-400 uppercase">Topic 0${t.id}</span>
                    </div>
                    <p class="text-xs sm:text-sm font-bold text-slate-900 mt-2.5 leading-snug">${t.statement}</p>
                    
                    <div class="mt-3 space-y-2 text-[11px]">
                      <div class="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-emerald-900">
                        <strong class="font-bold text-emerald-950">PRO / In Favor:</strong> ${t.pro}
                      </div>
                      <div class="p-2.5 bg-rose-50/70 border border-rose-200 rounded-lg text-rose-900">
                        <strong class="font-bold text-rose-950">CON / Opposition:</strong> ${t.con}
                      </div>
                    </div>
                  </div>

                  <div class="pt-2 border-t border-slate-200/80 space-y-2">
                    <p class="text-[11px] font-medium text-slate-600 italic">&ldquo;${t.prompt}&rdquo;</p>
                    <div class="no-print pt-1">
                      <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Your Personal Stance (1 = Strongly Disagree, 5 = Strongly Agree):</label>
                      <div class="flex items-center justify-between gap-1 bg-white p-1.5 rounded-lg border border-slate-200">
                        ${[1, 2, 3, 4, 5].map(score => `
                          <button type="button" onclick="window.setSurveyAgreement(${t.id}, ${score})" id="survey-${t.id}-btn-${score}" class="flex-1 py-1 text-center text-xs font-bold rounded hover:bg-slate-100 transition-all text-slate-600 border border-transparent">
                            ${score}
                          </button>
                        `).join('')}
                      </div>
                      <div class="flex justify-between text-[9px] text-slate-400 px-1 mt-0.5">
                        <span>Disagree</span>
                        <span>Neutral</span>
                        <span>Agree</span>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Modals Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-60m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${modals.title || 'Activity 3: Language Focus: Modals of Authority (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${modals.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar &amp; Precision</span>
            </div>

            ${renderActivityInstructions(modals, theme)}

            <!-- 4 Rule Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${(modals.rules || []).map((r, i) => {
                const borderCols = ['border-blue-300 bg-blue-50/60', 'border-rose-300 bg-rose-50/60', 'border-emerald-300 bg-emerald-50/60', 'border-amber-300 bg-amber-50/60'];
                const textCols = ['text-blue-900', 'text-rose-900', 'text-emerald-900', 'text-amber-900'];
                return `
                  <div class="p-3.5 border rounded-xl space-y-2 flex flex-col justify-between ${borderCols[i % 4]}">
                    <div>
                      <h5 class="text-xs font-black ${textCols[i % 4]}">${r.title}</h5>
                      <p class="text-[11px] text-slate-600 mt-1">${r.rule}</p>
                    </div>
                    <div class="p-2 bg-white/90 border border-slate-200 rounded-lg text-[11px] text-slate-800 leading-snug">
                      ${r.example}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Interactive Regulatory Challenge -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900">${(modals.challenge && modals.challenge.title) || 'Interactive Regulatory Challenge: Spot the Correct Modal'}</h5>
                  <p class="text-[11px] text-slate-500">${(modals.challenge && modals.challenge.instructions) || ''}</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                ${((modals.challenge && modals.challenge.questions) || []).map(q => `
                  <div class="p-3.5 bg-white border border-slate-200 rounded-xl space-y-2.5 shadow-xs">
                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-1.5">
                      <span>Scenario 0${q.id}: ${q.context}</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 leading-relaxed">${q.sentence}</p>
                    
                    <div class="space-y-1 text-xs">
                      ${q.options.map((opt) => `
                        <div class="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-700">
                          ${opt}
                        </div>
                      `).join('')}
                    </div>

                    <div id="modal-chal-ans-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 leading-relaxed shadow-xs">
                      <span class="font-bold text-emerald-900">Correct:</span> ${q.correct}<br>
                      <span class="font-bold text-emerald-900">Rule:</span> ${q.explanation}
                    </div>

                    <button type="button" id="modal-chal-btn-${q.id}" onclick="window.toggleModalChallengeAnswer(${q.id})" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer pt-1">
                      <span>Verify Rationale</span> &rarr;
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Operational Case Study -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">60-85m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${caseStudy.title || 'Activity 4: EU261 Delay & Disruption Case Study (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${caseStudy.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">De-Escalation Role-Play</span>
            </div>

            ${renderActivityInstructions(caseStudy, theme)}

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(caseStudy.roles || []).map((r, rIdx) => {
                const isLiaison = rIdx === 0;
                return `
                  <div class="p-4 rounded-xl border space-y-3 flex flex-col justify-between ${isLiaison ? 'bg-blue-50/50 border-blue-200' : 'bg-amber-50/50 border-amber-200'}">
                    <div>
                      <div class="flex items-center justify-between gap-2 border-b pb-2 ${isLiaison ? 'border-blue-200' : 'border-amber-200'}">
                        <span class="text-xs font-black uppercase tracking-wider ${isLiaison ? 'text-blue-900' : 'text-amber-900'}">${r.role}</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white ${isLiaison ? 'bg-blue-600' : 'bg-amber-600'}">${isLiaison ? 'Liaison Trainee' : 'Challenging Client'}</span>
                      </div>
                      <div class="mt-2.5 text-xs text-slate-700 leading-relaxed">
                        <strong class="font-bold text-slate-900">Your Objective:</strong> ${r.mission}
                      </div>
                    </div>

                    <div class="space-y-1.5 pt-2 border-t ${isLiaison ? 'border-blue-200' : 'border-amber-200'}">
                      <span class="text-[10px] font-black uppercase tracking-wider ${isLiaison ? 'text-blue-800' : 'text-amber-800'}">Key Communicative Phrases:</span>
                      <ul class="space-y-1 text-[11px] text-slate-700 pl-4 list-disc">
                        ${(r.keyPhrases || []).map(p => `<li>${p}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="p-3 bg-slate-100 rounded-xl text-center text-xs font-semibold text-slate-700">
              ${caseStudy.task || 'Conduct a 4-minute spoken role-play with your partner. Then swap roles. Focus on de-escalation, professional courtesy, and accurate explanation of passenger rights.'}
            </div>
          </div>

          <!-- Activity 5: Station Mini-Debate -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">85-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${miniDebate.title || 'Activity 5: Station Mini-Debate & Spoken Consensus Briefing (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${miniDebate.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Policy Consensus</span>
            </div>

            ${renderActivityInstructions(miniDebate, theme)}

            <!-- Debate Motion Banner -->
            <div class="p-3.5 bg-slate-900 text-white rounded-xl shadow-xs">
              <span class="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Formal Policy Motion</span>
              <p class="text-xs sm:text-sm font-bold text-white mt-0.5">${miniDebate.motion || ''}</p>
            </div>

            <!-- 4-Step Argument Framework -->
            <div class="space-y-2">
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider">Structured Spoken Handover Framework:</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                ${(miniDebate.framework || []).map(f => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                    <div>
                      <h6 class="text-xs font-bold text-slate-900">${f.step}</h6>
                      <p class="text-[11px] text-slate-600 mt-1">${f.desc}</p>
                    </div>
                    <div class="p-2 bg-white border border-slate-200 rounded-lg text-[10px] italic text-slate-700 font-medium">
                      ${f.phrase}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 60-Second Team Spokesperson Briefing Model -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                  <svg width="14" height="14" class="text-emerald-700 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"/></svg>
                  ${(miniDebate.spokenHandoverModel && miniDebate.spokenHandoverModel.title) || '60-Second Team Spokesperson Briefing Model'}
                </span>
                <span class="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Spoken Benchmark</span>
              </div>
              <p class="text-xs text-emerald-900 leading-relaxed italic">
                &ldquo;${(miniDebate.spokenHandoverModel && miniDebate.spokenHandoverModel.text) || ''}&rdquo;
              </p>
            </div>
          </div>

          <!-- Activity 6: Closing Review -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: 10-Minute Vocabulary Review & Wrap-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Review Prompts -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(closing.reviewPrompts || []).map((rp, rpIdx) => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Step 0${rpIdx + 1}</span>
                    <h5 class="text-xs font-bold text-slate-900 mt-0.5">${rp.title}</h5>
                    <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">${rp.desc}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-200/80">
                    <button type="button" onclick="switchModalTab('revision')" class="no-print text-[11px] font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                      <span>Open Flashcard Review</span> &rarr;
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function renderLessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const journey = content.terminalJourney || {};
      const preps = content.prepositionsClinic || {};
      const caseStudy = content.airsideCaseStudy || {};
      const guidance = content.guidanceWorkshop || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Passenger Journey &amp; Airfield Movement</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative w-full h-36 sm:h-44 rounded-t-xl" style="background-color: ${theme.primary}; background-image: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.25) 100%);">
              <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Terminal Architecture &amp; Aerodrome Markings</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Passenger Journey & Airfield Movement'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Terminal Facilitation, Spatial Prepositions & Airside Guidance Systems'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Role Context:</span>
                <span class="text-slate-600">AFISO / Aerodrome Ground Operations &amp; Passenger Facilitation</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Aviation News & Session 1 Catch-Up Spot-Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Aviation News & Session 1 Catch-Up Spot-Check (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening &amp; Catch-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
              <div class="flex items-center gap-2">
                <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Airport Technology &amp; Innovation Headlines</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Catch-Up Spot-Check Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.catchUpSpotCheck && opening.catchUpSpotCheck.title) || 'Session 1 Catch-Up Spot-Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.catchUpSpotCheck && opening.catchUpSpotCheck.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.catchUpSpotCheck && opening.catchUpSpotCheck.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">${q.term}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="catchup-ans-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Operational Key:</span> ${q.answer}
                      </div>
                      <button type="button" id="catchup-btn-${q.id}" onclick="window.toggleCatchUpAnswer(${q.id})" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Passenger Terminal Flow & Facilitation Dilemmas -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${journey.title || 'Activity 2: Passenger Terminal Flow & Dilemmas (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${journey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Journey Mapping</span>
            </div>

            ${renderActivityInstructions(journey, theme)}

            <!-- 5 Sequential Touchpoints -->
            <div class="space-y-2">
              <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider">The 5 Sequential Concourse Touchpoints:</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                ${(journey.stages || []).map(s => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-1 border-b border-slate-200/80 pb-1">
                        <span class="text-[10px] font-black uppercase text-indigo-700">Stage ${s.num}</span>
                        <span class="text-[9px] font-bold text-slate-400 truncate max-w-[85px]">${s.area}</span>
                      </div>
                      <h6 class="text-xs font-bold text-slate-900 mt-1">${s.title}</h6>
                      <p class="text-[11px] text-slate-600 leading-snug mt-1">${s.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 2 Facilitation Dilemmas -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              ${(journey.dilemmas || []).map(d => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                      <span class="text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">${d.badge}</span>
                      <span class="text-[10px] font-bold text-slate-400 uppercase">Dilemma 0${d.id}</span>
                    </div>
                    <p class="text-xs sm:text-sm font-bold text-slate-900 mt-2 leading-snug">${d.statement}</p>
                    
                    <div class="mt-2.5 space-y-2 text-[11px]">
                      <div class="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-emerald-900">
                        <strong class="font-bold text-emerald-950">PRO / Benefits:</strong> ${d.pro}
                      </div>
                      <div class="p-2.5 bg-rose-50/70 border border-rose-200 rounded-lg text-rose-900">
                        <strong class="font-bold text-rose-950">CON / Concerns:</strong> ${d.con}
                      </div>
                    </div>
                  </div>

                  <div class="pt-2 border-t border-slate-200/80 space-y-2">
                    <p class="text-[11px] font-medium text-slate-600 italic">&ldquo;${d.prompt}&rdquo;</p>
                    <div class="no-print pt-1">
                      <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Your Personal Stance (1 = Strongly Disagree, 5 = Strongly Agree):</label>
                      <div class="flex items-center justify-between gap-1 bg-white p-1.5 rounded-lg border border-slate-200">
                        ${[1, 2, 3, 4, 5].map(score => `
                          <button type="button" onclick="window.setTerminalDebateAgreement(${d.id}, ${score})" id="terminal-debate-${d.id}-btn-${score}" class="flex-1 py-1 text-center text-xs font-bold rounded hover:bg-slate-100 transition-all text-slate-600 border border-transparent">
                            ${score}
                          </button>
                        `).join('')}
                      </div>
                      <div class="flex justify-between text-[9px] text-slate-400 px-1 mt-0.5">
                        <span>Disagree</span>
                        <span>Neutral</span>
                        <span>Agree</span>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Clinic: Prepositions of Place, Direction & Movement -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-60m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${preps.title || 'Activity 3: Prepositions of Place & Movement (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${preps.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Grammar &amp; Precision</span>
            </div>

            ${renderActivityInstructions(preps, theme)}

            <!-- 4 Rule Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${(preps.rules || []).map((r, i) => {
                const borderCols = ['border-blue-300 bg-blue-50/60', 'border-indigo-300 bg-indigo-50/60', 'border-emerald-300 bg-emerald-50/60', 'border-amber-300 bg-amber-50/60'];
                const textCols = ['text-blue-900', 'text-indigo-900', 'text-emerald-900', 'text-amber-900'];
                return `
                  <div class="p-3.5 border rounded-xl space-y-2 flex flex-col justify-between ${borderCols[i % 4]}">
                    <div>
                      <h5 class="text-xs font-black ${textCols[i % 4]}">${r.title}</h5>
                      <p class="text-[11px] text-slate-600 mt-1">${r.rule}</p>
                    </div>
                    <div class="p-2 bg-white/90 border border-slate-200 rounded-lg text-[11px] text-slate-800 leading-snug">
                      ${r.example}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Interactive Spatial Challenge -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900">${(preps.challenge && preps.challenge.title) || 'Interactive Spatial Challenge: Spot the Correct Preposition'}</h5>
                  <p class="text-[11px] text-slate-500">${(preps.challenge && preps.challenge.instructions) || ''}</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                ${((preps.challenge && preps.challenge.questions) || []).map(q => `
                  <div class="p-3.5 bg-white border border-slate-200 rounded-xl space-y-2.5 shadow-xs">
                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-1.5">
                      <span>Scenario 0${q.id}: ${q.context}</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-800 leading-relaxed">${q.sentence}</p>
                    
                    <div class="space-y-1 text-xs">
                      ${q.options.map((opt) => `
                        <div class="p-2 bg-slate-50 rounded-lg border border-slate-200 text-slate-700">
                          ${opt}
                        </div>
                      `).join('')}
                    </div>

                    <div id="prep-chal-ans-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 leading-relaxed shadow-xs">
                      <span class="font-bold text-emerald-900">Correct:</span> ${q.correct}<br>
                      <span class="font-bold text-emerald-900">Rule:</span> ${q.explanation}
                    </div>

                    <button type="button" id="prep-chal-btn-${q.id}" onclick="window.togglePrepositionChallengeAnswer(${q.id})" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer pt-1">
                      <span>Verify Rationale</span> &rarr;
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Operational Case Study: Unauthorized Apron Access -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">60-85m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${caseStudy.title || 'Activity 4: Unauthorized Apron Access Case Study (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${caseStudy.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Airside Intercept Role-Play</span>
            </div>

            ${renderActivityInstructions(caseStudy, theme)}

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(caseStudy.roles || []).map((r, rIdx) => {
                const isLiaison = rIdx === 0;
                return `
                  <div class="p-4 rounded-xl border space-y-3 flex flex-col justify-between ${isLiaison ? 'bg-blue-50/50 border-blue-200' : 'bg-emerald-50/50 border-emerald-200'}">
                    <div>
                      <div class="flex items-center justify-between gap-2 border-b pb-2 ${isLiaison ? 'border-blue-200' : 'border-emerald-200'}">
                        <span class="text-xs font-black uppercase tracking-wider ${isLiaison ? 'text-blue-900' : 'text-emerald-900'}">${r.role}</span>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded text-white ${isLiaison ? 'bg-blue-600' : 'bg-emerald-600'}">${isLiaison ? 'Operations Trainee' : 'Ramp Lead'}</span>
                      </div>
                      <div class="mt-2.5 text-xs text-slate-700 leading-relaxed">
                        <strong class="font-bold text-slate-900">Your Objective:</strong> ${r.mission}
                      </div>
                    </div>

                    <div class="space-y-1.5 pt-2 border-t ${isLiaison ? 'border-blue-200' : 'border-emerald-200'}">
                      <span class="text-[10px] font-black uppercase tracking-wider ${isLiaison ? 'text-blue-800' : 'text-emerald-800'}">Key VHF &amp; De-escalation Phrases:</span>
                      <ul class="space-y-1 text-[11px] text-slate-700 pl-4 list-disc">
                        ${(r.keyPhrases || []).map(p => `<li>${p}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="p-3 bg-slate-100 rounded-xl text-center text-xs font-semibold text-slate-700">
              ${caseStudy.task || 'Conduct a 4-minute spoken VHF radio exchange and de-escalation role-play. Focus on spatial precision, professional composure, and clear prepositions. Then swap roles.'}
            </div>
          </div>

          <!-- Activity 5: Airfield Guidance Markings & Spoken Briefing -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">85-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${guidance.title || 'Activity 5: Airfield Guidance Markings & Spoken Briefing (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${guidance.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Ground Guidance Systems</span>
            </div>

            ${renderActivityInstructions(guidance, theme)}

            <!-- 4 Guidance Markings Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${(guidance.markings || []).map(m => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 border-b border-slate-200/80 pb-1.5">
                      <span class="text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">${m.badge}</span>
                      <span class="text-[10px] font-bold text-slate-400">0${m.id}</span>
                    </div>
                    <h5 class="text-xs font-bold text-slate-900 mt-1.5">${m.title}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed mt-1">${m.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- 60-Second Airfield Safety Briefing Model -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                  <svg width="14" height="14" class="text-emerald-700 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z"/></svg>
                  ${(guidance.spokenHandoverModel && guidance.spokenHandoverModel.title) || '60-Second Airfield Safety Briefing Model'}
                </span>
                <span class="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Spoken Benchmark</span>
              </div>
              <p class="text-xs text-emerald-900 leading-relaxed italic">
                &ldquo;${(guidance.spokenHandoverModel && guidance.spokenHandoverModel.text) || ''}&rdquo;
              </p>
            </div>
          </div>

          <!-- Activity 6: Closing Review -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: 10-Minute Vocabulary Review & Wrap-Up (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Closing Consolidation</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Review Prompts -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(closing.reviewPrompts || []).map((rp, rpIdx) => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Step 0${rpIdx + 1}</span>
                    <h5 class="text-xs font-bold text-slate-900 mt-0.5">${rp.title}</h5>
                    <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">${rp.desc}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-200/80">
                    <button type="button" onclick="switchModalTab('revision')" class="no-print text-[11px] font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                      <span>Open Flashcard Review</span> &rarr;
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function renderLessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const clock = content.turnaroundClock || {};
      const vehicles = content.vehicles || [];
      const vehiclesInstruction = content.vehiclesInstruction || {};
      const delays = content.safetyDelays || {};
      const simulation = content.simulation || {};
      const briefing = content.briefing || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Ground Operations &amp; Turnaround Management</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative w-full h-36 sm:h-44 rounded-t-xl" style="background-color: ${theme.primary}; background-image: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.25) 100%);">
              <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Apron Servicing Envelope</span>
                <h2 class="text-base sm:text-xl font-black text-white mt-0.5">${hero.title || 'Ground Operations &amp; Turnaround Management'}</h2>
                <p class="text-xs text-white/90 mt-1 max-w-2xl">${hero.subtitle || 'Coordinating critical ground handling operations in a 35 to 45-minute servicing window.'}</p>
              </div>
            </div>
          </div>

          <!-- Activity 1: Aviation News & Previous Session Vocabulary Spot-Check (10 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">01</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${opening.title || 'Activity 1: Aviation News &amp; Previous Session Vocabulary Spot-Check (10 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Warm-Up &amp; Catch-Up</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${opening.summary || ''}</p>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-3.5 rounded-lg bg-sky-50/70 border border-sky-200">
              <span class="text-[11px] font-bold text-sky-900 uppercase tracking-wider">📰 Aviation News &amp; Current Events Prompts</span>
              <ul class="space-y-1.5 mt-2 text-xs text-sky-950">
                ${(opening.newsPrompts || []).map(p => `
                  <li class="flex items-start gap-1.5">
                    <span class="font-bold text-sky-700">&bull;</span>
                    <span>${p}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- Session 2 Vocabulary Spot-Check -->
            <div class="space-y-2.5 pt-1">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">🎯 Session 2 Catch-Up: Airfield Vocabulary Spot-Check</span>
                <span class="text-[11px] text-slate-500">Rapid-fire student recall</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.spotCheck && opening.spotCheck.questions) || []).map(q => `
                  <div class="p-3 rounded-lg bg-slate-50 border border-slate-200/90 text-xs flex flex-col justify-between space-y-2">
                    <div>
                      <span class="font-bold text-slate-800 block text-xs">${q.id}. ${q.q}</span>
                    </div>
                    <div>
                      <button type="button" onclick="window.toggleSpotCheckAnswer(${q.id})" id="spotcheck-btn-${q.id}" class="no-print text-[11px] font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                      <div id="spotcheck-ans-${q.id}" class="hidden p-2 mt-1.5 rounded bg-white border border-slate-200 text-[11px] text-slate-700 leading-relaxed italic">
                        ${q.answer}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: The Turnaround Clock (15 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">02</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${clock.title || 'Activity 2: The Turnaround Clock (15 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Pacing &amp; Tenses</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${clock.summary || ''}</p>

            ${renderActivityInstructions(clock, theme)}

            <!-- Turnaround Timeline -->
            <div class="space-y-2 pt-1">
              ${(clock.milestones || []).map(m => `
                <div class="grid grid-cols-[85px_1fr] sm:grid-cols-[100px_1fr] items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <span class="text-[11px] font-black font-mono px-2 py-1 rounded text-center text-white shrink-0 shadow-2xs" style="background-color: ${theme.primary};">${m.time}</span>
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-800">${m.phase}</h5>
                    <p class="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">${m.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Discussion & Grammar Box -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              <div class="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200">
                <span class="text-[11px] font-bold text-amber-900 uppercase tracking-wider">Spoken Pair Discussion</span>
                <ul class="space-y-2 mt-2 text-xs text-amber-950">
                  ${(clock.discussionPrompts || []).map(q => `
                    <li class="flex items-start gap-1.5">
                      <span class="font-bold text-amber-700">&rarr;</span>
                      <span>${q}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div class="p-3.5 rounded-lg bg-indigo-50/70 border border-indigo-200">
                <span class="text-[11px] font-bold text-indigo-900 uppercase tracking-wider">${(clock.grammarBox && clock.grammarBox.title) || 'Grammar Focus'}</span>
                <p class="text-[11px] text-indigo-950 mt-1 leading-relaxed">${(clock.grammarBox && clock.grammarBox.rule) || ''}</p>
                <div class="space-y-1.5 mt-2 pt-2 border-t border-indigo-200/60 text-[11px] text-indigo-950">
                  ${((clock.grammarBox && clock.grammarBox.examples) || []).map(ex => `
                    <div><span class="font-bold text-indigo-800">${ex.type}:</span> ${ex.text}</div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Activity 3: The 10 Airside Vehicles (GSE) Master Index & Defining Game (30 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">03</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">Activity 3: Airside Vehicles (GSE) Master Index &amp; Defining Game (30 mins)</h3>
              </div>
              <div class="no-print flex items-center gap-1.5">
                <button type="button" onclick="window.toggleAllVehicles(true)" class="text-[11px] font-bold px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer">Show All Answers</button>
                <button type="button" onclick="window.toggleAllVehicles(false)" class="text-[11px] font-bold px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer">Show All Clues</button>
              </div>
            </div>

            ${renderActivityInstructions(vehiclesInstruction, theme)}
            
            <div class="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <span class="font-bold text-slate-800">Pair Work Task:</span> Student A views the vehicle clues and describes its operational role using defining language (e.g. <em>"This vehicle is designed to...", "Handlers connect it to..."</em>) without stating the vehicle's name. Student B listens and identifies the correct vehicle. Click <strong>Reveal Vehicle</strong> to verify pronunciation and model sentence.
            </div>

            <!-- 10 Vehicle Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${vehicles.map(v => `
                <div id="vehicle-card-${v.id}" class="bg-white border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-all">
                  <div>
                    <div class="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 mb-2.5">
                      <div class="flex items-center gap-2">
                        <span class="text-white text-xs font-black px-2 py-0.5 rounded-md shadow-2xs" style="background-color: ${theme.primary};">
                          ${v.id < 10 ? '0' + v.id : v.id}
                        </span>
                        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          ${v.category}
                        </span>
                      </div>
                      <button type="button" onclick="window.toggleVehicleCardView(${v.id})" id="vehicle-toggle-btn-${v.id}" class="no-print inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Vehicle</span> &rarr;
                      </button>
                    </div>

                    <!-- Clue View (Default) -->
                    <div id="vehicle-clue-${v.id}" class="space-y-2">
                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Functional Clues:</span>
                      <ul class="space-y-1 text-xs text-slate-700">
                        ${v.clues.map(c => `
                          <li class="flex items-start gap-1.5">
                            <span class="text-slate-400 font-bold shrink-0">&bull;</span>
                            <span>${c}</span>
                          </li>
                        `).join('')}
                      </ul>
                      <div class="pt-2 border-t border-slate-100 text-[11px]">
                        <span class="font-bold text-slate-500">Sentence Starter: </span>
                        <span class="italic text-slate-700">"${v.sentenceStarters[0]}"</span>
                      </div>
                    </div>

                    <!-- Revealed View (Initially Hidden) -->
                    <div id="vehicle-reveal-${v.id}" class="hidden space-y-2">
                      <div class="flex items-start justify-between gap-2">
                        <div>
                          <h5 class="text-sm font-black text-slate-900">${v.name}</h5>
                          <span class="text-xs font-mono text-slate-500">${v.phonetic}</span>
                        </div>
                        <button type="button" onclick="speakWord('${v.name.replace(/'/g, "\\'")}')" class="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all cursor-pointer" title="Listen to pronunciation">
                          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"/></svg>
                        </button>
                      </div>
                      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                        <span class="font-bold text-slate-800">Operational Purpose: </span>${v.modelSentence}
                      </div>
                      <div class="text-[11px] text-slate-600 italic">
                        <span class="font-bold not-italic text-slate-700">Model Definition: </span>"${v.definingPractice}"
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: Apron Safety & Cause-Effect Linkers (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">04</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${delays.title || 'Activity 4: Apron Safety &amp; Cause-Effect Linkers (25 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Formal Grammar</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${delays.summary || ''}</p>

            ${renderActivityInstructions(delays, theme)}

            <!-- Linkers Summary Table -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(delays.linkers || []).map(l => `
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="text-[11px] font-bold text-slate-800 uppercase tracking-wider">${l.category}</span>
                  <p class="text-xs font-mono text-slate-600 font-semibold mt-1">${l.pattern}</p>
                  <p class="text-[11px] text-slate-600 italic mt-1.5 leading-snug">${l.example}</p>
                </div>
              `).join('')}
            </div>

            <!-- 4 Ramp Scenarios -->
            <div class="space-y-3 pt-2">
              <span class="text-xs font-bold text-slate-700 uppercase tracking-wider">Ramp Incident Case Scenarios:</span>
              ${(delays.scenarios || []).map(sc => `
                <div class="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs space-y-2">
                  <div class="flex items-center justify-between gap-2 border-b border-slate-100 pb-1.5">
                    <h5 class="text-xs sm:text-sm font-bold text-slate-800">${sc.title}</h5>
                    <button type="button" onclick="window.toggleScenarioModel(${sc.id})" id="scenario-btn-${sc.id}" class="no-print text-[11px] font-bold text-indigo-600 hover:text-indigo-800 transition-all cursor-pointer">
                      <span>Show Target Model</span> &rarr;
                    </button>
                  </div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div class="p-2 rounded bg-rose-50/60 border border-rose-200/60">
                      <span class="font-bold text-rose-900 text-[10px] uppercase tracking-wider block">Root Cause</span>
                      <p class="text-rose-950 mt-0.5">${sc.cause}</p>
                    </div>
                    <div class="p-2 rounded bg-amber-50/60 border border-amber-200/60">
                      <span class="font-bold text-amber-900 text-[10px] uppercase tracking-wider block">Operational Consequence</span>
                      <p class="text-amber-950 mt-0.5">${sc.consequence}</p>
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 font-medium pt-1">
                    <span class="font-bold text-slate-700">Speaking Task: </span>${sc.spokenTask}
                  </div>
                  <div id="scenario-model-${sc.id}" class="hidden p-2.5 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700 italic">
                    <span class="font-bold not-italic text-slate-800">Target Model Sentence: </span>"${sc.spokenTask.includes('due to') ? 'Due to a ruptured hydraulic hose on the pushback tractor, fluid was spilled on stand, which resulted in a 25-minute movement suspension.' : (sc.spokenTask.includes('owing to') ? 'Owing to foreign object debris located on Taxiway Mike, arrivals were halted; consequently, aerodrome safety teams completed an emergency inspection.' : (sc.spokenTask.includes('because of') ? 'Because of severe ice accumulation on the wing slats, the captain requested remote de-icing, which led to a fifteen-minute slot delay.' : 'As a result of an unauthorized contractor van parked behind the aircraft, the catering hi-lift was unable to reverse; therefore, pushback was held.'))}"
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Operations Simulation & Shift Handover Briefing (30 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">05</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${simulation.title || 'Activity 5: Operations Simulation &amp; Shift Handover (30 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Collaborative Role-Play &amp; Briefing</span>
            </div>

            ${renderActivityInstructions(simulation, theme)}
            
            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <span class="font-bold text-slate-900 block mb-1">Operational Situation Report:</span>
              ${simulation.context || ''}
            </div>

            <!-- Bottlenecks Grid -->
            <div class="space-y-2">
              <span class="text-xs font-bold text-slate-700 uppercase tracking-wider">3 Simultaneous Ramp Bottlenecks:</span>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                ${(simulation.bottlenecks || []).map(b => `
                  <div class="p-3 rounded-lg bg-rose-50/50 border border-rose-200 text-xs">
                    <div class="flex items-center gap-1.5 font-bold text-rose-900 mb-1">
                      <span class="w-4 h-4 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center text-[10px]">${b.id}</span>
                      <span>${b.title}</span>
                    </div>
                    <p class="text-rose-950 text-[11px] leading-relaxed">${b.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Role Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              ${(simulation.roles || []).map(r => `
                <div class="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <h5 class="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-100">${r.role}</h5>
                  <p class="text-xs text-slate-600 mt-2 leading-relaxed">${r.mission}</p>
                </div>
              `).join('')}
            </div>

            <div class="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-950 leading-relaxed">
              <span class="font-bold text-amber-900">Task: </span>${simulation.recoveryInstructions}
            </div>

            <!-- Authentic Spoken Handover Briefing Sub-Section -->
            <div class="pt-3 border-t border-slate-100 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-800">The 60-Second Shift Handover Briefing Framework:</span>
                <span class="text-[11px] text-slate-500">4-Part Standard</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                ${(briefing.structure || []).map(st => `
                  <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                    <span class="font-bold text-slate-900 text-xs block mb-0.5">${st.step}</span>
                    <p class="text-[10px] text-slate-500 mb-1">${st.desc}</p>
                    <p class="text-[11px] text-indigo-700 italic border-t border-slate-200/80 pt-1 leading-snug">${st.phrase}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Spoken Handover Model -->
              <div class="p-4 rounded-xl bg-slate-900 text-slate-100 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold uppercase tracking-wider text-amber-400">Authentic Spoken Model Briefing:</span>
                  <button type="button" onclick="speakWord(document.getElementById('model-handover-text').innerText)" class="no-print inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all cursor-pointer">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"/></svg>
                    <span>Listen to Model</span>
                  </button>
                </div>
                <p id="model-handover-text" class="text-xs sm:text-sm text-slate-200 leading-relaxed italic border-l-2 border-amber-400 pl-3">
                  ${briefing.spokenModel || ''}
                </p>
              </div>
            </div>
          </div>

          <!-- Activity 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">06</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${closing.title || 'Activity 6: Vocabulary Review &amp; Class Wrap-Up (10 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">10-Min Consolidation</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${closing.summary || ''}</p>

            ${renderActivityInstructions(closing, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(closing.reviewPrompts || []).map(rp => `
                <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/80 flex flex-col justify-between space-y-2">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900">${rp.title}</h5>
                    <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">${rp.desc}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-200/80">
                    <button type="button" onclick="switchModalTab('revision')" class="no-print text-[11px] font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                      <span>Open Flashcard Review</span> &rarr;
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function renderLessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const taxonomy = content.jobTaxonomy || {};
      const clinic = content.grammarClinic || {};
      const handoffs = content.handoffSimulation || {};
      const debate = content.careerForumDebate || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Jobs in Aviation: Roles, Responsibilities &amp; Operational Interfaces</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative w-full h-36 sm:h-44 rounded-t-xl" style="background-color: ${theme.primary}; background-image: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.25) 100%);">
              <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Aviation Roles &amp; Operational Interfaces</span>
                <h2 class="text-base sm:text-xl font-black text-white mt-0.5">${hero.title || 'Jobs in Aviation: Roles, Responsibilities &amp; Operational Interfaces'}</h2>
                <p class="text-xs text-white/90 mt-1 max-w-2xl">${hero.subtitle || 'Landside, Airside, Flight Crew, Air Traffic Services &amp; Civil Aviation Corps (TSEEAC).'}</p>
              </div>
            </div>
          </div>

          <!-- Activity 1: Aviation News & Session 3 Spot-Check (10 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">01</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${opening.title || 'Activity 1: Aviation News &amp; Session 3 Spot-Check (10 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Warm-Up &amp; Catch-Up</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${opening.summary || ''}</p>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-3.5 rounded-lg bg-sky-50/70 border border-sky-200">
              <span class="text-[11px] font-bold text-sky-900 uppercase tracking-wider">📰 Aviation News &amp; Current Events Prompts</span>
              <ul class="space-y-1.5 mt-2 text-xs text-sky-950">
                ${(opening.newsPrompts || []).map(p => `
                  <li class="flex items-start gap-1.5">
                    <span class="font-bold text-sky-700">&bull;</span>
                    <span>${p}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- Session 3 Vocabulary Spot-Check -->
            <div class="space-y-2.5 pt-1">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">🎯 Session 3 Catch-Up: Ground Operations &amp; GSE Spot-Check</span>
                <span class="text-[11px] text-slate-500">Rapid-fire student recall</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.spotCheck && opening.spotCheck.questions) || []).map(q => `
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col justify-between gap-2">
                    <div class="space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">Question ${q.id}</span>
                      </div>
                      <p class="text-xs font-semibold text-slate-900">${q.q}</p>
                    </div>
                    <div>
                      <div id="s4-spotcheck-ans-${q.id}" class="hidden mt-2 p-2 rounded bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">
                        ${q.answer}
                      </div>
                      <button type="button" id="s4-spotcheck-btn-${q.id}" onclick="window.toggleS4SpotCheckAnswer(${q.id})" class="mt-2 text-[11px] font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Aviation Job Taxonomy & The Operational Spectrum (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">02</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${taxonomy.title || 'Activity 2: Aviation Roles Across the Industry (20 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">5 Primary Domains</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${taxonomy.summary || ''}</p>

            ${renderActivityInstructions(taxonomy, theme)}

            <div class="space-y-3">
              ${(taxonomy.domains || []).map(dom => {
                const isTseeac = dom.id === 'tseeac';
                const isAtco = dom.id === 'atco';
                const borderCol = isTseeac ? 'border-emerald-300 bg-emerald-50/40' : (isAtco ? 'border-rose-200 bg-rose-50/30' : 'border-slate-200 bg-slate-50/60');
                return `
                  <div class="p-3.5 sm:p-4 rounded-xl border ${borderCol} space-y-2.5">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <span class="text-[11px] font-bold px-2 py-0.5 rounded text-white ${isTseeac ? 'bg-emerald-700' : (isAtco ? 'bg-rose-700' : 'bg-slate-700')}">${dom.name}</span>
                        ${isTseeac ? '<span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">AFISO &bull; DGAC Safety &bull; Non-Separation</span>' : ''}
                        ${isAtco ? '<span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300">Tactical Separation Authority</span>' : ''}
                      </div>
                      <span class="text-[11px] text-slate-500 font-medium">Jurisdiction: ${dom.keyJurisdiction || ''}</span>
                    </div>
                    <p class="text-xs text-slate-700 leading-relaxed">${dom.description}</p>
                    <div class="flex flex-wrap gap-1.5 pt-1">
                      ${(dom.roles || []).map(r => `
                        <span class="text-[10.5px] font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-800 shadow-2xs">${r}</span>
                      `).join('')}
                    </div>
                    <div class="p-2.5 rounded-lg bg-white/80 border border-slate-200 text-[11px] text-slate-600">
                      <strong class="text-slate-800">Sample Operational Responsibility:</strong> ${dom.sampleDuty || ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Activity 3: Functional Grammar & Authority Clinic (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">03</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${clinic.title || 'Activity 3: Language Focus: Roles, Responsibilities &amp; Authority (20 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Target Language</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${clinic.summary || ''}</p>

            ${renderActivityInstructions(clinic, theme)}

            <!-- Formula Banner -->
            <div class="p-3 rounded-lg bg-slate-900 text-white space-y-1">
              <span class="text-[10px] font-bold tracking-wider uppercase text-amber-400">Core Functional Formulas</span>
              <p class="font-mono text-xs sm:text-[13px] font-bold text-slate-100">
                BE RESPONSIBLE FOR + -ING &bull; BE TASKED WITH + -ING &bull; HAVE AUTHORITY OVER / TO &bull; ENSURE THAT + CLAUSE
              </p>
            </div>

            <!-- Formulas Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              ${(clinic.formulas || []).map(f => `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span class="font-mono text-xs font-bold text-amber-700 block">${f.structure}</span>
                  <p class="text-[10.5px] font-semibold text-slate-600">${f.usage}</p>
                  <p class="text-[11px] text-slate-800 italic bg-white p-2 rounded border border-slate-100">"${f.example}"</p>
                </div>
              `).join('')}
            </div>

            <!-- Role Clinic Challenge -->
            <div class="space-y-2 pt-2 border-t border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">🎯 Roles & Responsibilities Quick Practice</span>
                <span class="text-[11px] text-slate-500">Select the correct preposition or verb form</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${(clinic.roleClinic || []).map(item => `
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col justify-between gap-2">
                    <p class="text-xs font-medium text-slate-800">${item.prompt}</p>
                    <div>
                      <div id="s4-roleclinic-ans-${item.id}" class="hidden mt-2 p-2 rounded bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-medium">
                        <strong>Answer:</strong> ${item.answer}<br>
                        <span class="text-slate-600">${item.explanation}</span>
                      </div>
                      <button type="button" id="s4-roleclinic-btn-${item.id}" onclick="window.toggleS4RoleClinicAnswer(${item.id})" class="mt-2 text-[11px] font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer">
                        <span>Check Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Pairwork & Triad Simulation — 'A Day in the Life' Role Handoff (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">04</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${handoffs.title || 'Activity 4: Pairwork &amp; Triad Simulation — Role Handoffs (25 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Pair &amp; Triad Speaking</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${handoffs.summary || ''}</p>

            ${renderActivityInstructions(handoffs, theme)}

            <div class="space-y-4">
              ${(handoffs.scenarios || []).map(sc => `
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                  <div class="flex items-center justify-between">
                    <h4 class="text-xs sm:text-sm font-bold text-slate-900">${sc.title}</h4>
                    <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">Live Simulation</span>
                  </div>
                  <p class="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200"><strong>Context:</strong> ${sc.context}</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 rounded-lg bg-sky-50/70 border border-sky-200 text-sky-950">
                      <strong class="text-sky-900 block mb-1">Role A Task:</strong>
                      ${sc.roleA}
                    </div>
                    <div class="p-3 rounded-lg bg-indigo-50/70 border border-indigo-200 text-indigo-950">
                      <strong class="text-indigo-900 block mb-1">Role B Task:</strong>
                      ${sc.roleB}
                    </div>
                  </div>
                  <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 space-y-1">
                    <strong class="text-slate-800">Target Phrases to Deploy:</strong>
                    <ul class="space-y-0.5 list-disc pl-4 text-slate-700">
                      ${(sc.targetPhrases || []).map(tp => `<li>${tp}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Aviation Career Forum & Operational Dilemma Debate (35 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">05</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${debate.title || 'Activity 5: Aviation Career Forum &amp; Operational Dilemma Debate (35 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Multi-Stakeholder Forum</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${debate.summary || ''}</p>

            ${renderActivityInstructions(debate, theme)}

            <!-- Scenario Box -->
            <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
              <span class="text-[10px] font-bold text-amber-900 uppercase tracking-wider">⚡ Crisis Dilemma: Winter Storm &amp; Diversion Gridlock</span>
              <p class="text-xs text-amber-950 leading-relaxed">${debate.scenario || ''}</p>
            </div>

            <!-- Stakeholders Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(debate.stakeholders || []).map(st => `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/60 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-900">${st.name}</span>
                  </div>
                  <p class="text-[11px] text-slate-700"><strong>Priority:</strong> ${st.priority}</p>
                  <p class="text-[11px] text-slate-600 bg-white p-2 rounded border border-slate-200"><strong>Stance:</strong> ${st.stance}</p>
                </div>
              `).join('')}
            </div>

            <!-- Consensus Challenge & Agreement Tracker -->
            <div class="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2.5">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">🤝 Consensus Summary Table</span>
              <p class="text-xs text-slate-600">${debate.consensusChallenge || 'Rate agreement across priorities and negotiate a formal sequence of actions.'}</p>
              
              <div class="space-y-2 pt-1">
                ${[
                  { id: 1, label: "Prioritize emergency fuel diversion over outbound departure slot on Stand 2" },
                  { id: 2, label: "Dispatch replacement de-icing rig to Stand 2 to avoid crew flight duty cancellation" },
                  { id: 3, label: "Direct AFISO / Operations team to hold taxiway snowplows until inbound flights touch down" }
                ].map(item => `
                  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span class="text-xs font-medium text-slate-800">${item.label}</span>
                    <div class="flex items-center gap-1 shrink-0">
                      ${[1, 2, 3, 4, 5].map(score => `
                        <button type="button" id="s4-debate-${item.id}-btn-${score}" onclick="window.setS4JobDebateAgreement(${item.id}, ${score})" class="w-7 h-7 text-xs font-bold rounded border border-slate-300 text-slate-600 hover:bg-slate-200 transition-all cursor-pointer">
                          ${score}
                        </button>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 6: Vocabulary Review, Pronunciation & Wrap-Up (10 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">06</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${closing.title || 'Activity 6: Vocabulary Review, Pronunciation &amp; Class Wrap-Up (10 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">10-Minute Consolidation</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${closing.summary || ''}</p>

            ${renderActivityInstructions(closing, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(closing.reviewPrompts || []).map(rp => `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 space-y-1">
                  <span class="text-xs font-bold text-slate-800 block">${rp.title}</span>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${rp.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    window.toggleS4SpotCheckAnswer = function(id) {
      const el = document.getElementById(`s4-spotcheck-ans-${id}`);
      const btn = document.getElementById(`s4-spotcheck-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleS4RoleClinicAnswer = function(id) {
      const el = document.getElementById(`s4-roleclinic-ans-${id}`);
      const btn = document.getElementById(`s4-roleclinic-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Rationale</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Check Answer</span> &rarr;';
      }
    };

    window.setS4JobDebateAgreement = function(topicId, score) {
      for (let s = 1; s <= 5; s++) {
        const btn = document.getElementById(`s4-debate-${topicId}-btn-${s}`);
        if (!btn) continue;
        if (s === score) {
          btn.classList.add('bg-amber-600', 'text-white', 'border-amber-600');
          btn.classList.remove('text-slate-600', 'hover:bg-slate-200');
        } else {
          btn.classList.remove('bg-amber-600', 'text-white', 'border-amber-600');
          btn.classList.add('text-slate-600', 'hover:bg-slate-200');
        }
      }
    };

    window.toggleDiagnosticAnswer = function(id) {
      const el = document.getElementById(`diagnostic-ans-${id}`);
      const btn = document.getElementById(`diagnostic-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleModalChallengeAnswer = function(id) {
      const el = document.getElementById(`modal-chal-ans-${id}`);
      const btn = document.getElementById(`modal-chal-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Rationale</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Verify Rationale</span> &rarr;';
      }
    };

    window.setSurveyAgreement = function(topicId, score) {
      for (let s = 1; s <= 5; s++) {
        const btn = document.getElementById(`survey-${topicId}-btn-${s}`);
        if (!btn) continue;
        if (s === score) {
          btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
        } else {
          btn.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.add('text-slate-600', 'hover:bg-slate-100');
        }
      }
    };

    window.toggleCatchUpAnswer = function(id) {
      const el = document.getElementById(`catchup-ans-${id}`);
      const btn = document.getElementById(`catchup-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.togglePrepositionChallengeAnswer = function(id) {
      const el = document.getElementById(`prep-chal-ans-${id}`);
      const btn = document.getElementById(`prep-chal-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Rationale</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Verify Rationale</span> &rarr;';
      }
    };

    window.setTerminalDebateAgreement = function(topicId, score) {
      for (let s = 1; s <= 5; s++) {
        const btn = document.getElementById(`terminal-debate-${topicId}-btn-${s}`);
        if (!btn) continue;
        if (s === score) {
          btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
        } else {
          btn.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.add('text-slate-600', 'hover:bg-slate-100');
        }
      }
    };

    window.toggleSpotCheckAnswer = function(id) {
      const el = document.getElementById(`spotcheck-ans-${id}`);
      const btn = document.getElementById(`spotcheck-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleVehicleCardView = function(id) {
      const clueEl = document.getElementById(`vehicle-clue-${id}`);
      const revealEl = document.getElementById(`vehicle-reveal-${id}`);
      const btn = document.getElementById(`vehicle-toggle-btn-${id}`);
      if (!clueEl || !revealEl || !btn) return;
      const isHidden = revealEl.classList.contains('hidden');
      if (isHidden) {
        revealEl.classList.remove('hidden');
        clueEl.classList.add('hidden');
        btn.innerHTML = '<span>Show Clues</span> &larr;';
        btn.classList.add('bg-slate-200');
      } else {
        revealEl.classList.add('hidden');
        clueEl.classList.remove('hidden');
        btn.innerHTML = '<span>Reveal Vehicle</span> &rarr;';
        btn.classList.remove('bg-slate-200');
      }
    };

    window.toggleAllVehicles = function(showAll) {
      for (let i = 1; i <= 10; i++) {
        const clueEl = document.getElementById(`vehicle-clue-${i}`);
        const revealEl = document.getElementById(`vehicle-reveal-${i}`);
        const btn = document.getElementById(`vehicle-toggle-btn-${i}`);
        if (!clueEl || !revealEl || !btn) continue;
        if (showAll) {
          revealEl.classList.remove('hidden');
          clueEl.classList.add('hidden');
          btn.innerHTML = '<span>Show Clues</span> &larr;';
          btn.classList.add('bg-slate-200');
        } else {
          revealEl.classList.add('hidden');
          clueEl.classList.remove('hidden');
          btn.innerHTML = '<span>Reveal Vehicle</span> &rarr;';
          btn.classList.remove('bg-slate-200');
        }
      }
    };

    window.toggleScenarioModel = function(id) {
      const el = document.getElementById(`scenario-model-${id}`);
      const btn = document.getElementById(`scenario-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Model</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Show Target Model</span> &rarr;';
      }
    };

    window.printLessonContent = function() {
      window.print();
    };

    /* ==========================================================================
       GENERAL ENGLISH (AG) MODULE 1 - INTERACTIVE LESSON CONTENT RENDERERS
       ========================================================================== */

    window.toggleAgSpotCheckAnswer = function(sessNum, qId) {
      const el = document.getElementById(`ag-spotcheck-ans-${sessNum}-${qId}`);
      const btn = document.getElementById(`ag-spotcheck-btn-${sessNum}-${qId}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleAgQuizAnswer = function(id) {
      const el = document.getElementById(`ag-quiz-ans-${id}`);
      const btn = document.getElementById(`ag-quiz-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Explanation</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Check Answer &amp; Explanation</span> &rarr;';
      }
    };

    window.toggleAgPracticeAnswer = function(id) {
      const el = document.getElementById(`ag-prac-ans-${id}`);
      const btn = document.getElementById(`ag-prac-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Model Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Show Model Answer</span> &rarr;';
      }
    };

    window.toggleAgTabooCard = function(id) {
      const el = document.getElementById(`ag-taboo-card-${id}`);
      const btn = document.getElementById(`ag-taboo-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Forbidden Words</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Show Forbidden Words</span> &rarr;';
      }
    };

    function renderAgLessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const survey = content.survey || {};
      const collocations = content.collocationsClinic || {};
      const grammar = content.grammarClinic || {};
      const rolePlay = content.rolePlay || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 1 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Introduction &amp; Travel Anecdotes</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative w-full h-36 sm:h-44 rounded-t-xl" style="background-color: ${theme.primary}; background-image: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.25) 100%);">
              <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Travel & Transport'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Introduction & Travel Anecdotes'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Travel Stories, Flight Disruptions & Sustainable Mobility'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-orange-100 text-orange-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">European Travel &amp; Sustainable Mobility</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Travel News & Entry Diagnostic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Travel News & Warm-Up Check (10 mins)'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Weekly Travel &amp; Transport Headlines</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Diagnostic Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Course Entry Check: Travel Vocabulary Check'}</h5>
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
                      <div id="ag-spotcheck-ans-1-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag-spotcheck-btn-1-${q.id}" onclick="window.toggleAgSpotCheckAnswer(1, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Global Travel Dilemmas Survey -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${survey.title || 'Activity 2: Global Travel Dilemmas: Speed Discussion (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${survey.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Pair Discussion</span>
            </div>

            ${renderActivityInstructions(survey, theme)}

            <!-- Useful Signposts Box -->
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span class="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">Conversation Signposts to Use:</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                ${(survey.signposts || []).map(s => `<div class="p-2 bg-white rounded border border-slate-200 font-medium italic">${s}</div>`).join('')}
              </div>
            </div>

            <!-- 4 Travel Dilemmas -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${(survey.topics || []).map(t => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <div class="flex items-center justify-between gap-2 mb-1.5">
                      <span class="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide text-white" style="background-color: ${theme.primary};">${t.badge}</span>
                      <span class="text-[11px] font-bold text-slate-400">Dilemma 0${t.id}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900">${t.statement}</h5>
                    <div class="grid grid-cols-1 gap-1.5 mt-2.5 text-[11px]">
                      <div class="p-2 bg-emerald-50/70 border border-emerald-200 rounded text-emerald-900">
                        <strong class="block text-emerald-800">Support:</strong> ${t.pro}
                      </div>
                      <div class="p-2 bg-rose-50/70 border border-rose-200 rounded text-rose-900">
                        <strong class="block text-rose-800">Counter-argument:</strong> ${t.con}
                      </div>
                    </div>
                  </div>
                  <div class="p-2.5 bg-amber-50/60 border border-amber-200 rounded-lg text-[11px] text-amber-900 font-medium">
                    ${t.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Clinic: Collocations & Idioms -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${collocations.title || 'Activity 3: Language Focus: Essential Travel Collocations & Idioms (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${collocations.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Vocabulary in Action</span>
            </div>

            ${renderActivityInstructions(collocations, theme)}

            <!-- Collocations & Idioms Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${(collocations.items || []).map(item => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between space-y-2">
                  <div>
                    <div class="flex items-center justify-between pb-1 border-b border-slate-200">
                      <span class="text-xs font-black text-slate-900">${item.term}</span>
                      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200">${item.type}</span>
                    </div>
                    <p class="text-[11px] text-slate-600 mt-1.5 leading-relaxed">${item.meaning}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-200 text-[11px] text-slate-700 italic">
                    ${item.example}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Quiz Challenge -->
            ${collocations.challenge ? `
              <div class="p-4 bg-orange-50/50 border border-orange-200 rounded-xl space-y-3 mt-2">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-orange-950">${collocations.challenge.title}</h5>
                  <span class="text-[11px] text-orange-800 font-medium">${collocations.challenge.instructions}</span>
                </div>
                <div class="space-y-2.5">
                  ${(collocations.challenge.questions || []).map(q => `
                    <div class="p-3 bg-white border border-orange-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag-quiz-ans-s1-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag-quiz-btn-s1-${q.id}" onclick="window.toggleAgQuizAnswer('s1-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Grammar Clinic: Narrative Tenses & Inversion -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-80m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 4: Grammar Focus: Narrative Tenses & Storytelling (25 mins)'}</h4>
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
                    <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.example}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Practice Challenge -->
            ${grammar.practice ? `
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">Sentence Inversion Practice: Rewrite with Impact</h5>
                <div class="space-y-3">
                  ${(grammar.practice || []).map(p => `
                    <div class="p-3 bg-white border border-slate-200 rounded-lg space-y-2">
                      <p class="text-xs font-semibold text-slate-800">Task: ${p.prompt}</p>
                      <div id="ag-prac-ans-s1-${p.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900 font-medium">
                        ${p.answer}
                      </div>
                      <button type="button" id="ag-prac-btn-s1-${p.id}" onclick="window.toggleAgPracticeAnswer('s1-${p.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Show Model Answer</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 5: Role-Play Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">80-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${rolePlay.title || 'Activity 5: Role-Play Simulation: Flight Delay & Missing a Connection (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${rolePlay.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Role-Play Simulation</span>
            </div>

            ${renderActivityInstructions(rolePlay, theme)}

            <!-- Scenario Box -->
            <div class="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 leading-relaxed">
              <strong>Scenario:</strong> ${rolePlay.scenario}
            </div>

            <!-- Roles Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(rolePlay.roles || []).map(r => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 pb-1.5 border-b border-slate-200">${r.role}</h5>
                    <p class="text-xs text-slate-600 mt-2 leading-relaxed">${r.instructions}</p>
                    <div class="mt-3 space-y-1.5">
                      <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Useful Phrases:</span>
                      <ul class="space-y-1 pl-4 list-disc text-[11px] text-slate-700">
                        ${(r.usefulPhrases || []).map(ph => `<li>${ph}</li>`).join('')}
                      </ul>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            <p class="text-xs text-slate-500 italic text-center">${rolePlay.task}</p>
          </div>

          <!-- Activity 6: 10-Minute Vocabulary Wrap-Up & Exit Ticket -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: 10-Minute Vocabulary Wrap-Up & Exit Ticket (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Wrap-Up &amp; Reflection</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Vocabulary Rapid Audio Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">18 Key Terms Audio Pronunciation Drill</h5>
                <span class="text-[11px] text-slate-500">Click any word to listen to its pronunciation</span>
              </div>
              <div class="flex flex-wrap gap-2">
                ${(closing.vocabWords || []).map(w => `
                  <button type="button" onclick="speakWord('${w.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer">
                    <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                    <span>${w}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Reflection Prompts -->
            <div class="p-4 bg-orange-50/40 border border-orange-200 rounded-xl space-y-2">
              <h5 class="text-xs sm:text-sm font-bold text-orange-950">Personal Study Log &amp; Exit Ticket</h5>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-orange-900/90 leading-relaxed">
                ${(closing.reflectionPrompts || []).map(rp => `<li>${rp}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    }

    function renderAgLessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const timeline = content.timelineClash || {};
      const corridor = content.corridorPitch || {};
      const grammar = content.grammarClinic || {};
      const caseStudy = content.caseStudy || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 1 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Evolution of Transport &amp; Sustainable Mobility</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative w-full h-36 sm:h-44 rounded-t-xl" style="background-color: ${theme.primary}; background-image: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.25) 100%);">
              <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Transport Evolution & Green Mobility'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Evolution of Transport & Sustainable Mobility'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Modal Shift, High-Speed Rail & Lower Carbon Journeys'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-orange-100 text-orange-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Multi-Modal Corridors &amp; Campus Mobility</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Green Transport News & Lexis Spot-Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Green Transport News & Session 1 Review (10 mins)'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Green Mobility News Prompts</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Lexis Spot-Check -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Session 1 Vocabulary Quick Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Term 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag-spotcheck-ans-2-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag-spotcheck-btn-2-${q.id}" onclick="window.toggleAgSpotCheckAnswer(2, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: The Timeline Clash -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${timeline.title || 'Activity 2: The Timeline Clash: 4 Epochs of Transport (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${timeline.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Historical Analysis</span>
            </div>

            ${renderActivityInstructions(timeline, theme)}

            <!-- 4 Epochs Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${(timeline.epochs || []).map(ep => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                      <span class="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide text-white" style="background-color: ${theme.primary};">${ep.era}</span>
                      <span class="text-[11px] font-bold text-slate-400">Epoch 0${ep.id}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 mt-2">${ep.title}</h5>
                    <div class="grid grid-cols-2 gap-2 mt-2 text-[11px]">
                      <div class="p-2 bg-slate-50 rounded border border-slate-200">
                        <strong class="text-slate-800 block">Avg Speed:</strong> ${ep.speed}
                      </div>
                      <div class="p-2 bg-slate-50 rounded border border-slate-200">
                        <strong class="text-slate-800 block">Emissions:</strong> ${ep.emissions}
                      </div>
                    </div>
                    <p class="text-[11px] text-slate-600 mt-2.5 leading-relaxed">${ep.impact}</p>
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-xs text-amber-900">
              <strong class="block mb-1 font-bold">Discussion Prompts:</strong>
              <ul class="space-y-1 list-disc pl-4">
                ${(timeline.discussionQuestions || []).map(dq => `<li>${dq}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Activity 3: The Multi-Modal Corridor Pitch -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-60m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${corridor.title || 'Activity 3: The Multi-Modal Corridor Pitch: Rail vs. Air (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${corridor.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Corridor Pitch</span>
            </div>

            ${renderActivityInstructions(corridor, theme)}

            <!-- Corridors Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${(corridor.corridors || []).map(c => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between pb-1 border-b border-slate-200">
                      <span class="text-xs font-black text-slate-900">${c.route}</span>
                      <span class="text-[10px] font-bold text-slate-500">${c.distance}</span>
                    </div>
                    <div class="space-y-2 mt-2.5 text-[11px]">
                      <div class="p-2 bg-emerald-50 border border-emerald-200 rounded text-emerald-950">
                        <strong class="block text-emerald-800">🚄 Rail:</strong> ${c.train}
                      </div>
                      <div class="p-2 bg-sky-50 border border-sky-200 rounded text-sky-950">
                        <strong class="block text-sky-800">✈️ Flight:</strong> ${c.flight}
                      </div>
                    </div>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 italic">
                    ${c.prompt}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: Grammar Clinic: Cause, Effect & Comparisons -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">60-80m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 4: Grammar Focus: Cause, Effect & Complex Comparisons (20 mins)'}</h4>
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
                    <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.example}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Challenge Questions -->
            ${grammar.challenge ? `
              <div class="p-4 bg-orange-50/50 border border-orange-200 rounded-xl space-y-3 mt-2">
                <h5 class="text-xs sm:text-sm font-bold text-orange-950">${grammar.challenge.title}</h5>
                <div class="space-y-2.5">
                  ${(grammar.challenge.questions || []).map(q => `
                    <div class="p-3 bg-white border border-orange-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag-quiz-ans-s2-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag-quiz-btn-s2-${q.id}" onclick="window.toggleAgQuizAnswer('s2-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 5: DDRS Case Study: Campus Travel Dilemma -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">80-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${caseStudy.title || 'Activity 5: DDRS Case Study: The Campus Travel Dilemma (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${caseStudy.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">DDRS Audit</span>
            </div>

            ${renderActivityInstructions(caseStudy, theme)}

            <div class="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 leading-relaxed">
              <strong>Scenario:</strong> ${caseStudy.scenario}
            </div>

            <!-- Options Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${(caseStudy.options || []).map(opt => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 pb-1 border-b border-slate-200">${opt.option}</h5>
                    <div class="space-y-1 mt-2 text-[11px]">
                      <div class="flex justify-between text-slate-600"><span>Travel Time:</span> <strong>${opt.time}</strong></div>
                      <div class="flex justify-between text-slate-600"><span>Cost:</span> <strong>${opt.cost}</strong></div>
                      <div class="flex justify-between text-rose-700"><span>Carbon:</span> <strong>${opt.carbon}</strong></div>
                    </div>
                  </div>
                  <p class="text-[11px] text-slate-600 pt-2 border-t border-slate-200">${opt.prosCons}</p>
                </div>
              `).join('')}
            </div>
            <p class="text-xs text-slate-500 italic text-center">${caseStudy.task}</p>
          </div>

          <!-- Activity 6: 10-Minute Vocabulary Wrap-Up & Taboo -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: 10-Minute Vocabulary Wrap-Up & Taboo Fluency Challenge (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Wrap-Up &amp; Fluency Game</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Vocabulary Rapid Audio Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">18 Key Terms Audio Pronunciation Drill</h5>
                <span class="text-[11px] text-slate-500">Click any word to listen to its pronunciation</span>
              </div>
              <div class="flex flex-wrap gap-2">
                ${(closing.vocabWords || []).map(w => `
                  <button type="button" onclick="speakWord('${w.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer">
                    <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                    <span>${w}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Taboo Game Cards -->
            ${closing.tabooCards ? `
              <div class="p-4 bg-orange-50/40 border border-orange-200 rounded-xl space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-orange-950">45-Second Taboo Fluency Challenge</h5>
                  <span class="text-[11px] text-orange-800">Describe the concept without saying the forbidden words!</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                  ${(closing.tabooCards || []).map((tc, idx) => `
                    <div class="p-3 bg-white border border-orange-200 rounded-lg flex flex-col justify-between space-y-2">
                      <div>
                        <span class="text-[10px] font-bold text-orange-700 uppercase tracking-wider block">Target Word</span>
                        <h6 class="text-xs font-black text-slate-900 mt-0.5">${tc.word}</h6>
                      </div>
                      <div>
                        <div id="ag-taboo-card-s2-${idx}" class="hidden p-2 bg-rose-50 border border-rose-200 rounded text-[10px] text-rose-900">
                          <strong class="block text-rose-800 mb-0.5">Forbidden:</strong>
                          ${tc.forbidden.join(', ')}
                        </div>
                        <button type="button" id="ag-taboo-btn-s2-${idx}" onclick="window.toggleAgTabooCard('s2-${idx}')" class="mt-2 w-full py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[10px] font-bold text-slate-700 transition-all cursor-pointer">
                          <span>Show Forbidden</span> &rarr;
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    function renderAgLessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const pressure = content.pressureMatrix || {};
      const policy = content.policyPitch || {};
      const grammar = content.grammarClinic || {};
      const simulation = content.simulation || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 1 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Overtourism &amp; Tourism Policy</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative w-full h-36 sm:h-44 rounded-t-xl" style="background-color: ${theme.primary}; background-image: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.25) 100%);">
              <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Managing Tourism & City Life'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Overtourism & Tourism Policy'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Managing Visitor Numbers, Protecting Local Life & City Regulations'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-orange-100 text-orange-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Destination Stewardship &amp; Municipal Policy</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Tourism Policy News & Lexis Spot-Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Tourism Policy News & Session 2 Review (10 mins)'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">City Tourism Headlines</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Lexis Spot-Check -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Session 2 Vocabulary Quick Check: Transport Terms'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Term 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag-spotcheck-ans-3-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag-spotcheck-btn-3-${q.id}" onclick="window.toggleAgSpotCheckAnswer(3, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Destination Pressure Matrix -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${pressure.title || 'Activity 2: Destination Pressure & Visitor Capacity (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${pressure.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Capacity Comparison Table</span>
            </div>

            ${renderActivityInstructions(pressure, theme)}

            <!-- Destinations Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              ${(pressure.destinations || []).map(d => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                      <h5 class="text-xs sm:text-sm font-black text-slate-900">${d.name}</h5>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">${d.residents}</span>
                    </div>
                    <div class="mt-2 text-xs text-rose-700 font-bold">Annual Volume: ${d.visitors}</div>
                    <div class="p-2.5 bg-rose-50/60 border border-rose-200 rounded-lg text-[11px] text-rose-950 mt-2">
                      <strong class="block text-rose-900 mb-0.5">Key Impacts:</strong> ${d.issues}
                    </div>
                    <div class="p-2.5 bg-emerald-50/60 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 mt-2">
                      <strong class="block text-emerald-900 mb-0.5">Municipal Measures:</strong> ${d.actions}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            <p class="text-xs text-slate-500 italic text-center">${pressure.discussionPrompt}</p>
          </div>

          <!-- Activity 3: Municipal Policy Pitch to the Mayor -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-60m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${policy.title || 'Activity 3: Pitching New Tourism Policies to the Mayor (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${policy.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Policy Pitch</span>
            </div>

            ${renderActivityInstructions(policy, theme)}

            <!-- Policies Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${(policy.policies || []).map(pol => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900 pb-1.5 border-b border-slate-200">${pol.title}</h5>
                    <p class="text-[11px] text-slate-600 mt-2 leading-relaxed">${pol.description}</p>
                  </div>
                  <div class="p-2.5 bg-rose-50/70 border border-rose-200 rounded text-[11px] text-rose-900">
                    <strong class="block text-rose-800">Business Objection:</strong> ${pol.objection}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 4: Grammar Clinic: Causatives & Contrast Words -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">60-80m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 4: Grammar Focus: Causatives & Contrast Words (20 mins)'}</h4>
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
                    <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.example}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Challenge Questions -->
            ${grammar.challenge ? `
              <div class="p-4 bg-orange-50/50 border border-orange-200 rounded-xl space-y-3 mt-2">
                <h5 class="text-xs sm:text-sm font-bold text-orange-950">${grammar.challenge.title}</h5>
                <div class="space-y-2.5">
                  ${(grammar.challenge.questions || []).map(q => `
                    <div class="p-3 bg-white border border-orange-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag-quiz-ans-s3-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag-quiz-btn-s3-${q.id}" onclick="window.toggleAgQuizAnswer('s3-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 5: DDRS Simulation: Isla Serena Water Crisis -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">80-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${simulation.title || 'Activity 5: DDRS Simulation: The Isla Serena Water Crisis (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${simulation.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Round-Table Simulation</span>
            </div>

            ${renderActivityInstructions(simulation, theme)}

            <!-- Roles Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${(simulation.roles || []).map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900 pb-1 border-b border-slate-200">${r.role}</h5>
                    <p class="text-[11px] text-slate-600 mt-2 leading-relaxed">${r.stance}</p>
                  </div>
                </div>
              `).join('')}
            </div>
            <p class="text-xs text-slate-500 italic text-center">${simulation.task}</p>
          </div>

          <!-- Activity 6: 10-Minute Vocabulary Wrap-Up & Taboo -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: 10-Minute Vocabulary Wrap-Up & Taboo Fluency Challenge (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Wrap-Up &amp; Fluency Game</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Vocabulary Rapid Audio Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">18 Key Terms Audio Pronunciation Drill</h5>
                <span class="text-[11px] text-slate-500">Click any word to listen to its pronunciation</span>
              </div>
              <div class="flex flex-wrap gap-2">
                ${(closing.vocabWords || []).map(w => `
                  <button type="button" onclick="speakWord('${w.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer">
                    <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                    <span>${w}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Taboo Game Cards -->
            ${closing.tabooCards ? `
              <div class="p-4 bg-orange-50/40 border border-orange-200 rounded-xl space-y-3">
                <div class="flex items-center justify-between">
                  <h5 class="text-xs sm:text-sm font-bold text-orange-950">45-Second Taboo Fluency Challenge</h5>
                  <span class="text-[11px] text-orange-800">Describe the concept without saying the forbidden words!</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                  ${(closing.tabooCards || []).map((tc, idx) => `
                    <div class="p-3 bg-white border border-orange-200 rounded-lg flex flex-col justify-between space-y-2">
                      <div>
                        <span class="text-[10px] font-bold text-orange-700 uppercase tracking-wider block">Target Word</span>
                        <h6 class="text-xs font-black text-slate-900 mt-0.5">${tc.word}</h6>
                      </div>
                      <div>
                        <div id="ag-taboo-card-s3-${idx}" class="hidden p-2 bg-rose-50 border border-rose-200 rounded text-[10px] text-rose-900">
                          <strong class="block text-rose-800 mb-0.5">Forbidden:</strong>
                          ${tc.forbidden.join(', ')}
                        </div>
                        <button type="button" id="ag-taboo-btn-s3-${idx}" onclick="window.toggleAgTabooCard('s3-${idx}')" class="mt-2 w-full py-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[10px] font-bold text-slate-700 transition-all cursor-pointer">
                          <span>Show Forbidden</span> &rarr;
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    function renderAgLessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const ov = content.overview || content.hero || {};
      const opening = content.openingSession || {};
      const forensic = content.forensicAudit || {};
      const grammar = content.grammarClinic || {};
      const workshop = content.workshop || {};
      const investor = content.investorForum || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">General English (AG) • Module 1 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Sustainable &amp; Eco-Tourism</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Session Overview Banner -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative w-full h-36 sm:h-44 rounded-t-xl" style="background-color: ${theme.primary}; background-image: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.25) 100%);">
              <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${ov.badge || 'Session Overview • Eco-Tourism & Green Certification'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${ov.title || 'Sustainable & Eco-Tourism'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${ov.subtitle || 'Responsible Travel, Genuine Green Projects & Community Benefits'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-orange-100 text-orange-900 font-bold px-2 py-0.5 rounded">CEFR B2</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Context:</span>
                <span class="text-slate-600">Greenwashing Detection &amp; Eco-Resort Blueprint</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">120 Minutes</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Eco-Tourism News & Lexis Spot-Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-10m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Eco-Tourism News & Session 3 Review (10 mins)'}</h4>
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
                <h5 class="text-xs sm:text-sm font-bold text-amber-900">Eco-Tourism &amp; Certification Headlines</h5>
              </div>
              <ul class="space-y-1.5 pl-5 list-disc text-xs text-amber-900/90 leading-relaxed">
                ${(opening.newsPrompts || []).map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>

            <!-- Lexis Spot-Check -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Session 3 Vocabulary Quick Check: Overtourism Terms'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Term 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-900 mt-1">${q.q}</p>
                    </div>
                    <div class="space-y-2">
                      <div id="ag-spotcheck-ans-4-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed">
                        ${q.answer}
                      </div>
                      <button type="button" id="ag-spotcheck-btn-4-${q.id}" onclick="window.toggleAgSpotCheckAnswer(4, ${q.id})" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Genuine Eco-Tourism vs. Greenwashing -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">10-35m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${forensic.title || 'Activity 2: Genuine Eco-Tourism vs. Greenwashing (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${forensic.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Forensic Audit</span>
            </div>

            ${renderActivityInstructions(forensic, theme)}

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${(forensic.projects || []).map(proj => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-900 pb-1.5 border-b border-slate-100">${proj.name}</h5>
                    <p class="text-[11px] text-slate-600 mt-2 leading-relaxed"><strong>Claims:</strong> ${proj.claims}</p>
                    <div class="p-2 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-700 mt-2 font-medium">
                      Revenue Retention: <strong>${proj.revenueRetention}</strong>
                    </div>
                  </div>
                  <div class="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 font-bold">
                    Verdict: ${proj.verdict}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Greenwashing Checklist -->
            <div class="p-3.5 bg-amber-50/60 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-1.5">
              <strong class="block font-bold">Greenwashing Audit Checklist:</strong>
              <ul class="space-y-1 list-disc pl-4 text-[11px]">
                ${(forensic.greenwashingChecklist || []).map(gc => `<li>${gc}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Activity 3: Grammar Clinic: Mixed Conditionals & Purpose Clauses -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">35-55m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${grammar.title || 'Activity 3: Grammar Focus: Mixed Conditionals & Purpose Clauses (20 mins)'}</h4>
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
                    <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[11px] font-mono text-slate-700 mt-1.5">
                      ${r.formula}
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    ${r.example}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Challenge Questions -->
            ${grammar.challenge ? `
              <div class="p-4 bg-orange-50/50 border border-orange-200 rounded-xl space-y-3 mt-2">
                <h5 class="text-xs sm:text-sm font-bold text-orange-950">${grammar.challenge.title}</h5>
                <div class="space-y-2.5">
                  ${(grammar.challenge.questions || []).map(q => `
                    <div class="p-3 bg-white border border-orange-200/80 rounded-lg space-y-2">
                      <p class="text-xs font-bold text-slate-900">${q.id}. ${q.sentence}</p>
                      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        ${q.options.map(opt => `<div class="p-2 bg-slate-50 rounded border border-slate-200 font-medium">${opt}</div>`).join('')}
                      </div>
                      <div id="ag-quiz-ans-s4-${q.id}" class="hidden p-2.5 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-900">
                        <strong class="block text-emerald-800">Correct Answer: ${q.correct}</strong>
                        ${q.explanation}
                      </div>
                      <button type="button" id="ag-quiz-btn-s4-${q.id}" onclick="window.toggleAgQuizAnswer('s4-${q.id}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-700 transition-all cursor-pointer">
                        <span>Check Answer &amp; Explanation</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Activity 4: Workshop: The €2,500,000 Eco-Resort Blueprint -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">55-85m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${workshop.title || 'Activity 4: Workshop: The €2,500,000 Eco-Resort Blueprint (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${workshop.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Design Workshop</span>
            </div>

            ${renderActivityInstructions(workshop, theme)}

            <!-- Ecosystem Locations Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${(workshop.ecosystems || []).map(eco => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-slate-900 pb-1 border-b border-slate-200">${eco.name}</h5>
                    <p class="text-[11px] text-slate-600 mt-2 leading-relaxed"><strong>Features:</strong> ${eco.features}</p>
                  </div>
                  <div class="p-2.5 bg-white border border-slate-200 rounded text-[11px] text-slate-700">
                    <strong class="block text-slate-800">Key Priorities:</strong> ${eco.requirements}
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="p-3.5 bg-amber-50/60 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-1.5">
              <strong class="block font-bold">Blueprint Planning Checklist:</strong>
              <ul class="space-y-1 list-disc pl-4 text-[11px]">
                ${(workshop.blueprintChecklist || []).map(bc => `<li>${bc}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Activity 5: The Green Investor Forum -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">85-110m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${investor.title || 'Activity 5: The Green Investor Forum: Pitches & Defense (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${investor.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Investor Pitches</span>
            </div>

            ${renderActivityInstructions(investor, theme)}

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <h5 class="text-xs sm:text-sm font-bold text-slate-900">Challenging Questions from the Sustainability Investment Board</h5>
              <div class="space-y-2">
                ${(investor.boardQuestions || []).map(bq => `
                  <div class="p-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 font-medium italic">
                    ${bq}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 6: 10-Minute Vocabulary Wrap-Up & FE1 Readiness Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">110-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${closing.title || 'Activity 6: 10-Minute Vocabulary Wrap-Up & FE1 Readiness Check (10 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${closing.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Wrap-Up &amp; Evaluation Prep</span>
            </div>

            ${renderActivityInstructions(closing, theme)}

            <!-- Vocabulary Rapid Audio Drill -->
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-900">18 Key Terms Audio Pronunciation Drill</h5>
                <span class="text-[11px] text-slate-500">Click any word to listen to its pronunciation</span>
              </div>
              <div class="flex flex-wrap gap-2">
                ${(closing.vocabWords || []).map(w => `
                  <button type="button" onclick="speakWord('${w.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer">
                    <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                    <span>${w}</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- FE1 Readiness Checklist -->
            <div class="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-emerald-950">Session 5 Formative Evaluation Readiness Checklist</h5>
                <span class="text-[11px] font-bold text-emerald-800">Final Verification</span>
              </div>
              <div class="space-y-2 text-xs text-emerald-900">
                ${(closing.feChecklist || []).map(item => `
                  <div class="p-2.5 bg-white border border-emerald-200 rounded-lg flex items-center gap-2">
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
       GENERAL ENGLISH (AG) • MODULE 2 SESSIONS 1 TO 4 LESSON CONTENT
       ========================================================================= */

    window.toggleAg2SpotCheckAnswer = function(sessNum, qId) {
      const el = document.getElementById(`ag2-spotcheck-ans-${sessNum}-${qId}`);
      const btn = document.getElementById(`ag2-spotcheck-btn-${sessNum}-${qId}`);
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

    window.toggleAg2QuizAnswer = function(id) {
      const el = document.getElementById(`ag2-quiz-ans-${id}`);
      const btn = document.getElementById(`ag2-quiz-btn-${id}`);
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


    function renderRevisionTab(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      const rev = sessionData.revision || { terms: [], summary: '' };
      const terms = Array.isArray(rev) ? rev : (rev.terms || sessionData.vocabulary || []);
      const masteredList = getMasteredTerms(modalState.modNum, modalState.sessionNum);
      const isGrid = modalState.flashcardMode === 'grid';

      let innerContent = '';
      if (isGrid) {
        innerContent = `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${terms.map(t => {
              const isMastered = masteredList.includes(t.term);
              return `
                <div class="bg-white border ${isMastered ? 'border-emerald-300 ring-1 ring-emerald-200' : 'border-slate-200'} rounded-xl p-3 flex flex-col justify-between shadow-xs transition-all">
                  <div>
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 gap-1.5">
                      <div class="flex items-center gap-1.5 truncate">
                        <button type="button" onclick="speakWord('${t.term.replace(/'/g, "\\'")}')" title="Pronounce word" class="hover:scale-110 active:scale-95 transition-all text-slate-400 hover:text-slate-700 cursor-pointer flex items-center justify-center"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg></button>
                        <h4 class="text-xs sm:text-sm font-bold text-slate-800 truncate">${t.term}</h4>
                      </div>
                      <span class="text-white text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 shadow-xs" style="background-color: ${theme.accent};">${t.num}</span>
                    </div>
                    <p class="text-[11px] text-slate-600 leading-relaxed pt-2">${t.definition}</p>
                  </div>
                  <div class="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-600 hover:text-slate-900 select-none">
                      <input type="checkbox" ${isMastered ? 'checked' : ''} onchange="handleMasteredToggle('${t.term.replace(/'/g, "\\'")}')" class="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
                      <span>${isMastered ? 'Mastered ✓' : 'Mark Learned'}</span>
                    </label>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      } else {
        // Flashcard Trainer View
        if (terms.length === 0) {
          innerContent = `<div class="p-4 bg-white rounded-xl text-center text-slate-500 text-xs">No terms available.</div>`;
        } else {
          const currentTerm = terms[modalState.flashcardIdx] || terms[0];
          const isMastered = masteredList.includes(currentTerm.term);
          innerContent = `
            <div class="flex flex-col items-center gap-4 py-2">
              <div class="w-full max-w-xl h-64 flashcard-perspective cursor-pointer select-none" onclick="toggleFlashcardFlip()">
                <div id="flashcard-inner" class="flashcard-inner ${modalState.flashcardFlipped ? 'flipped' : ''}">
                  
                  <!-- Front Side -->
                  <div class="flashcard-front bg-white border border-slate-200 rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center text-center">
                    <div class="w-full flex justify-between items-center text-xs text-slate-400 font-mono">
                      <span>Card ${modalState.flashcardIdx + 1} of ${terms.length}</span>
                      <span class="px-2 py-0.5 rounded text-white font-bold" style="background-color: ${theme.accent};">0${currentTerm.num}</span>
                    </div>
                    
                    <div class="space-y-2 my-auto">
                      <h3 class="text-2xl font-black text-slate-800 tracking-tight">${currentTerm.term}</h3>
                      <button type="button" onclick="event.stopPropagation(); speakWord('${currentTerm.term.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer">
                        <span>Pronounce</span>
                      </button>
                    </div>

                    <div class="text-[11px] text-slate-400 flex items-center gap-1">
                      <span>Click anywhere to flip ↷</span>
                    </div>
                  </div>

                  <!-- Back Side -->
                  <div class="flashcard-back bg-slate-900 border border-slate-800 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center text-center">
                    <div class="w-full flex justify-between items-center text-xs text-slate-400 font-mono">
                      <span class="text-slate-300 font-bold">${currentTerm.term}</span>
                      <span class="px-2 py-0.5 rounded bg-white/20 text-white font-bold">Definition</span>
                    </div>

                    <div class="my-auto px-2">
                      <p class="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">${currentTerm.definition}</p>
                    </div>

                    <div class="text-[11px] text-slate-400 flex items-center gap-1">
                      <span>Click to flip back ↶</span>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Flashcard Navigation Controls -->
              <div class="w-full max-w-xl flex items-center justify-between gap-3">
                <button type="button" onclick="prevFlashcard()" ${modalState.flashcardIdx === 0 ? 'disabled' : ''} class="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-700 transition-all cursor-pointer">
                  ← Prev
                </button>
                <div class="flex items-center gap-2">
                  <button type="button" onclick="handleMasteredToggle('${currentTerm.term.replace(/'/g, "\\'")}')" class="px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${isMastered ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'}">
                    ${isMastered ? '✓ Mastered' : '+ Mark Mastered'}
                  </button>
                </div>
                <button type="button" onclick="nextFlashcard()" ${modalState.flashcardIdx === terms.length - 1 ? 'disabled' : ''} class="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-700 transition-all cursor-pointer">
                  Next →
                </button>
              </div>
            </div>
          `;
        }
      }

      bodyEl.innerHTML = `
        <div class="space-y-4">
          <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Curriculum Vocabulary (18 Terms)</span>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-xs font-semibold text-slate-700">${masteredList.length} of ${terms.length} mastered</span>
                <div class="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div class="h-full bg-emerald-500 rounded-full transition-all duration-300" style="width: ${(masteredList.length / (terms.length || 1)) * 100}%"></div>
                </div>
              </div>
            </div>

            <!-- View Mode Switch -->
            <div class="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100 text-xs font-bold select-none">
              <button type="button" onclick="setFlashcardMode('grid')" class="px-3 py-1 rounded-md transition-all cursor-pointer ${isGrid ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500 hover:text-slate-800'}">Full List</button>
              <button type="button" onclick="setFlashcardMode('flashcards')" class="px-3 py-1 rounded-md transition-all cursor-pointer ${!isGrid ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500 hover:text-slate-800'}">Flashcards</button>
            </div>
          </div>

          ${innerContent}
        </div>
      `;
    }

    function renderMaterialsTab(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      const mat = sessionData.materials || { videos: [], articles: [], grammar: {}, resources: [] };
      const vids = mat.videos || [];
      const articles = mat.articles || [];
      const grammar = mat.grammar || {};
      const res = mat.resources || [];

      bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Section 1: Curated Videos Grid -->
          <div>
            <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">01</span>
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700">Video Viewers &amp; Analysis (${vids.length})</h3>
              </div>
              <span class="text-[11px] text-slate-500">Subtitled on YouTube</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              ${vids.map((v, i) => {
                const title = v.title || `Video ${i + 1}`;
                const watchUrl = v.watchUrl || (v.videoId ? `https://www.youtube.com/watch?v=${v.videoId}` : (v.url || '#'));
                const embedUrl = v.embedUrl || (v.videoId ? `https://www.youtube-nocookie.com/embed/${v.videoId}` : '');
                const caption = v.caption || v.summary || '';
                return `
                <div class="bg-white border border-slate-200 rounded-xl p-3 flex flex-col justify-between shadow-xs">
                  <div>
                    <div class="flex items-center justify-between gap-1 pb-1.5 border-b border-slate-100 text-xs">
                      <span class="font-bold text-slate-800 truncate" title="${title}">Video ${i + 1}: ${title.replace(/^Video \d+:\s*/, '')}</span>
                      <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" class="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 px-2 py-0.5 rounded-full shrink-0 no-underline transition-all">Watch ↗</a>
                    </div>
                    <div class="aspect-video w-full my-2 bg-slate-900 rounded-lg overflow-hidden border border-slate-200">
                      ${embedUrl ? `<iframe class="w-full h-full" src="${embedUrl}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` : `
                        <div class="w-full h-full flex flex-col items-center justify-center p-4 text-center text-slate-300 space-y-1.5">
                          <svg width="28" height="28" fill="currentColor" class="text-rose-500" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                          <span class="text-xs font-bold text-white line-clamp-1">${v.channel || 'Technical Video Briefing'}</span>
                          <span class="text-[10px] text-slate-400">${v.duration || 'Briefing Video'}</span>
                        </div>
                      `}
                    </div>
                    <p class="text-[11px] text-slate-600 leading-relaxed">${caption}</p>
                  </div>
                </div>
              `;}).join('')}
            </div>
          </div>

          <!-- Section 2: Featured News & Current Affairs Articles -->
          ${articles.length > 0 ? `
            <div>
              <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                  <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">02</span>
                  <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700">Featured News &amp; Current Affairs (${articles.length})</h3>
                </div>
                <span class="text-[11px] text-slate-500">Industry Reports &amp; Case Studies</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                ${articles.map(a => `
                  <article class="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
                    <div>
                      <div class="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-100 text-xs">
                        <span class="font-bold text-[11px]" style="color: ${theme.primary};">${a.topic || 'Case Study'}</span>
                        <span class="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">${a.sourceTag || 'Analysis'}</span>
                      </div>
                      <h4 class="text-xs sm:text-sm font-bold text-slate-800 leading-snug mt-2">${a.heading}</h4>
                      <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-2">${a.snippet}</p>
                    </div>
                    <div class="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span class="text-[11px] text-slate-400">${a.readTime || 'Estimated read: 4-5 mins'}</span>
                      <a href="${a.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-xs hover:opacity-95 transition-all no-underline" style="background-color: ${theme.primary};">
                        <span>Read Article</span>
                        <span>→</span>
                      </a>
                    </div>
                  </article>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Section 3: Curated Web Resources & References -->
          ${res.length > 0 ? `
            <div>
              <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                <div class="flex items-center gap-2">
                  <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">03</span>
                  <h3 class="text-xs font-bold uppercase tracking-wider text-slate-700">Curated Web Resources &amp; References (${res.length})</h3>
                </div>
                <span class="text-[11px] text-slate-500">Authoritative Industry Portals</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                ${res.map(r => `
                  <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="p-3.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl shadow-xs transition-all flex flex-col justify-between group no-underline">
                    <div>
                      <div class="flex items-center justify-between text-[10px] font-bold text-slate-400">
                        <span class="truncate pr-1">${r.tag}</span>
                        <span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400">↗</span>
                      </div>
                      <h4 class="text-xs font-bold text-slate-800 mt-1">${r.name}</h4>
                      <p class="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">${r.desc}</p>
                    </div>
                    <div class="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold" style="color: ${theme.primary};">
                      <span>Visit Portal</span>
                      <span>→</span>
                    </div>
                  </a>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Section 4: Full Grammar Descriptions & Explanations -->
          ${grammar.formula ? `
            <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
              <!-- Header with Title & Level Badge -->
              <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                <div class="flex items-center gap-2">
                  <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">04</span>
                  <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${grammar.title || 'Grammar Focus'}</h3>
                </div>
                <span class="text-[10px] font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">${grammar.badge || 'B1–B2 Grammar Focus'}</span>
              </div>

              <!-- Sentence Pattern Banner -->
              <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center space-y-1">
                <div class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">${grammar.patternTitle || 'Sentence Pattern'}</div>
                <div class="font-mono font-extrabold text-xs sm:text-sm text-slate-900 leading-relaxed" style="color: ${theme.primary};">
                  ${grammar.formula}
                </div>
              </div>

              <!-- Rules & Usage Breakdown -->
              ${grammar.rules && grammar.rules.length > 0 ? `
                <div class="space-y-2 pt-1">
                  <h4 class="text-xs font-extrabold text-slate-700 uppercase tracking-wider">${grammar.rulesTitle || 'When to Use It'}</h4>
                  <div class="space-y-2">
                    ${grammar.rules.map(rule => `
                      <div class="p-2.5 rounded-lg bg-slate-50/70 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                        ${rule}
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Crucial TOEIC Trap Alert -->
              ${grammar.trap ? `
                <div class="p-3.5 bg-amber-50/90 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed shadow-xs">
                  ${grammar.trap}
                </div>
              ` : ''}

              <!-- Authentic Workplace & Aviation Examples -->
              ${grammar.examples && grammar.examples.length > 0 ? `
                <div class="space-y-2 pt-2 border-t border-slate-100">
                  <h4 class="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">${grammar.examplesTitle || 'Workplace & Industry Examples'}</h4>
                  <div class="space-y-2">
                    ${grammar.examples.map(ex => `
                      <div class="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200/70 text-xs text-slate-800 flex items-start gap-2.5 leading-relaxed">
                        <span class="font-black text-emerald-600 text-xs">✓</span>
                        <div>${ex}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }

    function renderToeicTab(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      const rawQuestions = (sessionData.materials && sessionData.materials.toeicQuestions && sessionData.materials.toeicQuestions.length > 0)
        ? sessionData.materials.toeicQuestions
        : (sessionData.materials && sessionData.materials.toeic ? [sessionData.materials.toeic] : []);

      const questions = rawQuestions.map(q => {
        if (!q) return { options: [] };
        const stem = q.stem || q.question || '';
        const options = (q.options || []).map(opt => {
          if (typeof opt === 'string') {
            const m = opt.match(/^([A-D])\)\s*(.*)$/);
            return m ? { letter: m[1], text: m[2] } : { letter: '', text: opt };
          }
          return opt;
        });
        const correctLetter = q.correctLetter || 'A';
        const matchingOpt = options.find(o => o.letter === correctLetter);
        const correctText = q.correctText || (matchingOpt ? matchingOpt.text : '');
        const analysis = q.analysis || q.explanation || '';
        const strategy = q.strategy || '';
        return {
          id: q.id,
          stem,
          options,
          correctLetter,
          correctText,
          analysis,
          strategy
        };
      });

      const totalQs = questions.length;
      if (modalState.toeicIdx < 0) modalState.toeicIdx = 0;
      if (modalState.toeicIdx >= totalQs && totalQs > 0) modalState.toeicIdx = totalQs - 1;

      const currentIdx = modalState.toeicIdx || 0;
      const currentQ = questions[currentIdx] || { options: [] };
      const selected = modalState.toeicAnswers ? modalState.toeicAnswers[currentIdx] : null;
      const isAnswered = selected !== undefined && selected !== null;
      const isCorrect = isAnswered && (selected === currentQ.correctLetter);

      // Cumulative drill stats
      let answeredCount = 0;
      let correctCount = 0;
      questions.forEach((q, idx) => {
        const ans = modalState.toeicAnswers ? modalState.toeicAnswers[idx] : null;
        if (ans !== undefined && ans !== null) {
          answeredCount++;
          if (ans === q.correctLetter) correctCount++;
        }
      });
      const allAnswered = (totalQs > 0 && answeredCount === totalQs);
      const scorePercent = totalQs > 0 ? Math.round((correctCount / totalQs) * 100) : 0;

      bodyEl.innerHTML = `
        <div class="space-y-4">
          <!-- Drill Control Bar & Question Stepper -->
          <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-slate-500">TOEIC Practice Test • Reading Part 5</span>
                <div class="text-xs text-slate-500 mt-0.5">Target pace: ~30 seconds per item</div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold px-2.5 py-1 rounded-md ${answeredCount > 0 ? 'bg-slate-100 text-slate-700' : 'bg-slate-50 text-slate-400 border border-slate-200'}">
                  Score: ${correctCount} / ${totalQs}
                </span>
                <button type="button" onclick="resetToeicQuiz()" class="text-[11px] font-semibold text-slate-500 hover:text-slate-800 underline transition-colors cursor-pointer">
                  Reset Drill
                </button>
              </div>
            </div>

            <!-- Question Pills 1-5 -->
            <div class="flex items-center gap-2 pt-1 overflow-x-auto pb-1">
              <span class="text-xs font-bold text-slate-600 mr-1">Questions:</span>
              ${questions.map((q, idx) => {
                const ans = modalState.toeicAnswers ? modalState.toeicAnswers[idx] : null;
                const isCur = idx === currentIdx;
                let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50';
                let indicator = `Q${idx + 1}`;
                if (ans !== undefined && ans !== null) {
                  if (ans === q.correctLetter) {
                    btnStyle = 'bg-emerald-500 border-emerald-600 text-white font-bold shadow-xs';
                    indicator = `✓ ${idx + 1}`;
                  } else {
                    btnStyle = 'bg-rose-500 border-rose-600 text-white font-bold shadow-xs';
                    indicator = `✗ ${idx + 1}`;
                  }
                } else if (isCur) {
                  btnStyle = 'border-2 text-slate-900 font-black bg-slate-100';
                }
                const ringClass = isCur ? 'ring-2 ring-offset-1 ring-slate-800 scale-105' : '';
                return `
                  <button type="button" onclick="jumpToeicQuestion(${idx})" class="px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${btnStyle} ${ringClass}">
                    ${indicator}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Active Question Card -->
          <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div class="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
              <span class="font-bold text-slate-700 uppercase tracking-wider">Question ${currentIdx + 1} of ${totalQs}</span>
              ${isAnswered ? `
                <span class="font-bold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}">
                  ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>
              ` : `
                <span class="text-slate-400">Select the best option</span>
              `}
            </div>

            <p class="text-sm font-semibold text-slate-800 leading-relaxed mt-3">${currentQ.stem}</p>

            <!-- 4 Multiple Choice Options -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
              ${(currentQ.options || []).map(opt => {
                let optClass = 'bg-white border-slate-200 hover:border-slate-300 text-slate-700';
                if (isAnswered) {
                  if (opt.letter === currentQ.correctLetter) {
                    optClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                  } else if (opt.letter === selected) {
                    optClass = 'bg-rose-50 border-rose-500 text-rose-900 font-bold';
                  } else {
                    optClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                  }
                }
                return `
                  <button type="button" onclick="handleToeicSelect('${opt.letter}')" ${isAnswered ? 'disabled' : ''} class="flex items-center gap-2 p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${optClass}">
                    <span class="font-bold text-slate-400">(${opt.letter})</span>
                    <span>${opt.text}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Answer Feedback & Analysis -->
          ${isAnswered ? `
            <div class="p-4 bg-white border ${isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-amber-200 bg-amber-50/20'} rounded-xl shadow-xs space-y-3">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded text-xs font-extrabold ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
                  ${isCorrect ? '✓ Correct Answer: (' + currentQ.correctLetter + ') ' + currentQ.correctText : '✗ Incorrect • Correct Answer is (' + currentQ.correctLetter + ') ' + currentQ.correctText}
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Grammar Rationale:</strong> ${currentQ.analysis}
              </p>
              ${currentQ.strategy ? `
                <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 leading-relaxed">
                  <strong>📌 TOEIC Strategy Rule:</strong> ${currentQ.strategy}
                </div>
              ` : ''}
            </div>
          ` : `
            <div class="p-3 bg-slate-100 border border-slate-200 rounded-xl text-center text-xs text-slate-500">
              Select an option above to check your answer and view grammatical analysis.
            </div>
          `}

          <!-- Prev / Next Navigation -->
          <div class="flex items-center justify-between pt-2">
            <button type="button" onclick="prevToeicQuestion()" ${currentIdx === 0 ? 'disabled' : ''} class="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-700 transition-all cursor-pointer">
              Previous Question
            </button>
            <span class="text-xs text-slate-500">Question ${currentIdx + 1} of ${totalQs}</span>
            <button type="button" onclick="nextToeicQuestion()" ${currentIdx === totalQs - 1 ? 'disabled' : ''} class="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-slate-700 transition-all cursor-pointer">
              Next Question
            </button>
          </div>

          ${allAnswered ? `
            <div class="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-2">
              <h4 class="text-sm font-extrabold text-emerald-900">Drill Completed!</h4>
              <p class="text-xs text-emerald-800">
                You scored <strong>${correctCount} / ${totalQs}</strong> (${scorePercent}%). Your score has been recorded for this session.
              </p>
            </div>
          ` : ''}
        </div>
      `;
    }

    function renderDdrsTab(theme) {
      const bodyEl = document.getElementById('modal-body');
      const modCourse = getActiveModalCourseData();
      const ddrs = modCourse.ddrs || { items: [], axes: [] };
      const items = (ddrs.items && ddrs.items.length > 0) ? ddrs.items : (ddrs.axes || []);

      bodyEl.innerHTML = `
        <div class="space-y-4">
          <!-- Official Framework Banner -->
          <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Official National Framework (Conférence des Grandes Écoles)</span>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1">${ddrs.summary || 'Le Référentiel National DD&RS structure les engagements écologiques, sociétaux et éthiques selon 5 axes stratégiques et leurs domaines transversaux d\'application.'}</p>
            <div class="mt-3 text-xs text-slate-500 pt-2 border-t border-slate-100 font-semibold">
              Includes 5 Strategic Axes &amp; 7 Cross-Functional Competency Tags
            </div>
          </div>

          <!-- All 12 Items (Axes 1-5 + Tags 6-12) -->
          <div class="space-y-2.5">
            ${items.map(item => {
              const isMuted = !!item.isMuted;
              if (isMuted) {
                return `
                  <div class="p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl opacity-45 space-y-1 transition-opacity hover:opacity-75" title="Non pertinent pour ce module (inactif)">
                    <div class="flex items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <span class="bg-slate-300 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded">${item.badge || 'TAG'}</span>
                        <span class="text-xs font-bold text-slate-400">${item.num}</span>
                        <h4 class="text-xs sm:text-sm font-medium text-slate-600">${item.title}</h4>
                      </div>
                      <span class="text-[10px] uppercase font-semibold text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">Not active in Mod ${modalState.modNum}</span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed pl-1">${item.desc}</p>
                  </div>
                `;
              } else {
                return `
                  <div class="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">${item.badge || 'AXE'}</span>
                      <span class="text-xs font-black" style="color: ${theme.primary};">${item.num}</span>
                      <h4 class="text-xs sm:text-sm font-bold text-slate-800">${item.title}</h4>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed pl-1">${item.desc}</p>
                  </div>
                `;
              }
            }).join('')}
          </div>
        </div>
      `;
    }


    function initDeck() {
      ScormAPI.init();
      window.addEventListener('beforeunload', () => ScormAPI.finish());
      window.addEventListener('pagehide', () => ScormAPI.finish());
      window.addEventListener('unload', () => ScormAPI.finish());
      document.getElementById('prev-btn').addEventListener('click', () => stepDeck(-1));
      document.getElementById('next-btn').addEventListener('click', () => stepDeck(1));


      // Modal Drawer Close triggers
      const modalCloseBtn = document.getElementById('modal-close-btn');
      if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModalDrawer);

      const modalBackdrop = document.getElementById('resource-modal-backdrop');
      if (modalBackdrop) modalBackdrop.addEventListener('click', closeModalDrawer);

      const portModalBackdrop = document.getElementById('portfolio-modal-backdrop');
      if (portModalBackdrop) portModalBackdrop.addEventListener('click', closePortfolioDrawer);

      // Modal Tab buttons
      const tabBtns = document.querySelectorAll('.modal-tab-btn');
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const tabKey = btn.getAttribute('data-tab');
          if (tabKey) switchModalTab(tabKey);
        });
      });

      // Enhanced keyboard navigation (Deck & Flashcards & Modal Escape)
      document.addEventListener('keydown', (e) => {
        const portModalEl = document.getElementById('deck-portfolio-modal');
        const isPortModalOpen = portModalEl && !portModalEl.classList.contains('hidden');

        if (e.key === 'Escape' && isPortModalOpen) {
          closePortfolioDrawer();
          return;
        }

        const modalEl = document.getElementById('deck-resource-modal');
        const isModalOpen = modalEl && !modalEl.classList.contains('hidden');

        if (e.key === 'Escape' && isModalOpen) {
          closeModalDrawer();
          return;
        }

        if (isModalOpen && modalState.tab === 'revision' && modalState.flashcardMode === 'flashcards') {
          if (e.key === 'ArrowLeft') { prevFlashcard(); return; }
          if (e.key === 'ArrowRight') { nextFlashcard(); return; }
          if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleFlashcardFlip(); return; }
        }

        if (!isModalOpen && !isPortModalOpen) {
          if (e.key === 'ArrowLeft') stepDeck(-1);
          if (e.key === 'ArrowRight') stepDeck(1);
        }
      });

      // Hide image container on error to prevent broken image icons
      const imgEl = document.getElementById('card-image');
      const imageContainer = document.getElementById('image-container');
      if (imgEl && imageContainer) {
        imgEl.addEventListener('error', () => {
          imageContainer.classList.add('hidden');
        });
      }

      // Mouse wheel / trackpad scroll listener on the ribbon to cycle through modules
      const navContainer = document.getElementById('flight-deck-ribbon');
      if (navContainer) {
        let isWheelThrottled = false;
        navContainer.addEventListener('wheel', (e) => {
          e.preventDefault();
          if (isWheelThrottled) return;
          const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
          if (Math.abs(delta) > 10) {
            isWheelThrottled = true;
            if (delta > 0) {
              const nextMod = (currentModuleIndex + 1) % modulesData.length;
              switchModule(nextMod, 0);
            } else {
              const prevMod = (currentModuleIndex - 1 + modulesData.length) % modulesData.length;
              switchModule(prevMod, 0);
            }
            setTimeout(() => { isWheelThrottled = false; }, 320);
          }
        }, { passive: false });
      }

      // Program Switcher Click listeners
      const progBtnAg = document.getElementById('prog-btn-ag');
      if (progBtnAg) {
        progBtnAg.addEventListener('click', () => switchProgram('ag'));
      }
      const progBtnAas = document.getElementById('prog-btn-aas');
      if (progBtnAas) {
        progBtnAas.addEventListener('click', () => switchProgram('aas'));
      }

      // Read initial program, module and active card from URL hash or sessionStorage
      function getInitialSelection() {
        let prog = 'ag';
        let mod = 0;
        let card = 0;
        try {
          const hash = (window.location.hash + ' ' + window.location.search).toLowerCase();
          if (hash.includes('at') || hash.includes('aas') || hash.includes('aero')) {
            prog = 'aas';
          } else {
            const savedProg = sessionStorage.getItem('gsea_active_prog');
            if (savedProg === 'aas') prog = 'aas';
          }

          if (hash.includes('mod2') || hash.includes('module2') || hash.includes('module-2')) {
            mod = 1;
          } else if (hash.includes('mod3') || hash.includes('module3') || hash.includes('module-3')) {
            mod = 2;
          }

          // Check if card index is directly in hash (e.g. #ag-module1-card3 or #card-3)
          const cardMatch = hash.match(/card-?(\d+)/);
          if (cardMatch) {
            card = Math.max(0, parseInt(cardMatch[1], 10) - 1);
          } else {
            // Restore card memory from sessionStorage
            const savedMod = sessionStorage.getItem(`gsea_${prog}_last_mod`) || sessionStorage.getItem('gsea_last_mod');
            const savedCard = sessionStorage.getItem(`gsea_${prog}_last_card`) || sessionStorage.getItem('gsea_last_card');
            if (savedMod !== null && parseInt(savedMod, 10) === mod && savedCard !== null) {
              card = parseInt(savedCard, 10);
            }
          }
        } catch (e) {}
        return { prog, mod, card };
      }

      const initialSelection = getInitialSelection();
      currentProgram = initialSelection.prog;
      modulesData = PROGRAMS_CONFIG[currentProgram].modules;
      updateHeaderIconAndFooter();
      switchModule(initialSelection.mod, initialSelection.card);

      // Listen for hash changes dynamically (e.g., browser back/forward or intra-page links)
      window.addEventListener('hashchange', () => {
        try {
          const target = getInitialSelection();
          if (target.prog !== currentProgram) {
            switchProgram(target.prog, target.mod, target.card);
          } else if (target.mod !== currentModuleIndex || target.card !== currentIndex) {
            switchModule(target.mod, target.card);
          }
        } catch (e) {}
      });
    }

    function updateHeaderIconAndFooter() {
      const iconBox = document.getElementById('deck-icon-box');
      if (iconBox) {
        if (currentProgram === 'aas') {
          iconBox.innerHTML = `<svg width="20" height="20" style="width: 20px; height: 20px;" class="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`;
        } else {
          iconBox.innerHTML = `<svg width="20" height="20" style="width: 20px; height: 20px;" class="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`;
        }
      }
      const mainTitle = document.getElementById('deck-main-title');
      if (mainTitle) {
        mainTitle.textContent = currentProgram === 'aas' ? 'GSEA SEMESTER 2 AAS' : 'GSEA SEMESTER 2 AG';
      }
      const footerCurriculum = document.getElementById('footer-curriculum-label');
      if (footerCurriculum && PROGRAMS_CONFIG[currentProgram]) {
        footerCurriculum.textContent = PROGRAMS_CONFIG[currentProgram].footerDesc;
      }
    }

    function renderProgramSwitcher() {
      const agBtn = document.getElementById('prog-btn-ag');
      const aasBtn = document.getElementById('prog-btn-aas');
      if (!agBtn || !aasBtn) return;

      const currentTheme = modulesData[currentModuleIndex];
      const isAg = (currentProgram === 'ag');

      agBtn.setAttribute('aria-selected', isAg ? 'true' : 'false');
      aasBtn.setAttribute('aria-selected', !isAg ? 'true' : 'false');

      if (isAg) {
        agBtn.style.backgroundColor = currentTheme.accent;
        agBtn.style.borderColor = currentTheme.accentDark;
        agBtn.style.color = '#ffffff';
        agBtn.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';
        agBtn.className = "px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1 border shadow-xs hover:-translate-y-[1px] active:translate-y-0";
        agBtn.onmouseenter = () => { agBtn.style.backgroundColor = currentTheme.accentDark; };
        agBtn.onmouseleave = () => { agBtn.style.backgroundColor = currentTheme.accent; };

        aasBtn.style.backgroundColor = 'transparent';
        aasBtn.style.borderColor = 'transparent';
        aasBtn.style.color = 'rgba(255, 255, 255, 0.75)';
        aasBtn.style.boxShadow = 'none';
        aasBtn.className = "px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 opacity-75 hover:opacity-100 hover:text-white border hover:-translate-y-[1px] active:translate-y-0";
        aasBtn.onmouseenter = () => { aasBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; aasBtn.style.color = '#ffffff'; };
        aasBtn.onmouseleave = () => { aasBtn.style.backgroundColor = 'transparent'; aasBtn.style.color = 'rgba(255, 255, 255, 0.75)'; };
      } else {
        aasBtn.style.backgroundColor = currentTheme.accent;
        aasBtn.style.borderColor = currentTheme.accentDark;
        aasBtn.style.color = '#ffffff';
        aasBtn.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';
        aasBtn.className = "px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-bold transition-all cursor-pointer flex items-center gap-1 border shadow-xs hover:-translate-y-[1px] active:translate-y-0";
        aasBtn.onmouseenter = () => { aasBtn.style.backgroundColor = currentTheme.accentDark; };
        aasBtn.onmouseleave = () => { aasBtn.style.backgroundColor = currentTheme.accent; };

        agBtn.style.backgroundColor = 'transparent';
        agBtn.style.borderColor = 'transparent';
        agBtn.style.color = 'rgba(255, 255, 255, 0.75)';
        agBtn.style.boxShadow = 'none';
        agBtn.className = "px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 opacity-75 hover:opacity-100 hover:text-white border hover:-translate-y-[1px] active:translate-y-0";
        agBtn.onmouseenter = () => { agBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; agBtn.style.color = '#ffffff'; };
        agBtn.onmouseleave = () => { agBtn.style.backgroundColor = 'transparent'; agBtn.style.color = 'rgba(255, 255, 255, 0.75)'; };
      }

      // Synchronize Course Deck Portfolio launch button with active track
      const deckPortBtn = document.getElementById('deck-portfolio-btn');
      if (deckPortBtn) {
        deckPortBtn.setAttribute('data-track', currentProgram);
        const dot = document.getElementById('deck-port-dot');
        const label = document.getElementById('deck-port-label');
        if (dot) dot.className = isAg ? "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" : "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse";
        if (label) label.innerText = isAg ? "AG Portfolio" : "AAS Portfolio";
      }
      if (typeof syncPortfolioDrawerTrack === 'function') {
        syncPortfolioDrawerTrack(currentProgram);
      }
    }

    function switchProgram(progKey, targetMod = null, targetCard = null) {
      if (!PROGRAMS_CONFIG[progKey]) return;
      if (progKey === currentProgram && targetMod === null && targetCard === null) return;

      const workspace = document.querySelector('.workspace-split');
      const headerInfo = document.getElementById('deck-header-info');
      const footerCurriculum = document.getElementById('footer-curriculum-label');

      // Phase 1 (Exit - 300ms): Coordinated optical dissolve out
      if (workspace) {
        workspace.classList.remove('track-crossfade-enter');
        workspace.classList.add('track-crossfade-exit');
      }
      if (headerInfo) {
        headerInfo.classList.remove('header-crossfade-enter');
        headerInfo.classList.add('header-crossfade-exit');
      }
      if (footerCurriculum) {
        footerCurriculum.classList.remove('header-crossfade-enter');
        footerCurriculum.classList.add('header-crossfade-exit');
      }

      // Immediate visual feedback on the program switcher buttons
      const agBtn = document.getElementById('prog-btn-ag');
      const aasBtn = document.getElementById('prog-btn-aas');
      if (agBtn && aasBtn) {
        agBtn.setAttribute('aria-selected', progKey === 'ag' ? 'true' : 'false');
        aasBtn.setAttribute('aria-selected', progKey === 'aas' ? 'true' : 'false');
      }

      // Phase 2 (Midpoint data swap at 300ms, then Enter - 450ms)
      setTimeout(() => {
        currentProgram = progKey;
        modulesData = PROGRAMS_CONFIG[currentProgram].modules;
        updateHeaderIconAndFooter();

        let modToLoad = (targetMod !== null) ? targetMod : currentModuleIndex;
        let cardToLoad = (targetCard !== null) ? targetCard : 0;

        if (targetMod === null && targetCard === null) {
          try {
            const savedProgMod = sessionStorage.getItem(`gsea_${currentProgram}_last_mod`);
            const savedProgCard = sessionStorage.getItem(`gsea_${currentProgram}_last_card`);
            if (savedProgMod !== null) {
              modToLoad = parseInt(savedProgMod, 10);
              if (savedProgCard !== null) cardToLoad = parseInt(savedProgCard, 10);
            }
          } catch (e) {}
        }

        switchModule(modToLoad, cardToLoad);
        renderProgramSwitcher();

        if (workspace) {
          workspace.classList.remove('track-crossfade-exit');
          workspace.classList.add('track-crossfade-enter');
        }
        if (headerInfo) {
          headerInfo.classList.remove('header-crossfade-exit');
          headerInfo.classList.add('header-crossfade-enter');
        }
        if (footerCurriculum) {
          footerCurriculum.classList.remove('header-crossfade-exit');
          footerCurriculum.classList.add('header-crossfade-enter');
        }

        // Clean up enter animation classes once the 450ms ease-in is complete
        setTimeout(() => {
          if (workspace) workspace.classList.remove('track-crossfade-enter');
          if (headerInfo) headerInfo.classList.remove('header-crossfade-enter');
          if (footerCurriculum) footerCurriculum.classList.remove('header-crossfade-enter');
        }, 460);
      }, 300);
    }

    function renderModuleSelector() {
      const container = document.getElementById('module-selector-container');
      if (!container) return;
      container.innerHTML = '';
      const currentTheme = modulesData[currentModuleIndex];

      modulesData.forEach((mod, idx) => {
        const isSelected = idx === currentModuleIndex;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        btn.setAttribute('aria-label', `Module 0${idx + 1}: ${mod.subtitle || mod.name}`);
        btn.setAttribute('title', `Module 0${idx + 1}: ${mod.subtitle || mod.name}`);

        if (isSelected) {
          // Sharp elevated active module tab (MOD 1 / MOD 2 / MOD 3)
          btn.style.backgroundColor = currentTheme.accent;
          btn.style.borderColor = currentTheme.accentDark;
          btn.style.color = '#ffffff';
          btn.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';
          btn.className = "flex items-center justify-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-black tracking-wide transition-all border cursor-pointer select-none shadow-xs hover:-translate-y-[1px] active:translate-y-0 text-white";
          btn.onmouseenter = () => {
            btn.style.backgroundColor = currentTheme.accentDark;
          };
          btn.onmouseleave = () => {
            btn.style.backgroundColor = currentTheme.accent;
          };
        } else {
          // Sleek dark cockpit segmented tab (MOD 1 / MOD 2 / MOD 3)
          btn.style.backgroundColor = 'transparent';
          btn.style.borderColor = 'transparent';
          btn.style.color = 'rgba(255, 255, 255, 0.72)';
          btn.style.boxShadow = 'none';
          btn.className = "flex items-center justify-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-semibold tracking-wide transition-all border border-transparent cursor-pointer select-none text-white/70 hover:text-white hover:bg-white/10 hover:-translate-y-[1px] active:translate-y-0";
          btn.onmouseenter = () => {
            btn.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            btn.style.color = '#ffffff';
          };
          btn.onmouseleave = () => {
            btn.style.backgroundColor = 'transparent';
            btn.style.color = 'rgba(255, 255, 255, 0.72)';
          };
        }

        btn.innerHTML = `<span class="font-mono font-bold text-[10.5px] sm:text-xs tracking-tight">MOD ${idx + 1}</span>`;

        btn.addEventListener('click', () => {
          switchModule(idx, 0);
        });

        container.appendChild(btn);
      });
    }

    function switchModule(modIdx, cardIdx = 0) {
      if (modIdx < 0 || modIdx >= modulesData.length) return;
      currentModuleIndex = modIdx;
      currentIndex = cardIdx;

      applyTheme(modulesData[currentModuleIndex]);
      buildMenu();
      renderCard(currentIndex);
      renderModuleSelector();
      renderProgramSwitcher();

      // Update URL hash with card memory and program (Cross-Origin History API Guard)
      try {
        sessionStorage.setItem('gsea_active_prog', currentProgram);
        sessionStorage.setItem(`gsea_${currentProgram}_last_mod`, String(modIdx));
        sessionStorage.setItem(`gsea_${currentProgram}_last_card`, String(cardIdx));
        sessionStorage.setItem('gsea_last_mod', String(modIdx));
        sessionStorage.setItem('gsea_last_card', String(cardIdx));
        if (window.history && typeof window.history.replaceState === 'function') {
          window.history.replaceState(null, '', `#${currentProgram}-module${modIdx + 1}-card${cardIdx + 1}`);
        }
      } catch (err) {
        // Silently swallow SecurityError if embedded in a restricted or cross-origin Moodle iframe
      }
    }

    function applyTheme(mod) {
      // Header background and border
      const header = document.getElementById('deck-header');
      if (header) {
        header.style.backgroundColor = mod.primary;
        header.style.borderColor = mod.primaryDark;
      }

      // Header icon container
      const iconBox = document.getElementById('deck-icon-box');
      if (iconBox) {
        iconBox.style.backgroundColor = mod.accent;
      }

      // Header Main Title & Subheader
      const mainTitle = document.getElementById('deck-main-title');
      if (mainTitle) {
        mainTitle.textContent = currentProgram === 'aas' ? 'GSEA SEMESTER 2 AAS' : 'GSEA SEMESTER 2 AG';
      }

      const subtitle = document.getElementById('deck-subtitle');
      if (subtitle) {
        subtitle.textContent = `${mod.name} - ${mod.subtitle}`;
        subtitle.style.color = mod.highlight;
      }

      // Counter badge
      const counterBadge = document.getElementById('counter-badge');
      if (counterBadge) {
        counterBadge.style.backgroundColor = mod.primaryDark;
        counterBadge.style.borderColor = mod.primaryDarker;
      }

      // Prev and Next navigation buttons
      const prevBtn = document.getElementById('prev-btn');
      if (prevBtn) {
        prevBtn.style.backgroundColor = mod.primaryDark;
        prevBtn.style.borderColor = mod.primaryDarker;
        prevBtn.onmouseenter = () => { if (!prevBtn.disabled) prevBtn.style.backgroundColor = mod.primaryDarker; };
        prevBtn.onmouseleave = () => { if (!prevBtn.disabled) prevBtn.style.backgroundColor = mod.primaryDark; };
      }

      const nextBtn = document.getElementById('next-btn');
      if (nextBtn) {
        nextBtn.style.backgroundColor = mod.accent;
        nextBtn.style.borderColor = mod.accentDark;
        nextBtn.onmouseenter = () => { if (!nextBtn.disabled) nextBtn.style.backgroundColor = mod.accentDark; };
        nextBtn.onmouseleave = () => { if (!nextBtn.disabled) nextBtn.style.backgroundColor = mod.accent; };
      }

      // Skills Footer Area with module color harmony & Audio Pronunciation
      const skillsEl = document.getElementById('card-skills');
      if (skillsEl) {
        skillsEl.style.setProperty('--skills-color', mod.primaryDark);
        skillsEl.style.setProperty('--skills-accent', mod.accent);
        skillsEl.innerHTML = `
          <div class="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-200/70 select-none">
            <div class="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-slate-500">
              <svg width="13" height="13" class="shrink-0 transition-colors" style="color: var(--skills-accent);" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
              <span class="transition-colors font-extrabold" style="color: var(--skills-color);">Continuous Assessment Criteria</span>
            </div>
            <span class="text-[9.5px] font-mono text-slate-400 font-medium hidden sm:inline">Click to listen</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-y-2 gap-x-2.5">
            <div class="skill-tile flex flex-col p-1.5 rounded-lg border border-transparent transition-all cursor-pointer select-none group" role="button" tabindex="0" onclick="speakWord('Fluency')" title="Click to listen"><span class="skill-word text-[11.5px] font-extrabold uppercase tracking-wide">Fluency</span><span class="text-[9.5px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-600 transition-colors">/ˈfluː.ən.si/</span></div>
            <div class="skill-tile flex flex-col p-1.5 rounded-lg border border-transparent transition-all cursor-pointer select-none group" role="button" tabindex="0" onclick="speakWord('Grammar')" title="Click to listen"><span class="skill-word text-[11.5px] font-extrabold uppercase tracking-wide">Grammar</span><span class="text-[9.5px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-600 transition-colors">/ˈɡræm.ər/</span></div>
            <div class="skill-tile flex flex-col p-1.5 rounded-lg border border-transparent transition-all cursor-pointer select-none group" role="button" tabindex="0" onclick="speakWord('Technical Vocabulary')" title="Click to listen"><span class="skill-word text-[11.5px] font-extrabold uppercase tracking-wide">Technical Vocabulary</span><span class="text-[9.5px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-600 transition-colors">/ˈtek.nɪ.kəl vəˈkæb/</span></div>
            <div class="skill-tile flex flex-col p-1.5 rounded-lg border border-transparent transition-all cursor-pointer select-none group" role="button" tabindex="0" onclick="speakWord('Pronunciation')" title="Click to listen"><span class="skill-word text-[11.5px] font-extrabold uppercase tracking-wide">Pronunciation</span><span class="text-[9.5px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-600 transition-colors">/prəˌnʌn.siˈeɪ.shən/</span></div>
            <div class="skill-tile flex flex-col p-1.5 rounded-lg border border-transparent transition-all cursor-pointer select-none group" role="button" tabindex="0" onclick="speakWord('Comprehension')" title="Click to listen"><span class="skill-word text-[11.5px] font-extrabold uppercase tracking-wide">Comprehension</span><span class="text-[9.5px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-600 transition-colors">/ˌkɒm.prɪˈhen.ʃən/</span></div>
            <div class="skill-tile flex flex-col p-1.5 rounded-lg border border-transparent transition-all cursor-pointer select-none group" role="button" tabindex="0" onclick="speakWord('Discussion')" title="Click to listen"><span class="skill-word text-[11.5px] font-extrabold uppercase tracking-wide">Discussion</span><span class="text-[9.5px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-600 transition-colors">/dɪˈskʌʃ.ən/</span></div>
            <div class="skill-tile flex flex-col p-1.5 rounded-lg border border-transparent transition-all cursor-pointer select-none group" role="button" tabindex="0" onclick="speakWord('Correction')" title="Click to listen"><span class="skill-word text-[11.5px] font-extrabold uppercase tracking-wide">Correction</span><span class="text-[9.5px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-600 transition-colors">/kəˈrek.ʃən/</span></div>
            <div class="skill-tile flex flex-col p-1.5 rounded-lg border border-transparent transition-all cursor-pointer select-none group" role="button" tabindex="0" onclick="speakWord('Interaction')" title="Click to listen"><span class="skill-word text-[11.5px] font-extrabold uppercase tracking-wide">Interaction</span><span class="text-[9.5px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-600 transition-colors">/ˌɪn.təˈræk.ʃən/</span></div>
            <div class="skill-tile flex flex-col p-1.5 rounded-lg border border-transparent transition-all cursor-pointer select-none group" role="button" tabindex="0" onclick="speakWord('Assessment')" title="Click to listen"><span class="skill-word text-[11.5px] font-extrabold uppercase tracking-wide">Assessment</span><span class="text-[9.5px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-600 transition-colors">/əˈses.mənt/</span></div>
            <div class="skill-tile flex flex-col p-1.5 rounded-lg border border-transparent transition-all cursor-pointer select-none group" role="button" tabindex="0" onclick="speakWord('Portfolio')" title="Click to listen"><span class="skill-word text-[11.5px] font-extrabold uppercase tracking-wide">Portfolio</span><span class="text-[9.5px] text-slate-400 font-mono mt-0.5 group-hover:text-slate-600 transition-colors">/pɔːtˈfəʊ.li.əʊ/</span></div>
          </div>
        `;
      }

      // Flight deck ribbon matching theme
      const ribbon = document.getElementById('flight-deck-ribbon');
      if (ribbon) {
        ribbon.style.backgroundColor = mod.primaryDark;
        ribbon.style.borderColor = mod.primaryDarker;
      }

      // Dynamic GSEA 26A Flight Deck HUD Callsign Badge Theme
      const promoBadge = document.getElementById('promo-callsign-badge');
      const promoDot = document.getElementById('promo-badge-dot');
      const promoText = document.getElementById('promo-badge-text');
      if (promoBadge && promoDot) {
        promoDot.style.backgroundColor = mod.accent;
        promoDot.style.boxShadow = `0 0 8px ${mod.accent}`;
        promoBadge.style.borderColor = `${mod.accent}55`;
        promoBadge.style.boxShadow = `0 0 14px ${mod.accent}25, inset 0 1px 0 rgba(255, 255, 255, 0.12)`;
        if (promoText) {
          promoText.style.color = '#ffffff';
        }
        promoBadge.onmouseenter = () => {
          promoBadge.style.borderColor = mod.accent;
          promoBadge.style.boxShadow = `0 0 18px ${mod.accent}60, inset 0 1px 0 rgba(255, 255, 255, 0.25)`;
        };
        promoBadge.onmouseleave = () => {
          promoBadge.style.borderColor = `${mod.accent}55`;
          promoBadge.style.boxShadow = `0 0 14px ${mod.accent}25, inset 0 1px 0 rgba(255, 255, 255, 0.12)`;
        };
      }

      // Dynamic Canvas Backdrop and Floating Card Shadow based on active Module
      const agCanvasThemes = {
        1: { bg: '#fffaf5', bgClass: 'bg-canvas-mod1', shadowClass: 'shadow-card-mod1' },
        2: { bg: '#f0fdf4', bgClass: 'bg-canvas-mod3', shadowClass: 'shadow-card-mod3' },
        3: { bg: '#f1f5f9', bgClass: 'bg-canvas-mod2', shadowClass: 'shadow-card-mod2' }
      };
      const aasCanvasThemes = {
        1: { bg: '#f1f5f9', bgClass: 'bg-canvas-mod2', shadowClass: 'shadow-card-mod1' },
        2: { bg: '#edf4fa', bgClass: 'bg-canvas-mod2', shadowClass: 'shadow-card-mod2' },
        3: { bg: '#edf5f4', bgClass: 'bg-canvas-mod3', shadowClass: 'shadow-card-mod3' }
      };

      const canvasThemes = currentProgram === 'aas' ? aasCanvasThemes : agCanvasThemes;
      const cTheme = canvasThemes[mod.id] || canvasThemes[1];
      document.body.style.backgroundColor = cTheme.bg;
      document.body.classList.remove('bg-canvas-mod1', 'bg-canvas-mod2', 'bg-canvas-mod3');
      document.body.classList.add(cTheme.bgClass);

      const deckCanvas = document.querySelector('.moodle-deck-canvas');
      if (deckCanvas) {
        deckCanvas.classList.remove('shadow-card-mod1', 'shadow-card-mod2', 'shadow-card-mod3');
        deckCanvas.classList.add(cTheme.shadowClass);
      }
    }

    function buildMenu() {
      const menuEl = document.getElementById('deck-menu');
      if (!menuEl) return;
      menuEl.innerHTML = '';
      const mod = modulesData[currentModuleIndex];

      mod.pages.forEach((page, idx) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.setAttribute('data-card-idx', idx);

        if (page.isMuted) {
          item.setAttribute('aria-label', `${page.title} (Muted)`);
          item.setAttribute('disabled', 'true');
          item.className = "flight-strip-card w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium flex items-center justify-between border border-slate-200/60 bg-slate-100/60 text-slate-400 cursor-not-allowed opacity-60 select-none";
          item.innerHTML = `
            <div class="flex items-center gap-2 min-w-0 pr-1 pointer-events-none">
              <span class="flight-strip-badge font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-400 border border-slate-300/50">0${idx + 1}</span>
              <span class="flight-strip-title truncate text-xs text-slate-400 font-medium pointer-events-none">${page.title}</span>
            </div>
            <span class="text-[9px] font-mono uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-slate-200 text-slate-500 border border-slate-300/60 shrink-0">Muted</span>
          `;
        } else {
          item.setAttribute('aria-label', `Navigate to ${page.title}`);
          let rightHtml = '';
          if (idx <= 3) {
            rightHtml = `<svg class="flight-strip-chevron w-3.5 h-3.5 shrink-0 opacity-40 transition-all pointer-events-none" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>`;
          } else if (idx === 4) {
            rightHtml = `<span class="flight-strip-pill text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded transition-all shrink-0">FE</span>`;
          } else if (idx === 5 || page.detailsUrl) {
            rightHtml = `<span class="flight-strip-pill text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded transition-all shrink-0">DDRS</span>`;
          } else if (idx === 6 || page.isAdmin) {
            rightHtml = `<span class="flight-strip-pill text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded transition-all shrink-0">ADMIN</span>`;
          } else if (idx === 7 || page.isObjectives) {
            rightHtml = `<span class="flight-strip-pill text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded transition-all shrink-0">OBJ</span>`;
          } else if (idx >= 8 || page.isImmersion) {
            rightHtml = `<span class="flight-strip-pill text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded transition-all shrink-0">S2</span>`;
          } else {
            rightHtml = `<svg class="flight-strip-chevron w-3.5 h-3.5 shrink-0 opacity-40 transition-all pointer-events-none" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>`;
          }

          item.innerHTML = `
            <div class="flex items-center gap-2 min-w-0 pr-1 pointer-events-none">
              <span class="flight-strip-badge font-mono text-[10px] font-bold px-1.5 py-0.5 rounded transition-all">0${idx + 1}</span>
              <span class="flight-strip-title truncate text-xs transition-all pointer-events-none">${page.title}</span>
            </div>
            ${rightHtml}
          `;
          item.addEventListener('click', () => renderCard(idx));
        }
        menuEl.appendChild(item);
      });
      updateMenu(currentIndex);
    }

    function updateMenu(activeIdx) {
      const menuEl = document.getElementById('deck-menu');
      if (!menuEl) return;
      const items = menuEl.querySelectorAll('button');
      const mod = modulesData[currentModuleIndex];

      items.forEach((item, idx) => {
        const page = mod.pages && mod.pages[idx];
        if (page && page.isMuted) return;

        const isActive = idx === activeIdx;
        const badge = item.querySelector('.flight-strip-badge');
        const title = item.querySelector('.flight-strip-title');
        const chevron = item.querySelector('.flight-strip-chevron');
        const pill = item.querySelector('.flight-strip-pill');

        if (isActive) {
          item.className = "flight-strip-card group w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between border cursor-pointer shadow-2xs";
          item.style.backgroundColor = '#ffffff';
          item.style.borderColor = '#cbd5e1';
          item.style.borderLeft = `3px solid ${mod.accent}`;
          if (title) {
            title.style.color = '#0f172a';
            title.className = "flight-strip-title truncate text-xs font-bold text-slate-900 transition-all pointer-events-none";
          }
          if (badge) {
            if (idx === 4) {
              badge.style.backgroundColor = '#fef3c7';
              badge.style.color = '#92400e';
              badge.style.border = '1px solid #fcd34d';
            } else {
              badge.style.backgroundColor = '#f1f5f9';
              badge.style.color = '#334155';
              badge.style.border = '1px solid #e2e8f0';
            }
          }
          if (chevron) {
            chevron.style.color = mod.accent;
            chevron.style.opacity = '0.9';
            chevron.style.transform = 'none';
          }
          if (pill) {
            if (idx === 4) {
              pill.className = "flight-strip-pill text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500 text-white shadow-2xs shrink-0";
            } else {
              pill.className = "flight-strip-pill text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-white shadow-2xs shrink-0";
            }
          }
        } else {
          item.style.borderLeft = '';
          if (idx <= 3) {
            // Sessions 01 to 04: Core Teaching Units (Clean White / Slate Border)
            item.className = "flight-strip-card group w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between border border-slate-200/90 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800 hover:text-slate-900 hover:shadow-2xs hover:translate-x-[3px] cursor-pointer";
            item.style.backgroundColor = '#ffffff';
            item.style.borderColor = '#e2e8f0';
            if (title) {
              title.style.color = '#1e293b';
              title.className = "flight-strip-title truncate text-xs font-semibold text-slate-800 group-hover:text-slate-900 transition-all pointer-events-none";
            }
            if (badge) {
              badge.style.backgroundColor = '#f1f5f9';
              badge.style.color = '#475569';
              badge.style.border = '1px solid #e2e8f0';
            }
            if (chevron) {
              chevron.style.color = '#64748b';
              chevron.style.opacity = '0.35';
              chevron.style.transform = 'none';
            }
          } else if (idx === 4) {
            // Session 05: Evaluation Milestone (Warm Amber Highlight)
            item.className = "flight-strip-card group w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between border border-amber-200/80 bg-amber-50/70 hover:bg-amber-50 hover:border-amber-300/90 text-amber-950 hover:shadow-2xs hover:translate-x-[3px] cursor-pointer";
            item.style.backgroundColor = '#fffbeb';
            item.style.borderColor = '#fde68a';
            if (title) {
              title.style.color = '#78350f';
              title.className = "flight-strip-title truncate text-xs font-bold text-amber-950 group-hover:text-amber-900 transition-all pointer-events-none";
            }
            if (badge) {
              badge.style.backgroundColor = '#fef3c7';
              badge.style.color = '#92400e';
              badge.style.border = '1px solid #fde68a';
            }
            if (pill) {
              pill.className = "flight-strip-pill text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-200/80 text-amber-900 border border-amber-300/80 shrink-0";
            }
          } else {
            // Cards 06 to 08/09: Administrative & Reference Frameworks (Muted Cool Slate)
            item.className = "flight-strip-card group w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between border border-slate-200/70 bg-slate-100/75 hover:bg-slate-100 hover:border-slate-300 text-slate-600 hover:text-slate-900 hover:shadow-2xs hover:translate-x-[3px] cursor-pointer";
            item.style.backgroundColor = '#f1f5f9';
            item.style.borderColor = '#e2e8f0';
            if (title) {
              title.style.color = '#475569';
              title.className = "flight-strip-title truncate text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-all pointer-events-none";
            }
            if (badge) {
              badge.style.backgroundColor = '#e2e8f0';
              badge.style.color = '#64748b';
              badge.style.border = '1px solid #cbd5e1';
            }
            if (pill) {
              pill.className = "flight-strip-pill text-[9px] font-mono font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-600 border border-slate-300/60 shrink-0";
            }
          }
        }
      });
    }

    function formatCardDescription(rawDesc, page, cardIdx) {
      if (!rawDesc) return '';

      // Check if Session 6 (DDRS card)
      if (page.detailsUrl || cardIdx === 5) {
        const parts = rawDesc.split(/<br\s*\/?>\s*<br\s*\/?>/i);
        if (parts.length >= 3) {
          const defText = parts[0].replace(/<strong>Definition:<\/strong>\s*/i, '').trim();
          const areasText = parts[1].replace(/<strong>Key areas covered:<\/strong>\s*/i, '').trim();
          const whyText = parts[2].replace(/<strong>Why we discuss DDRS in English:<\/strong>\s*/i, '').trim();

          return `
            <div class="space-y-3">
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <strong class="font-bold text-slate-900">Definition:</strong> ${defText}
              </p>
              <div class="p-3 bg-slate-50 border border-slate-200/90 rounded-xl flex items-start gap-2.5 shadow-2xs">
                <span class="text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 shrink-0 mt-0.5">Key Areas</span>
                <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  ${areasText}
                </p>
              </div>
              <div class="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-xl flex items-start gap-2.5 shadow-2xs">
                <span class="text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-200/90 text-emerald-900 shrink-0 mt-0.5">Framework</span>
                <p class="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                  ${whyText}
                </p>
              </div>
            </div>
          `;
        }
      }

      // Standard Sessions 1 to 5 (3-Tier Flight Briefing)
      const parts = rawDesc.split(/<br\s*\/?>\s*<br\s*\/?>/i);
      if (parts.length >= 2) {
        const introText = parts[0].trim();
        let overviewText = parts[1].replace(/<\/?em>/gi, '')
                                   .replace(/Subject overview:\s*/i, '')
                                   .trim();
        let milestoneText = (parts[2] || "").trim();
        milestoneText = milestoneText.replace(/,\s*for which you will receive a GO \/ NO GO\.?/gi, '.')
                                     .replace(/\.?\s*for which you will receive a GO \/ NO GO/gi, '')
                                     .replace(/you will receive a GO \/ NO GO based on your performance\.?/gi, 'performance evaluated against official grading criteria.')
                                     .replace(/GO\s*\/\s*NO\s*GO/gi, '')
                                     .trim();

        return `
          <div class="space-y-3">
            <!-- Tier 1: Lead Intro Briefing -->
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              ${introText}
            </p>

            <!-- Tier 2: Subject Focus Box -->
            ${overviewText ? `
              <div class="p-3 bg-slate-50 border border-slate-200/90 rounded-xl flex items-start gap-2.5 shadow-2xs">
                <span class="text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 shrink-0 mt-0.5">Focus</span>
                <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  ${overviewText}
                </p>
              </div>
            ` : ''}

            <!-- Tier 3: Evaluation Milestone / FE Tip (Compact Secondary Footnote) -->
            ${milestoneText ? `
              <div class="px-3 py-2 bg-amber-50/50 border border-amber-200/70 rounded-lg flex items-center sm:items-baseline gap-2 text-[11.5px] text-amber-900/90">
                <span class="inline-flex items-center text-[9.5px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-200/70 text-amber-900 shrink-0">${cardIdx === 4 ? 'FE Target' : (cardIdx === 6 || (page && page.isAdmin) ? 'Admin Action' : (page && page.isImmersion ? 'Homestay' : (page && page.isObjectives ? 'Syllabus' : 'FE Tip')))}</span>
                <span class="leading-snug">${milestoneText}</span>
              </div>
            ` : ''}
          </div>
        `;
      }

      return `<div class="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">${rawDesc}</div>`;
    }

    function renderCard(idx) {
      const mod = modulesData[currentModuleIndex];
      const pages = mod.pages;
      if (idx < 0 || idx >= pages.length) return;

      if (pages[idx] && pages[idx].isMuted) {
        let targetIdx = idx - 1;
        while (targetIdx >= 0 && pages[targetIdx] && pages[targetIdx].isMuted) {
          targetIdx--;
        }
        if (targetIdx >= 0) {
          renderCard(targetIdx);
          return;
        }
      }

      currentIndex = idx;
      const page = pages[currentIndex];

      // Update card title
      const cardHeading = document.getElementById('card-heading');
      cardHeading.textContent = page.title;
      cardHeading.style.color = mod.primary;

      document.getElementById('card-desc').innerHTML = formatCardDescription(page.description, page, currentIndex);

      const actionContainer = document.getElementById('action-links-container');
      actionContainer.innerHTML = '';



      // Update Action Dock Label
      const dockDot = document.getElementById('action-dock-dot');
      const dockTitle = document.getElementById('action-dock-title');
      if (dockDot) dockDot.style.backgroundColor = mod.primary;
      if (dockTitle) {
        if (page.isImmersion || (page.tag && page.tag.includes("Immersion"))) {
          dockTitle.textContent = "English Immersion & Destinations";
        } else if (page.isObjectives || page.title === "Semester Objectives") {
          dockTitle.textContent = "Semester 2 Learning Objectives";
        } else if (page.isAdmin || currentIndex === 6) {
          dockTitle.textContent = "GSEA26A Administration Hub";
        } else if (page.detailsUrl || currentIndex === 5) {
          dockTitle.textContent = "DDRS Sustainability Guide";
        } else if (currentIndex === 4) {
          dockTitle.textContent = `Session 0${currentIndex + 1} Evaluation Center`;
        } else {
          dockTitle.textContent = `Session 0${currentIndex + 1} Study Resources`;
        }
      }

      const createThemedCTA = (label, tabKey, fallbackHref) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = "inline-flex items-center gap-2 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-bold tracking-wide shadow-xs transition-all duration-150 cursor-pointer select-none border border-black/10 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0";
        btn.style.backgroundColor = mod.primary;
        btn.onmouseenter = () => btn.style.backgroundColor = mod.primaryDark;
        btn.onmouseleave = () => btn.style.backgroundColor = mod.primary;
        btn.innerHTML = `<span>${label}</span> <span class="font-bold text-sm leading-none" aria-hidden="true">⇥</span>`;
        btn.addEventListener('click', () => {
          openModalDrawer(tabKey, mod.id, currentIndex + 1, fallbackHref);
        });
        return btn;
      };

      if (page.isImmersion) {
        actionContainer.appendChild(createThemedCTA("Open Immersion Guide", "immersion_overview", "immersion.html"));
      } else if (page.isObjectives || page.title === "Semester Objectives") {
        actionContainer.appendChild(createThemedCTA("Open Objectives", "sem_obj_en", ""));
      } else if (page.isAdmin || currentIndex === 6) {
        actionContainer.appendChild(createThemedCTA("Open Resources", "admin_groups", "admin.html"));
      } else if (page.detailsUrl || currentIndex === 5) {
        actionContainer.appendChild(createThemedCTA("Open Resources", "ddrs", page.detailsUrl || "ddrs1.html"));
      } else if (currentIndex === 4) {
        actionContainer.appendChild(createThemedCTA("Open Resources", "fe_guidelines", page.lessonPlanUrl || page.url || ""));
      } else {
        // Sessions 1 to 4: In-deck modal workspace hub (single themed CTA to open resources drawer)
        const initialTab = page.objectivesUrl ? 'objectives' : (page.lessonPlanUrl ? 'plan' : 'materials');
        const fallback = page.additionalMaterialsUrl || page.url || page.lessonPlanUrl || '';
        actionContainer.appendChild(createThemedCTA("Open Resources", initialTab, fallback));
      }


      const imageContainer = document.getElementById('image-container');
      const imgEl = document.getElementById('card-image');

      if (page.imageUrl && page.imageUrl.trim() !== "") {
        imgEl.src = page.imageUrl;
        imageContainer.classList.remove('hidden');
      } else {
        imgEl.src = "";
        imageContainer.classList.add('hidden');
      }

      const accessiblePages = pages.filter(p => !p.isMuted);
      const isNextDisabled = (currentIndex === pages.length - 1) || (pages[currentIndex + 1] && pages[currentIndex + 1].isMuted);

      document.getElementById('counter-badge').textContent = `${currentIndex + 1} of ${accessiblePages.length}`;
      const deckTitleEl = document.getElementById('deck-title');
      if (deckTitleEl) {
        deckTitleEl.textContent = page.title;
      }
      document.getElementById('footer-status').textContent = `Active: ${mod.name} - ${page.title}`;

      document.getElementById('prev-btn').disabled = (currentIndex === 0);
      document.getElementById('next-btn').disabled = isNextDisabled;

      updateMenu(currentIndex);
      try {
        sessionStorage.setItem('gsea_active_prog', currentProgram);
        sessionStorage.setItem(`gsea_${currentProgram}_last_mod`, String(currentModuleIndex));
        sessionStorage.setItem(`gsea_${currentProgram}_last_card`, String(currentIndex));
        sessionStorage.setItem('gsea_last_mod', String(currentModuleIndex));
        sessionStorage.setItem('gsea_last_card', String(currentIndex));
        if (window.history && typeof window.history.replaceState === 'function') {
          window.history.replaceState(null, '', `#${currentProgram}-module${currentModuleIndex + 1}-card${currentIndex + 1}`);
        }
      } catch (e) {}
      ScormAPI.setProgress(`${currentProgram}-mod${currentModuleIndex + 1}-card${currentIndex}`, true);
    }

    function stepDeck(direction) {
      const mod = modulesData[currentModuleIndex];
      const newIndex = currentIndex + direction;
      if (newIndex >= 0 && newIndex < mod.pages.length) {
        if (mod.pages[newIndex] && mod.pages[newIndex].isMuted) return;
        renderCard(newIndex);
      }
    }

    // --- Audio Pronunciation Engine (Mobile / WebKit / Cross-Platform) ---
    let cachedVoices = [];

    function initSpeechEngine() {
      if (!('speechSynthesis' in window)) return;
      try {
        cachedVoices = window.speechSynthesis.getVoices() || [];
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = () => {
            cachedVoices = window.speechSynthesis.getVoices() || [];
          };
        }
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (e) {}
    }

    // Prime speech synthesis on first touch/click to unlock WebKit audio session on mobile
    const primeSpeechOnce = () => {
      initSpeechEngine();
      if ('speechSynthesis' in window) {
        try {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
          const dummy = new SpeechSynthesisUtterance('');
          dummy.volume = 0;
          window.speechSynthesis.speak(dummy);
        } catch (e) {}
      }
      document.removeEventListener('touchstart', primeSpeechOnce);
      document.removeEventListener('click', primeSpeechOnce);
    };
    document.addEventListener('touchstart', primeSpeechOnce, { passive: true });
    document.addEventListener('click', primeSpeechOnce, { passive: true });

    function speakWord(text) {
      if (!('speechSynthesis' in window)) return;
      try {
        const clean = text.replace(/[^a-zA-Z\s\-]/g, '').trim();
        if (!clean) return;

        // Cancel previous speech to prevent hanging utterances on iOS/Android
        window.speechSynthesis.cancel();

        // Unpause if mobile browser paused it
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }

        const utterance = new SpeechSynthesisUtterance(clean);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1.0;

        if (!cachedVoices.length) {
          cachedVoices = window.speechSynthesis.getVoices() || [];
        }
        if (cachedVoices.length) {
          const enVoice = cachedVoices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || (v.lang && v.lang.startsWith('en')));
          if (enVoice) utterance.voice = enVoice;
        }

        utterance.onerror = (e) => {
          console.warn('Speech synthesis error:', e);
        };

        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('Speech synthesis exception:', e);
      }
    }

    // --- Mastered Vocabulary Learning State ---
    function getMasteredKey(modNum, sessionNum, progKey = (modalState && modalState.program) || currentProgram || 'ag') {
      return `gsea_${progKey}_m${modNum}_s${sessionNum}_mastered`;
    }

    function getMasteredTerms(modNum, sessionNum) {
      try {
        const raw = localStorage.getItem(getMasteredKey(modNum, sessionNum));
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    function toggleMasteredTerm(modNum, sessionNum, term) {
      const list = getMasteredTerms(modNum, sessionNum);
      const idx = list.indexOf(term);
      if (idx >= 0) {
        list.splice(idx, 1);
      } else {
        list.push(term);
      }
      try {
        localStorage.setItem(getMasteredKey(modNum, sessionNum), JSON.stringify(list));
        ScormAPI.setSuspendData(`m${modNum}_s${sessionNum}_count:${list.length}`);
      } catch (e) {}
      return list;
    }

    // --- Slide-Over Resource Modal State & Controller ---
    let modalState = {
      modNum: 1,
      sessionNum: 1,
      tab: 'objectives',
      program: 'ag',
      flashcardIdx: 0,
      flashcardFlipped: false,
      flashcardMode: 'grid', // Defaults to 'grid' (Full List)
      toeicIdx: 0,
      toeicAnswers: {},
      toeicSelected: null,
      standaloneUrl: '#'
    };

    function openModalDrawer(tabKey, modNum, sessionNum, standaloneUrl) {
      modalState.modNum = modNum;
      modalState.sessionNum = sessionNum;
      modalState.tab = tabKey;
      modalState.program = currentProgram;
      modalState.flashcardIdx = 0;
      modalState.flashcardFlipped = false;
      modalState.flashcardMode = 'grid'; // Default to full list
      modalState.toeicIdx = 0;
      modalState.toeicAnswers = {};
      modalState.toeicSelected = null;
      modalState.standaloneUrl = standaloneUrl || '#';

      // Close portfolio drawer if open
      const portModal = document.getElementById('deck-portfolio-modal');
      if (portModal && !portModal.classList.contains('hidden')) {
        closePortfolioDrawer();
      }

      const modalEl = document.getElementById('deck-resource-modal');
      const backdropEl = document.getElementById('resource-modal-backdrop');
      const drawerEl = document.getElementById('deck-modal-drawer');
      const headerEl = document.getElementById('modal-header');
      const tagEl = document.getElementById('modal-tag');
      const titleEl = document.getElementById('modal-title');
      const ddrsTabBtn = document.getElementById('modal-tab-ddrs');

      const theme = modulesData[modalState.modNum - 1];
      headerEl.style.backgroundColor = theme.primary;
      headerEl.style.borderColor = theme.primaryDark;

      const progConfig = PROGRAMS_CONFIG[modalState.program] || PROGRAMS_CONFIG.ag;
      const isObjectivesSession = tabKey.startsWith('sem_obj_') || modalState.tab.startsWith('sem_obj_');
      const isImmersionSession = !isObjectivesSession && (tabKey === 'immersion' || tabKey.startsWith('immersion_'));
      const isAdminSession = !isObjectivesSession && !isImmersionSession && (modalState.sessionNum === 7 || tabKey.startsWith('admin_'));
      const isFeSession = !isObjectivesSession && !isImmersionSession && !isAdminSession && (modalState.sessionNum === 5 || tabKey.startsWith('fe_'));
      const isDdrsSession = !isObjectivesSession && !isImmersionSession && !isAdminSession && (tabKey === 'ddrs' || modalState.sessionNum === 6);

      const semObjEnTab = document.getElementById('modal-tab-sem-obj-en');
      const semObjFrTab = document.getElementById('modal-tab-sem-obj-fr');
      const feGuidelinesTab = document.getElementById('modal-tab-fe-guidelines');
      const feObjectivesTab = document.getElementById('modal-tab-fe-objectives');
      const feCriteriaTab = document.getElementById('modal-tab-fe-criteria');
      const adminGroupsTab = document.getElementById('modal-tab-admin-groups');
      const adminCalendarTab = document.getElementById('modal-tab-admin-calendar');
      const adminRotaTab = document.getElementById('modal-tab-admin-rota');
      const immersionOverviewTab = document.getElementById('modal-tab-immersion-overview');
      const immersionCitiesTab = document.getElementById('modal-tab-immersion-cities');
      const tabPlanObj = document.getElementById('modal-tab-plan-obj');
      const tabContent = document.getElementById('modal-tab-content');
      const tabObjectives = document.getElementById('modal-tab-objectives');
      const tabPlan = document.getElementById('modal-tab-plan');
      const standardTabs = document.querySelectorAll('.modal-tab-standard');

      if (tabPlanObj) tabPlanObj.classList.add('hidden');
      if (tabContent) tabContent.classList.add('hidden');

      if (isObjectivesSession) {
        if (immersionOverviewTab) immersionOverviewTab.classList.add('hidden');
        if (immersionCitiesTab) immersionCitiesTab.classList.add('hidden');
        if (adminGroupsTab) adminGroupsTab.classList.add('hidden');
        if (adminCalendarTab) adminCalendarTab.classList.add('hidden');
        if (adminRotaTab) adminRotaTab.classList.add('hidden');
        if (ddrsTabBtn) ddrsTabBtn.classList.add('hidden');
        if (feGuidelinesTab) feGuidelinesTab.classList.add('hidden');
        if (feObjectivesTab) feObjectivesTab.classList.add('hidden');
        if (feCriteriaTab) feCriteriaTab.classList.add('hidden');
        standardTabs.forEach(t => t.classList.add('hidden'));

        if (semObjEnTab) semObjEnTab.classList.remove('hidden');
        if (semObjFrTab) semObjFrTab.classList.remove('hidden');

        const isAas = (modalState.program === 'aas' || currentProgram === 'aas');
        tagEl.textContent = isAas ? "Aeronautical English (LV121E) • Semester 2" : "General English (LV101E) • Semester 2";
        titleEl.textContent = isAas ? "AAS Semester 2 Learning Objectives & Competencies" : "AG Semester 2 Learning Objectives & Competencies";
      } else if (isImmersionSession) {
        if (semObjEnTab) semObjEnTab.classList.add('hidden');
        if (semObjFrTab) semObjFrTab.classList.add('hidden');
        if (ddrsTabBtn) ddrsTabBtn.classList.add('hidden');
        if (feGuidelinesTab) feGuidelinesTab.classList.add('hidden');
        if (feObjectivesTab) feObjectivesTab.classList.add('hidden');
        if (feCriteriaTab) feCriteriaTab.classList.add('hidden');
        if (adminGroupsTab) adminGroupsTab.classList.add('hidden');
        if (adminCalendarTab) adminCalendarTab.classList.add('hidden');
        if (adminRotaTab) adminRotaTab.classList.add('hidden');
        standardTabs.forEach(t => t.classList.add('hidden'));

        if (immersionOverviewTab) immersionOverviewTab.classList.remove('hidden');
        if (immersionCitiesTab) immersionCitiesTab.classList.remove('hidden');

        tagEl.textContent = "General English • S2 Milestone";
        titleEl.textContent = "English Immersion & Destination Guides (End of S2)";
      } else if (isAdminSession) {
        if (semObjEnTab) semObjEnTab.classList.add('hidden');
        if (semObjFrTab) semObjFrTab.classList.add('hidden');
        if (immersionOverviewTab) immersionOverviewTab.classList.add('hidden');
        if (immersionCitiesTab) immersionCitiesTab.classList.add('hidden');
        if (ddrsTabBtn) ddrsTabBtn.classList.add('hidden');
        if (feGuidelinesTab) feGuidelinesTab.classList.add('hidden');
        if (feObjectivesTab) feObjectivesTab.classList.add('hidden');
        if (feCriteriaTab) feCriteriaTab.classList.add('hidden');
        standardTabs.forEach(t => t.classList.add('hidden'));

        if (adminGroupsTab) adminGroupsTab.classList.remove('hidden');
        if (adminCalendarTab) adminCalendarTab.classList.remove('hidden');
        if (adminRotaTab) adminRotaTab.classList.remove('hidden');

        tagEl.textContent = "GSEA26A • Course Admin";
        titleEl.textContent = "Course Admin — Class Groups, Teachers, Weekly Calendar & FE Rotas";
      } else if (isFeSession) {
        if (semObjEnTab) semObjEnTab.classList.add('hidden');
        if (semObjFrTab) semObjFrTab.classList.add('hidden');
        if (immersionOverviewTab) immersionOverviewTab.classList.add('hidden');
        if (immersionCitiesTab) immersionCitiesTab.classList.add('hidden');
        if (adminGroupsTab) adminGroupsTab.classList.add('hidden');
        if (adminCalendarTab) adminCalendarTab.classList.add('hidden');
        if (adminRotaTab) adminRotaTab.classList.add('hidden');
        if (ddrsTabBtn) ddrsTabBtn.classList.add('hidden');
        standardTabs.forEach(t => t.classList.add('hidden'));
        if (feGuidelinesTab) feGuidelinesTab.classList.remove('hidden');
        if (feObjectivesTab) feObjectivesTab.classList.remove('hidden');
        if (feCriteriaTab) feCriteriaTab.classList.remove('hidden');

        tagEl.textContent = `${progConfig.code} Module ${modalState.modNum} • Session 5`;
        titleEl.textContent = "Session 5 - Formative Evaluation";
      } else if (isDdrsSession) {
        if (semObjEnTab) semObjEnTab.classList.add('hidden');
        if (semObjFrTab) semObjFrTab.classList.add('hidden');
        if (immersionOverviewTab) immersionOverviewTab.classList.add('hidden');
        if (immersionCitiesTab) immersionCitiesTab.classList.add('hidden');
        if (adminGroupsTab) adminGroupsTab.classList.add('hidden');
        if (adminCalendarTab) adminCalendarTab.classList.add('hidden');
        if (adminRotaTab) adminRotaTab.classList.add('hidden');
        if (ddrsTabBtn) ddrsTabBtn.classList.remove('hidden');
        standardTabs.forEach(t => t.classList.add('hidden'));
        if (feGuidelinesTab) feGuidelinesTab.classList.add('hidden');
        if (feObjectivesTab) feObjectivesTab.classList.add('hidden');
        if (feCriteriaTab) feCriteriaTab.classList.add('hidden');

        tagEl.textContent = `${progConfig.code} Module ${modalState.modNum} • Focus`;
        titleEl.textContent = "DDRS Regulatory Framework";
      } else {
        if (semObjEnTab) semObjEnTab.classList.add('hidden');
        if (semObjFrTab) semObjFrTab.classList.add('hidden');
        if (immersionOverviewTab) immersionOverviewTab.classList.add('hidden');
        if (immersionCitiesTab) immersionCitiesTab.classList.add('hidden');
        if (adminGroupsTab) adminGroupsTab.classList.add('hidden');
        if (adminCalendarTab) adminCalendarTab.classList.add('hidden');
        if (adminRotaTab) adminRotaTab.classList.add('hidden');
        if (ddrsTabBtn) ddrsTabBtn.classList.add('hidden');
        if (feGuidelinesTab) feGuidelinesTab.classList.add('hidden');
        if (feObjectivesTab) feObjectivesTab.classList.add('hidden');
        if (feCriteriaTab) feCriteriaTab.classList.add('hidden');

        const activeModCourse = getActiveModalCourseData();
        const activeSessionData = (activeModCourse.sessions && activeModCourse.sessions[modalState.sessionNum]) || {};
        const hasLessonContent = Boolean(activeSessionData.lessonContent);

        standardTabs.forEach(t => t.classList.remove('hidden'));

        if (hasLessonContent) {
          if (tabObjectives) tabObjectives.classList.add('hidden');
          if (tabPlan) tabPlan.classList.add('hidden');
          if (tabPlanObj) tabPlanObj.classList.remove('hidden');
          if (tabContent) tabContent.classList.remove('hidden');
          if (modalState.tab === 'objectives' || modalState.tab === 'plan') {
            modalState.tab = 'plan_obj';
          }
        } else {
          if (tabPlanObj) tabPlanObj.classList.add('hidden');
          if (tabContent) tabContent.classList.add('hidden');
          if (tabObjectives) tabObjectives.classList.remove('hidden');
          if (tabPlan) tabPlan.classList.remove('hidden');
          if (modalState.tab === 'plan_obj') {
            modalState.tab = 'objectives';
          }
        }

        tagEl.textContent = `${progConfig.code} Module ${modalState.modNum} • Session ${modalState.sessionNum}`;
        const activeMod = modulesData[modalState.modNum - 1];
        titleEl.textContent = (activeMod && activeMod.pages && activeMod.pages[modalState.sessionNum - 1] && activeMod.pages[modalState.sessionNum - 1].title) || `Session ${modalState.sessionNum}`;
      }

      modalEl.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      void modalEl.offsetWidth; // trigger reflow
      backdropEl.classList.remove('opacity-0');
      backdropEl.classList.add('opacity-100');
      drawerEl.classList.remove('translate-x-full');

      switchModalTab(modalState.tab);
    }

    function closeModalDrawer() {
      const modalEl = document.getElementById('deck-resource-modal');
      const backdropEl = document.getElementById('resource-modal-backdrop');
      const drawerEl = document.getElementById('deck-modal-drawer');
      if (!modalEl || modalEl.classList.contains('hidden')) return;

      backdropEl.classList.remove('opacity-100');
      backdropEl.classList.add('opacity-0');
      drawerEl.classList.add('translate-x-full');
      document.body.style.overflow = '';

      setTimeout(() => {
        modalEl.classList.add('hidden');
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      }, 300);
    }

    window.syncPortfolioDrawerHeader = function(trackKey) {
      const activeTrack = trackKey || 'ag';
      const isAg = (activeTrack === 'ag');
      const iconBox = document.getElementById('portfolio-drawer-icon');
      const iconAg = document.getElementById('portfolio-drawer-icon-ag');
      const iconAas = document.getElementById('portfolio-drawer-icon-aas');
      const titleEl = document.getElementById('portfolio-drawer-title');
      const subtitleEl = document.getElementById('portfolio-drawer-subtitle');
      const drawerBtnAg = document.getElementById('drawer-tab-btn-ag');
      const drawerBtnAas = document.getElementById('drawer-tab-btn-aas');

      const drawerFooterBadge = document.getElementById('drawer-footer-track-badge');
      const drawerFooterTitle = document.getElementById('drawer-footer-course-title');
      const drawerFooterVersion = document.getElementById('drawer-footer-version-badge');

      if (isAg) {
        if (iconBox) iconBox.className = "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white bg-emerald-600 shadow-xs";
        if (iconAg) iconAg.classList.remove("hidden");
        if (iconAas) iconAas.classList.add("hidden");
        if (titleEl) titleEl.innerText = "GSEA SEMESTER 2 AG";
        if (subtitleEl) subtitleEl.innerText = "General English (LV101E) • Formative Learning Portfolio & Self-Evaluation Log";
        if (drawerBtnAg) drawerBtnAg.className = "px-2 py-1 rounded text-[11px] font-black transition-all cursor-pointer text-white bg-emerald-600 shadow-xs";
        if (drawerBtnAas) drawerBtnAas.className = "px-2 py-1 rounded text-[11px] font-semibold transition-all cursor-pointer text-white/70 hover:text-white hover:bg-white/10";
        if (drawerFooterBadge) {
          drawerFooterBadge.innerText = "AG • LV101E";
          drawerFooterBadge.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white bg-emerald-600 shadow-xs shrink-0";
        }
        if (drawerFooterTitle) drawerFooterTitle.innerText = "GSEA Semester 2 General English (AG)";
        if (drawerFooterVersion) drawerFooterVersion.className = "font-mono text-emerald-400 font-bold bg-black/40 px-2 py-0.5 rounded border border-white/10 text-[10px] sm:text-xs";
      } else {
        if (iconBox) iconBox.className = "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white bg-blue-600 shadow-xs";
        if (iconAg) iconAg.classList.add("hidden");
        if (iconAas) iconAas.classList.remove("hidden");
        if (titleEl) titleEl.innerText = "GSEA SEMESTER 2 AAS";
        if (subtitleEl) subtitleEl.innerText = "Aeronautical English (LV121E) • Formative Learning Portfolio & Technical Operations Log";
        if (drawerBtnAg) drawerBtnAg.className = "px-2 py-1 rounded text-[11px] font-semibold transition-all cursor-pointer text-white/70 hover:text-white hover:bg-white/10";
        if (drawerBtnAas) drawerBtnAas.className = "px-2 py-1 rounded text-[11px] font-black transition-all cursor-pointer text-white bg-blue-600 shadow-xs";
        if (drawerFooterBadge) {
          drawerFooterBadge.innerText = "AAS • LV121E";
          drawerFooterBadge.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white bg-blue-600 shadow-xs shrink-0";
        }
        if (drawerFooterTitle) drawerFooterTitle.innerText = "GSEA Semester 2 Aeronautical English (AAS)";
        if (drawerFooterVersion) drawerFooterVersion.className = "font-mono text-blue-400 font-bold bg-black/40 px-2 py-0.5 rounded border border-white/10 text-[10px] sm:text-xs";
      }
    };

    window.openPortfolioDrawer = function(trackKey) {
      const activeTrack = trackKey || currentProgram || 'ag';
      const targetUrl = `portfolio.html?track=${activeTrack}&_v=1.0.0`;

      const modalEl = document.getElementById('deck-portfolio-modal');
      const backdropEl = document.getElementById('portfolio-modal-backdrop');
      const drawerEl = document.getElementById('deck-portfolio-drawer');
      const iframeEl = document.getElementById('portfolio-drawer-iframe');

      if (!modalEl || !drawerEl || !iframeEl) return;

      // Close session resource modal if open
      const resModal = document.getElementById('deck-resource-modal');
      if (resModal && !resModal.classList.contains('hidden')) {
        closeModalDrawer();
      }

      // Update Header branding
      window.syncPortfolioDrawerHeader(activeTrack);

      // Sync iframe content
      const loadedTrack = iframeEl.getAttribute('data-loaded-track');
      if (loadedTrack !== activeTrack || iframeEl.src === 'about:blank' || !iframeEl.src) {
        iframeEl.src = targetUrl;
        iframeEl.setAttribute('data-loaded-track', activeTrack);
      } else {
        try {
          if (iframeEl.contentWindow && typeof iframeEl.contentWindow.switchTrack === 'function') {
            iframeEl.contentWindow.switchTrack(activeTrack, false);
          }
        } catch (e) {
          // ignore cross-frame errors
        }
      }

      modalEl.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      void modalEl.offsetWidth; // trigger reflow

      backdropEl.classList.remove('opacity-0');
      backdropEl.classList.add('opacity-100');
      drawerEl.classList.remove('translate-x-full');
    };

    window.closePortfolioDrawer = function() {
      const modalEl = document.getElementById('deck-portfolio-modal');
      const backdropEl = document.getElementById('portfolio-modal-backdrop');
      const drawerEl = document.getElementById('deck-portfolio-drawer');
      if (!modalEl || modalEl.classList.contains('hidden')) return;

      backdropEl.classList.remove('opacity-100');
      backdropEl.classList.add('opacity-0');
      drawerEl.classList.add('translate-x-full');
      document.body.style.overflow = '';

      setTimeout(() => {
        modalEl.classList.add('hidden');
      }, 300);
    };

    window.setDrawerTrack = function(trackKey) {
      if (trackKey !== 'ag' && trackKey !== 'aas') return;
      window.syncPortfolioDrawerHeader(trackKey);
      const iframeEl = document.getElementById('portfolio-drawer-iframe');
      if (iframeEl && iframeEl.contentWindow && typeof iframeEl.contentWindow.switchTrack === 'function') {
        try {
          iframeEl.contentWindow.switchTrack(trackKey, true);
        } catch (e) {}
      }
      if (typeof switchProgram === 'function' && trackKey !== currentProgram) {
        switchProgram(trackKey);
      }
    };

    window.syncPortfolioDrawerTrack = function(trackKey) {
      const modalEl = document.getElementById('deck-portfolio-modal');
      const isOpen = modalEl && !modalEl.classList.contains('hidden');
      if (isOpen) {
        window.setDrawerTrack(trackKey);
      }
    };

    function switchModalTab(tabKey) {
      modalState.tab = tabKey;
      const tabBtns = document.querySelectorAll('.modal-tab-btn');
      tabBtns.forEach(btn => {
        const isSelected = btn.getAttribute('data-tab') === tabKey;
        if (isSelected) {
          btn.classList.add('text-white', 'bg-white/25', 'shadow-xs');
          btn.classList.remove('text-white/80', 'hover:bg-white/10');
        } else {
          btn.classList.remove('text-white', 'bg-white/25', 'shadow-xs');
          btn.classList.add('text-white/80', 'hover:bg-white/10');
        }
      });

      renderModalBody();
    }

    function getActiveModalCourseData() {
      const progKey = modalState.program || currentProgram || 'ag';
      const rootData = window.COURSE_DATA || {};
      const progData = rootData[progKey] || rootData.ag || rootData;
      return progData[modalState.modNum] || rootData[modalState.modNum] || {};
    }

    function renderModalBody() {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const theme = modulesData[modalState.modNum - 1];
      const modCourse = getActiveModalCourseData();
      const sessionData = (modCourse.sessions && modCourse.sessions[modalState.sessionNum]) || {};

      if (modalState.tab === 'sem_obj_en') {
        renderSemesterObjectivesTab('en', theme);
      } else if (modalState.tab === 'sem_obj_fr') {
        renderSemesterObjectivesTab('fr', theme);
      } else if (modalState.tab === 'immersion_overview' || modalState.tab === 'immersion') {
        renderImmersionOverviewTab(theme);
      } else if (modalState.tab === 'immersion_cities') {
        renderImmersionCitiesTab(theme);
      } else if (modalState.tab === 'admin_groups') {
        renderAdminGroupsTab(theme);
      } else if (modalState.tab === 'admin_calendar') {
        renderAdminCalendarTab(theme);
      } else if (modalState.tab === 'admin_rota') {
        renderAdminRotaTab(theme);
      } else if (modalState.tab === 'fe_guidelines') {
        renderFeGuidelinesTab(modalState.modNum, theme);
      } else if (modalState.tab === 'fe_objectives') {
        renderFeObjectivesTab(modalState.modNum, theme);
      } else if (modalState.tab === 'fe_criteria') {
        renderFeCriteriaTab(modalState.modNum, theme);
      } else if (modalState.tab === 'objectives') {
        const obj = sessionData.objectives || { items: [], summary: '' };
        bodyEl.innerHTML = `
          <div class="space-y-4">
            <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Session Objectives Overview</span>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1">${obj.summary || 'Key competencies targeted in this session.'}</p>
            </div>
            <div class="space-y-2.5">
              ${(obj.items || []).map(item => `
                <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-slate-300 transition-all">
                  <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">${item.num}</span>
                  <div>
                    <h4 class="text-xs sm:text-sm font-bold text-slate-800">${item.title}</h4>
                    <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">${item.description}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      } else if (modalState.tab === 'plan') {
        const plan = sessionData.lessonPlan || { items: [], summary: '' };
        bodyEl.innerHTML = `
          <div class="space-y-4">
            <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">2-Hour Lesson Outline</span>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1">${plan.summary || 'Pacing and breakdown across the 2-hour lesson.'}</p>
            </div>
            <div class="space-y-2.5">
              ${(plan.items || []).map((item, idx) => `
                <div class="grid grid-cols-[68px_1fr] items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
                  <span class="text-white text-xs font-black py-1 rounded-md text-center shrink-0 shadow-xs" style="background-color: ${theme.primary};">${item.time}</span>
                  <div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-xs font-black" style="color: ${theme.accent};">${idx + 1}.</span>
                      <h4 class="text-xs sm:text-sm font-bold text-slate-800">${item.title}</h4>
                    </div>
                    <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">${item.description}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      } else if (modalState.tab === 'plan_obj') {
        renderLessonPlanObjectivesTab(sessionData, theme);
      } else if (modalState.tab === 'content') {
        renderLessonContentTab(sessionData, theme);
      } else if (modalState.tab === 'revision') {
        renderRevisionTab(sessionData, theme);
      } else if (modalState.tab === 'materials') {
        renderMaterialsTab(sessionData, theme);
      } else if (modalState.tab === 'toeic') {
        renderToeicTab(sessionData, theme);
      } else if (modalState.tab === 'ddrs') {
        renderDdrsTab(theme);
      }
    }

    function renderLessonPlanObjectivesTab(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const obj = sessionData.objectives || { items: [], summary: '' };
      const plan = sessionData.lessonPlan || { items: [], summary: '' };

      bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Session Header / Summary Card -->
          <div class="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div class="flex items-center justify-between gap-3 mb-2">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold text-white uppercase tracking-wider shadow-xs" style="background-color: ${theme.primary};">
                2-Hour Session Plan &amp; Learning Targets
              </span>
              <button onclick="switchModalTab('content')" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-white shadow-xs hover:shadow-md transition-all cursor-pointer" style="background-color: ${theme.accent};">
                <span>View Lesson Content</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
            <h3 class="text-base sm:text-lg font-black text-slate-800">${obj.title || 'Ground Operations & Turnaround'}</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">${obj.summary || ''}</p>
          </div>

          <!-- Competencies & Language Objectives -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
              <div class="w-2 h-4 rounded-xs" style="background-color: ${theme.primary};"></div>
              <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">Target Competencies &amp; Language Focus</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${(obj.items || []).map(item => `
                <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-slate-300 transition-all">
                  <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">${item.num}</span>
                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-slate-800">${item.title}</h5>
                    <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-1">${item.description}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 2-Hour Pacing Timeline -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
              <div class="w-2 h-4 rounded-xs" style="background-color: ${theme.accent};"></div>
              <h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700">2-Hour Pacing &amp; Lesson Breakdown</h4>
            </div>
            <div class="space-y-2.5">
              ${(plan.items || []).map((item, idx) => `
                <div class="grid grid-cols-[68px_1fr] items-center gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                  <span class="text-white text-xs font-black py-1.5 rounded-md text-center shrink-0 shadow-xs" style="background-color: ${theme.primary};">${item.time}</span>
                  <div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-xs font-black" style="color: ${theme.accent};">${idx + 1}.</span>
                      <h5 class="text-xs sm:text-sm font-bold text-slate-800">${item.title}</h5>
                    </div>
                    <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-1">${item.description}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Action Switcher -->
          <div class="p-4 bg-slate-100 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p class="text-xs font-bold text-slate-700">Ready to proceed to classroom activities?</p>
              <p class="text-[11px] text-slate-500">${modalState.sessionNum === 1 ? 'Access the aviation news warm-up, speed-dating survey, modals practice, and EU261 role-play.' : (modalState.sessionNum === 2 ? 'Access the terminal flow map, spatial prepositions practice, apron access role-play, and guidance workshop.' : (modalState.sessionNum === 4 ? 'Access the aviation roles overview, roles & responsibilities practice, day-in-the-life simulations, and career dilemma debate.' : 'Access the interactive vehicle cards, turnaround clock, and role-play simulations.'))}</p>
            </div>
            <button onclick="switchModalTab('content')" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white shadow-xs hover:shadow-md transition-all cursor-pointer" style="background-color: ${theme.primary};">
              <span>Open Lesson Content</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      `;
    }


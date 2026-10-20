    function renderActivityInstructions(act, theme) {
      if (!act) return '';
      const badges = Array.isArray(act.modeBadges) ? act.modeBadges : [];
      const steps = Array.isArray(act.instructions) ? act.instructions : [];
      const deliverable = act.deliverable || '';
      const teacherNotes = act.teacherNotes || '';

      if (badges.length === 0 && steps.length === 0 && !deliverable && !teacherNotes) {
        return '';
      }

      let html = '<div class="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3.5 space-y-3 mb-3 text-left">';

      // 1. Activity Mode Pills Bar
      if (badges.length > 0) {
        html += '<div class="flex flex-wrap items-center gap-1.5">';
        html += '<span class="text-[10px] font-black uppercase tracking-wider text-slate-400 mr-1">Activity Mode:</span>';
        badges.forEach(b => {
          html += '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white text-slate-700 border border-slate-200/80 shadow-2xs">' + b + '</span>';
        });
        html += '</div>';
      }

      // 2. Student Action Steps & Deliverable
      if (steps.length > 0 || deliverable) {
        html += '<div class="p-3 bg-white border border-blue-200/80 rounded-xl space-y-2 shadow-2xs">';
        html += '<div class="flex items-center gap-2 text-blue-900 border-b border-blue-100 pb-1.5">';
        html += '<svg width="15" height="15" class="text-blue-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>';
        html += '<span class="text-xs font-bold uppercase tracking-wide text-blue-950">Student Instructions &amp; Action Steps</span>';
        html += '</div>';

        if (steps.length > 0) {
          html += '<ol class="space-y-1.5 text-xs text-slate-700 leading-relaxed pl-1">';
          steps.forEach(st => {
            html += '<li class="flex items-start gap-2">';
            html += '<span class="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5"></span>';
            html += '<span>' + st + '</span>';
            html += '</li>';
          });
          html += '</ol>';
        }

        if (deliverable) {
          html += '<div class="mt-2 pt-2 border-t border-blue-100/80 flex items-start gap-2 text-xs">';
          html += '<span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 shrink-0 mt-0.5">Expected Output</span>';
          html += '<span class="text-blue-950 font-semibold">' + deliverable + '</span>';
          html += '</div>';
        }

        html += '</div>';
      }

      // 3. Collapsible Teacher Facilitation & Timing Cue
      if (teacherNotes) {
        html += '<details class="group rounded-xl border border-purple-200 bg-purple-50/50 p-2.5 transition-all text-xs">';
        html += '<summary class="flex items-center justify-between font-bold text-purple-950 cursor-pointer select-none">';
        html += '<span class="flex items-center gap-2">';
        html += '<svg width="15" height="15" class="text-purple-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>';
        html += '<span>👨‍🏫 Teacher Facilitation &amp; Timing Cue</span>';
        html += '</span>';
        html += '<span class="text-[11px] text-purple-700 font-semibold group-open:rotate-180 transition-transform duration-200">▾</span>';
        html += '</summary>';
        html += '<div class="mt-2 pt-2 border-t border-purple-200/80 text-purple-900 leading-relaxed pl-6">';
        html += teacherNotes;
        html += '</div>';
        html += '</details>';
      }

      html += '</div>';
      return html;
    }

    function renderLessonContentTab(sessionData, theme) {
      const prog = (modalState && modalState.program) || currentProgram || 'ag';
      const isAg = prog === 'ag';
      if (isAg) {
        if (modalState.modNum === 3) {
          if (modalState.sessionNum === 1) {
            renderAg3LessonContentTabSession1(sessionData, theme);
          } else if (modalState.sessionNum === 2) {
            renderAg3LessonContentTabSession2(sessionData, theme);
          } else if (modalState.sessionNum === 4) {
            renderAg3LessonContentTabSession4(sessionData, theme);
          } else {
            renderAg3LessonContentTabSession3(sessionData, theme);
          }
          return;
        }
        if (modalState.modNum === 2) {
          if (modalState.sessionNum === 5 || modalState.sessionNum === 1) {
            renderAg2LessonContentTabSession1(sessionData, theme);
          } else if (modalState.sessionNum === 6 || modalState.sessionNum === 2) {
            renderAg2LessonContentTabSession2(sessionData, theme);
          } else if (modalState.sessionNum === 7 || modalState.sessionNum === 3) {
            renderAg2LessonContentTabSession3(sessionData, theme);
          } else {
            renderAg2LessonContentTabSession3(sessionData, theme);
          }
          return;
        }
        if (modalState.sessionNum === 1) {
          renderAgLessonContentTabSession1(sessionData, theme);
        } else if (modalState.sessionNum === 2) {
          renderAgLessonContentTabSession2(sessionData, theme);
        } else if (modalState.sessionNum === 4) {
          renderAgLessonContentTabSession4(sessionData, theme);
        } else {
          renderAgLessonContentTabSession3(sessionData, theme);
        }
        return;
      }

      if (modalState.modNum === 2) {
        if (modalState.sessionNum === 5 || modalState.sessionNum === 1) {
          renderAas2LessonContentTabSession1(sessionData, theme);
        } else if (modalState.sessionNum === 6 || modalState.sessionNum === 2) {
          renderAas2LessonContentTabSession2(sessionData, theme);
        } else if (modalState.sessionNum === 7 || modalState.sessionNum === 3) {
          renderAas2LessonContentTabSession3(sessionData, theme);
        } else {
          renderAas2LessonContentTabSession3(sessionData, theme);
        }
        return;
      }

      if (modalState.modNum === 3) {
        if (modalState.sessionNum === 1) {
          renderAas3LessonContentTabSession1(sessionData, theme);
        } else if (modalState.sessionNum === 2) {
          renderAas3LessonContentTabSession2(sessionData, theme);
        } else if (modalState.sessionNum === 3) {
          renderAas3LessonContentTabSession3(sessionData, theme);
        } else if (modalState.sessionNum === 4) {
          renderAas3LessonContentTabSession4(sessionData, theme);
        }
        return;
      }

      if (modalState.sessionNum === 1) {
        renderLessonContentTabSession1(sessionData, theme);
      } else if (modalState.sessionNum === 2) {
        renderLessonContentTabSession2(sessionData, theme);
      } else if (modalState.sessionNum === 4) {
        renderLessonContentTabSession4(sessionData, theme);
      } else {
        renderLessonContentTabSession3(sessionData, theme);
      }
    }


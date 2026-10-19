    function toggleFlashcardFlip() {
      modalState.flashcardFlipped = !modalState.flashcardFlipped;
      const el = document.getElementById('flashcard-inner');
      if (el) el.classList.toggle('flipped', modalState.flashcardFlipped);
    }

    function prevFlashcard() {
      if (modalState.flashcardIdx > 0) {
        modalState.flashcardIdx--;
        modalState.flashcardFlipped = false;
        renderModalBody();
      }
    }

    function nextFlashcard() {
      const modCourse = getActiveModalCourseData();
      const sessionData = (modCourse.sessions && modCourse.sessions[modalState.sessionNum]) || {};
      const terms = (sessionData.revision && sessionData.revision.terms) || [];
      if (modalState.flashcardIdx < terms.length - 1) {
        modalState.flashcardIdx++;
        modalState.flashcardFlipped = false;
        renderModalBody();
      }
    }

    function setFlashcardMode(mode) {
      modalState.flashcardMode = mode;
      renderModalBody();
    }

    function handleMasteredToggle(term) {
      toggleMasteredTerm(modalState.modNum, modalState.sessionNum, term);
      renderModalBody();
    }

    function handleToeicSelect(letter) {
      if (!modalState.toeicAnswers) modalState.toeicAnswers = {};
      const currentIdx = modalState.toeicIdx || 0;
      if (modalState.toeicAnswers[currentIdx] !== undefined && modalState.toeicAnswers[currentIdx] !== null) return;
      
      modalState.toeicAnswers[currentIdx] = letter;
      modalState.toeicSelected = letter; // legacy support

      const modCourse = getActiveModalCourseData();
      const sessionData = (modCourse.sessions && modCourse.sessions[modalState.sessionNum]) || {};
      const questions = (sessionData.materials && sessionData.materials.toeicQuestions && sessionData.materials.toeicQuestions.length > 0)
        ? sessionData.materials.toeicQuestions
        : (sessionData.materials && sessionData.materials.toeic ? [sessionData.materials.toeic] : []);

      const totalQs = questions.length || 5;
      let correctCount = 0;
      questions.forEach((q, idx) => {
        if (modalState.toeicAnswers[idx] === q.correctLetter) correctCount++;
      });
      const scorePercent = Math.round((correctCount / totalQs) * 100);
      ScormAPI.setScore(scorePercent);

      renderModalBody();
    }

    function jumpToeicQuestion(idx) {
      modalState.toeicIdx = idx;
      renderModalBody();
    }

    function prevToeicQuestion() {
      if (modalState.toeicIdx > 0) {
        modalState.toeicIdx--;
        renderModalBody();
      }
    }

    function nextToeicQuestion() {
      const modCourse = getActiveModalCourseData();
      const sessionData = (modCourse.sessions && modCourse.sessions[modalState.sessionNum]) || {};
      const questions = (sessionData.materials && sessionData.materials.toeicQuestions) || [];
      if (modalState.toeicIdx < questions.length - 1) {
        modalState.toeicIdx++;
        renderModalBody();
      }
    }

    function resetToeicQuiz() {
      modalState.toeicAnswers = {};
      modalState.toeicIdx = 0;
      modalState.toeicSelected = null;
      renderModalBody();
    }

    // Standard DOMContentLoaded listener properly calling initDeck()
    document.addEventListener('DOMContentLoaded', () => {
      initDeck();
    });

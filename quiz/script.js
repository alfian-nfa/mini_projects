fetch("question.json")
  .then((response) => response.json())
  .then((data) => {
    const quizData = data;
    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");
    const questionsNumber = 5;

    shuffleArray(quizData);

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
      deselectAnswers();

      const choices = quizData[currentQuiz].choices;

      questionEl.innerText = quizData[currentQuiz].question;
      // Shuffle the choices array
      shuffleArray(choices);

      // Update the innerText of your elements with the shuffled choices
      a_text.innerText = choices[0];
      b_text.innerText = choices[1];
      c_text.innerText = choices[2];
      d_text.innerText = choices[3];
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function deselectAnswers() {
      answerEls.forEach((answerEl) => (answerEl.checked = false));
    }

    function getSelected() {
      let answer;

      answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
          answer = answerEl.nextElementSibling.textContent;
        }
      });

      return answer;
    }

    submitBtn.addEventListener("click", () => {
      const answer = getSelected();

      if (answer) {
        if (answer === quizData[currentQuiz].correctAnswer) {
          score++;
        }

        currentQuiz++;

        if (currentQuiz < questionsNumber) {
          loadQuiz();
        } else {
          quiz.innerHTML = `
                      <h2>You answered ${score}/${questionsNumber} questions correctly</h2>
      
                      <button onclick="location.reload()">Reload</button>
                  `;
        }
      }
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));

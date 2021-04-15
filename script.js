class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("Réalisez-vous des démarches en ligne seul(e) ?", ["Toujours", "Jamais", "Rarement", "Souvent"], "Toujours"),
    new Question("Utilisez-vous régulièrement votre adresse email pour communiquer ?", ["Toujours", "Jamais", "Rarement", "Souvent"], "Toujours"),
    new Question("Utilisez-vous internet pour chercher des informations ?", ["Toujours", "Jamais", "Rarement", "Souvent"], "Toujours"),
    new Question("Utilisez vous professionnellement une smartphone ou une tablette ?", ["Toujours", "Jamais", "Rarement", "Souvent"], "Toujours"),
  ];
  
  console.log(questions);
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  // Regroup all  functions relative to the App Display
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Questionnaire terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();
  
  // Result

  
  console.log(quiz);
  
// from //////////////////////////////////

const formBtn1 = document.querySelector("#btn-1")
const formBtnPrev2 = document.querySelector("#btn-2-prev")
const formBtnNext2 = document.querySelector("#btn-2-next")
const formBtn3 = document.querySelector("#btn-3")

// Button listener of form 1
formBtn1.addEventListener("click", function(e) {
    gotoNextForm(formBtn1, formBtnNext2, 1, 2)
    e.preventDefault()
})
  
// Next button listener of form 2
formBtnNext2.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext2, formBtn3, 2, 3)
    e.preventDefault()
})
  
// Previous button listener of form 2
formBtnPrev2.addEventListener("click", function(e) {
    gotoNextForm(formBtnNext2, formBtn1, 2, 1)
    e.preventDefault()
})
  
// Button listener of form 3
formBtn3.addEventListener("click", function(e) {
    document.querySelector(`.step--1`).classList.remove("step-active")
    document.querySelector(`.step--2`).classList.add("step-active")
    formBtn3.parentElement.style.display = "none"
    document.querySelector(".form--message").innerHTML = `
    <h1 class="form--message-text">Super vous avez fini le questionnaire!</h1>
    `
    e.preventDefault()
})

    const gotoNextForm = (prev, next, stepPrev, stepNext) => {
    // Get form through the button
    const prevForm = prev.parentElement
    const nextForm = next.parentElement
    const nextStep = document.querySelector(`.step--${stepNext}`)
    const prevStep = document.querySelector(`.step--${stepPrev}`)
    // Add active/inactive classes to both previous and next form
    nextForm.classList.add("form-active")
    nextForm.classList.add("form-active-animate")
    prevForm.classList.add("form-inactive")
    // Change the active step element
    prevStep.classList.remove("step-active")
    nextStep.classList.add("step-active")
    // Remove active/inactive classes to both previous an next form
    setTimeout(() => {
      prevForm.classList.remove("form-active")
      prevForm.classList.remove("form-inactive")
      nextForm.classList.remove("form-active-animate")
    }, 1000)
}

window.open('popup.html', '', 'resizable=no, location=no, width=200, height=100, menubar=no, status=no, scrollbars=no, menubar=no')

const quizData = [
  {
    question: "How old is Bill Gates?",
    a: "58",
    b: "30",
    c: "56",
    d: "65",
    correct: "d",
  },
  {
    question: "Who is the president of the U.S?",
    a: "Jimmy Morales",
    b: "Vladimir Putin",
    c: "Joe Biden",
    d: "Queen Isabell II",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2021?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "None",
    correct: "a",
  },
  {
    question: "Who created Apple company?",
    a: "Steve Ballmer",
    b: "Bill Gates",
    c: "Steve Jobs",
    d: "Sergey Brin",
    correct: "c",
  },
];

const answers = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const q_text = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("btn-submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  q_text.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answers.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submit.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

        <button onclick="location.reload()">Play again</button>
      `;
    }
  }
});

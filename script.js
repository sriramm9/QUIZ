const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
    answer: 0,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: 3,
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "8", "10", "16"],
    answer: 1,
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const quizContainer = document.getElementById('quiz');
  const questionData = quizData[currentQuestionIndex];
  
  quizContainer.innerHTML = `
    <h2>${questionData.question}</h2>
    ${questionData.options.map((option, index) => {
      return `<div>
                <input type="radio" id="option${index}" name="answer" value="${index}">
                <label for="option${index}">${option}</label>
              </div>`;
    }).join('')}
  `;
}

function submitQuiz() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    const selectedAnswer = parseInt(selectedOption.value);
    if (selectedAnswer === quizData[currentQuestionIndex].answer) {
      score++;
    }
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `You scored ${score} out of ${quizData.length}.`;
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('submit-btn').style.display = 'none';
}

function startQuiz() {
  document.getElementById('start-btn').style.display = 'none';
  document.querySelector('.quiz-heading').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('submit-btn').style.display = 'inline-block';
  loadQuestion();
}

let questionShow = document.getElementById("question");
let nextBtn = document.getElementById("nextBtn");
let optionsContainer = document.getElementById("option");
let celebration = document.getElementById("celebration");
let finalScore = document.getElementById("finalScore");
let restartBtn = document.getElementById("restartBtn");
let failScreen = document.getElementById("failScreen");
let failScore = document.getElementById("failScore");
let retryBtn = document.getElementById("retryBtn");
let progress = document.getElementById("progress");

 const questions = [
  // HTML Questions
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    answer: "<a>"
  },
  {
    question: "Which HTML tag is used to display the largest heading?",
    options: ["<h6>", "<h1>", "<heading>", "<head>"],
    answer: "<h1>"
  },
  {
    question: "Which attribute is used to display an image in HTML?",
    options: ["src", "href", "link", "image"],
    answer: "src"
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>"
  },
  {
    question: "Which element is used to break a line in HTML?",
    options: ["<br>", "<p>", "<hr>", "<line>"],
    answer: "<br>"
  },

  // CSS Questions
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color"
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "color", "text-color", "background-color"],
    answer: "color"
  },
  {
    question: "Which of the following is NOT a CSS unit?",
    options: ["px", "em", "rem", "doc"],
    answer: "doc"
  },
  {
    question: "Which property is used to change the font size in CSS?",
    options: ["text-size", "font-style", "font-size", "size"],
    answer: "font-size"
  },
  {
    question: "How do you select an element with id 'demo' in CSS?",
    options: [".demo", "#demo", "demo", "*demo"],
    answer: "#demo"
  },

  // JavaScript Questions
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    answer: "//"
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "constant", "const"],
    answer: "const"
  },
  {
    question: "What is the correct way to write 'Hello World' in an alert box?",
    options: ["msg('Hello World')", "alert('Hello World')", "prompt('Hello World')", "console.log('Hello World')"],
    answer: "alert('Hello World')"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["-", "x", "=", "=="],
    answer: "="
  },
  {
    question: "Which method is used to convert a string to uppercase in JavaScript?",
    options: ["toUpper()", "upperCase()", "toUpperCase()", "toCaps()"],
    answer: "toUpperCase()"
  }
];

let currentQuestion = 0;
let score = 0;


function showQuestion(){
  


   que = questions[currentQuestion];
  questionShow.innerText = que.question;
  optionsContainer.innerHTML = "";

  que.options.forEach(function(opt){
    const optionBtn = document.createElement("button");
    optionBtn.innerText = opt;
    optionBtn.classList.add("optionBtn");

    optionBtn.addEventListener("click" , function(){
      if(opt === que.answer){
        score++;
        optionBtn.style.background = "#ff6ec7";
        optionBtn.style.color = "#fff";
      } else {
        optionBtn.style.background = "#d63031";
        optionBtn.style.color = "#fff";
      }

      setTimeout(() => {
        currentQuestion ++;
         const pct = Math.round(((currentQuestion + 1) / questions.length) * 100);
      progress.style.width = pct + '%';
      progress.textContent = `Question ${currentQuestion+1} of ${questions.length}`;
        if(currentQuestion < questions.length) {
          showQuestion();
        } else {
          showResult();
        }
      }, 800);
    });

    optionsContainer.appendChild(optionBtn);
  });
}

function showResult(){
  document.querySelector(".quiz-container").style.display = "none";

  if(score > 0){  
    celebration.style.display = "flex";
    finalScore.innerText = `You got ${score} out of ${questions.length} correct!`;

  
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
      confetti.style.backgroundColor = ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1"][Math.floor(Math.random()*4)];
      celebration.appendChild(confetti);
    }
  } else {
    
    failScreen.style.display = "flex";
    failScore.innerText = `You got ${score} out of ${questions.length} correct!`;
  }
}

restartBtn.addEventListener("click", () => {
  location.reload();
});

retryBtn.addEventListener("click", () => {
  location.reload();
});

showQuestion();
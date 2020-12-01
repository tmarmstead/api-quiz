// Gran elements from html
let startScreenEl = document.getElementById('start-screen');
let questionZoneEl = document.getElementById('question-zone');
let endScreenEl = document.getElementById('end-screen');
let currentTimeEl = document.getElementById('current-time');
let startButtonEl = document.getElementById('start-quiz');
let questionTitleEl = document.getElementById('question-title');
let choicesEl = document.getElementById('choices')
let correctIncorrectEl = document.getElementById('correct-incorrect');

// Hiding blocks b & c, allowing block a to be visible
questionZoneEl.style.display = 'none';
endScreenEl.style.display = 'none';


// Function to Start Quiz
function startQuiz() {
    timerId = setInterval(clockTick, 1000);
    startScreenEl.style.display = 'none';
    questionZoneEl.style.display = '';
    endScreenEl.style.display = 'none';
    generateQuestion();
}
startButtonEl.onclick = startQuiz;

// declare initial variable
let timerId;
let timeRemaining = 10;
let questionIndex = 0;


let questions = [
    {
        title: 'What is 1 + 1',
        choices: [1, 2, 3, 4],
        answer: 2
    },
    {
        title: 'What is our home planet',
        choices: ['Earth', 'Mars', 'Jupiter', 'Sun'],
        answer: 'Earth'
    },
    {
        title: 'What is a variable',
        choices: ['let', 'function', 'array', 'object'],
        answer: 'let'
    }
];

function generateQuestion() {
    let currentQuestion = questions[questionIndex];
    questionTitleEl.textContent = currentQuestion.title;
    
    currentQuestion.choices.forEach(function(options) {
    console.log(options);
    let node = document.createElement('button');
    let textnode = document.createTextNode(options);
        node.appendChild(textnode);
    let setValue = document.getElementById('question-zone').appendChild(node);
        setValue.setAttribute('value', options);
        console.log(setValue);
    
    })
    
   

    // Create 4 buttons (HINT foreach loop(pizza))
    // let tempBtn = document.createElement('button')

            // display choice on it
            // .textContent = pizza
            // add attribute ('value', pizza)

            // btn.onclick = validateAnswer;

            // choicesEL.appendchild(btn)
}

function validateAnswer() {

    let userAnswer = this.value;
    let correctAnswer = question[questionIndex].answer;
    // Check if user clicked the correct button

        // If wrong

            // Timer - 10 seconds
            // Display: InCorrect in correct-incorrect div

        // If right 

            // Display Correct

        // questionIndex++;
        // if (questionIndex === questions.length) 
            // end game
            // else 
            // generfateQUestions()
}

function quizEnd() {
    // hide A / b
    // Show C
}

function clockTick(){
    timeRemaining--;
    currentTimeEl.textContent = `Time: ${timeRemaining}`;

    // if time <0 run quizEnd()
    if (timeRemaining < 1) {
        clearInterval(timerId);
        currentTimeEl.textContent = 'Time\'s Up!'
    }
}










// // Create elements 
// var body = document.body;
// var mainEl = document.createElement('div');
// var titleEl = document.createElement('h1');
// var titleCaptionEl = document.createElement('p');
// var titleCaption2El = document.createElement('p');
// var questionEl = document.createElement('h2');
// var listEl = document.createElement('ol');
// var li1 = document.createElement('li'); 
// var li2 = document.createElement('li');
// var li3 = document.createElement('li'); 
// var li4 = document.createElement('li');
// var listItems = document.getElementsByTagName('li');
// var startQuizButton = document.createElement('button');



// // Add text content to elements
// // countDownEl.textContent = "Time: ";
// titleEl.textContent = 'Coding Quiz Challenge';
// titleCaptionEl.textContent = 'Try to answer the following code-related questions within the time limit.';
// titleCaption2El.textContent = 'Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
// startQuizButton.textContent = 'Start Quiz';


// // Append elements to html
// // body.appendChild(countDownEl);
// body.appendChild(titleEl);
// body.appendChild(mainEl);
// mainEl.appendChild(titleCaptionEl);
// mainEl.appendChild(titleCaption2El);
// mainEl.appendChild(startQuizButton);


// // Style elements
// body.style.fontFamily = 'helvetica';
// titleEl.style = 'text-align: center';
// titleEl.style.margin = '120px 0 0 0';
// titleCaptionEl.style = 'text-align: center';
// titleCaption2El.style = 'text-align: center';
// startQuizButton.style.fontFamily = 'helvetica';
// // countDownEl.style.margin = '10px 0 100px 1400px';


// // Function to start quiz / Start timer when button is clicked
// var timeRemaining = 60;

// function countDown() {
    
//   var timerInterval = setInterval(function() {
//     timeRemaining--;

//     if(timeRemaining === 0) {
//       clearInterval(timerInterval);
//         addContent();
//     }
//   }, 1000);

  
// function addContent() {
//     var countDownEl = document.createElement('p').innerhtml = 'Time: ' + timeRemaining;
//     countDownEl.textContent = 'Time: ' + timeRemaining;
    
//     body.appendChild(countDownEl);
  
//   }
  

// }
// countDown();
// // Create function to manipulate content once 'Start Quiz' button is clicked



// // Create buttons



// // console.log section for debugging
// console.log(countDown());
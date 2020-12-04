// Grab elements from html
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

// Declare initial variable
        let timerId;
        let timeRemaining = 60;
        let questionIndex = 0;


        let questions = [
            {
                title: 'What character/ characters are used to surround the block of a function?',
                choices: ['()', '!', '{}', '$'],
                answer: '{}'
            },
            {
                title: 'What is used to print to the console??',
                choices: ['var', 'function', 'i', 'console.log'],
                answer: 'console.log'
            },
            {
                title: 'What is a variable?',
                choices: ['let', 'function', 'array', 'object'],
                answer: 'let'
            },
            {
                title: 'How do you commit changes in your terminal?',
                choices: ['git commit -m', 'git status', 'touch', 'git push origin main'],
                answer: 'git commit -m'
            },
            {
                title: 'Which of the following is not a programming language?',
                choices: ['spbl', 'css', 'javascript', 'html'],
                answer: 'spbl'
            },
        ];
    // Function to make questions and the relative choice buttons
function generateQuestion() {
    
    let questions = [
        {
            title: 'What character/ characters are used to surround the block of a function?',
            choices: ['()', '!', '{}', '$'],
            answer: '{Earth}'
        },
        {
            title: 'What is used to print to the console??',
            choices: ['var', 'function', 'i', 'console.log'],
            answer: 'console.log'
        },
        {
            title: 'What is a variable?',
            choices: ['let', 'function', 'array', 'object'],
            answer: 'let'
        },
        {
            title: 'How do you commit changes in your terminal?',
            choices: ['git commit -m', 'git status', 'touch', 'git push origin main'],
            answer: 'git commit -m'
        },
        {
            title: 'Which of the following is not a programming language?',
            choices: ['spbl', 'css', 'javascript', 'html'],
            answer: 'spbl'
        },
    ];
        let currentQuestion = questions[questionIndex];
        if (!currentQuestion) {
            startScreenEl.style.display = 'none'
            questionZoneEl.style.display = 'none';
            endScreenEl.style.display = '';
        }
        questionTitleEl.textContent = currentQuestion.title;
        document.getElementById('choices').innerHTML ='';
        currentQuestion.choices.forEach(function(options) {
        // console.log(options);
        let node = document.createElement('button');
        let textnode = document.createTextNode(options);
        node.appendChild(textnode);
        let addBttn = document.getElementById('choices').appendChild(node);
        addBttn.setAttribute('value', options);
        
        node.addEventListener('click', function(event) {
        validateAnswer(event);
        
        
        // console.log("I was clicked");
        // let removeBttn = addBttn.parentElement.removeChild(removeBttn);
        });
        // click = console.log("right or wrong?");
    })
   
}

    // Function to check if user answer is correct or incorrect, then display if user answer is right or wrong
function validateAnswer(event) {
    
    let questions = [
        {
            title: 'What character/ characters are used to surround the block of a function?',
            choices: ['()', '!', '{}', '$'],
            answer: '{Earth}'
        },
        {
            title: 'What is used to print to the console??',
            choices: ['var', 'function', 'i', 'console.log'],
            answer: 'console.log'
        },
        {
            title: 'What is a variable?',
            choices: ['let', 'function', 'array', 'object'],
            answer: 'let'
        },
        {
            title: 'How do you commit changes in your terminal?',
            choices: ['git commit -m', 'git status', 'touch', 'git push origin main'],
            answer: 'git commit -m'
        },
        {
            title: 'Which of the following is not a programming language?',
            choices: ['spbl', 'css', 'javascript', 'html'],
            answer: 'spbl'
        },
    ];
        console.log(event.target.value);
        let userAnswer = event.target.value;
        let currentQuestion = questions[questionIndex];
        let correctAnswer = currentQuestion.answer;
    
    // Check if user clicked the correct button
    // If right  
            // Display 'Correct'
            
            if (userAnswer === correctAnswer) {
             let gotItRight = document.getElementById('is-it-correct');
            // let showIfRight = document.createTextNode('Correct!');
            gotItRight.textContent = 'Correct!';
        
            // let preBttnRemove = document.getElementById('question-zone');
        // preBttnRemove.removeChild('button');
        // console.log(preBttnRemove);

            } else {
             let notRight = document.getElementById('is-it-correct');
             // let showIncorrect = document.createTextNode('Incorrect');
            notRight.textContent = 'Incorrect';
            // notRight.style.display ='';
    }
    if (currentQuestion === questions.length) {
        
        quizEnd(event);
    } 
    generateQuestion(questionIndex++);
                
            // if (questionIndex === questions.length) 
                // end game
                // else 
                // generfateQUestions()
// function endGameWhenTimerEnds() {
//             if (currentQuestion === questions.length) {
//             clearInterval(timerId);
//             startScreenEl.style.display = 'none';
//             questionZoneEl.style.display = 'none';
//             endScreenEl.style.display = '';
//             quizEnd(event);}
//             }   
}


//  function to hide correct/incorrect display after buttons are clicked and to hide buttons from previous quesiton

 // If wrong 
            // Timer - 10 seconds
            // Display: InCorrect in 'correct-incorrect' div 
function quizEnd() {
    
    let questions = [
        {
            title: 'What character/ characters are used to surround the block of a function?',
            choices: ['()', '!', '{}', '$'],
            answer: '{Earth}'
        },
        {
            title: 'What is used to print to the console??',
            choices: ['var', 'function', 'i', 'console.log'],
            answer: 'console.log'
        },
        {
            title: 'What is a variable?',
            choices: ['let', 'function', 'array', 'object'],
            answer: 'let'
        },
        {
            title: 'How do you commit changes in your terminal?',
            choices: ['git commit -m', 'git status', 'touch', 'git push origin main'],
            answer: 'git commit -m'
        },
        {
            title: 'Which of the following is not a programming language?',
            choices: ['spbl', 'css', 'javascript', 'html'],
            answer: 'spbl'
        },
    ];
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
                questionZoneEl.style.display = 'none';
                endScreenEl.style.display = '';
            }

            // if (currentQuestion === questions.length) {
            //     console.log('end screen after last question');
            // }
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
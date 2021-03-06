// Grab elements from html
let startScreenEl = document.getElementById('start-screen');
let questionZoneEl = document.getElementById('question-zone');
let endScreenEl = document.getElementById('end-screen');
let currentTimeEl = document.getElementById('current-time');
let startButtonEl = document.getElementById('start-quiz');
let questionTitleEl = document.getElementById('question-title');
let choicesEl = document.getElementById('choices')
let correctIncorrectEl = document.getElementById('correct-incorrect');
let userScoreEl = document.getElementById('user-score');
let currentScoreEl = document.getElementById('current-score');
let isCorrect = document.getElementById('is-it-correct');

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
        let score = 0;
        let finalScore = userScoreEl;
        userScoreEl.createTextNode = 'Current Score: ' + score;
        


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
                choices: ['git commit -m', 'git status', 'touch', 'git status'],
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
        let currentQuestion = questions[questionIndex];
        if (!currentQuestion) {
            startScreenEl.style.display = 'none';
            questionZoneEl.style.display = 'none';
            endScreenEl.style.display = '';
            timeRemaining = 0;
        }

        isCorrect.textContent = '';
    
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
        });
        // click = console.log("right or wrong?");
    })
   
}

    // Function to check if user answer is correct or incorrect, then display if user answer is right or wrong
function validateAnswer(event) {
        // console.log(event.target.value);
        let userAnswer = event.target.value;
        let currentQuestion = questions[questionIndex];
        let correctAnswer = currentQuestion.answer;
        
    
            if (userAnswer === correctAnswer) {
             let gotItRight = document.getElementById('is-it-correct');
             gotItRight.textContent = 'Correct!';
             let addToUserScore = score += 10;
             userScoreEl.textContent = 'Score: ' + addToUserScore;

            } else {
             let notRight = document.getElementById('is-it-correct');
             notRight.textContent = 'Incorrect';
             let addToUserScore = score -= 5;
             userScoreEl.textContent = 'Score: ' + addToUserScore;
             timeRemaining -= 10;      
             
    }

    setTimeout(function(){
        generateQuestion(questionIndex++);
   }, 650);
    
    
}

function clockTick(){
        timeRemaining--;
        currentTimeEl.textContent = `Time: ${timeRemaining}`;
            if (timeRemaining < 1) {
                clearInterval(timerId);
                currentTimeEl.textContent = 'Time\'s Up!'
                questionZoneEl.style.display = 'none';
                endScreenEl.style.display = '';
            }
}



// function finalScore(){
//     let finalScore = score;
//     document.getElementById('submit').addEventListener('click', function(){
//         localStorage.setItem('high-scores', finalScore);
//         console.log(finalScore);
//     })
// }

// function for local storage
function initialsStorage(){
    let finalScore = score;
    let input = document.getElementById('initials');
    document.getElementById('submit').addEventListener('click', function(){
        localStorage.setItem('initials', input.value);    
        localStorage.setItem('high-scores', finalScore);
        console.log(finalScore);
    })

    // document.getElementById('score-initials').textContent = input.value;
}
initialsStorage();

function pushToScoresPage(){
    let scoreBoard = document.getElementById('score-initials');
    document.getElementById('submit').addEventListener('click', function(){
        let userInitials = localStorage.getItem('initials');
        scoreBoard.textContent = userInitials;
    })
}
pushToScoresPage();    // var input = document.getElementById('initials').addEventListener('click', function(){
    //     localStorage.setItem('highscores', input.val());
    // }
    
        
    


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
// Create elements 
var body = document.body;
var mainEl = document.createElement('div');
var titleEl = document.createElement('h1');
var titleCaptionEl = document.createElement('p');
var titleCaption2El = document.createElement('p');
var questionEl = document.createElement('h2');
var listEl = document.createElement('ol');
var li1 = document.createElement('li'); 
var li2 = document.createElement('li');
var li3 = document.createElement('li'); 
var li4 = document.createElement('li');
var listItems = document.getElementsByTagName('li');
var startQuizButton = document.createElement('button');



// Add text content to elements
// countDownEl.textContent = "Time: ";
titleEl.textContent = 'Coding Quiz Challenge';
titleCaptionEl.textContent = 'Try to answer the following code-related questions within the time limit.';
titleCaption2El.textContent = 'Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
startQuizButton.textContent = 'Start Quiz';


// Append elements to html
// body.appendChild(countDownEl);
body.appendChild(titleEl);
body.appendChild(mainEl);
mainEl.appendChild(titleCaptionEl);
mainEl.appendChild(titleCaption2El);
mainEl.appendChild(startQuizButton);


// Style elements
body.style.fontFamily = 'helvetica';
titleEl.style = 'text-align: center';
titleEl.style.margin = '120px 0 0 0';
titleCaptionEl.style = 'text-align: center';
titleCaption2El.style = 'text-align: center';
startQuizButton.style.fontFamily = 'helvetica';
// countDownEl.style.margin = '10px 0 100px 1400px';


// Function to start quiz / Start timer when button is clicked
var timeRemaining = 60;

function countDown() {
    
  var timerInterval = setInterval(function() {
    timeRemaining--;

    // if(timeRemaining === 0) {
    //   clearInterval(timerInterval);
        addContent();
    // }
  }, 1000);

  
function addContent() {
    var countDownEl = document.createElement('p').innerhtml = 'Time: ' + timeRemaining;
    // countDownEl.textContent = 'Time: ' + timeRemaining;
    
    body.appendChild(countDownEl);
  
  }
  

}
countDown();
// Create function to manipulate content once 'Start Quiz' button is clicked



// Create buttons



// console.log section for debugging
console.log(countDown());
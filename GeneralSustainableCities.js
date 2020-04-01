const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
var questions = [
    {
        question : "What is the world poverty line?",
        imgSrc : "PovertyMap.jpg",
        choiceA : "$1.90",
        choiceB : "$1.80",
        choiceC : "$1.70",
        correct : "A"
    },{
        question : "Which country has the most people in poverty?",
        imgSrc : "PiChart.jpg",
        choiceA : "Cambodia",
        choiceB : "Nigeria",
        choiceC : "Philippines",
        correct : "B"
    },{
        question : "?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;

// render a question
function renderQuestion(){
    var q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    var img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";

    if (scorePerCent>=80) {

    }
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

//Next Page Button






// Back to Top Button

var mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Read More Button
function readMore1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


function readMore2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function readMore3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
//Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}






//graph

data = [263385693.7, 267788016.1, 271478121.6, 285364129.2, 301898677.4, 315845686.4, 330188763.1, 344365476, 350197458, 352420229.7, 373303791.9, 392455642.3, 390919511.8, 402882325.7, 409037825.2, 417306579.9, 427511463.8, 437859803.3]

var canvas = document.getElementById("ctx");
var ctx = canvas.getContext("2d");
for(i=200; i<460; i=i+50){
ctx.font = "15px Roboto";
ctx.fillStyle = "#ffffff";
ctx.fillText(i, 33, 610-1.1*i);
ctx.lineWidth = 2;
ctx.strokeStyle = "#EF8D26";
ctx.beginPath();
ctx.moveTo(580, 605-1.1*i);
ctx.lineTo(67, 605-1.1*i);
ctx.stroke();
}
for(i=0; i<18; i++){
ctx.font = "15px Roboto";
ctx.fillStyle = "#ffffff";
ctx.fillText(i, i*30+63, 450);
ctx.lineWidth = 2;
ctx.strokeStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(i*30+67, 605-1.1*(data[i]/1000000));
ctx.lineTo((i+1)*30+68, 605-1.1*(data[i+1]/1000000));
ctx.stroke();
}

ctx.font = "25px Roboto";
ctx.fillStyle = "#ffffff"
ctx.fillText("World Average Material Footprint", 0, 20);
ctx.font = "20px Roboto";
ctx.fillStyle = "#FFD9B1";
ctx.fillText("All Raw Materials", 0, 55);
ctx.fillText("Percent increase (2000-2017): 66.2%", 0, 540);
ctx.font = "18px Roboto";
ctx.fillText("Year (since 2000)", 260, 485);

ctx.strokeStyle = "#FFD6AA";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(67, 430);
ctx.lineTo(67, 80);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(587, 430);
ctx.lineTo(67, 430);
ctx.stroke();

ctx.translate(-227, 400);
ctx.rotate(-Math.PI / 2);
ctx.fillText("Resource Footprint (million tonnes)", 0, 240);



//https://www.sdg.org/datasets/ed6ee35ad584405b8f3ef2abc22f6948_0



//Collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}






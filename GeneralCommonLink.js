
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


//https://www.sdg.org/datasets/ed6ee35ad584405b8f3ef2abc22f6948_0
data = [369.7, 367.1, 361.6, 320.2, 300.4, 290.4, 280.1, 276, 255, 247.7, 210.9, 190.3, 185.8, 178.7, 160.2, 161.9, 158.8, 153.3]

var canvas = document.getElementById("ctx");
var ctx = canvas.getContext("2d");
for(i=200; i<460; i=i+50){
ctx.font = "15px Antic Slab";
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
ctx.font = "15px Antic Slab";
ctx.fillStyle = "#ffffff";
ctx.fillText(i, i*30+63, 450);
ctx.lineWidth = 2;
ctx.strokeStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(i*30+67, 605-1.1*(data[i]));
ctx.lineTo((i+1)*30+68, 605-1.1*(data[i+1]));
ctx.stroke();
}

ctx.font = "25px Antic Slab";
ctx.fillStyle = "#ffffff"
ctx.fillText("Poverty in Sustainable Cities", 0, 45);
ctx.font = "20px Antic Slab";
ctx.fillStyle = "#FFD9B1";
ctx.fillText("Percent increase (2000-2017): 66.2%", 0, 540);
ctx.font = "18px Antic Slabs";
ctx.fillText("Year from 2000 to 2017", 260, 485);

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
ctx.fillText("Number of people in poverty (millions)", 0, 240);


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






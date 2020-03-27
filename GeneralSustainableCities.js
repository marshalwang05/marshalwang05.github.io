console.log("Virtual Extra Help 1")

//BING IDEA: LISTS - LINKS TO OTHER LANGUAGES
var countries = ["Canada","India","China","Bahamas"]
var population = [36, 1030, 1038,0.4]

//BIG IDEA: USING DOM TO ACCESS ELEMENTS
document.getElementById("clickMe").onclick = clicked;
document.getElementById("atag").onclick = afnc;


//BIG IDEA: FUNCTIONS - LINKS TO OTHER LANGUAGES
function clicked() {
  

  //BIG IDEA VARIABLES - LINKS TO OTHER LANGUAGES
  var value = document.getElementById("fname").value
  
  //BIG IDEA LOOPS - LINKS TO OTHER LANGUAGES
  for (i = 0; i < countries.length; i = i + 1) {

    //BIG IDEA CONDITIONAL STATEMENTS - LINKS TO OTHER LANGUAGES
    if (value === countries[i]) {
      //print out the population
      console.log(value+" has a population of "+population[i]);
      document.getElementById("results").innerHTML = value+" has a population of "+population[i] +" million!";
    }
  }



}

function afnc() {
  console.log("Clicked A");
}
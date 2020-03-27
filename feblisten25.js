console.log("Feb 25")

var countries = ["Canada","India","China","Bahamas"]
var population = [36, 1030, 1038, 0.4]


document.getElementById("clickMe").onclick = clicked;

function clicked(){
	var value = document.getElementById("fname").value

	for(i=0; i<countries.length; i=i+1){
		if(value===countries[i]){
			console.log(value+" has a population of "+population[i])
		}
	}

}
// Write code below 💖
let aqi = 1000;
let message = "";

if(aqi >= 0 && aqi <= 50){
  message = "Good";
} else if (aqi => 51 && aqi <= 100){
  message = "Moderate";
} else if(aqi => 101 && aqi <= 150){
  message = "Unhealthy (Sensitive Groups)";
} else if(aqi => 151 && aqi <= 200){
  message = "Unhealthy";
} else if(aqi => 201 && aqi <= 300){
  message = "Very Unhealthy";
} else {
  message = "Hazardous";
}

console.log("Air quality today: " + message);
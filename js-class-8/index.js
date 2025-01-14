var cities = [
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Sialkot",
  "Peshawar",
  "Multan",
  "Skardu",
];

// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[2]);
// console.log(cities[3])

// loop is use to do repitive task

// 1: For loop

var userInput = +prompt("konsa table chahiye btao??");
var length = +prompt("kahan tk chahiye??");

//   starting           ending      increment/decrement
for (var i = 1; i <= length; i++) {
  document.write(userInput + " x " + i + " = " + userInput * i + " <br />");
}

var myNumber = 1;

// BODMAS

// Bracket Open Divide Multiple Addition Subtraction

// var result = 3 * 5 + 4 - 10 / 5
// console.log(result)
//             //    15  + 4         - 2

// var num = '2'

// Number(num)

// var subOne = Number(prompt("Enter your subject marks"));
// var subTwo = +prompt("Enter your subject marks");

// var totalMarks = 200;

// var ObtainedMarks = subOne + subTwo;

// var userPercentage = (ObtainedMarks / totalMarks) * 100;

// var name = "Arham's";
// agr apke pass double quoation or single quoation ik sath arhy hen to app single
//  string k bech me lgao or bahar double lgado

// alert("You've got " + ObtainedMarks)
// alert("Your percentage is " + userPercentage)

// debugger
// var userAge = +prompt("Enter your age");
// var userHaveCNIC = prompt("Do you have CNIC?");
// var userNationality = prompt("Are you Pakistani?");

// if (userNationality === "Pakistani") {
//   alert("You are Pakistan!");
// }  else {
//   alert("You are not Eligible!");
// }

// var numberOne = 2;
// var numberTwo = "2";

// if (numberOne === numberTwo) {
//   alert("equals ");
// }

// = is used to assignment
// == is used to check value
// === is used to check value as well as type

// var age = +prompt("Enter your age");
// var nationality = prompt("are you pakistani?")
// var qualification = 'matric'

//     //    true           true 
// if ((age >= 18 || nationality === 'yes') && qualification === 'matric') {
//   alert("you are Eligible");
// }
//  else {
//   alert("you are not Eligible");
// }

// && AND operator 
// || OR ya Pipe Operator


// array is a collection of similar data types 
// javascript me dynamic data types ki bh array ban sakti he 

// array starts from index 0

// var cityNo1 = 'Karachi'
// var cityNo2 = 'Islamabad'

// var cities = ['Karachi' , 'Islamabad' , 'Lahore' , 2 , null , undefined]


// cities[0] = 'Rawalpindi'
// ['Rawalpindi' , 'Islamabad' , 'Lahore' , 2 , null , undefined]

// console.log(cities[0])
// console.log(cities)

// cities[5] = "Sialkot"

// console.log(cities)
// ['Rawalpindi' , 'Islamabad' , 'Lahore' , 2 , null , 'Sialkot']

var cities = ['Karachi' , 'Islamabad' , 'Lahore']


cities.push("Kashmir" , "Rawalpindi" , "Abbotabad") // push to last
cities.pop() // remove from last
cities.shift() // remove from start
cities.unshift("Skardu" , "Jamshoro") // add to start


console.log(cities)

// ['Skardu' , 'Jamshoro' , 'Islamabad']

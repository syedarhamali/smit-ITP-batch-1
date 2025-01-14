// function myFunction(x) {
//   console.log(x);
// }

var userEmail = 'arham@gmail.com'

// element mngwany k lea javascript me document ka method use kr rhy hen jo id se element utha kr la raha he
var userElement = document.getElementById("paragraph");

var userButton = document.getElementById("myButton");

function meraDost() {
  var userElement = document.getElementById("paragraph");
  userElement.textContent = "My name is Arham";
  userElement.style.backgroundColor = "red";
  //   document.body.style.backgroundColor = "black";
  //   document.body.style.backgroundImage = "url(image.PNG";

  var userImage = document.getElementById("myImage");

  userImage.src = "image2.jpg";
  userImage.style.height = '200px'

}

userButton.addEventListener("click", meraDost);

// DOM stands for Document Object Model

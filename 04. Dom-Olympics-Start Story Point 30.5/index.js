var header = document.getElementById("header")  //  <header id="header">  </header>  

header.innerHTML += "<h1>JavaScript Made This!!</h1>";    //  <header id="header">  <h1></h1>   </header>
header.innerHTML += "<h3><span id='span1'>Chance Stephens</span> wrote this JavaScript</h3>";   //  <header id="header">  <h3>  <span> </span> </h3>  </header>
header.style.textAlign = "center"
header.style.borderBottom = "5px solid black";
header.style.marginBottom = "7px";

document.getElementById("span1").style.color = "darkCyan";


var instantMessage = document.getElementsByClassName("messages")

var jokester = document.querySelectorAll(".left")
    for (var i = 0; i < jokester.length; i++) {
  jokester[0].textContent = "Knock! Knock!";
  jokester[1].textContent = "Europe..."  
         
}  
var target = document.querySelectorAll(".right")
for (var i = 0; i < target.length; i++) {
  target[0].textContent = "Who's There?"
  target[1].textContent = "Europe who?"
  
}
 
  
var jokeLeft = document.createElement("div")
jokeLeft.setAttribute("class","message left")
  jokeLeft.textContent = "NO! YOU'RE A POO!! 💩😂 HAHAHA!!!"
  instantMessage[0].appendChild(jokeLeft)

var jokeRight = document.createElement("div")
jokeRight.setAttribute("class","message right")
  jokeRight.textContent = "You're a 🤡!"
  instantMessage[0].appendChild(jokeRight)










/*
var themeSelect = document.querySelector("[value=theme-one]")    //document.getElementsByTagName("option")       //var themeSelect = document.querySelectorAll("#theme-drop-down");  
var blueBrown = themeSelect.textContent = "blue/brown"
var jokester = document.querySelectorAll(".left")
var jokeLeft = document.createElement("div")
var target = document.querySelectorAll(".right")
var jokeRight = document.createElement("div")

themeSelect.document.addEventListener("change", blueBrown)
function blueBrown(){
    (jokester, jokeLeft).style.backgroundColor = "darkCyan";
    (target, jokeRight).style.backgroundColor = "sandyBrown";
}

//   if (blueBrown === "blue/brown"){
//     (jokester, jokeLeft).style.backgroundColor = "darkCyan";
//     (target, jokeRight).style.backgroundColor = "sandyBrown";
//   } else if ((blueBrown !== "blue/brown")){
//   (jokester, jokeLeft).style.backgroundColor = "red";
//     (target, jokeRight).style.backgroundColor = "black";
// }


// box.addEventListener("mouseover", blueBox);
// function blueBox() {
//   box.style.backgroundColor = "darkTurquoise";
//   box.style.boxShadow = "4px 8px 16px 32px darkTurquoise";
// }

// document.body.addEventListener("keydown", function(e){
//   if (e.key === "b"){
//     box.style.backgroundColor = "darkTurquoise";
//     box.style.boxShadow = "4px 8px 16px 32px darkTurquoise"
//   } else if (e.key === "r"){
//     box.style.backgroundColor = "crimson";
//     box.style.boxShadow = "4px 8px 16px 32px crimson"


console.log(blueBrown)

// console.log(themeSelect)
// console.log(themeSelect[i])
// console.log(themeSelect[0])
//}
//var themeOption = document.getElementById("option")
//var themeValue = themeSelect.getAttribute("value","theme-one");   //getNamedItem("value").value = "theme-one";

//console.log(themeSelect)
//console.log(themeOption)  
//console.log(themeValue)

//}

//for (var i = 0; i < theme1.length; i++)
//theme1[0].textContent = "Hello" 

//.options[0].text;
//var theme2 = document.getElementById("theme-drop-down").options[1].text;




  




//#################################################################################

// var clear = document.getElementById("clear-button") 
// clear.addEventListener("click", erase);

// function erase(){
//  instantMessage[0].innerHTML = "";
//  console.log(erase)
// }

//#################################################################################


/*
var header = document.getElementById("header")
  header.style.color = "rgb(214, 26, 104";
  
var box = document.getElementById("box")
box.style.backgroundColor = "deeppink";
box.style.boxShadow = "4px 8px 16px 32px deeppink";
box.style.height = "570px";
box.style.width = "700px";
  
box.addEventListener("mouseover", blueBox);
function blueBox() {
  box.style.backgroundColor = "darkTurquoise";
  box.style.boxShadow = "4px 8px 16px 32px darkTurquoise";
}

box.addEventListener("mousedown", redBox);
function redBox(){
  box.style.backgroundColor = "crimson";
  box.style.boxShadow = "4px 8px 16px 32px crimson";
}

box.addEventListener("mouseup", yellowBox);
function yellowBox(){
  box.style.backgroundColor = "yellow";
  box.style.boxShadow = "4px 8px 16px 32px yellow";
}

box.addEventListener("dblclick", greenBox);
function greenBox(){
  box.style.backgroundColor = "springgreen";
  box.style.boxShadow = "4px 8px 16px 32px springgreen";
}

box.addEventListener("mouseout", orangeBox);
function orangeBox(){
  box.style.backgroundColor = "orangeRed";
  box.style.boxShadow = "4px 8px 16px 32px orangeRed";
}
header.addEventListener("mouseover", function(e){
  box.style.backgroundColor = "deepPink";
  box.style.boxShadow = "4px 8px 16px 32px deeppink";
})

document.body.addEventListener("keydown", function(e){
  if (e.key === "b"){
    box.style.backgroundColor = "darkTurquoise";
    box.style.boxShadow = "4px 8px 16px 32px darkTurquoise"
  } else if (e.key === "r"){
    box.style.backgroundColor = "crimson";
    box.style.boxShadow = "4px 8px 16px 32px crimson"
  } else if (e.key === "y"){
    box.style.backgroundColor = "yellow";
    box.style.boxShadow = "4px 8px 16px 32px yellow"
  } else if (e.key === "g"){
    box.style.backgroundColor = "springGreen";
    box.style.boxShadow = "4px 8px 16px 32px springGreen"
  } else if (e.key === "o"){
    box.style.backgroundColor = "orangeRed";
    box.style.boxShadow = "4px 8px 16px 32px orangeRed"
}})

document.body.addEventListener("keyup", function (e){
box.style.backgroundColor = "deeppink"; 
box.style.boxShadow = "4px 8px 16px 32px deeppink" 
})

*/
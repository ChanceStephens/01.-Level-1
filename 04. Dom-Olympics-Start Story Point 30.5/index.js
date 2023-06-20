//DOM OLYMPICS START Story Point 30.5

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



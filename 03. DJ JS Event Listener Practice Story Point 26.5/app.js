var header = document.getElementById("header")
  header.style.color = "rgb(214, 26, 104";
  
var box = document.getElementById("box")
box.style.backgroundColor = "deeppink"
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






/*

<div id="box">                
  <box src="https://media.istockphoto.com/id/510804916/vector/summer-beach-party-with-dance-silhouettes.jpg?s=612x612&w=0&k=20&c=3aVoNu_nyqu5B4SsbhtZQUQKdCSXfUeRf1W6FoWTgQg=">
</div>



#box{
  display: block;
  margin-left: auto;
  margin-right: auto;







onmouseover="blueBox" 
onmousedown="redBox"        
onmouseup="yellowBox"
ondblclick="greenBox"
onmouseout="orangeBox"

#box {
    width: 615px;
    border: 15px solid rgb(214, 26, 104);
    padding: 50px;
    margin: 20px;
    box-shadow: 2px 2px 10px 15px rgb(214, 26, 104);
    object-position: center;

#header{
    color: rgb(214, 26, 104);
    font-size: larger;
    font-style: oblique;
    text-align:center
}
  }


  */
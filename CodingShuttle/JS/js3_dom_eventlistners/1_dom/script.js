let box1 = document.getElementById("box-1"); //<div class="box" id="box-1">box-1</div>
let divs = document.getElementsByTagName("div"); /*HTMLCollection(10)*/
let cont = document.getElementsByClassName("container"); //HTMLCollection [div.container]
var box3 = document.querySelector(".container #box-3"); //<div class="box" id="box-3">box-3</div>
var box = document.querySelector(".box"); //<div class="box" id="box-1">box-1</div>
var allbox = document.querySelectorAll(".box"); //NodeList(7)
var divincont = document.querySelectorAll(".container div"); //NodeList(7)
document.querySelector(".container #box-3").innerHTML = "this is box-3";
//manipulating then content of a tag
box1.innerHTML = "<h1>this is box1</h1>";
//accessing attributes of a tag
document.querySelector("img").src = "https://via.placeholder.com/100";
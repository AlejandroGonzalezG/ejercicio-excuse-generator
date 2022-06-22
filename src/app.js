/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let quien = ["the dog", "my granma", "his turtle", "my bird"];
let que = ["eat", "pissed", "crushed", "broked"];
let cuando = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let random = "";
let resultado = "";
window.onload = function() {
  //write your code here
  for (i = 0; i < 3; i++) {
    if (i < 1) {
      random = quien[Math.floor(Math.random() * quien.length)];
      resultado = resultado + random + " ";
      i++;
    }
    if (i < 2 && i >= 1) {
      random = que[Math.floor(Math.random() * que.length)];
      resultado = resultado + random + " ";
      i++;
    }
    if (i < 3 && i >= 2) {
      random = cuando[Math.floor(Math.random() * que.length)];
      resultado = resultado + random + " ";
      i++;
    }
    console.log(resultado);
    return (document.querySelector("#excuse").innerHTML = resultado);
  }
};
console.log("Hello Rigo from the console!");

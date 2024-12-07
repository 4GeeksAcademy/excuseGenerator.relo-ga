/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  excuseGenerator();
};

let who = ["Mi perro", "Mi abuelo", "Mi loro", "Mi carro"];
let action = ["atropelló", "picoteó", "mordió", "tiró su bastón"];
let what = ["mi casa", "mi proyecto", "mis lentes"];
let when = [
  "en mi cumpleaños",
  "cuando jugaba futbol",
  "mientras miraba TV",
  "cuando cenaba",
  "saliendo de la iglesia"
];

let perro = [
  "https://blog.gudog.com/wp-content/uploads/2014/11/GIF-15.gif",
  "https://blog.gudog.com/wp-content/uploads/2014/11/GIF-3.gif",
  "https://blog.gudog.com/wp-content/uploads/2014/11/GIF-5.gif"
];
let abuelo = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWVoYXE2NjU5cXNqYmk5bjgybXBhbjkwdmdwZzcwYXdvajA0Y3VxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohc0Xf2ub7OpyAAmY/giphy.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWNnOHZzc3FpMmQzeGJoNWswOWJrbHE4Y2piMWNqajliMG5xODFjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SdHqzlS8f2vYs/giphy.webp",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmhnc3Y4MjZweGxyODdsdGF6cXFqdzkzM3Fub3J4Y2xkY2ljYjJ6ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Oh3lThRTzxx6/giphy.webp"
];

let atropella = [
  "https://cdn1.eldia.com/062021/1623261211328.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2N1ZGRtaTAyamJxamxmbW1zYjZmbnA4aXg5aTJzYXM3ejVwc3V3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jwKC0qlOoXmcLDB4vC/giphy.webp",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2YyY3BsbTExNW85b254YWdrZGs5bWxzNDFoN3d0NW9pZTIzcGJibyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i34oXbluCO0G4/giphy.webp"
];

function excuseGenerator() {
  var whoAleatorio = who[Math.floor(Math.random() * 4)];
  var actionAleatorio = action[Math.floor(Math.random() * 4)];
  var whatAleatorio = what[Math.floor(Math.random() * 3)];
  var whenAleatorio = when[Math.floor(Math.random() * 5)];

  var perroAl = perro[Math.floor(Math.random() * 3)];
  var abueloAl = abuelo[Math.floor(Math.random() * 3)];
  var atropellaAl = atropella[Math.floor(Math.random() * 3)];

  if (whoAleatorio == "Mi perro") {
    document.querySelector("#img-excuse").setAttribute("src", perroAl);
  } else if (whoAleatorio == "Mi abuelo") {
    document.querySelector("#img-excuse").setAttribute("src", abueloAl);
  }
  if (actionAleatorio == "atropelló") {
    document.querySelector("#img-excuse2").setAttribute("src", atropellaAl);
  }

  let excuse =
    whoAleatorio +
    " " +
    actionAleatorio +
    " " +
    whatAleatorio +
    " " +
    whenAleatorio;

  var excuseComplete = (document.querySelector("#excuse").textContent = excuse);
  //console.log(excuse);
  return excuseComplete;
}

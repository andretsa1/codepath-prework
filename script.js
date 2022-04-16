/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Global Variables
var pattern = [2, 1, 2, 4, 3, 2, 4, 1];
var progress = 0; 
var gamePlaying = false;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
}

function stopGame(){
  // record that the game stopped
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

console.log("Hello, world!");

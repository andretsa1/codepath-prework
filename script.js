/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Global Variables
var pattern = [1, 1, 1, 1, 1, 1, 1, 1];

var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var lives = 3;
var setTime;
let x;
var hardMode = false;
var myTimeout;
var toneTimeout = [];

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("modeBtn").classList.add("hidden");
  document.getElementById("timeDisplay").innerHTML = "Pattern playing... You will have 30 seconds to replay the pattern!";
  for(let i = 0; i < 8; i++) {
    var temp = Math.floor(Math.random() * 5) + 1;
    pattern[i] = temp;
  }
  playClueSequence();
  clueHoldTime = 1000;
  console.log("The randomized pattern is: ",pattern);
  lives = 3;
}

function stopGame(){
  // record that the game stopped
  gamePlaying = false;
  // swap the Start and Stop buttons
  clear();
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("modeBtn").classList.remove("hidden");
  document.getElementById("timeDisplay").innerHTML = "Click start to begin the game!";
  for(let i = 1; i<=5; i++) {document.getElementById("button"+i).classList.remove("hidden");}
}

function clear() {
  clearInterval(x);
  clearTimeout(myTimeout);
  for(let i=0; i < toneTimeout.length; i++) {
    clearTimeout(toneTimeout[i]);
  }
  toneTimeout = [];
}

function changeMode() {
  clear();
  if (!hardMode) {
    document.getElementById("gameMode").innerHTML = "Game Mode: Hard";
    hardMode = true;
  } else {
    document.getElementById("gameMode").innerHTML = "Game Mode: Easy";
    hardMode = false;
  }
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn, i){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function showBtn(btn) {
  if(gamePlaying){
    for (let i = 1; i <= 5; i++) {
      if (i != btn) {document.getElementById("button"+i).classList.add("hidden");}
    }
    document.getElementById("button"+btn).classList.remove("hidden");
  }
}

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  if(hardMode) {
    for(let i = 1; i<=5; i++) {document.getElementById("button"+i).classList.add("hidden");}
  }
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    toneTimeout.push(setTimeout(playSingleClue,delay,pattern[i], i)); // set a timeout to play that clue
    if(hardMode){setTimeout(showBtn, delay, pattern[i]);}
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime = 1000/(Math.pow(1.5, progress));
  myTimeout = setTimeout(startTimer, delay-clueHoldTime);
  
}

function getTime() {
  let now = new Date().getTime();
  let timeLeft = parseInt((setTime - now)/1000);
  document.getElementById("timeDisplay").innerHTML = timeLeft + "s left to guess!";
  for(let i = 1; i<=5; i++) {
    document.getElementById("button"+i).classList.remove("hidden");
  }
  if (timeLeft <= 0) {
    clear();
    loseGame();
  }
}

function startTimer() {
  setTime = new Date().getTime()+30000;
  x = setInterval(getTime, 500);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("You won the game!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  // add game logic here
  if (btn != pattern[guessCounter]) {
    lives--;
    if (lives==0) {
      loseGame();
    } else {
      clear();
      alert(`Wrong button! You have ${lives} lives left. We will play the sequence again.`)
      playClueSequence();
    }
  } else if (guessCounter < progress) {
    guessCounter++;
  } else if (progress < 7) {
    progress++;
    clear();
    document.getElementById("timeDisplay").innerHTML = "Pattern playing... You will have 30 seconds to replay the pattern!";
    playClueSequence();
  } else {
    winGame();
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 440,
  2: 493.883,
  3: 554.365,
  4: 587.329,
  5: 659.255
}

function playTone(btn,len){
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
  showImage("image"+btn);
}
function stopTone(btn){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
  tonePlaying = false;
  ridImage("image"+btn);
}

function showImage(id){
   document.getElementById(id).style.display="inline";
 }

function ridImage(id){
   document.getElementById(id).style.display="none";
 }

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
function playSound(e){
  //selected by data attr for a cleaner code, usind es6 syntax
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // stops the function from running all together
  audio.currentTime = 0; //rewind to the start, so it plays as soon as the button is pressed, "repeatedly"
  audio.play();
  key.classList.add("playing"); //adding class w/ vanilla JS
}

function removeTransition(e){
  if(e.propertyName !== "transform") return; // skip it if  it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

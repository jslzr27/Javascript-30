window.onload = function (){
window.addEventListener("keydown", function(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio)return;
    audio.currentTime = 0;
    audio.play();
    console.log(audio);
    console.log(key);
    key.classList.add('playing');
});

var keys = document.querySelectorAll('.key');
keys.forEach (key => key.addEventListener ('transitionend', removeTransition));

};
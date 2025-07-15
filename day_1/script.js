function playSound(e){
    let keyCode;
    if(e.type === 'keydown'){keyCode=e.keyCode}
    else if(e.type === 'click'){
        /*
        When a click event occurs on an element that contains other elements (like a div with kbd and span inside), e.target refers to the exact inner element clicked. If that inner element doesn't have a data-key attribute, e.target.dataset.key will return undefined, causing issues.
        */
        //keyCode=e.target.dataset.key} 
        /*To correctly retrieve the data-key from the main parent element (.key div) regardless of which child was clicked, you should use e.target.closest('.key').dataset.key. This ensures your code is robust and works even if users click on the text or an icon within the main clickable area.*/
        keyCode=e.target.closest('.key').dataset.key}
    const audio=document.querySelector(`audio[data-key="${keyCode}"]`)
    const key=document.querySelector(`.key[data-key="${keyCode}"]`)
    //if audio not exist return from function
    if(!audio)return;
    //add animation that described in playing class
    key.classList.add('playing')
    //rewind audio to start
    audio.currentTime=0;
    //play audio
    audio.play();
}

function removeTransition(e){
    //skip event if it is not a transition
    if(e.propertyName!=="transform") return;
    //remove the class playing
    e.target.classList.remove('playing')
    
}

//select all the keys
const keys=Array.from(document.querySelectorAll('.key'));

//add event listener(removeTransition) to each key
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

//add event lintener to play audio
window.addEventListener('keydown',playSound)

keys.forEach(key=>key.addEventListener('click',playSound))
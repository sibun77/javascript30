const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")
function setTime(){
    const now=new Date();



    const second=now.getSeconds();
    const minute=now.getMinutes();
    const hour=now.getHours();

    if(second === 0){
        secondHand.style.transition= 'none';
    }else{
        secondHand.style.transition='all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'
    }

    const secondDegrees=((second/60)*360)+90
    secondHand.style.transform = `rotate(${secondDegrees}deg)`

    const minuteDegrees=((minute/60)*360)+90
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

    // const hourDegrees=((hour/12)*360)+90
    //smoother hourHand movement for e.g not jump directly 1 to 2
    const hourDegrees=((hour / 12) * 360) + 90 + ((minute/60)*30);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    console.log(hour,minute,second)

}
setInterval(() => {
    setTime();
}, 1000);
setTime();
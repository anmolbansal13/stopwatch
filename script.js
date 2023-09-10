//variables

const startStopBtn=document.querySelector('#startStopBtn');
const resetBtn=document.querySelector('#resetBtn');

//time variables

let seconds=0;
let minutes=0;
let hours=0;

//leading zeroes
let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;

//set interval, timer status
let timerInterval = null;
let timerStatus = "stopped";

//stopwatch function
function stopWatch(){
    seconds++;
    if(seconds/60===1){
        seconds=0;
        minutes++;
        if(minutes/60===1){
            minutes=0;
            hours++;
        }
    }
    if(seconds<10){
        leadingSeconds="0" +seconds.toString();
    }else{
        leadingSeconds=seconds;
    }
    if(minutes<10){
        leadingMinutes="0" +minutes.toString();
    }else{
        leadingMinutes=minutes;
    }
    if(hours<10){
        leadingHours="0" +hours.toString();
    }else{
        leadingHours=hours;
    }
    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}
// window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener('click', function(){
    if(timerStatus==="stopped"){
        timerInterval=setInterval(stopWatch, 1000/60); //1000/60 to change stopwatch to count milliseconds
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});
resetBtn.addEventListener('click', function(){
    clearInterval(timerInterval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('timer').innerHTML = "00:00:00";
    if(timerStatus==="started"){
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});
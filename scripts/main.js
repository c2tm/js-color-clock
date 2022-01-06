(function(){
    ('use strict');

//variables

const currentTime = new Date();
let newHexScope = ``;

//functions

//Logs current time on load
let startTime = currentTime.toLocaleTimeString('en-US', {hour12: false})
document.onload = console.log(startTime);
let initClockDisplay = document.querySelector('.clock-display');
initClockDisplay.textContent = startTime;



function timePerSecondDisplay(){
    let currentTimePerSecond = new Date ();
    console.log(currentTimePerSecond.toLocaleTimeString('en-US', {hour12: false}));                 //I removed all console.log to clean up console :)
    let time = currentTimePerSecond.toLocaleTimeString('en-US', {hour12: false});
    let clockDisplay = document.querySelector('.clock-display');
    clockDisplay.textContent = time;
}

function progressBar() {
    let currentTimePerSecond = new Date ();
    let currentSecs = currentTimePerSecond.getSeconds();
    let percentOfMin = currentSecs / 60;
    let newRem = 14 * percentOfMin;
    let bar = document.querySelector('.clock-progress-bar');
    bar.style.width = `${newRem}rem`;   
}

function hexCodes() {
    let allDigits = `123456789abcdef`
    let newHex = [];
    allDigits.split(``);
        for(let i = 0; i <= 5; i++) {
            let newHexNum = allDigits[Math.floor(Math.random() * allDigits.length)]
            newHex += newHexNum;
        }
    newHex.toString();
    newHexScope = newHex;
    let clockFace = document.querySelector('.clock');
    clockFace.style.background = `#${newHex}`;
}

let display = document.querySelector('.clock-display');
display.addEventListener("mouseenter", function(){
    display.textContent = newHexScope;
})


const timePerSecond = setInterval(function(){
   timePerSecondDisplay();
   progressBar();
   hexCodes();
}, 1000)    








}());
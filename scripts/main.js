(function(){
    ('use strict');

//variables

const currentTime = new Date();
let newHexScope = ``;
let clockDisplay = document.querySelector('.clock-display');
let time;

//functions

//Logs current time on load
let startTime = currentTime.toLocaleTimeString('en-US', {hour12: false})
document.onload = console.log(startTime);
let initClockDisplay = document.querySelector('.clock-display');
initClockDisplay.textContent = startTime;
let mouseToggle = false;



let displayEvent = document.querySelector('.clock-display');
displayEvent.addEventListener("mouseenter", function(){
    mouseToggle = true;
})

displayEvent.addEventListener("mouseout", function(){
    mouseToggle = false;
})


function timePerSecond(){
    let currentTimePerSecond = new Date ();
    // console.log(currentTimePerSecond.toLocaleTimeString('en-US', {hour12: false}));                 //I removed all console.log to clean up console :)
    time = currentTimePerSecond.toLocaleTimeString('en-US', {hour12: false});
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

function displayFunction() {
    if(mouseToggle === false) {
        clockDisplay.textContent = time;
        console.log(`I ran!`);
    } else {
        clockDisplay.textContent = newHexScope;
        console.log(`I ran!`);
    }
}

const timePerSecondInterval = setInterval(function(){
   timePerSecond();
   progressBar();
   hexCodes();
   displayFunction();
}, 1000)    








}());
// This code is declaring variables and assigning DOM elements to them using querySelectorAll.
let startBtn = document.querySelectorAll("#start-btn")[0];
let stopBtn = document.querySelectorAll("#stop-btn")[0];
let resetBtn = document.querySelectorAll("#reset-btn")[0];
let displayDom = document.querySelectorAll(".display")[0];
let hours = document.querySelectorAll(".hours")[0];
let minutes = document.querySelectorAll(".minutes")[0];
let seconds = document.querySelectorAll(".seconds")[0];
let centiSeconds = document.querySelectorAll('.centiseconds')[0];

// Initializing the display elements to zero and declaring the variable "displayReference".
minutes.textContent = "00";
seconds.textContent = "00";
hours.textContent = "00";
centiSeconds.textContent = "00";
let displayRefrence;

// This function updates a timer by incrementing the centiseconds, seconds, minutes, and hours accordingly, and then updates the display.
function updateTimer() {
    // This code increments the centiseconds, minutes, hours, and seconds of a timer by one.
    let sec = parseInt(seconds.textContent);
    let min = parseInt(minutes.textContent);
    let hrs = parseInt(hours.textContent);
    let csec = parseInt(centiSeconds.textContent);
    csec++;

// This code updates the timer values by incrementing the centiseconds and adjusting the       minutes, seconds, and hours accordingly, while also adding leading zeros if necessary.
    if (csec < 10) {
        csec = "0" + csec;
    }
    if (csec > 99) {
        sec++;
        csec = "00";
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (sec > 59) {
        min++;
        sec = "00";
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (min > 59) {
        hrs++;
        min = "00";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }

// Updates the text content of the hours, minutes, seconds, and centiseconds elements with their respective values.
    hours.textContent = hrs;
    minutes.textContent = min;
    seconds.textContent = sec;
    centiSeconds.textContent = csec;
}

// The start function logs a message to the console and sets an interval to execute the updateTimer function every 10 milliseconds.
function start() {
    console.log("I am Start Button");
    displayRefrence = setInterval(updateTimer, 10);
}


// The stop function logs a message and stops the timer by clearing the interval reference.
function stop() {
    console.log("I am Stop Button");
    clearInterval(displayRefrence);
}

// The reset() function clears the timer interval and sets all time values to zero, acting as a reset button for the timer. It also logs a message to the console.
function reset() {
    console.log("I am Reset Button");
    clearInterval(displayRefrence);
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    centiSeconds.textContent = "00";
}

// These lines of code add event listeners to the start, stop, and reset buttons, which call the corresponding functions when clicked
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

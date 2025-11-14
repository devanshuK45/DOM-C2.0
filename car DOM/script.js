let leftLight = document.querySelector('.left-light');
let rightLight = document.querySelector('.right-light');

let onBtn = document.querySelector('#lightOn');
let offBtn = document.querySelector('#lightOff');

let leftInd = document.querySelector('#indicatorLeft');
let rightInd = document.querySelector('#indicatorRight');
let hazardBtn = document.querySelector('#hazard');

let interval; // for blinking



// HEADLIGHTS ON
onBtn.addEventListener('click', () => {
    leftLight.style.opacity = 1;
    rightLight.style.opacity = 1;
});

// HEADLIGHTS OFF
offBtn.addEventListener('click', () => {
    clearInterval(interval);
    leftLight.style.opacity = 0;
    rightLight.style.opacity = 0;
});

// LEFT INDICATOR
leftInd.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        leftLight.style.opacity =
            leftLight.style.opacity == "1" ? "0" : "1";
    }, 300);
});

// RIGHT INDICATOR
rightInd.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        rightLight.style.opacity =
            rightLight.style.opacity == "1" ? "0" : "1";
    }, 300);
});

// HAZARD LIGHTS (Both Blink)
hazardBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        let newOpacity = leftLight.style.opacity == "1" ? "0" : "1";
        leftLight.style.opacity = newOpacity;
        rightLight.style.opacity = newOpacity;
    }, 300);
});

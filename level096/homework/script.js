function calculateAge(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
}

function getDayOfWeek(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const inputDate = new Date(date);
    return days[inputDate.getDay()];
}


function startTimer() {
    let counter = 0;
    setInterval(() => {
        console.log(counter++);
    }, 1000);
}


function displayCurrentTime() {
    setInterval(() => {
        const now = new Date();
        console.log(now.toLocaleTimeString());
    }, 1000);
}


function logRandomNumber() {
    setInterval(() => {
        console.log(Math.random());
    }, 1000);
}


function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}



function delayedGreeting() {
    setTimeout(() => {
        console.log("Hello!");
    }, 1000);
}


function logMessage1() {
    console.log("Message 1");
}
function logMessage2() {
    console.log("Message 2");
}
function logMessage3() {
    console.log("Message 3");
}

function delayedChain() {
    setTimeout(logMessage1, 1000);
    setTimeout(logMessage2, 2000);
    setTimeout(logMessage3, 3000);
}
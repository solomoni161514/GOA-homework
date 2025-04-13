function countdown() {
    let seconds = 100;
    const interval = setInterval(() => {
        console.log(`დარჩენილია ${seconds} წამი`);
        seconds--;
        if (seconds < 0) {
            clearInterval(interval);
            console.log("უკუთვლა დასრულდა!");
        }
    }, 1000);
}
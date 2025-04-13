function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}


function whoPays(names) {
    const randomIndex = Math.floor(Math.random() * names.length); // Random index
    const payer = names[randomIndex];
    return `${payer} გადაიხდის ყველას საკვების გადასახადს!`;
}


function fizzBuzz(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
            result.push("FizzBuzz");
        } else if (numbers[i] % 3 === 0) {
            result.push("Fizz");
        } else if (numbers[i] % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(numbers[i]);
        }
    }
    return result.filter(item => typeof item === "string"); // Remove numbers
}
const generateFibonacci = (limit, first = 0, second = 1) => {
    const fibonacci = [first, second];

    while (fibonacci.at(-1) <= limit) {
        fibonacci.push(fibonacci.at(-2) + fibonacci.at(-1));
    }

    return fibonacci.slice(0, -1);
};

const sumEven = (arr) => {
    return arr.reduce((total, value) => {
        if (value % 2 === 0) {
            total += value;
        }
        return total;
    }, 0);
};

const likeFibonacci = generateFibonacci(7000000, 3, 4);
console.log("sumEven :>> ", sumEven(likeFibonacci));

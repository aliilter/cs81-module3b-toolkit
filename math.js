// math.js - CS81 Module 3B Toolkit

function double(n) {
    return n * 2;
}






function square(n) {
    return n * n;
}


function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return n % 2 !== 0;
}


function multiply(a, b) {
    return a * b;
}

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


//test output
console.log(double(5));
console.log(square(5));
console.log(isEven(5));
console.log(isOdd(5));
console.log(multiply(5,5));
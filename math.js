function returnAddComponents (a, b) {
    // here return of values
    return a + b;
}

function returnDivideComponents(a, b){
    if(b === 0) throw new Error("Division by zero")
    return a / b;
}

function returnMultiplyComponents(a, b){
    return a * b;
}

function returnSubtractComponents(a, b){
    return a - b;
}

function returnFactorial(n){
    if(n<0) throw new Error("Negative number");
    return n<=1 ? 1 : n * returnFactorial (n - 1);
}

module.exports = { returnAddComponents, returnDivideComponents, returnMultiplyComponents, returnSubtractComponents, returnFactorial};
console.log("Hello from main branch!!!");
console.log("Hello from conflict_brnach!!!");


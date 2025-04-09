const {returnAddComponents, returnDivideComponents} = require ('./math');
test ('adds 2+3 to equal 5', () =>{
    expect (returnAddComponents(2, 3)).toBe (5);
});

test ('divide 10/5 to equal 2', () => {
    expect(returnDivideComponents(10, 5)).toBe(2);
});

test ('multiply 7*6 to equal 42', () => {
    expect(returnMultiplyComponents(7, 6)).toBe(42);
});

test ('subtract 94 - 11 to equal 83', () => {
    expect(returnSubtractComponents(94, 11)).toBe(83);
});

test ('computes factorial correctly', () => {
    expect(returnFactorial(5)).toBe(120);
});

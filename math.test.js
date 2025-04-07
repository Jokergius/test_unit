const {returnAddComponents} = require ('./math');
test ('adds 2+3 to equal 5', () =>{
    expect (returnAddComponents(2, 3)).toBe (5);
});
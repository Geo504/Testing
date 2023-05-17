const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test('One euro should be 1.206 dollars', () => {
    let total = fromEuroToDollar(3.5);
    expect(total).toBe(4.2);
});

test('5 dollars should be 532.91 yens', () => {
    let total = fromDollarToYen(5);
    expect(total).toBe(532.9166666666667);
})

test('127.9 yens should be 0.8 british pounds', () => {
    let total = fromYenToPound(127.9);
    expect(total).toBe(0.8);
})
    

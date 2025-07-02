test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar, fromDolarToYen,fromYentoPound } = require('./app.js');

    const money = 3.5

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(money);
    const yen =  fromDolarToYen(money);
    const pound = fromYentoPound(money);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expectedDollar = money * 1.07; 
    const expectedYen = (money* 1.07 )/ 156.5
    const expectedPound = (money * 157.5 )/ 0.87
    
    // This is the comparison for the unit test
     expect(dollars).toBeCloseTo(3.745, 5)
    expect(yen).toBeCloseTo(0.02392971246, 10);
    expect(pound).toBeCloseTo(633.620689655, 5);
    })
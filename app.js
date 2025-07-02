// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
};


const fromDolarToYen = function(valueInDolar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = (valueInDolar * 1.07 )/ 156.5;
    // return the dollar value
    return valueInYen;
};

const fromYentoPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = (valueInYen * 157.5 )/ 0.87;
    // return the dollar value
    return valueInPound;
};



module.exports = {fromEuroToDollar, fromDolarToYen, fromYentoPound };
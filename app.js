const sum = (a,b) => {
    return a + b;
}
console.log(sum(7,3));


const fromEuroToDollar = (euro) =>{
    return euro*1.2;
}
const fromDollarToYen = (dolar) =>{
    return dolar/1.2*127.9;
}
const fromYenToPound = (yen) =>{
    return yen/127.9*0.8;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
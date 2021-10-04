const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    if(!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
    }
    if(firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }
    if(firstNum < secondNum) {
        for(let i = firstNum; i <= secondNum; i++) {
            sum += i;
        }
    }
    else {
        for(let i = firstNum; i >= secondNum; i--) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

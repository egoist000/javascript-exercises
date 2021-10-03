const removeFromArray = function(...args) {
    const array = args[0];
    const resultArray = [];
    array.forEach(element => {
        if(!args.includes(element, 1)) {
            resultArray.push(element);
        }
    });
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;

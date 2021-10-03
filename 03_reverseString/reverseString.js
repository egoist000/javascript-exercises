const reverseString = function(str) {
    let chars = str.split("");
    let tmp = [];
    for(let i = chars.length - 1; i >= 0; i--) {
        tmp.push(chars[i]);
    }
    return tmp.join("");
};

// Do not edit below this line
module.exports = reverseString;

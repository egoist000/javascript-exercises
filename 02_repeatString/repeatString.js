const repeatString = function(string, num) {
    let tmpStr = "";
    if(num >= 0) {
        for(let i = 0; i < num; i++) {
            tmpStr += string;
        }
    }
    else {
        return "ERROR"
    }
    return tmpStr;
};

// Do not edit below this line
module.exports = repeatString;

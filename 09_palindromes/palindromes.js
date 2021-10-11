const palindromes = function (text) {
    const string = text.toLowerCase().replace(/[^A-Za-z]/g, "");
    return string.split("").reverse().join("") == string;
};

// Do not edit below this line
module.exports = palindromes;

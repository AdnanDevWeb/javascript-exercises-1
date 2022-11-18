const reverseString = function(string) {
    let reversedString = string.split("")
    reversedString.reverse();
    let output="";
    for (let index = 0; index < reversedString.length; index++) {
        output+=reversedString[index]
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;

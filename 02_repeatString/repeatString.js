const repeatString = function(string,num) {
    if(num<0){
        return "ERROR";
    }
    let addString="";
    for(let i = 1; i<=num;i++){
        addString+=string
    }
    return addString
};

// Do not edit below this line
module.exports = repeatString;

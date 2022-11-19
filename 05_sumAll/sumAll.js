const sumAll = function(start , end){
    for(let i = 0 ; i<arguments.length ; i++){
        if(arguments[i] === NaN || typeof arguments[i]  === String || arguments[i] < 0){
            return undefined;
        }
    }
    let count = start
    let sum = 0;
    let finalSum = 0
    for(let i = 0 ; i < end ; i++){
        sum = count + i;
        finalSum+=sum
    }
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;

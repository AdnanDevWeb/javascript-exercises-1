const sumAll = function(start , end){
    for(let i = 0 ; i<arguments.length ; i++){
        if(isNaN(arguments[i]) === true || arguments[i] < 0 || typeof arguments[i] == 'string'){
            return "ERROR";
        }
    }
    let sum = 0;
    let finalSum = 0;
    let count;
    if(start < end){
        count = start
        for(let i = 0 ; i < end ; i++){
            sum = count + i;
            finalSum+=sum
        }

    }
    else{
        count = end;
        for(let i = 0 ; i < start ; i++){
            sum = count + i;
            finalSum+=sum
        }
    }
    
    
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;

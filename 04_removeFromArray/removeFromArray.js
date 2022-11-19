function removeFromArray(givenArray,deleteIt) {
    for(let i = 1 ; i<arguments.length ; i++){
        const removeThis = arguments[i]
        for(let i = 0 ; i < givenArray.length ; i++){
            const toRemove = givenArray.indexOf(removeThis)
            if(givenArray[i] === removeThis){
                givenArray.splice(toRemove,1)
            }
        }
    }

    return givenArray
};

// Do not edit below this line
module.exports = removeFromArray;

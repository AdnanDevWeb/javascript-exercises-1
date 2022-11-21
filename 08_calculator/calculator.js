const add = function(val1 , val2) {
  return val1 + val2
};

const subtract = function(val1 , val2) {
	return val1 - val2
};

const sum = function(array) {
  let summmed = 0;
	for(let i =0 ; i<array.length ; i++){
    summmed+=array[i]
  }
  return summmed
};

const multiply = function(array) {
  let multiplied = 1;
	for(let i =0 ; i<array.length ; i++){
    multiplied*=array[i]
  }
	return multiplied
};

const power = function(val1,val2) {
  return Math.pow(val1,val2)

};

const factorial = function(n) {
	let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  } 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

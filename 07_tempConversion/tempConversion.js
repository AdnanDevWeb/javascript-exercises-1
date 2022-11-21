const ftoc = function(value) {
  const toRound = (value - 32) * 5/9
  const returnIt = Math.round(toRound * 10) /10
  return returnIt
};

const ctof = function(value) {
  const toRound = (value * 9/5) + 32
  const returnItTwo = Math.round(toRound * 10) /10
  return returnItTwo
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

const ftoc = function(value) {
  const toRound = (value - 32) * 5/9
  return Math.round(toRound)
};

const ctof = function(value) {
  const toRound = (value * 9/5) + 32
  return Math.round(toRound)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

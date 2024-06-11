function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number !== 'number') throw new Error('Input must be a number');
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  const rangeArray = [];
  if (step > 0) {
    for (let i = min; i <= max; i += step) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}


module.exports = { isFive, isOdd, myRange };

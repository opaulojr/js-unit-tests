const average = (array) => {
  if (array.length === 0) return undefined;

  const areAllNumeric = array.every((value) => typeof value === 'number');

  if (!areAllNumeric) return undefined;

  const sum = array.reduce((acc, currentValue) => acc + currentValue, 0);
  const avg = Math.round(sum / array.length);

  return avg;
};

module.exports = average;

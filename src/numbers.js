const numbers = (array) => {
  if (!Array.isArray(array)) return undefined;

  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number' || Number.isNaN(array[i])) {
      return false;
    }
  }

  return true;
};

module.exports = numbers;

const myCounter = () => {
  const myArray = [];
  for (let outerCounter = 0; outerCounter <= 3; outerCounter += 1) {
    myArray.push(outerCounter);
    for (let innerCounter = 2; innerCounter <= 3; innerCounter += 1) {
      myArray.push(innerCounter);
    }
  }
  return myArray;
};

module.exports = myCounter;

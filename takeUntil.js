const takeUntil = (array, callback) => {
  const newArray = [];
  let i = 0;
  while (!callback(array[i])) {
    newArray.push(array[i]);
    i++;
  }
  return newArray;
};

module.exports = takeUntil;
const map = (arr, callBack) => {
  const newArray = [];
  arr.forEach(element => {
    newArray.push(callBack(element));
  });

  return newArray;
};

module.exports = map;

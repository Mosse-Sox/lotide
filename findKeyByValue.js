const findKeyByValue = (object, value) => {

  for (let key in object) {

    if (object[key] === value) {
      const keyName = key;
      return keyName;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;

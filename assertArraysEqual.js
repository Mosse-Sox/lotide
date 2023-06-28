const eqArrays = function(array1, array2) {
  let matching = true;

  for (let i = 0; i < array1.length; i++) {
    const element1 = array1[i];
    const element2 = array2[i];

    if (element1 !== element2 || typeof(element1) !== typeof(element2)) {
      matching = false;
      
      return matching;
    }
  }

  return matching;
};
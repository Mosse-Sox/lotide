const countLetters = function(lettersToCount) {
  const letterCounts = {};

  for (const letter of lettersToCount) {
    
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }

  return letterCounts;
};

module.exports = countLetters; 
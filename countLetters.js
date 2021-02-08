const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (results[letter]) {
      results[letter] += 1;
    } else if (letter !== " ") {
      results[letter] = 1;
    }
  }
  return results;
};


//TEST CODE
console.log(countLetters("awesome"));
assertEqual(countLetters('hello').l, 2);
assertEqual(countLetters('hello').h, 1);
assertEqual(countLetters('Catherine').e, 2);
module.exports = countLetters;
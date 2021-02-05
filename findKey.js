const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = (obj, callback) => {
  for (const key in obj) {
    if (callback(obj[key]))
      return key;
  }
};


// TEST

const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
const results1 = findKey(data1, x => x.stars === 2);
assertEqual(results1, "noma"); // should pass
console.log("-----------");
const data2 = {
  "Nothing Hill": { stars: 5 },
  "Pretty Woman": { stars: 7 },
  "Eat Pray Love": { stars: 4 },
  "Wonder": { stars: 2 },
  "The Pelican Brief": { stars: 3 },
  "Stepmon": { stars: 6 }
};
const results2 = findKey(data2, x => x.stars === 7);
assertEqual(results2, "Pretty Woman"); // should pass
console.log("----------");
assertEqual(results2, "The Pelican Brief "); // should fail

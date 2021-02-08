
const head = require('../head');
const assertEqual = require('../assertEqual')
assertEqual(head([5, 6, 7]), 5); // should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //should pass
assertEqual(head([5]), 5); // should pass
assertEqual(head([]), undefined); // should pass
assertEqual(head([5, 6, 7]), 7); // should fail
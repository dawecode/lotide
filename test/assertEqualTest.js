const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // should fail 
assertEqual(1, 1);// should pass
assertEqual('banana', 'apple');// should fail 
assertEqual(24, 25);// should fail 
assertEqual("cool", "cool"); // should pass 
assertEqual(true, false); // should fail 
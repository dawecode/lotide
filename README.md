# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dawecode/lotide`

**Require it:**

`const _ = require('@dawecode/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns first element of array
* `middle(array)`: returns middle of array
* `tail(array)`: returns everything after the head 
* `without(array)`: removes specific element from array
* `takeUntil(array,callback)`: return new array until a certain element using a callback and source array
* `eqArrays(arr1,arr2)`: comparing two arrays
* `assertArraysEqual(actual,expected)`: comparing two arrays with the help of eqArrays
* `countOnly(item,itemcount)`: counts only what item you want 
* `countLetters(string)`:returns a count of each letter
* `letterPositions(string)`:returns all the positions of the letter
* `findKey(obj,callback)`: finds a key specified by the callback
* `findKeyByValue(object,value)`: finds key by value 
* `eqObjects(obj1,obj2)`:compares objects 
* `asserObjectsEqual(actual,expected)`: uses eqObjects to compare actual and expected returns of objects 
* `assertEqual(actual,expected)`: compares actual and expected returns
* `map(array,callback)`:return an array based on the results of the callback


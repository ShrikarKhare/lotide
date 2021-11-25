# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shrikark/lotide`

**Require it:**

`const _ = require('@shrikark/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: compares two arrays for equality.
* `assertEqual(actual, expected)`: compares actual and expected input values.
* `assertObjectsEqual(actual, expected)`: compares two objects for equality.
* `countOnly(allItems, itemsToCount)`: counts items in a list, and their presence in an array.
* `eqArrays(arr1, arr2)`: compares individual elements of two arrays for equality.
* `eqObjects(object1, object2)`: compares individual key value pairs of two objects for equality.
* `findKey(object,callback)`: finds the key in an object that satisfies the callback function
* `findKeyByValue(obj, val)`: find the key in an object given the value of the key val pair.
* `head(arr)`: returns the first value in an array.
* `map(array, callback)`: runs the callback function on each value of a given array.
* `middle(arr)`: returns the middle value or values of an array.
* `takeUntil(array, callback)`: returns all values of an array until the callback function is satisfied. 
* `without(source, itemstoRemove)`: removes elements from an array given an array of items to remove.
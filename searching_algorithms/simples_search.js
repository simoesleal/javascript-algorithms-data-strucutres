let list = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

/* 
Case: In a login system, you need to know if a username has been taken.
Example of a searc of this example: list.indexOf("five")
*/

/* 
Objectives
1. Describe what a seaching algorithm is
2. Implement linear search on arrays
3. Implement binary search on sorted arrays
4. Implement a naive string searching algorithm
5. Implement the KMP string searching algorithm
*/

/* 
How do we search?
Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.
A maneira mais simples de buscar um elemento em uma lista, é olhar elemento por elemento na lista e verificar com o valor que queremos encontrar.

Javascritp has search methods build in!
There are many different search methods on arrays in Javascript:
indexOf
includes
find
findIndex

But behind the sceans they are doing the same thing, checking all the elements.
*/

/**
 * @description Linear Search implementation
 * pseudoCode
 * This function accepts an array and a value
 * Loop through the array and check if the current array element is equal to the value
 * If it is, return the index at which the element is found
 * If the value is never found, return -1
 */
function myLinearSearch(list, value) {
  let response = -1;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) response = i;
  }
  return response;
}

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

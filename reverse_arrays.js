// Reverse Array Exercise

/**Pseudocode:
 * assign array with input arrays
 * create empty array
 * use for loop to check to length of the array
 */

/* to input arrays: 
[1, 2, 3];
[1, 3, 5, 7, 9, 11];
[20, 50, 30, 60, 200];
[1, -1, 2, -3, 5, -8, 13];
*/

const arrOne = [1, 2, 3];
const arrTwo = [1, 3, 5, 7, 9, 11];
const arrThree = [20, 50, 30, 60, 200];
const arrFour = [1, -1, 2, -3, 5, -8, 13];

const reversedArray = []
for(let i = arrOne.length - 1; i >= 0; i--) {
  const backwardArray = arrOne[i]
  reversedArray.push(backwardArray)
}
console.log(reversedArray)

// or can is to use reverse();
arrTwo.reverse();
console.log(arrTwo);

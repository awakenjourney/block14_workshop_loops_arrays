// Only Odds Exercise
/**Pseudocode:
 * creat array with numbers to check
 * creat empty array to add odd numbers
 * use for loop to check the array
 * use % operation to check if the numbers is odd or even
 */

const arrOne = [2, 4, 6, 8, 11, 20, 15, 22];
const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrThree = [70, 42, 55, 81, 21, 91, 34];
const arrFour = [2, 4, 6, 8, 10, 11, 12];

// results
const oddNums = [];
for (let i = 0; i < arrOne.length; i++) {
  if (arrOne[i] % 2 != 0) {
    oddNums.push(arrOne[i]);
  }
}

console.log(oddNums);



// can use use filter
// const oddNums =arrOne.filter(function(arrOne) {
//   return arrOne % 2 !== 0;
// });
// console.log(oddNums)


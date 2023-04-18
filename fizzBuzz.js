// bizzBuzz instruction:
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

/**Pseudocode:
 * create method
 * set number to 100
 * create for loop to check number 1 to 100
 * condition 1 is to check if numbers is multiple of 3 and 5
 * condition 2 is to check if numbers is multiple of 3
 * condition 3 is to check if numbers is multiple of 5
 */

//this is a method
const fizzBuzz = () => {
  const hundred = 100;

  //for loop, counting
  for (let i = 1; i <= hundred; i++) {
    //this is personal preference
    const index = i;

    if (index % 3 === 0 && index % 5 === 0) {
      console.log(`FizzBuzz`);
    } else if (index % 3 === 0 || index % 3 === 0) {
      if (index % 3 === 0) {
        console.log(`FIZZ`);
      }
    } else if (index % 5 === 0 || index % 5 === 0) {
      if (index % 5 === 0) {
        console.log(`BUZZ`);      }
    } else {
      console.log(`${index} is not multiple of 3 and 5.`);
    }
  }
};

fizzBuzz();

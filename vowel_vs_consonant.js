// Vowel VS Consonant
// check how many vowel and consonant the word has
// input string to check: "hello", "ukelele", "awesome", "onomonopia", "textbook"

/* Pseudocode:
* 
*/

const testString = 'hello';
let count = 0;

for(let i=0; i < testString.length; i++){
    let findWord = testString[i].toLowerCase();
    if(findWord === 'a' || findWord === 'e' || findWord === 'i' || findWord === 'o' || findWord === 'u') {
        count ++;
    }
}

console.log(`${testString} has ${count} vowels and ${testString.length-count} consonants`);



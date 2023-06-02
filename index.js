function isPalindrome(word) {
  // Write your algorithm here
  wordArray = Array.from(word);
  arrayLength = wordArray.length;
  for (let i = 0; i < Math.floor(arrayLength / 2); i++) {
    if (wordArray[i] !== wordArray[(arrayLength - 1) - i]) return false;
  }
  return true;
}

/* 
  Add your pseudocode here
  create array of the word
  create length of array
  write for loop to compare each element of first half to each of second half and if any are not equal return false
  after comparing all elements in for loop return true if no false occurs
*/

/*
  Add written explanation of your solution here
  i created an array from the word string, and also created a variable for the arraylength.  Then i used a for loop to compare each element in the first half 
  to each element in the second half reversed (e.g. first to last, second to second to last).
  for loop only runs through half the array b/c that will confirm palindrome.  Used math.floor to round down uneven lengths since the middle char doesn't need to be compared
  (ie. will always be in same spot)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  // my test code.
  // const arrayNames = ['matiam', 'america', 'mannam', 'manam', 'abolishy']
  // arrayNames.forEach(name => {
  //   console.log(name, isPalindrome(name));
  // })
}

module.exports = isPalindrome;

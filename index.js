
  function hasTargetSum(array, target) {
    // create an object to keep track of all the numbers we've seen
    const seenNumbers = {};
    // iterate over the array of numbers
    for (const number of array) {
      // for the current number, identify a complementary number that adds to our target
      // (for example: if our number is 2, and the target is 5, the complementary number is 3)
      const complement = target - number;
      // check if any of the keys in our object is the complement to the current number
      // if so, return true
      if (seenNumbers[complement]) return true;
      // save the current number as the key on our object so we can check it later against other numbers
      seenNumbers[number] = true;
    }
    // if we reach the end of the array, return false
    return false;
  }

/* 
  Write the Big O time complexity of your function here
  i will use o(log)n
*/

/* 
  Add your pseudocode here

  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true (3 + 7)
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); // true (19 + 6)
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4)); // false (no pair)
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([-7, 10, 4, 8], 3)); // true (-7 + 10)
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([1, 2, 3, 4], 5)); // true (2 + 3)
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([2, 2, 3, 3], 4)); // true (2 + 2)
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([4], 4)); // false (only one number, can't form a pair)
  }

module.exports = hasTargetSum;

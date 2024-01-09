//Description
// Given an integer x, return true if x is a palindrome and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1



//My solution

/**
 * @param {number} x
 * @return {boolean}
 */
// integer called x, positive or negative, not a float, no char, no boolean, always a positive or negative integer.  always a multi digit number. 
// return boolean. true if it's a palindrome. false if it's not. 

var isPalindrome = function(x) {
    //x to a string
      let forward = x.toString()
    //string to an array reversed back to a string
      let reverse = x.toString().split('').reverse().join('')
    // compare and return boolean
      return forward ===reverse
    
    };
    
    
    // Input: x = 121 Output: true
    //Input: x = -121 Output: false
    //Input: x = 10 Output: false
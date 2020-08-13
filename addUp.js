// Given a non - negative integer num, repeatedly add all its digits until the result has only one digit.

//     Example:

// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
// Since 2 has only one digit, return it.

/**
 * @param {number} num
 * @return {number}
 */
//o(1)  constatnt time complexity  
// there are only 3 operations happening here 

var addDigits = function (num) {
    return (num - 1) % 9 + 1 
};
console.log(addDigits(32))
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    //split to get array reverse it joint it with space remove extera 
    //space in the middle of the string, trim the extera space at the start and end
    return s.split(" ").reverse().join(" ").replace(/\s+/g, " ").trim()
   
    
};
console.log(reverseWords("  hello world!  "))
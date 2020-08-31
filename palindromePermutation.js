// 266. Palindrome Permutation

// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
//     "code" -> False, "aab" -> True, "carerac" -> True.

//         Hint:

// Consider the palindromes of odd vs even length.What difference do you notice ?
//     Count the frequency of each character.
// If each character occurs even number of times, then it must be a palindrome.How about character which occurs odd number of times ?
//     Hide Company Tags Google Uber Bloomberg
// Hide Tags Hash Table
// Hide Similar Problems(M) Longest Palindromic Substring(E) Valid Anagram(M) Palindrome Permutation II(E) Longest Palindrome


 /**
  * @param {string} s
  * @return {boolean}
  */
var canPermutePalindrome = function (s) {
    let hash={}
    for (let i = 0; i < s.length; i++){
        if(hash[s[i]] === undefined){
            hash[s[i]] = 1
        } else {
            hash[s[i]]++
        }
    }
    let oddCount = 0
    for (let k in hash){
        if(hash[k] % 2 !== 0 ){
            oddCount ++
        }
    }
    return oddCount< 2
}
//"code" -> False, "aab" -> True, "carerac" -> True.
console.log(canPermutePalindrome('code'))
console.log(canPermutePalindrome('aabb'))
console.log(canPermutePalindrome('carerac'))
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let hash = {}
    let l = s.length
    console.log(l, "<>>>l")
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) {
            hash[s[i]] = 1
        } else {
            hash[s[i]]++
        }
    }
    let countOdd = 0
    let hasOdd = false
    for (let k in hash) {
        if (hash[k] % 2 === 0) {
            countOdd += hash[k]
        } else {
            countOdd += hash[k] - 1
            hasOdd = true
        }
    }


    return hasOdd ? countOdd + 1 : countOdd
};
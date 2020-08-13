// Given an integer n, find two integers a and b such that:

// A) a >= 0 and b >= 0
// B) a + b = n
// C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.
// You will return the digitSum(a) + digitsum(b).

// For example:
// solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.
// n will not exceed 10e10.

// More examples in test cases.

// Good luck!
function solve(n) {
    if (n.toString().length === 1) {
        return n;
    }
    let num1 = Math.floor(n / 2).toString().split('').reduce((acc, el, i, arr) => {
        if (i === 0 && arr.length === 1) {
            return '9'
        }

        if (i !== 0) {
            return acc + '9'
        }

        return acc + (parseInt(el) - 1).toString()
    }, '')

    let num2 = (n - parseInt(num1)).toString()

    return (num1 + num2).split('').reduce((acc, ch) => acc += parseInt(ch), 0)
}
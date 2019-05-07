/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    if (numbers === null || numbers.length === 0) {
        return -1;
    }
    let hash = {}
    for (let i = 0; i < numbers.length; i++) {
        let curNum = numbers[i];
        if (hash[target - curNum] !== undefined) {
            return [hash[target - curNum], i + 1];
        } else {
            hash[curNum] = i + 1
        }
    }
    return [];
};
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
        //check if the remainder of target and current number is exist in the hash
        if (hash[target - curNum] !== undefined) {
            return [hash[target - curNum], i + 1];
        } else {
            hash[curNum] = i + 1
        }
    }
    return [];
};

//this approach is giving the right answer 
//time complexity is highier than the hash table approach!

var twoSum = function (nums, target) {
    let i = 0;
    let j = 1
    if (nums === undefined || nums.length === 0) {
        return null;
    }
    while (i < j) {
       
        let curNum = target - nums[i]
        if (nums[j] === curNum) {
            return [i,j]
        } else if(nums[j]!== curNum){
            j++
        } else{
            i++
        }
    
    }

};
console.log(twoSum([2, 15, 11, 14, 7],9))
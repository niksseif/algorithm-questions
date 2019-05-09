var missingNumber = function (nums) {
    nums = nums.sort((a, b) => { return a - b; }); // sort first!
    let start = 0, end = nums.length; // length, not length - 1
    while (start < end) {
        mid = start + parseInt((end - start) / 2); // parse Int!!!
        if (nums[mid] > mid) {
            end = mid;
        } else {
            start = mid + 1;// make one example to find out if + 1 or not
        }
    }
    return start;
};
// O(N)
// 2.2 SUM if n it too large, add one, subtracte one?
var missingNumber = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum -= nums[i];
        sum += i;
    }
    return sum + nums.length;
};
console.log(missingNumber([1,0,2,4]))
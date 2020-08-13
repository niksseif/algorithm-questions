// A peak element is an element that is greater than its neighbors.

// Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that num[-1] = num[n] = -∞.

// For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
/*
 @param input is an array of numbers
 @ param output is a index of a peak number 
 @ binary search time complexity is o (log(n))
 */

 const peakFinder = (nums) => {
     
    let start = 0
    let end = nums.length-1;
    let middle;
    if(nums === null || nums.length === 0){
        return -1;
    }
   
    while (start+1 < end ){
        middle = start + parseInt((end-start)/2)
   
        if(nums[middle] > nums[middle-1] && nums[middle] > nums[middle+1]){
            
            return middle;
        } else if (nums[middle]< nums[middle-1]&& nums[middle]> nums[middle+1]){
            end = middle 
        } else if (nums[middle]< nums[middle+1]&& nums[middle]> nums[middle-1]){
            start= middle
        } else {
            start = middle ;
      
        }
    }
    // at the end only start and end left compare and return the peak of those 2 numbers 
    return nums[start] > nums[end] ? start : end
 }
let n = [1, 2, 3, 1]
let res = peakFinder(n)
 
 
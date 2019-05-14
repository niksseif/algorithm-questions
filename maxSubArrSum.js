const maxSubArrSum = (arr, n) => {
    let maxSum= 0
    let tempSum= 0
    
    for (let i = 0; i < n; i++){
       tempSum += arr[i]
    }
    //getting the first sum from the first elements
    maxSum = tempSum;
    // remove first element add the third element ==>> moving window
    for (let i = n; i < arr.length;i++){
        tempSum = tempSum - arr[i-n] + arr[n]
        //assign highiest number to maxSum
        maxSum = Math.max(tempSum, maxSum);
       
    }
    return maxSum
}
console.log(maxSubArrSum([1,2,5,2,8,1,5], 2))

// ----------------------------------------------------------------
// return maxSum of consecutive numbers 

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let total = 0 // 700
    for (let i = 0; i < num; i++) {
        total += arr[i]
        
    }
    let currentSum = total;

    for (let i = num; i < arr.length; i++) {
       
        currentSum += arr[i] - arr[i - num]
     
        total = Math.max(total, currentSum) 
    }
    return total;
}
console.log(maxSubarraySum([100,200,300,400], 2))
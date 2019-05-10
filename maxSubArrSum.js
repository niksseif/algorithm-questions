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

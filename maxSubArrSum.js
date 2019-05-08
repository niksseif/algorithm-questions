const maxSubArrSum = (arr, n) => {
    let maxSum= 0
    let tempSum= 0
    
    for (let i = 0; i < n; i++){
       tempSum += arr[i]
        
    }
    maxSum = tempSum;
    console.log(maxSum,"<>>>>maxSum")
    for (let i = n; i < arr.length;i++){
        
        temp = tempSum - arr[i-n] + arr[n]
        console.log(temp,"<>>>>temp")
        maxSum = Math.max(temp, maxSum);
    }
    return maxSum
}
console.log(maxSubArrSum([1,2,5,2,8,1,5], 2))

// for (let i =0; i < n ; i++){

// }
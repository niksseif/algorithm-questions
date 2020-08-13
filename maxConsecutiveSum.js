function maxConsecutiveSum(arr){
    let localMax = 0
    let ultimateMax = 0;
    for (let i =0; i < arr.length; i++){
        let sum = localMax + arr[i];
        localMax = Math.max(sum, arr[i]);
        ultimateMax = Math.max(ultimateMax, localMax)
    }
    return ultimateMax;
}
console.log(maxConsecutiveSum([6,-1,3,5,-10]))
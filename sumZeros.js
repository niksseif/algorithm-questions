//this is a sorted array and we can use pointers to move left and right 


function sumZeros(arr){
    let left = 0; 
    let right = arr.length-1
    while (left < right ){
        let sum = arr[left]+arr[right]
        if(sum === 0){
            return [arr[left],arr[right]]
            
        }  else if (sum > 0){
            right--
        } else {
            left++
        }
    }
}
console.log(sumZeros([-4,1,2,3,4]));

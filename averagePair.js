
//find pairs that has sum of target 
//input is array and target and output is pair of 2 numbers 
//o(1)
//if array is empty return false
function averagePair(arr,target) {
    if (arr.length === 0){
        return false;
    }
    let start =0;
    let end = arr.length -1
    while( start < end ){
        let avg = (arr[start]+arr[end])/2
        console.log(avg,"<>>>>avg")
        if(avg === target){
            return true;
        }else if(avg < target){
            start++
        } else {
            end--
        }
        
    }
    return false

 
}
console.log(averagePair([1, 3, 3, 5], 8))
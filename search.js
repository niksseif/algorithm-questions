//write a function that accept a number and an array and return the index of that number inside the array

function search(arr, num){
    let start =0;
    let end =arr.length-1;
    let mid;
    while(start < end){
    mid = Math.floor((start+end)/2)
    if (arr[mid]< num ){
        start = mid+1
    } else if (arr[mid ] > num){
        end = mid-1
       
    } else {
        return mid;
    }
    
}
return -1;
  

}
console.log(search([1,2,3,4,5,6],7))
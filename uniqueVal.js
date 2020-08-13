//compare two numbers arr[i] and arr[j]
// if arr[i] is not qual to arr[j]
//move i one up and change the arr[i] to arr[j] that means now arr[i] === arr[j]
//return the length of the sorted array 

function uniqueVal(arr){
    if(arr.length === 0){
        return 0
    }
    let i =0;
   for (let j = 1; j < arr.length; j++){
       if(arr[i]!== arr[j]){
           i++
           arr[i] = arr[j]
           
       }
   }
   return i+1
    
}
console.log(uniqueVal([1,1,2,3,4]))
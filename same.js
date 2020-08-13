// compare 2 arrays and check if the second array has alll the aaray one squared number 
//[1,1,2], [1,4,1] == true 
//[1,2,1], [1,1,1] ==> false 

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let obj1={}
    let obj2 ={}
    for (let i =0; i < arr1.length; i++){
        obj1[arr1[i]] ? obj1[arr1[i]]++ : obj1[arr1[i]] = 1;
    }
    for (let j = 0; j < arr1.length; j++) {
        obj2[arr2[j]] ? obj2[arr2[j]]++ : obj2[arr2[j]] = 1;
    }
    for (let k in obj1){
        console.log(k**2,"<>>>@@")
        if (!(k**2 in obj2)){
            return false;
        }
        if(obj2[k**2] !== obj1[k]){
            return false;
        }
       
    }
    return true;
}

console.log(same([1, 1, 2], [1, 4, 1]))
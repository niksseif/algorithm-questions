


function sameFrequency(n1,n2) {
    //turn number into string
    let str1 = n1.toString()
    let str2 = n2.toString()
    //check if their length is not similar
    if (str1.length !== str2.length){
        return false;
    }
    // assign two objects
    let obj1={}
    let obj2 ={}
//looping through first string pushing chars to the obj1
    for (let i = 0; i < str1.length; i++){
        obj1[str1[i]] === undefined ? obj1[str1[i]] = 1 : obj1str1[i]++
    }
    //looping through second string pushing chars to the object2
    for (let i =0; i < str2.length;i++){
        obj2[str2[i]] === undefined ? obj2[str2[i]] = 1 : obj2[str2[i]]++
    }
   //checking if they have similar keys and values 
    for (let k in obj2){
        if (obj2[k] !== obj1[k]){
            return false;
        }
    }
    return true
}
console.log(sameFrequency(132,128))
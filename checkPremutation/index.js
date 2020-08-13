//Given two strings write a method to decide if one is a permutation of the other 

let objMaker = (s) => {
  return s.split("").reduce((acc, char) => {
         if(acc[char] === undefined){
             acc[char] = 1
            } else {
             acc[char]++
            }
         return acc;
    }, {})
}
const permute = (s1, s2) => {
    if(s1.length !== s2.length ){
        return false;
    }
    if(s1.length === 0 && s2.length === 0){
        return false;
    }

   let str1 = objMaker(s1);
   let str2 = objMaker(s2);
   for(let k in str1){
       if(str1[k] !== str2[k]){
           return false;
       }
       return true;
   }
   
}
//--------------------- Second option ---------- 
const permute = (s1, s2) =>{
    if(s1.length !== s2.length || (s1.length === 0 && s2.length === 0)){
        return false;
    }
    
    return  s1.split("").sort().join("") === s2.split("").sort().join("")
}
module.exports = permute;

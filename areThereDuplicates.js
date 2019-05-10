

function areThereDuplicates(...args) {
 let start = 0; 
 let end = 1
 //sort the array
 args.sort()
 if(args.length === 0){
     return null;
 }
 while (end < args.length){
     if(args[start] === args[end]){
         return true
     }
     start++
     end++
 }
 return false

  
 
}
console.log(areThereDuplicates('a','b','c','a'))
console.log(areThereDuplicates(1,2,1))
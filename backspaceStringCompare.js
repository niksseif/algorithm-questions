function compare(st1,st2){ 
    return helper(st1) === helper(st2)
}
function helper(s){
   let result=[];
   for( let i =0; i < s.length; i++){
       if(s[i] !== '#' ){
           result.push(s[i])
       } else {
           result.pop();
       }
   }
   return result.join(" ")
}
// console.log(compare('a##c', '#a#c'))
// console.log(compare('ab#c', 'ad#c'))
console.log(compare('a#c',"b"))
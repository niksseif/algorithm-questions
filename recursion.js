// function rec(n){
//     if(n <= 1 ){
//         return 'completed' 
//     }
//    console.log('hello')
//     return rec(n-1)
// }
// console.log(rec(4))

function factorial(n){
if(n === 1){
    return 1;
}

return n* factorial(n-1)
}
console.log(factorial(5)) //>>> 5*4*3*2*1
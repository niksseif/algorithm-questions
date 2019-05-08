function powerset(str) {
    let res = []
    function helper(build, depth){
     //base case everytime you hit the base 
     //which is the depth of the tree push the build into the result
        if(depth === str.length){
        res.push(build)
        return
        }
      //left branch
        helper(build, depth+1)
        //right branch 
        helper(build+str[depth], depth+1)
    }
 helper('',0)
 return res
}
console.log(powerset('abc'))
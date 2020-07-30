// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
//remember they need to be in order 

var orderedCount = function (text) {
    let result = [];
    let obj={};
    for (let i = 0; i < text.length; i++){
        let char = text[i];
        let key = obj[char];
        if(key === undefined){
            //by assigning i to the value of the object char we are asigning same order as our array to the object.
            obj[char] = i;
            result.push([char,1])
        }else {
            //here if index is defined already that means it is already in our result array and we just need to add one to the value of the character.
            result[key][1]++;
        }
    }
    return result;

}
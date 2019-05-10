// return string to a number 
//
// assign min to -2147483648
//assign max to 2147483648
var min = Math.pow(-2, 31);
var max = Math.pow(2, 31) - 1;

var myAtoi = function (str) {
    //change string to number 
    x = parseInt(str);
   
    if (isNaN(x)) return 0;
    //if x is less than min return min
    else if (x < min) return min;
    //if x is bigger than max return max
    else if (x > max) return max;
    // else return max
    else return x;
};
console.log(myAtoi('4193 with words'))
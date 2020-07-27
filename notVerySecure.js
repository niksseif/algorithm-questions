// In this example you have to validate if a user input string is alphanumeric.The given string is not nil / null / NULL / None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore
function alphanumeric(string) {
    //your code here
    let error = true
    if (string.length === 0) {
        error = false
    }
    let chars = string.split("");
    chars.map((char) => {
        console.log(char, "<>>>char")
        if (char === " ") {
            error = false
        }
        else if (char === "_") {
            console.log(char, "<>>>cjcjjcjc")
            error = false
        }
        else if (char === " ") {
            error = false;
        }

    })
    return error;
}
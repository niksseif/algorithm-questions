// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" ;
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 


//------------------OPTION 1
function solve(a, b) {
  return (a + b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
};



// ------------------OPTION 2

function ll(str, stt) {
    let st = str.split('')
    let re = ''
    for (let i = 0; i < st.length; i++) {
        let char = st[i]
        let nn = stt.includes(char)
        if (!nn) {
            re += char
        }
    }
    return re
}

function solve(a, b) {
    let bb = ll(a, b)

    let aa = ll(b, a)

    return bb + aa
};

solve('xyab', 'xzca')//'ybzc'
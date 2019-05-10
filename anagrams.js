//input 2 string same length same number of letters 
//output boolean 


function anagram(s, t){
    if (t.length !== s.length) return false;
    const counts = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    for (let c of t) {
        if (!counts[c]) return false;
        console.log(c,"<>>>>c")
        console.log(counts[c],"<>>>>")
        counts[c]--;
    }
    return true;
}
console.log(anagram('aer', 'ara'))
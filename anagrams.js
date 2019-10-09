// input 2 string same length same number of letters
// output boolean


// function anagram(s, t){
//     if (t.length !== s.length) return false;
//     const counts = {};
//     for (let c of s) {
//         counts[c] = (counts[c] || 0) + 1;
//     }
//     for (let c of t) {
//         if (!counts[c]) return false;
//         console.log(c,"<>>>>c")
//         console.log(counts[c],"<>>>>")
//         counts[c]--;
//     }
//     return true;
// }
// console.log(anagram('aer', 'ara'))

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const count = {};
  for (let c = 0; c < s.length; c++) {
    console.log(s[c], '<<<cc');
    if (count[s[c]] === undefined) {
      count[s[c]] = 1;
    } else {
      count[s[c]]++;
    }
  }
  console.log(count, '<<count');
  for (let c = 0; c < t.length; c++) {
    if (!count[t[c]]) {
      return false;
    }
    count[t[c]]--;
  }

  return true;
};
console.log(isAnagram('anagram', 'nagaram'));

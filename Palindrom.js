
// ------------Soloution one
// const isPalindrome = (st) => {
//   const hash = {};
//   for (let i = 0; i < st.length; i += 1) {
//     if (hash[st[i]] === undefined) {
//       hash[st[i]] = 1;
//     } else {
//       hash[st[i]] += 1;
//     }
//   }
//   let oddCount = 0;
//   for (key in hash) {
//     if (hash[key] % 2 !== 0) {
//       oddCount++;
//     }
//     return oddCount < 2;
//   }
// };
//= ======== Soloution two
// const isPalindrome = (st) => {
//   const reversed = st.split('').reverse().join('');
//   return st === reversed;
// };
// ------------Soloution three
const isPalindrome = str => str.split('').every((char, i) => char === str[str.length - i - 1]);
console.log(isPalindrome('abba'));


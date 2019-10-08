const reverseVowels = (s) => {
  // define vowels
  const vowels = 'aeoiuAEOIU';
  // split the string into an array of chars
  const chars = s.split('');
  //    start gets the start index of the array
  let start = 0;
  // last index of the array
  let end = s.length - 1;
  // define the temporary variables
  let temp;
  // check if the start is less than end and chars is not inside the vowels string
  // start is moving up
  while (start < end) {
    while (start < end && vowels.indexOf(chars[start]) === -1) {
      start++;
    }
    // check ig the char index end is not inside vowel string end is moving down
    while (start < end && vowels.indexOf(chars[end]) === -1) {
      end--;
    }
    // let temp gets the char[end] to be able to swap the two chars
    temp = chars[end];
    chars[end] = chars[start];
    chars[start] = temp;
    start++;
    end--;
    // join the array char in the end
    return chars.join('');
  }
};
console.log(reverseVowels('hello'));// holl
console.log(reverseVowels('Leetcode'));// Leotcede

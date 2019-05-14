//write a function that accept the longest substring of an string with all distinct characters

function findLongestSubstring(str){
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        console.log(char,"<>>>char")
        if (seen[char]) {
            console.log(seen,"<>>>>seen")
            console.log(start, "<>>>start")
            console.log(seen[char], "<>>>seen char")
            start = Math.max(start, seen[char]);
            
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;

}
console.log(findLongestSubstring('thisisawesome'))
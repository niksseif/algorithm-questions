//string compression 
//implement a method a method to perform basic string compression using the counts of repeated characters, for example the strig  aabbccaaa a2b1c2aa1
const objMaker = (st) =>{
  return 
}
const stringCompression = (st) => {
  let currentCount = ''
  let currentChar = '';
  let maxCount = 1
  let res =''
  for(let i =0; i < st.length; i++){
    if(currentChar !== st[i]){
      res = res + currentChar + currentCount
      maxCount = Math.max(maxCount,currentCount);
      currentChar = st[i];
      currentCount = 1;
    } else {
      currentCount++
    }
  } 
  res = res + currentChar + currentCount;
  return maxCount === 1 ? st : res;
  
}
module.exports = stringCompression;
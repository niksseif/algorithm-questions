function hash(key, arrLen) {
  let total = 0;
  for (const char of key) {
    const val = char.charCodeAt(0) - 96;
    total = (total + val) % arrLen;
  }
  return total;
}
console.log(hash('hello', 5));

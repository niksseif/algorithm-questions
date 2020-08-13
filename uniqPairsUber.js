const pairsOfEqualSums = (arr) => {
  const map = {};
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (!map[arr[i] + arr[j]]) {
        map[arr[i] + arr[j]] = [[arr[i], arr[j]]];
      } else {
        map[arr[i] + arr[j]].push([arr[i], arr[j]]);
      }
    }
  }
  const res = [];
  for (const [key, value] of Object.entries(map)) {
    if (value.length === 2) {
      res.push(formatValue(value));
    }
  }
  return res.join(', ');
};

const formatValue = value => `[${value[0][0]}, ${value[0][1]}] & [${value[1][0]}, ${value[1][1]}]`;
console.log(pairsOfEqualSums([9, 4, 3, 1, 7, 12]));

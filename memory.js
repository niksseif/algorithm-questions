const memo = (com, forground, background) => {
  const sum = {};
  const colID = [0];
  const colM = [1];
  for (let i = 0; i < forground.length; i++) {
    for (let j = 0; j < background.length; j++) {
      const s = forground[i][colM] + background[j][colM];
      if (!sum[s]) {
        sum[s] = [forground[i][colID], background[j][colID]];
        console.log(sum, '<>>>sum');
      } else {
        sum[s].push([forground[i][colID], background[j][colID]]);
        console.log(sum, '<>>>>sum');
      }
    }
  }
  let max = 0;
  for (const k in sum) {
    if (k <= com) {
      if (k > max) {
        max = k;
        console.log(max, '<>>>max');
      }
      console.log(max, '<>>>sss');
    }
  }
  return sum[max];
};
console.log(memo(14, [[1, 8], [2, 7], [3, 14]], [[1, 5], [2, 10], [3, 14]]));


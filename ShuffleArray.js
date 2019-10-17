// Shuffle a set of numbers without duplicates.
const Solution = function (nums) {
  // hold nums in Solution
  this.nums = nums;
};

Solution.prototype.reset = function () {
  return this.nums;
};

Solution.prototype.shuffle = function () {
  // create a copy of this.nums, shuffle it, and return it
  const shuffled = this.nums.slice();
  const n = shuffled.length;
  const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };

  // swap elements with random elements
  for (let i = 0; i < n; i++) { swap(shuffled, i, Math.floor(Math.random() * n)); }

  return shuffled;
};

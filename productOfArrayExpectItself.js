// eslint-disable-next-line func-names
const productExceptSelf = function (nums) {
  const result = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = 1;
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] *= left;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
};


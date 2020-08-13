// Peak Index in a Mountain Array
// Let's call an array A a mountain if the following properties hold:

// A.length >= 3
// There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ...A[i - 1] < A[i] > A[i + 1] > ... > A[A.length - 1]
// Given an array that is definitely a mountain, 
// return any i such that A[0] < A[1] < ...A[i - 1] < A[i] > A[i + 1] > ... > A[A.length - 1].

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
    if (A.length === 0 || A === null) {
        return a
    }
    let start = 0;
    let end = A.length - 1
    let mid;
    while (start + 1 < end) {
        mid = start + parseInt((end - start) / 2)
        if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
            return mid
        } else if (A[mid] < A[mid - 1] && A[mid] > A[mid + 1]) {
            end = mid
        } else if (A[mid] > A[mid - 1] && A[mid] < A[mid + 1]) {
            start = mid
        } else {
            start = mid
        }
    }
    return A[start] > A[end] ? start : end
};
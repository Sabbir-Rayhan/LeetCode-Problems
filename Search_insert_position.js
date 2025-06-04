// https://leetcode.com/problems/search-insert-position/description/

let searchInsert = function(nums, target) {
    let first = 0, last = nums.length - 1;

    while (first <= last) {
        let mid = Math.floor((first + last) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }
    return first;
};

let nums = [1, 3, 5, 6], target = 2;
console.log(searchInsert(nums, target));  // Output: 1

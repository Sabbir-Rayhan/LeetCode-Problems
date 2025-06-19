// https://leetcode.com/problems/subarray-sum-equals-k/description/

//----> Brute Force method

let nums= [10, 2, -2, -20, 10], k = -10

var subarraySum = function(nums, k) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        let sum = 0
        for(let j = i; j<nums.length; j++){
            sum+=nums[j];
            if(sum == k){
                count++;
            }
        }
    }
    return count;
};

console.log(subarraySum(nums,k))
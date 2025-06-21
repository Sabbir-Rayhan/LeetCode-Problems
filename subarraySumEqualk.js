// https://leetcode.com/problems/subarray-sum-equals-k/description/

//----> Brute Force method. Time Complexity O(n^2)

// let nums= [10, 2, -2, -20, 10], k = -10

// var subarraySum = function(nums, k) {
//     let count = 0;
//     for(let i=0; i<nums.length; i++){
//         let sum = 0
//         for(let j = i; j<nums.length; j++){
//             sum+=nums[j];
//             if(sum == k){
//                 count++;
//             }
//         }
//     }
//     return count;
// };

// console.log(subarraySum(nums,k))









// Efficient Approach--> O(n)

let nums= [1,2,3],k=3

var subarraySum = function(nums, k){
    let sum = count = 0;
    let map = new Map();

    map.set(sum,1)

    for(let i=0; i<nums.length; i++){
        sum+=nums[i];
        if(map.has(sum-k)){
            count+=map.get(sum-k);
        }

        map.set(sum,(map.get(sum) || 0)+1)
    }
    return count
}

console.log(subarraySum(nums,k));
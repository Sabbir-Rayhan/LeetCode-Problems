// https://leetcode.com/problems/two-sum/description/

let nums = [2,7,11,15], target = 9;



var twoSum = function(nums, target) {
    let map  = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(target-nums[i])){
            return [i,map.get(target-nums[i])]
        }else{
            map.set(nums[i],i)
        }
    }

    return [-1,-1]
};
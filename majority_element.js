// https://leetcode.com/problems/majority-element/description/

let nums = [2,2,1,1,1,2,2]

let count = 1;
let ans = nums[0];

for(let i=1; i<nums.length; i++){
    if(count == 0){
        ans = nums[i];
        count = 1;
    }else if(ans == nums[i]) count++;
    else count--;
}

console.log(ans);
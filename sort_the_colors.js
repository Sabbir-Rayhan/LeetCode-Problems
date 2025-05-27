//https://leetcode.com/problems/sort-colors/description/

let nums = [0,2,0,2,1,1,0,2,1,0,0,0,1,1,2,2,2,2,2,2];
let j=0,i=0,k=nums.length-1;

while(i<=k){
    if(nums[i] == 0){
        [nums[i],nums[j]] = [nums[j],nums[i]];
        i++;
        j++;
    }else if(nums[i] == 2) {
        [nums[i],nums[k]] = [nums[k],nums[i]];
        k--;
    }else i++;
}

console.log(nums)


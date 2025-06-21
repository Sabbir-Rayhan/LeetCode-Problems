// https://leetcode.com/problems/longest-consecutive-sequence/description/

let nums = [100,4,200,1,3,2];

var longestConsecutive = function(nums) {
    let longest = 0;
    let set = new Set(nums);

    for(let val of set){
        let count = 1;
        if(!set.has(val-1)){
            while(set.has(val+count)){
                count++;
            }
            longest = Math.max(longest,count)
        }
    }

    return longest;
};

console.log(longestConsecutive(nums))
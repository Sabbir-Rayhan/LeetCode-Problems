//https://leetcode.com/problems/intersection-of-two-arrays/description/

let nums1 = [4,9,5], nums2 = [9,4,9,8,4]

var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let ans = [];

    for(let i=0; i<nums2.length; i++){
        if(set.has(nums2[i]) && !ans.includes(nums2[i])){
            ans.push(nums2[i]);
        }
    }

    return ans;
};

console.log(intersection(nums1,nums2))
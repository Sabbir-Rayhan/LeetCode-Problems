// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

let nums = [4,5,6,7,0,1,2], target = 0;


let Search = (nums,target)=>{

    let first = 0, last = nums.length-1;
    while(first<=last){
        let mid = Math.floor((first+last)/2)
        if(target == nums[mid]) return mid;

        else if(nums[first]<=nums[mid]){
            if(target>=nums[first] && target<=nums[mid]) last = mid;
            else first = mid + 1
        }else{
            if(target>=nums[mid+1] && target<=nums[last]) first = mid + 1;
            else last = mid
        }
    }

    return -1

}

console.log(Search(nums,target))
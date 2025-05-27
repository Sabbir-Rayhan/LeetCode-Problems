// https://leetcode.com/problems/trapping-rain-water/description/

let height = [4,2,0,3,2,5];

let left = new Array(height.length);
let right = new Array(height.length);
let maxLeft = height[0];
let maxRight = height[height.length-1]

for(let i=0; i<height.length; i++){
    if(height[i]>=maxLeft){
        left[i] = height[i];
        maxLeft = height[i]
    }else left[i] = maxLeft
}

for(let i=height.length-1; i>=0; i--){
    if(height[i]>=maxRight){
        right[i] = height[i];
        maxRight = height[i]
    }else right[i] = maxRight
}

let sum = 0;

for(let i=0; i<height.length; i++){
    sum += Math.min(left[i],right[i]) - height[i];
}

console.log(left);
console.log(right)
console.log(sum)
//https://leetcode.com/problems/koko-eating-bananas/description/

piles = [30,11,23,4,20], h = 6

let isPossible = (piles,mid,h,flag)=>{
    let count = 0;
    for(let i=0; i<piles.length; i++){
        count += Math.ceil(piles[i]/mid)
    }
    return count<=h
}

var minEatingSpeed = function(piles, h) {
    let low = 1,high = Math.max(...piles),mid=0;
    let ans = high;
    while(low<=high){
        mid = Math.floor((low+high)/2);
        if(isPossible(piles,mid,h)){
            ans = mid
            high = mid-1
        }else low = mid + 1;
    }
    return ans;
};

console.log(minEatingSpeed(piles,h))
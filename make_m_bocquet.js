// https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/

let bloomDay = [7,7,7,7,7,12,7,7], m = 2, k = 3;

let isPossible = (bloomDay,m,k,mid)=>{
    let flowerCount = boquetCount = 0;
    for(let i=0; i<bloomDay.length; i++){
        if(bloomDay[i]<=mid){
            flowerCount++;
        }else flowerCount = 0;
        if(flowerCount == k){
            boquetCount++;
            flowerCount = 0;
        }
    }

    return boquetCount >= m;
}

var minDays = function(bloomDay, m, k) {
    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);
    let ans = -1;
    if (bloomDay.length < m * k) return -1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(isPossible(bloomDay,m,k,mid)){
            ans = mid;
            high = mid-1;
        }else low = mid+1
    }

    return ans;
};

let answer = minDays(bloomDay,m,k);
console.log(answer)
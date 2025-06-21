//https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1

let arr =  [-5, 8, -14, 2, 4, 12], k = -5

var LongestSub = function(arr,k){
    let map = new Map();
    map.set(0,-1);
    let longest = 0,sum=0;

    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
        if(map.has(sum-k)){
            longest = Math.max(longest,(i-map.get(sum-k)))
        }

        if(!map.has(sum)){
            map.set(sum,i)
        }
    }

    return longest;
}

console.log(LongestSub(arr,k))
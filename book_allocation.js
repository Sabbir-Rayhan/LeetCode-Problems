let arr = [12, 34, 67, 90]

let k = 2;
let sum = 0;

for(let i=0; i<arr.length; i++){
    sum+=arr[i];
}

let isPossible = (arr,mid,k)=>{
    let studntCount = 1;
    let pageSum = 0;
    for(let i=0;  i<arr.length;  i++){
        if(pageSum + arr[i] <=mid){
            pageSum+=arr[i]
        }else{
            studntCount++;
            if(studntCount>k || arr[i]>mid) return false;
            else{
                pageSum = arr[i];
            }
        }
    }
    return true;
}



let allocate = (arr,k)=>{
    let low = Math.max(...arr);
    let high = sum;
    let ans = -1;
    console.log(low,high)
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(isPossible(arr,mid,k)){
            ans = mid
            high = mid-1
        }else{
            low = mid+1;
        }
    }

    return ans;
}


console.log(allocate(arr,k))
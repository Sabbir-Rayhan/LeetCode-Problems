// https://leetcode.com/problems/sort-the-people/description/

let names = ["Mary","John","Emma"], heights = [180,165,170]

var sortPeople = function(names, heights) {
    let map = new Map();
    
    for(let i=0; i<names.length; i++){
        map.set(heights[i],names[i]);
    }

    heights.sort((a,b)=>b-a);

    let ans = [];
    for(let i=0; i<map.size; i++){
       ans[i] = map.get(heights[i])
    }
    return ans;
};

console.log(sortPeople(names,heights))
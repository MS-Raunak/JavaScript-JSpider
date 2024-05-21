function linearSearch(arr, key){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===key) return i;
    }

    return -1;
}


let arr = [63,12,53,24,20,35]
let idx = linearSearch(arr, 20)
if(idx!=-1) console.log("Found at index: ", idx);
else console.log("Not Found");
function binSearch(arr, startingIndex, endingIndex, key){

    // this is the validation of recursive call
    //if starting index will get greater it means key is not present in specified array so in this case return -1
    if(startingIndex > endingIndex) {
        return -1;
    }

    //Find mid index to check whether the key is available in the left or right side
    var midIndex = parseInt((startingIndex+endingIndex)/2);

    // if key found on the mid index then return the mid index
    if(key===arr[midIndex]) {
        return midIndex;
    }
    //if key is less then of arr[midIndex] the search key in left of midIndex, so update the endingIndex index as mid-1 and call it recursively
    else if(key < arr[midIndex]) {
       return binSearch(arr, startingIndex, midIndex-1, key);
    }

    //if key is greater than of arr[midIndex] then search key in right side of midIndex, so update the startingIndexarting index as  mid+1 and call it recursively
    else {
       return binSearch(arr, midIndex+1, endingIndex, key);
    }       
}

let arr = [1,2,3,4,5,6];
let idx = binSearch(arr, 0, arr.length,6)
console.log(idx);


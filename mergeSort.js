 /**
  * Merge Sort Algorithm Occurs in 2 Parts
  * 1-divide array in two parts(left & right array) until both parts having single element
  * 2- if both parts having single elements then sort them by performing comparison operation
  * Above both parts executed recursively
  */
 
 mergeSort();
 
function mergeSort(){
    let arr = [13,9,10,77,6,2];
    
    divide(arr, 0, arr.length-1)
    console.log(arr);
}


//1-Divide Array
function divide(arr, stIdx, endIdx) {
    if(stIdx < endIdx) {
        let midIdx = parseInt((stIdx+endIdx)/2)
        divide(arr, stIdx, midIdx);   // divide array until left array has has only one element
        divide(arr, midIdx+1, endIdx); // divide array until right array has has only one element
        merge(arr, stIdx, midIdx, endIdx); // if the both left and right array has 1-1 element then sort them 
    }
}

//Sort and Merge Array
function merge (arr, stIdx, midIdx, endIdx)  {
    //leftside Array Starting & Ending Index
    let leftArrStIdx = stIdx;  
    let leftArrEndIdx = midIdx;

    //Righside Array Starting & Ending Index
    let righArrStIdx = midIdx+1; 
    let righArrEndIdx = endIdx; 

    //Third array that stores the sorted elements of both right and left array
    let temp=[];
    let tempStIdx=0;

    //compare left array elements and right array elements and store in the temp array
    while(leftArrStIdx <= leftArrEndIdx && righArrStIdx<=righArrEndIdx ){
        if(arr[leftArrStIdx] < arr[righArrStIdx])  temp[tempStIdx++] = arr[leftArrStIdx++];
        else temp[tempStIdx++] = arr[righArrStIdx++];
       
    }

    //when rightArr elements get sorted and left arr elements are still left then just copy them in temp array without any comparison 
    while(leftArrStIdx <= leftArrEndIdx) temp[tempStIdx++] = arr[leftArrStIdx++];
    
    //when leftArr elements get sorted and Right arr elements are still left then just copy them in temp array without any comparison 
    while(righArrStIdx<=righArrEndIdx) temp[tempStIdx++] = arr[righArrStIdx++];

    //Copy the temp array elements into the original(arr) array
    let i=stIdx;
    for(let ele in temp) 
        arr[i++] = temp[ele];

}


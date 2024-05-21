let arr = [13,9,10,77,6,2]
bubbleSort(arr);

/**
 * 
 * In bubbleSorting technique(brutforce sorting) each element will be compared with remaining all the elemnets 
 */
function bubbleSort(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    console.log(arr);
}
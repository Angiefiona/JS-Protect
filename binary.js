// // Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// // let num = [45,12,6,89,2,5]
// // let target = 6

function divideArray(num){
    if(num.length<=1){
        return num;
    }
    let middle=Math.floor(num.length);
    let left=num.slice(0,middle);
    let right=num.slice(middle);
    console.log(left);
    console.log(right);
    return sortedArray(divideArray(left),divideArray(right))
}

function sortedArray(left,right){
    emptyArr=[];
    while(left.length && right.length){
        if(left[0]> right[0]){
            emptyArr.push(right.shift)
        }
        else{
            emptyArr.push(left.shift)
        }
    }
    return[...emptyArr,...left,...right];
}

function binary(num,  target){
    let left = 0;
    let right = num.length -1;

    while(left<=right){
        let middle = Math.floor((left + right)/2);
        if (num[middle]===target){
            return middle
        }
        else if(num[middle]> target){
            right = middle -1
        }
        else{
            left = middle +1
        }
    }
    return null
}
let num = [45,12,6,89,2,5];
console.log(divideArray(num));
let target = 6;
console.log(binary(num, target))
const arr=[5,12,4,27,16,32,15];
// console.log(arr);
// console.log(arrayFind(arr,item=>item>12));
// console.log(arrayMap(arr,item=>item*2));
// console.log(arrayEvery(arr,item=>item>1));
// console.log(arrayFilter(arr,item=>item<15));
// console.log(arraySome(arr,item=>item>27));


//Functions

function arrayFilter(arr,func){
    let resultArr=[];
    let resultArrIdx=0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            resultArr.length++;
            resultArr[resultArrIdx]=arr[i];
            resultArrIdx++;
        }        
    }
    return resultArr;
}

function arrayFind(arr,func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}

function arrayEvery(arr,func) {
    for (let i = 0; i < arr.length; i++) {
       if (func(arr[i])) {
          continue;
       }
       else{
          return false;
       }
    }
    return true;
}

function arraySome(arr,func) {
    for (let i = 0; i < arr.length; i++) {
       if (func(arr[i])) {
          return true;
       }
    }
    return false;
}

function arrayMap(arr,func) {
    let resultArr=[];
    for (let i = 0; i < arr.length; i++) {
        resultArr.length++;
        resultArr[i]=func(arr[i])
    }
    return resultArr;
}
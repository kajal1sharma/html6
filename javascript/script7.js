// console.log("this is our script 7")

let arr= [1,2,13,4,5]


function everyimp(check,a){
    
    for(let i=0;i<arr.length;i++){
         let result = check(arr[i], i, arr);
         if(result===false){
            return false;
         }

    }

    return true;
}

let checking=(ele)=>{
    if(ele<10){
        return true;
    }
    else{
        return false;
    }
}
let result= everyimp(checking,10)
console.log(result);





// function callback(ele, index, arr){

//     console.log(ele+"...."+index);
// }

// arr.forEach(callback);

// let result = arr.every((ele)=>{
//     if(ele<10){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log("result of every",result);

// arr.push(12);
// arr.pop();
// arr.shift();
// arr.unshift();



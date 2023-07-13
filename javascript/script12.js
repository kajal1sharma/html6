//let arr=[1,2,3,4,45,6,7,8,56];

// arr.copyWithin(0,4,6);
// // console.log(arr)


// let arr2=[1,2,3,4 ,[5,6,7,[8,9,10]]] //=>[1,2,3,4,5,6,7,[8,9,10]]

// //convert this array 1-d array

// let result = arr2.flat(2);
// console.log(result)

// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a.

// If the result is 0, no changes are done with the sort order of the two values.


//let arr=[4,3,6,89,2,4,6,65];

// a-b => neg 
// arr.sort((a,b)=>{
//     if(a>b){
//         return -1;

//     }
//     else if(a<b){
//         return 1//(interchange)
//     }
// });
// arr.sort((a,b)=>b-a)
// console.log(arr)


// arr.reverse();
// console.log(arr)


//  let arr3=[3,34,15,29,40,12,312,8] 

//  for(let i=0;i<5;i++){
//     for(let j=0;j<arr3.length-1-i;j++){
//         if(arr3[j]<arr3[j+1]){
//             let temp=arr3[j];
//             arr3[j]=arr3[j+1];
//             arr3[j+1]=temp;
//         }
//     }
//  }

//  console.log(arr3);
// console.log(arr3[arr3.length-1-4])

//  arr3.sort((a,b)=>a-b);
//  console.log(arr3)
//  console.log(arr3[4])



// let arr4=[12,23,45,25,67,87];

// let temparr =arr4.filter((ele, index, arr)=>{

//     if(ele%5==0){
//         return true;
//     }
//     else 
//     return false;

// })

// console.log(temparr)

// let arrstr = ["ahaan", "ritu", "richa", "komal","aditya"]
// //6 or letters => new array

// let strres=arrstr.filter((ele, index, arr)=>{
//     if(ele.length>=5){
//         return true;
//     }
//     else 
//     return false;
// })

// console.log(strres)


let arr=[1,1,1,1,1];

let sum= arr.reduce((prevAccumulatedResult, ele)=>{
    return prevAccumulatedResult+ele;
});

console.log(sum)

//remove duplicates [1,2,3,4,2,5,4] => [1,2,3,4,5]

//home work
let obj = [{name:"priya",marks:[45,56,78]},{name:"tia",marks:[89,56,78]}
          ,{name:"atul", marks:[78,89,90]},{name:"pooja", marks:[34,45,34]},
            {name:"ria", marks:[90,23,45]}]
    

let obj2= {
"41-50":[]  ,  
"51-60":[{name:"priya",marks:[45,56,78]},{name:"ria", marks:[90,23,45]}],
"61-70":[{},{}],
"71-80":[],
"81-90":[],
"91-100":[]
}







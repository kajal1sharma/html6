
//falsy 
//false, 0, null , undefined , NAN

// if(falsy ){
//     console.log("if is working")
// }
// else{
//     console.log("else evaluated")
// }


// let arr = [1,2,3,4,5];

// let result =arr.every((ele, index, arr)=>{
//     if(ele<=5){
//         return 1
//     }
//     else{
//         return 0;
//     }
// })
// console.log(result)


// let arr =["rose","lily",,"jasmine","lotus"]


// let result = arr.includes(undefined);

// let result=arr.includes("lily", 2)
// console.log(result)


let arr=[1,5,8,0,0,0,8,8]//length=>8 => 8+(-4)=4  => 8+(-2)=>6

arr.fill(9,-4,-2)
console.log(arr)


//arr.fill(6,1,5);
// console.log(arr)//in place

// let arr2=[0,0,0,0,0]

// let arr3= new Array(5).fill([1,2]);
// console.log(arr3)

// let arr4= new Array(5).fill({name:"ria",phone:"23423420"})
// console.log(arr4)


// let arr1=new Array(5).fill(0).map(()=>{
//     return "<h1>hello</h1>"
// });
// console.log(arr1)


// let arr=[1,2,3,4,5,6]

// arr.copyWithin()





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










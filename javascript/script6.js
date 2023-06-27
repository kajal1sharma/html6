
let arr=[1,2,3,4,5]

function for_Each(fn){
    for(let i=0;i<arr.length;i++){
        fn(arr[i], i, arr);
    }
}


//what we see

function callbfn(ele){
    console.log(ele);
}
for_Each(callbfn);

// function double(arr){
//     let brr=[];

//     for(let i=0;i<arr.length;i++){
//         brr.push(arr[i]*2);
//     }
//     return brr;
// }


// function print(fn){

//     let num=[1,2,3,4,5]
//     let result =fn(num);
//     console.log(result);
// }

// print(double)



// function read(){
//     let num = prompt("Read a Number")
//     num =Number(num);
//     return num;
// }


// function add(callbfn){
//     let num1 = callbfn();
//     let num2 =callbfn();
//     let sum =num1+num2;
//     alert(sum)
// }

// add(read);



// // a fucntion can return a fucntion
// function printIt(){

//     console.log("i will print something in a moment");
    
//     function wish(){
//         console.log("happy birthday");
        
//     }
//     return wish;
// }

// let result = printIt();
// result()
// console.log(result2)
// console.log(result);


// function getNumber(arr){
//     let brr=[]
//     for(let i=0;i<arr.length;i++){
//         brr.push(arr[i]*5);
//     }
//     return brr;
// }

// let arr= [1,2,3,4,5]
// let result = getNumber(arr);
// console.log(result);
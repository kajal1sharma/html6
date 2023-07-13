
let i=0;
setInterval(()=>{
    i++
    console.log("repeat"+"===="+i)
},3000)


// for(let i=1;i<=5;i++){
//     // console.log("hello "+i)
//     setTimeout(()=>{
//         console.log("hello world"+i)
//     },5000*i)
// }

// let date = new Date()
// console.log(date);
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear())
// console.log(date.toLocaleTimeString())

// function getTime(){
//     let date =new Date();
//     console.log(date.toLocaleTimeString());
//     setTimeout(() => {
//         getTime();
//     }, 1000);
// }
// getTime()


// setTimeout(()=>{
//     console.log("async 1")
// },4000)
// console.log("non async 1")
// setTimeout(()=>{
//     console.log("async 2")
// },0);
// console.log("non async 2");



// //asynchronous operation => 
// function print(){
//     console.log("hello there");
// }
// setTimeout(print, 4000);//time is in milliseconds 
// function read(){
//     for(let i=0;i<20;i++){
//         console.log(i);
//     }
// }
// read();
// function doSomething(){
//     for(let i=0;i<10;i++){
//         console.log("hello world")
//     }
// }
// doSomething();
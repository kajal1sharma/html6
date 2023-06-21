//greatest digit in a number
let num =490876

let max=0;
for(;num!==0;){

    let b= num%10;
    if(max<b){
        max=b;
    }
    num=Math.floor(num/10);
    
}

console.log(max);




// 1-1000
//tens place zero =>sum
// 101 +102+......203
// let sum=0;
// for(let i=1;i<=1000;i++){
//      let num=Math.floor(i/10);
//      if(num%10==0){
//         sum=sum+i;
//      }
// }
// console.log(sum);



// 1-1000> unit place 0  ( 210 + 230)

// let sum=0;
// for(let  i=0;i<=1000;i++){
//     if(i%10==0){
//         sum=sum+i
//     }
// }
// console.log(sum);
// let sum1=0;
// for(let  i=0;i<=1000;i=i+10){
//     // if(i%10==0){
//         sum1=sum1+i
//    // }
// }
// console.log(sum1);

// let num1=12;//prime number

// let count=0;
// for(let i=2;i<Math.floor(num1/2);i++)
// {
//     if(num1%i==0){
//         count++;
//         break;
//     }
// }

// if(count>0){
//     console.log("the number is not prime")
// }
// else{
//     console.log("the number is prime");
// }

// let num=67.45
// console.log(Math.floor(num))
// console.log(Math.ceil(num))


// let a=1234321;
// let b=0;
// for(;a!==0;){
//    let c= a%10;
//    b=b*10+c;
//    a=Math.floor(a/10);
// }

// if(a===b){
//     console.log("yes number is palindrome")
// }
// else{
//     console.log("number is not palindrome")
// }


// console.log(b)

// // for(let i=0 ; true;){
// //     console.log("hello world");
// // }

// //table of 5

// for(let i=5;i<=50;i=i+5){
//     console.log(i)
// }

// for(let i=1;i<=50;i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }

// for(let i=1;i<=10;i++){
//     console.log(5*i);//}

// let str="";
// for(let i =0 ; i<5;i++){

//    for(let j=0;j<=i;j++){
//     str=str+"*"
//    } 
//     str=str+"\n";

// }

// for(let i =0 ; i<5;i++){

//     for(let j=0;j<=i;j++){
//       console.log("*")
//     } 
//     console.log("\n")
     
 
//  }

//console.log(str);

// let str=""
// for(let i =0;i<5;i++){

//     for(let j=i;j<4;j++){
//         str=str+" "
//     }
//     for(let k=0;k<=i;k++){
//         str=str+"*"
//     }

//     str=str+"\n";
// }

// console.log(str);












// *
// * *
// * * *
// * * * *
// * * * * *


// * * * * *
// * * * *
// * * *
// * * 
// *



//     *
//    * *
//   * * *
//  * * * *
// * * * * *



//          *
//        * *
//      * * *
//    * * * *
//  * * * * *

 

 //operand1?operand2:operand3

//  operand1=> expression boolean (true/false)
//  operand2 =>any expression
//  operand3=> any expression


// let operator = prompt("add / sub");

// let result =  operator==="add"?30+20:30-20;
// console.log(result)

//given these 3 number cant be equal
// let number1 = Number(prompt("first number"))
// let number2 = Number(prompt("Second number"))
//  let number3= Number(prompt("third number"));
// let x =prompt("enter number four");
// x=Number(x);

// let result = (number1>number2)?number1:(number2%2==0?number2:0)
// console.log(result);

// let result2 = number3>number1 && number3>number2 ? number3 
//            :(number2>number1 && number2>number3? number2 :number1) ;
// console.log(result2);

// let w=90;
// let x=45;
// let y=34;
// let z=56;

// let result = w>x && w>y&& w>z ? w : (x>w && x>y &&x>z ? x : (y>w && y>x && y>z?y :z))


// let arr=[23,23,4,54,5,52,64,5,34]
// let max=arr[0];
// for(let i=0;i<9;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
// }
// console.log(max)

















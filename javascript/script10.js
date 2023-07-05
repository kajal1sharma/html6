let str3= "Adfdgf Bghgh Cghg Dghhletjg" 
result="ABCD"

let arr = str3.split(" ");
console.log(arr)["Adfdgf","Bghgh","Cghg","Dghhletjg"]

let str=""
for(let i=0;i<arr.length;i++){
    str=str+arr[i].charAt(0)
}
console.log(str)



// let arr2 = arr.map(function(ele){
//     return ele.charAt(0);
// })
// console.log(arr2)
// let str = arr2.join("");
// console.log(str)




// let str="we,are,india"
// let arr=str.split(",")
// console.log(arr)

// let arr2=["we","are","indians"]
// let res=arr2.join(" || ")
// console.log(res)

// let arr=[{name:"tina", marks:[14,34,56,78,88]},
//             {name:"reena", marks:[56,78,67,89,90]},
//             {name:"leena", marks:[89,67,89,98,77]},
//             {name:"ria", marks:[56,78,90,9,78]}]
// // {name:,percentage}

// //generate an array where we have name and perc

// let totalpercarr=arr.map(function(ele){
//     let marks=ele.marks;
//     let sum=0;
//     for(let i=0;i<marks.length;i++){
//         sum=sum+marks[i];
//     }

//     let perc= sum/5;
//     return { name:ele.name,percentage:perc}

// })

// console.log(totalpercarr)




// let arr=["red","blue","pink"]
// let arr2=[1,2,3,4,5]
// let arr3=[1,"red",function read(){console.log("hello world")},{name:"tina"},[1,2,3],78]
// arr3[2]();

// console.log(arr3[1])




// let arr=[1,2,3,4,5]//=>["1hello","2hello","3hello","4helllo","5hello"]

// let resarr=arr.map(function(ele,index, arr){
//     arr.push(ele*index);
//     return  ele*index;
// })

// console.log(arr)
// console.log(resarr)


// let obj ={ name:"nitu", mobile:"23498329084", 
//             totalMarks:300,marks:[50,80,80,50,40],
//              calculate:function(){console.log("it calculates total marks")}}

// obj.name="ritu";
// obj.surname="verma"
// console.log(obj["mobile"])
// console.log(obj);
// console.log(obj.marks)
// console.log(obj.calculate);
// obj.calculate()
// obj["calculate"]();






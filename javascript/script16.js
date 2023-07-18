let str=""
let arr=[]
window.addEventListener('load',()=>{

    let inputbox = document.getElementById('inputbox');
    let enterButton =document.getElementById('enterButton');


    console.log(inputbox);
    console.log(enterButton);

    inputbox.addEventListener('input',inputHandler)
    enterButton.addEventListener('click',buttonHandler)
})

function inputHandler(event){
    // console.log(event.target)
    console.log(event.target.value)
    str=event.target.value;
}

function buttonHandler(){
    
    arr.push(str);
    console.log(arr);
    let div = document.getElementById('list')
    div.innerHTML=""
    arr.forEach((ele, index)=>{
        let li = document.createElement('li')
        li.style.listStyle="none";
        li.style.fontSize="24px"
        li.textContent=ele;
        
         
        let deletebutton = document.createElement('button');
        deletebutton.setAttribute('id',index)
        
        deletebutton.addEventListener('click',(event)=>{
            console.log(event.target.id)
            let indexbutton =Number(event.target.id);
            arr.splice(indexbutton,1)
            console.log(arr)
            div.removeChild(li);
        })

        deletebutton.textContent='delete'
        deletebutton.setAttribute('class','deletebutton')
        li.append(deletebutton);
        console.log(li)
      
        div.appendChild(li);
    })

    



}
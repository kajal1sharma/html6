let str=""

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
    
    let li = document.createElement('li')
    li.style.listStyle="none";
    li.style.fontSize="24px"
    li.textContent=str;
     
    let deletebutton = document.createElement('button');
    deletebutton.textContent='delete'
    deletebutton.setAttribute('class','deletebutton')
    li.append(deletebutton);
    console.log(li)
    let div = document.getElementById('list')
    div.appendChild(li);

}
window.addEventListener('load',()=>{

    let inputbox= document.getElementById('inputbox')
    let enterButton=document.getElementById('enterButton')
    let div=document.getElementById("list");
    let str=""

    inputbox.addEventListener('input',(event)=>{
        str=event.target.value;
    })

    enterButton.addEventListener('click',()=>{
        let li = document.createElement('li')
        li.textContent=str;
        let removebutton =document.createElement('button')
        removebutton.textContent="delete"
        li.appendChild(removebutton);

        div.appendChild(li);

        removebutton.addEventListener('click',()=>{
            div.removeChild(li);
        })

    })

})
let turn ='0'
window.addEventListener('load',()=>{
    let buttonarr = document.getElementsByTagName('button')
    console.log(buttonarr)

    for(let i=0;i<buttonarr.length;i++){
        buttonarr[i].addEventListener('click',()=>{
            buttonarr[i].textContent=turn 
            turn=turn==='x'?'0':'x'
        })
    }
})
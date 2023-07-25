let turn ='0'
let count=0;
window.addEventListener('load',()=>{
    let buttonarr = document.getElementsByTagName('button')
    console.log(buttonarr)

    for(let i=0;i<buttonarr.length;i++){
        buttonarr[i].addEventListener('click',()=>{
            if(!(buttonarr[i].textContent==='x'||buttonarr[i].textContent==='0')){
                buttonarr[i].textContent=turn 
                
                count++;
                if(count>=5){
                    if(checkWinner(turn)===true)
                    {
                        let span =document.getElementById('winner');
                        span.textContent=turn
                        
                    }
                }
               if(count===9){
                    let span =document.getElementById('winner');
                        span.textContent="draw"
                }
                turn=turn==='x'?'0':'x'
            }
        })
    }
})


function checkWinner(ele){

    let buttonarr = document.getElementsByTagName('button')
    
    if(buttonarr[0].textContent===ele && buttonarr[1].textContent===ele && buttonarr[2].textContent===ele){
        return true;
    }
    else if(buttonarr[3].textContent===ele && buttonarr[4].textContent===ele && buttonarr[5].textContent===ele){
        return true;
    }
    else if(buttonarr[6].textContent===ele && buttonarr[7].textContent===ele && buttonarr[8].textContent===ele){
        return true;
    }
    else if(buttonarr[0].textContent===ele && buttonarr[3].textContent===ele && buttonarr[6].textContent===ele){
        return true;
    }
    else if(buttonarr[1].textContent===ele && buttonarr[4].textContent===ele && buttonarr[7].textContent===ele){
        return true;
    }  
    else if(buttonarr[2].textContent===ele && buttonarr[5].textContent===ele && buttonarr[8].textContent===ele){
        return true;
    }
    else if(buttonarr[0].textContent===ele && buttonarr[4].textContent===ele && buttonarr[8].textContent===ele){
        return true;
    }
    else if(buttonarr[2].textContent===ele && buttonarr[4].textContent===ele && buttonarr[6].textContent===ele){
        return true;
    }
    return false;
}
window.addEventListener('load',()=>{
    // let arr=[];
    let input="";
    let inputbox = document.querySelector('#item')
    let enterbutton =document.getElementById('enter');
    let ultag =document.getElementById('list')
    inputbox.addEventListener('input',(event)=>{
        input= event.target.value;
    })
    enterbutton.addEventListener('click',()=>{
        // arr.push(input);
        // console.log(arr);
        let li = document.createElement('li')
        li.textContent=input
       ultag.appendChild(li);
       
    })

    
    // let para = document.getElementById('timer');
    // para.textContent="this is a text content field"
    // let spantag1 = document.createElement('span');
    // spantag1.textContent="this is a span tag"
    // spantag1.style.color="red"
    // para.appendChild(spantag1);
    // let spantag2 = document.createElement('span');
    // spantag2.textContent="this is a span tag 2"
    // spantag2.style.color="blue"
    // para.appendChild(spantag2);

})
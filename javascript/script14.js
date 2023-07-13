//console.log("welcome to script day 14")

// alert("close it first")

window.addEventListener('load',function(){
    console.log("your document is loaded")
    
    
    let head = document.querySelector('body>h1')
    head.addEventListener('click',()=>{
        head.style.color="green"
    })

    let input1= document.getElementsByName("username");
    input1[0].addEventListener('input',(event)=>{
        console.log(event.target)
        console.log(event.target.value)
    })

    

})

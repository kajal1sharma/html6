

window.addEventListener('load',function(){

    console.log(this)
    let url=this.document.getElementById('url');
    let img=this.document.getElementById('img');
    let blur = this.document.getElementById('blur');

    function callback1(event){
        console.log(event.target.value);
        img.setAttribute('src',event.target.value);
    }
    
    function callback2(event){
        img.style.filter=`blur(${event.target.value}px)`
    }

    url.addEventListener('input',callback1)

    blur.addEventListener('input', callback2)
})
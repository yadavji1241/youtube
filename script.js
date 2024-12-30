var btn = document.querySelector('button')
var bulb = document.querySelector('.bulb')



 var lets = 0
btn.addEventListener('click',function(){

    if(!lets){

        bulb.style.backgroundColor = 'yellow'
        btn.innerText = 'off'
        lets = 1
        
    }
    else{
        bulb.style.backgroundColor = 'blue'
        btn.innerText = 'on'
        lets = 0

    }
    
})
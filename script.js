var ipls =  ['CSK','RCB','PBJ','GT','LGS','MI','DC','KKR','RR','SRH'];

var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var h1 = document.querySelector("h1");

btn.addEventListener("click",function(){
    var num = Math.floor(Math.random()*ipls.length)

    h2.innerHTML = ipls[num]
})
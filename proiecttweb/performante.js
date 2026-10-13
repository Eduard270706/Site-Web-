window.onload=function(){
     if(!localStorage.getItem("user"))
    window.location.href = "login.html";
    const h1=document.getElementById("titlu");
    const binitial=window.getComputedStyle(document.body).background;
    let count=0;
    h1.ondblclick=function(e){
        const v=["blue","yellow","lime","brown"];
        let culoare=v[Math.floor(Math.random()*v.length)];
        document.body.style.background=culoare;
        count+=1;
        console.log("S-a schimbat de",count,"ori");
        console.log(e.target);
    }
    document.onkeydown=function(e){
        if (e.key=="r" || e.key=="R")
            document.body.style.background=binitial;
    }
    document.addEventListener("keydown",function(event){
        if(event.key=="s" || event.key=="S")
        {
            const euro=document.getElementById("euro");
            const world=document.getElementById("worldcup");

            const temp = euro.innerHTML;
            euro.innerHTML = world.innerHTML;
            world.innerHTML = temp;
        }
    })
    let p=document.querySelector("header>p");
    let pc=getComputedStyle(p).color;
    p.onmouseover=function(){
        p.style.color="pink";
    }
    p.onmouseout=function(){
        p.style.color=pc;
    }
    const imagini = document.querySelectorAll(".gallery img");
    const sectiuni = document.querySelectorAll(".poze");

    for (let i = 0; i < imagini.length; i++) {
        imagini[i].addEventListener("click", function (e) {

            imagini[i].style.border = "4px solid red";
            imagini[i].style.opacity = "0.8";

            e.stopPropagation();
        });
    }

    for (let j = 0; j < sectiuni.length; j++) {
        sectiuni[j].addEventListener("click", function () {
            sectiuni[j].style.background = "rgba(255, 255, 255, 0.2)";
        });
    }
}

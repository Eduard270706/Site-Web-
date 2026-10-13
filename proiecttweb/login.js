window.onload=function(){
    let buton=this.document.getElementById("buton");
   let buton2=this.document.getElementById("logout");
   if(buton){
    buton.onclick=function(){
       let user=document.getElementById("utilizator").value;
       let parola=document.getElementById("parola").value;
       let p=document.getElementById("afisare");
       let userRegex = /^[a-zA-Z0-9]{5,15}$/;   
       let passRegex = /^[0-9]{5}$/;          

       if(userRegex.test(user) && passRegex.test(parola)  && user=="Eduard270706" && parola=="12345")
       {
            localStorage.setItem("user",user);
            p.style.color = "lime";
            p.style.fontSize = "16px";
            p.style.textAlign = "center";
            let puncte=0;
            let loader=setInterval(function(){
                puncte++;
                if(puncte>3)puncte=1;
                p.innerHTML="Datele sunt corecte.Se încarcă"+ ".".repeat(puncte);
            },400);
            setTimeout(function(){
                clearInterval(loader);
                window.location.href="home.html";
            },3000);
        }
        else{
            p.innerHTML = "Datele nu sunt corecte! Încercați din nou!"; 
            p.style.color = "red"; p.style.fontSize = "15px"; 
            p.style.textAlign = "center";
        }
        return false;
        }
    }
  
    if (buton2){
    buton2.onclick=function(){
        localStorage.removeItem("user");
        window.location.href ="login.html";
    }
  }
}
   
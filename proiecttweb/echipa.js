window.onload=function(){
    if(!localStorage.getItem("user"))
    window.location.href = "login.html";
   let buton=this.document.getElementById("buton");
   let p=this.document.getElementById("afis");
     buton.onclick=function(e){
        console.log(e.currentTarget);
         let nume=document.getElementById("inf").value;
         let httpObj=new XMLHttpRequest();
         httpObj.open('GET',"juc.json",true);
         httpObj.onload=function(){
            if(httpObj.status==200){
                let jucatori=JSON.parse(httpObj.responseText);
                let ms='';
                ok=0;
                for(let n of jucatori){
                    if(n["nume"]==nume){
                        ok=1;
                        ms=`Jucatorul ${nume} a jucat ${n["meciuri"]} meciuri, a marcat ${n["goluri"]} goluri si a oferit ${n["asisturi"]} asisturi`
                     }
                }
                if(ok==1){
                    p.innerHTML=ms;
                    p.style.fontSize="15px";
                    p.style.color="lime";
                    p.style.textAlign="center";
                }
                else
                {
                    p.innerHTML="Acest jucator nu exista!";
                    p.style.fontSize="15px";
                    p.style.color="red";
                    p.style.textAlign="center";
                }
            }
            else
                alert("Eroare");
         }
         httpObj.send();
    }
    let stadioane=document.getElementById("stadioane");
    let paragraf=document.createElement("p");
    let text=document.createTextNode("Pe Arena Nationala joaca FCSB,pe Cluj Arena CFR CLUJ,iar pe Ion Omblemenco,Universitatea Craiova.");
    stadioane.onmouseover=function(){
        paragraf.appendChild(text);
        paragraf.style.marginTop="10px";
        paragraf.style.color="pink";

        stadioane.appendChild(paragraf);
    }
    stadioane.onmouseout=function(){
        stadioane.removeChild(paragraf);
    }
    let select=document.getElementById("sel");
    let an=document.getElementById("raspuns");
    select.onchange=function(){
         let varsta=select.value;
            if(varsta==80)
            {
                an.innerHTML="Raspuns corect!";
                an.style.color="lime";
                an.style.fontFamily="Audiowide";
            }
            else
            {
                an.innerHTML="Incorect!Încearcă din nou!"
                an.style.color="red";
                an.style.fontFamily="Audiowide";
            }
    }
    
}
window.onload = function () {
    if(!localStorage.getItem("user"))
        window.location.href="login.html";
    function getFavorite() {
        let data = localStorage.getItem("favorite");
        if (data === null) return [];
        return JSON.parse(data);
    }

    function salveazaFavorite(favorite) {
        localStorage.setItem("favorite", JSON.stringify(favorite));
    }

   function afiseazaFavorite() {
    let favorite = getFavorite();
    let div = document.getElementById("listaFavorite");
    if (!div) return;

    div.innerHTML = "<h3>Legende favorite:</h3>";

    if (favorite.length === 0) {
        div.innerHTML += "Nicio legendă salvată.";
        return;
    }

    let ul = document.createElement("ul");
    ul.style.listStyle = "none";
    ul.style.padding = "0";
    ul.style.margin = "0";

    for (let nume of favorite) {
        let li = document.createElement("li");
        li.textContent = nume;
        li.style.margin = "6px 0";
        li.style.fontWeight = "bold";
        ul.appendChild(li);
    }

    div.appendChild(ul);
}

   function adaugaSauSterge(nume) {
    let favorite = getFavorite();

    let poz = favorite.indexOf(nume);

    if (poz !== -1) {
        favorite.splice(poz, 1);
    } else {
        favorite.push(nume);
    }

    salveazaFavorite(favorite);
    afiseazaFavorite();
}


    let butoane = document.querySelectorAll(".fav-btn");

    butoane.forEach(function (btn) {
        let nume = btn.dataset.nume;

        btn.onclick = function () {
            adaugaSauSterge(nume);
        };
    });

    afiseazaFavorite();
    culori=["red","white","lime"]
    clasa=["rosu","alb","verde"]
    let p1=document.querySelector(".p1");
    let p2=document.querySelector(".p2");
    let p3=document.querySelector(".p3");
    let b=document.getElementById("schimba");
    let clprinc=window.getComputedStyle(p1).color;
    b.onclick=function(){
        p1.classList.remove("rosu","alb","verde");
        p2.classList.remove("rosu","alb","verde");
        p3.classList.remove("rosu","alb","verde");
        let i1=Math.floor(Math.random()*clasa.length);
        let i2=Math.floor(Math.random()*clasa.length);
        let i3=Math.floor(Math.random()*clasa.length);
        p1.classList.add(clasa[i1]);
        p2.classList.add(clasa[i2]);
        p3.classList.add(clasa[i3]);
        p1.style.color=culori[i1];
        p2.style.color=culori[i2];
        p3.style.color=culori[i3];

    }
    document.onkeydown=function(e){
        if(e.key=="c" || e.key=="C")
        {
            p1.style.color=clprinc;
            p2.style.color=clprinc;
            p3.style.color=clprinc;
        }
    }
}

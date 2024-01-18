
    const redes=document.querySelector("#redes");
    const fund=document.querySelector("#fund");
    const dig=document.querySelector("#dig");
    const anal=document.querySelector("#anal");
    const teor=document.querySelector("#teor");
    const elec=document.querySelector("#elec");
    const red=[...document.querySelectorAll(".redes")];
    const fun=[...document.querySelectorAll(".fundament")];
    const digi=[...document.querySelectorAll(".dig")];
    const ana=[...document.querySelectorAll(".anal")];
    const teo=[...document.querySelectorAll(".teor")];
    const elect=[...document.querySelectorAll(".elec")];
    console.log(fun);

   
    redes.addEventListener("click",()=>reds())
    fund.addEventListener("click",()=>fundam())
    dig.addEventListener("click",()=>digital())
    anal.addEventListener("click",()=>analogic())
    teor.addEventListener("click",()=>teoria())
    elec.addEventListener("click",()=>electrodinam())
    
    
    
    function reds(){
    for(i=0;i<red.length;i++)
    red[i].classList.toggle("backgroundred");
    }
    function fundam(){
        for(i=0;i<fun.length;i++)
    fun[i].classList.toggle("backgroundfun");
    }
    
    function digital(){
        for(i=0;i<digi.length;i++)
    digi[i].classList.toggle("backgrounddig");
    }
    function analogic(){
        for(i=0;i<ana.length;i++)
    ana[i].classList.toggle("backgroundana");
    }
    function teoria(){
        for(i=0;i<teo.length;i++)
    teo[i].classList.toggle("backgroundteo");
    }
    function electrodinam(){
        for(i=0;i<elect.length;i++)
    elect[i].classList.toggle("backgroundele");
    } 
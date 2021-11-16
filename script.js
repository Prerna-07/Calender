let minusY = document.getElementById("minusY");
let plusY = document.getElementById("plusY");

let minusM = document.getElementById("minusM");
let plusM = document.getElementById("plusM");

let minusD = document.getElementById("minusD");
let plusD = document.getElementById("plusD");

minusY.addEventListener("click",function(){


    let num = document.getElementById("nY");
    num.innerText = Number(num.innerText)-1;
        

});
plusY.addEventListener("click",function(){


    let num = document.getElementById("nY");
    num.innerText = Number(num.innerText)+1;
        

});

minusM.addEventListener("click",function(){


    let num = document.getElementById("nM");
    num.innerText = Number(num.innerText)-1;
    if(Number(num.innerText)==0)
    {
        num.innerText = 12;
    }
        

});
plusM.addEventListener("click",function(){


    let num = document.getElementById("nM");
    num.innerText = Number(num.innerText)+1;
    if(Number(num.innerText)==13)
    {
        num.innerText = 1;
    }
        

});

minusD.addEventListener("click",function(){


    let num = document.getElementById("nD");
    num.innerText = Number(num.innerText)-1;
    if(Number(num.innerText)==0)
    {
        let n = document.getElementById("nM");
        if(n.innerText==2)
        {
            num.innerText = 28;
        }
        else if(n.innerText<=7)
        {
           if(n.innerText%2==0)
           {
            num.innerText = 30;
           }
           else
           {
            num.innerText = 31;
           }
        }
        else
        {
            if(n.innerText%2!=0)
           {
            num.innerText = 30;
           }
           else
           {
            num.innerText = 31;
           }
        }
        
    }
        

});
plusD.addEventListener("click",function(){


    let num = document.getElementById("nD");
    num.innerText = Number(num.innerText)+1;
    let n = document.getElementById("nM");
    if(n.innerText==2)
    {
        if(num.innerText==29)
        {
            num.innerText = 1;
        }
    }
    else if(n.innerText <=7 )  
    {
        if(n.innerText%2 ==0 && num.innerText == 31)
        { 
            num.innerText = 1;
        }
        else if(n.innerText%2 !=0 && num.innerText == 32)
        {
            num.innerText =1;
        }
    }
    else
    {
        if(n.innerText%2 ==1 && num.innerText == 31)
        { 
            num.innerText = 1;
        }
        else if(n.innerText%2 ==0 && num.innerText == 32)
        {
            num.innerText =1;
        }

    }
        

});
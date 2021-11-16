let minusY = document.getElementById("minusY");
let plusY = document.getElementById("plusY");

let minusM = document.getElementById("minusM");
let plusM = document.getElementById("plusM");

let minusD = document.getElementById("minusD");
let plusD = document.getElementById("plusD");
let str = document.getElementById("content");

let Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
minusY.addEventListener("click",function(){


    let num = document.getElementById("nY");
    num.innerText = Number(num.innerText)-1;

    myDay();

        

});
plusY.addEventListener("click",function(){


    let num = document.getElementById("nY");
    num.innerText = Number(num.innerText)+1;

myDay();

        

});

minusM.addEventListener("click",function(){


    let num = document.getElementById("nM");
    num.innerText = Number(num.innerText)-1;
    if(Number(num.innerText)==0)
    {
        num.innerText = 12;
    }

myDay();

        

});
plusM.addEventListener("click",function(){


    let num = document.getElementById("nM");
    num.innerText = Number(num.innerText)+1;
    if(Number(num.innerText)==13)
    {
        num.innerText = 1;
    }

    myDay();
   
        

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

myDay();

        

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

    
myDay();

        

});


function myDay(){

let Y = document.getElementById("nY");
let M = document.getElementById("nM");
let D = document.getElementById("nD");
str.innerText=D.innerText+" "+Month[Number(M.innerText-1)]+" "+Y.innerText;


function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);

    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = M.innerText+"/"+D.innerText+"/"+Y.innerText;
var day = getDayName(dateStr, 'en-us');

str.innerText=day + " " +D.innerText+" "+Month[Number(M.innerText-1)]+" "+Y.innerText;
}


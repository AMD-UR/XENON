
var a=0;
 var amal=""
 function getnum(){
    a=Number(document.getElementById("txt").value);
    document.getElementById("txt").value="";
    document.getElementById("txt").focus();
 }
function sum(){
    getnum();
    amal="+";
}

function mines(){
    getnum();
    amal="-";
}

function zarb(){
    getnum();
    amal="*";
}

function taghsim(){
    getnum();
    amal="/";
}

function javab(){
    var b=Number(document.getElementById("txt").value);

    if(amal=="+")
    var c=a+b; 

    if(amal=="-")
    var c=a-b; 

    if(amal=="/")
    var c=a/b; 

    if(amal=="*")
    var c=a*b; 
    document.getElementById("txt").value=c;
}









function fact(){
    var x=document.getElementById("nvalue").value;
    var f=1;
    if(x<0)
        document.write("<br>Enter valid number");
    else{
        for(var i=1;i<=x;i++)
            f=f*i;
        alert("Factorial = "+f);
    }
}
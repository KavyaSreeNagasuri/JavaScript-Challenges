function nsum(){
    var x=document.getElementById("nvalue").value;
    var sum=0;
    for(var i=1;i<x;i++)
            sum+=i;
    alert("Sum of first "+x+" natural numbers = "+sum);
}
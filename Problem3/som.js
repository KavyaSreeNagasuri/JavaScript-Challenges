function som(){
    var x=document.getElementById("nvalue").value;
    var sum=0;
    for(var i=1;i<x;i++)
    {
        if((i%3==0)||(i%5==0))
            sum+=i;
    }
    document.write("<br>Sum of multiples of 3 or 5 below "+x+" = "+sum);
}
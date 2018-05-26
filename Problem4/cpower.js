function cp(){
    var x=document.getElementById("nvalue").value;
    var m=1;
    for(var i=1;i<1000;i++){
        m=m*2;
        if(m>x){
            document.write("<br>Closest power of 2 for "+x+" = "+(i-1));
            break;
        }
    }
}
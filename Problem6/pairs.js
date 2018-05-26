var x=[1, 4, 3, 5, 4, 6, 7, 8, 3];
document.writeln("Pairs are:<br>");
for(i=0;i<x.length;i++){
    for(j=i+1;j<x.length;j++){
        if(x[i]+x[j]==8)
            document.writeln(x[i]+","+x[j]+"<br>");
    }
}
var x=[1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1];
var a=new Array(x.length);
for(var i=0;i<a.length;i++)
    a[i]=0;
document.write("Repeated numbers are:<br>");
for(var i=0;i<x.length;i++){
    if(a[x[i]]==0){
        for(var j=i+1;j<x.length;j++){
            if(parseInt(x[i])==parseInt(x[j])){
                a[x[i]]=1;
                document.write(x[i]+"<br>");
                break;
            }
        }
    }
}
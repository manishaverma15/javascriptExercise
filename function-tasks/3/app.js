// Write a JavaScript function that generates all combinations of a string. 
function combinations(){
    stringValue=document.getElementById("enterString").value 
    console.log("entered string",stringValue);
    var array1 = [];
  for (var x = 0, y=1; x < stringValue.length; x++,y++) 
  {
   array1[x]=stringValue.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
            document.getElementById("output").innerHTML=temp;
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
document.getElementById("output").innerHTML=combi.join();
  console.log(combi.join("\n"));

}
document.getElementById("button").addEventListener("click",combinations);

// Write a JavaScript function that accepts a string as a parameter
//  and counts the number of vowels within the string.
function countVowels(){
    x = document.getElementById("vowels").value;
    console.log("you entered string", x);
    vcount=0;
     vowelsList='aeiouAEIOU';
     for( var i=1;i<x.length;i++){
    if(vowelsList.indexOf(x[i])!=-1){
        vcount+=1;
        console.log("vcount",vcount);
        document.getElementById("totalVowels").innerHTML=vcount;
    }
}
document.getElementById("totalVowels").innerHTML=vcount;

}
document.getElementById("button").addEventListener("click", countVowels);

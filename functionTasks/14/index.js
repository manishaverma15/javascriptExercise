

const reverseNumber =(num) =>{
const numsArr = Array.from(String(num), Number);
console.log("number1",numsArr);
let rev=numsArr.reverse();
console.log("rev",rev)
let Integer=parseInt((rev).join(""));
return Integer;

// let reverseLength=rev.length; 
// console.log("lengthOfArray",reverseLength);
// let finalNumber=(rev[0]*100+rev[1]*10+rev[2]);
// console.log("finalNumber",finalNumber);

}
const palindrome = (num) => {
 if(num==reverseNumber(num)){
     return true;
 }
 else{
     return false;
 }
}

const result1 = palindrome(121);
console.log(result1);

const result2 = palindrome(122);
console.log(result2);



const map = {};
function repeatcount(str) {
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }
  return map;
}
// const repeat = repeatcount("manisha");
// console.log("repeat", repeat);

function maxCount(str) {
  const maxi = repeatcount(str);
  console.log("count", maxi);
  let max =0 ;

  for (const c in maxi) {
    console.log(`${c}: ${maxi[c]}`);
    if(max < maxi[c]){
      max = maxi[c];
    }
    
  }
  return max;

}
const maximum = maxCount("bhjhuh");
console.log("maxiCount", maximum);

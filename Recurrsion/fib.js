//  first n Fibonacci numbers.

function fibonacci(n, a = [1]) {
    if(n <= 1){
        return a;
    }
    a.length < 2 ? a.push(1) : a.push(a[a.length - 1] + a[a.length - 2]);
   return fibonacci(n-1, a);

}
console.log(fibonacci(2))











// function Fibonacci(n) {
//     let first = 0, second = 1;
//     for (i = 1; i < n; i++) {
//         let third = first + second;
//         console.log("fib-Series", third)
//         first = second;
//         second = third;
//     }
// }
// Fibonacci(6)




// function print(arr, i) {
//     if (arr.length === i) return;

//     print(arr, i + 1);
//     console.log(arr[i]);
// }

// print([1, 2, 3], 0)
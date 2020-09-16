// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz!');
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         }
//         else{
//             console.log(i);
//         }
//     }
// };
//
// console.log(fizzBuzz(31));
//
// function toNumber(value) {
//     if (value == "" || value == '') {
//         return null;
//     }
//     else if (value == String(value)) {
//         return Number(value);
//     }
//     else if (value == Number(value)) {
//         return value;
//     }
//     else if (value == !String(value) || value == !Number(value)) {
//         return null
//     }
//     else if (value == 0) {
//         return null;
//     }
//     else {
//         return null;
//     }
//
// };
//
//
//
// // function createUser(n, age, height, weight) {
// //     if (n == String(n)){
// //         continue;
// //     }
// //    let createUser = {
// //        name:n,
// //        weight:weight,
// //        age:age,
// //        height:height
// //     }
// //
// //
// // }
//
//
// function isPalindrom(n) {
//     let len = n.length;
// for (let i = 0; i < len/2; i++){
//     if(n[i] !== n[len-i-1]){
//         return false;
//     }
// }
//     return true;
//
// };
//
//
//
//
// function quadraticEquation(a,b,c) {
// if (a === 0 ){
//     return false;
// }
//     let D = b * b - 4 * a * c;
//     let ans = b + " * " + b + " - " + 4 + " * " + a + " * " + c + " = " + D;
//     console.log('D = ' + ans);
//     if(D < 0) {
//         console.log('D = ' + D);
//         console.log('Дискриминант меньше нуля,вычесление корня невозможно');
//         return false;
//     }
//     if(D === 0) {
//         let SqrtRoot = (-b + Math.sqrt(D)) / (2 * a);
//         let Dis = `(- ${b} + (${D} ** 0.5))/ (2 * ${a})`;
//         let tmp = [];
//         tmp.push(SqrtRoot)
//         console.log("x = " + Dis);
//         return tmp;
//     }
//     else if(D > 0){
//         let tmp = [];
//         let SqrtRoot = (-b + Math.sqrt(D)) / (2 * a);
//         let SqrtRoot_2 = (-b - Math.sqrt(D)) / (2 * a);
//         tmp.push(SqrtRoot);
//         tmp.push(SqrtRoot_2);
//         let Dis = `(- ${b} + (${D} ** 0.5))/ (2 * ${a})`;
//         let Dis_2 = `(- ${b} - (${D} ** 0.5))/ (2 * ${a})`;
//         console.log("x1 = " + Dis);
//         console.log("x2 = " + Dis);
//         return tmp;
//     }
//
// };

const a = 5;
const b = a => a;
console.log(b);

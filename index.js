// task #1

// let a = 5;
// let b = 3;
// let c = 0;

// function numbers(...args) {
//   const zero = args.filter((num) => num == 0);
//   if (zero.length > 0) {
//     console.log(0);
//   } else {
//     console.log(parseInt(args.join("")));
//   }
// }

// numbers(a, b, c);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #2

// let num = 16;

// switch (num) {
//   case 1:
//     {
//       console.log("Monday");
//     }
//     break;
//   case 2:
//     {
//       console.log("Tuesday");
//     }
//     break;
//   case 3:
//     {
//       console.log("Wednesday");
//     }
//     break;
//   case 4:
//     {
//       console.log("Thursday");
//     }
//     break;
//   case 5:
//     {
//       console.log("Friday");
//     }
//     break;
//   case 6:
//     {
//       console.log("Saturday");
//     }
//     break;
//   case 7:
//     {
//       console.log("Sunday");
//     }
//     break;
//   default: {
//     console.log("none");
//   }
// }

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #3

// let year = 2023;

// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// leapYear(year);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #4

// let a = 123;

// function numberLength(num) {
//   if (num > 999 || num < 1) {
//     console.log("Number must be from 1 to 999");
//   } else {
//     console.log(num.toString().length);
//   }
// }

// numberLength(a);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #5

// let a = 1;
// let b = 2;
// let c = -3;
// let d = 4;

// function isPositive(...args) {
//   const neg = args.filter((num) => num < 0);
//   return neg.length === 0 ? true : false;
// }

// console.log(isPositive(a, b, c, d));

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #6

// let a = 50;

// // version #1
// // function addNum(num) {
// //   let sum = 0;
// //   for (let i = 0; i <= num; i++) {
// //     sum += i;
// //   }
// //   return sum;
// // }

// // version #2

// function addNum(num) {
//   return (num * (num + 1)) / 2;
// }

// console.log(addNum(a));

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #7

// let a = 6;

// function perfectNum(num) {
//   let addDiv = 0;
//   for (let i = 0; i <= num / 2; i++) {
//     if (num % i == 0) {
//       addDiv += i;
//     }
//   }
//   return addDiv == num ? true : false;
// }

// console.log(perfectNum(a));

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #8

// let n = 123;

// function findNum(num) {
//   console.log(num.toString().length);
// }

// findNum(n);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #9

// let n = 12321;

// function isPalyndrome(num) {
//   const str = num.toString();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalyndrome(n));

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #10

// let n = 123;

// function addNum(num) {
//   let str = num.toString();
//   if (str.length == 1) {
//     return num;
//   } else {
//     return str.split("").reduce((acc, val) => acc + parseInt(val), 0);
//   }
// }

// console.log(addNum(n));

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #11

// let array = [1, "two", 3, true];

// function reverse(arr) {
//   return arr.reverse();
// }

// console.log(reverse(array));

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #12

// let array = [2, 4, 6, 4];
// let n = 4;

// function findNum(arr, num) {
//   let count = arr.filter((c) => c == num);
//   return count.length;
// }

// console.log(findNum(array, n));

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #13

// let array = [1, 2, 3, 4];
// let a = 7;

// function findEqual(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == num) {
//         console.log(arr[i] + " + " + arr[j] + " = " + num);
//       }
//     }
//   }
// }

// findEqual(array, a);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #14

// let array = [6, 5, 8, 1, 41, 7, 3];

// function sortingArray(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(sortingArray(array));

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// task #15

let array = [6, 5, 8, 1, 41, 7, 3];

function findSecondLargest(arr) {
  return arr.sort((a, b) => a - b)[arr.length - 2];
}

console.log(findSecondLargest(array));

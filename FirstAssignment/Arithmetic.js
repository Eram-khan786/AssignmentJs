//1  Given length and breadth of a rectangle, return the area of the rectangle.

// let areaOfRectangle=(length,breadth)=>{
//   return length*breadth
// }
// console.log(areaOfRectangle(20,12))

// 2  Take a number and print the square of the number.

// let squareOfNumber=(a)=>{
//   return a*a
// }
// console.log(squareOfNumber(4))

// Take two numbers and only print the integer part when a is divided by b.

// let integerPart=(a,b)=>{
//   return parseInt(a/b)
// }
// console.log(integerPart(10,2.4))

// Take a number and print out the last digit of the number.

// let lastDigit=(a)=>{
//   return a%10
// }
// console.log(lastDigit(1239))

// Take a number and find the cube of that number.

// let cubeOfNumber=(a)=>{
//   return a*a*a
// }
// console.log(cubeOfNumber(2))

// Take a 3 digit number and print the reverse of that number. Ex - 235 = 532

// let reverseOfNumber = (a) => {
//   let reverse = 0;
//   while (a > 0) {
//     reverse = reverse * 10 + a % 10;
//     a = parseInt(a / 10);
//   }
//   return reverse;
// };

// console.log(reverseOfNumber(235));

// Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7

// let firstDigitOfNumber=(a)=>{
//   let b=a.toString();
//   let len=b.length
//   let p=1;
//   for (let i=1;i<len;i++){
//     p=p*10
//     }
//  return parseInt(a/p)

// }
// console.log(firstDigitOfNumber(0))

// Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7

// let sumOfFirstAndLastDigit=(a)=>{
//   let b=a.toString();
//   let len=b.length
//   let p=1;
//   for (let i=1;i<len;i++){
//     p=p*10
//   }
//   let firstDigit=parseInt(a/p)
//   let lastDigit=a%10
//   return firstDigit+lastDigit
// }
// console.log(sumOfFirstAndLastDigit(123))

// Take salary of five employees and print the average salary of all the employees.

// let averageSalary=(a,b,c,d,e)=>{
//   return (a+b+c+d+e)/5
// }
// console.log(averageSalary(10000,20000,30000,40000,50000))

// Take two numbers and swap them. Ex - a = 10, b=5; => a=5, b=10;

// let swapNumbers=(a,b)=>{
//   let temp=a;
//   a=b;
//   b=temp;
//   return a,b
// }
// console.log(swapNumbers(10,5));

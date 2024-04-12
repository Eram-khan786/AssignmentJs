// 1. Write a program that checks if a given number is even or odd.

// let oddEven=(a)=>{
//   if (a%2==0){
//     return "even"
//   }
//   else{
//     return "odd"
//   }
// }
// console.log(oddEven(7))

// 2. Create a function that takes two numbers as parameters and returns the larger one.

// let larger=(a,b)=>{
//    if (a>b){
//      return a
//    }
//   else{
//     return b
//   }
// }
// console.log(larger(4,6))

// 3. Write a function that determines if a given year is a leap year.

// leapYear=(year)=>{
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//       return "Yes";
//   } else {
//       return "No";
//   }
// }

// console.log(leapYear(2000));

// 4. Implement a program that checks whether a given character is a vowel or consonant.

// let vowelOrConsonant=(charector)=>{
//   if (charector=="a"||charector=="e"||charector=="i"||charector=="o"||charector=="u"){
//     return "vowel"
//   }
//   else{
//     return "consonant"
//   }
// }
// console.log(vowelOrConsonant("a"))

// 5. Create a function that takes three numbers as input and returns the largest among them.

// largestOfThreeNumber=(a,b,c)=>{
//   if (a>b && a>c){
//     return a
//   }
//   else if (b>a && b>c){
//     return b
//   }
//   else{
//     return c
//   }
// }
// console.log(largestOfThreeNumber(4,6,8))

// 6. Write a program that checks if a given number is positive, negative, or zero.

// let checkNumber=(a)=>{
//   if (a>0){
//     return "positive"
//   }
//   else if (a<0){
//     return "negative"
//   }
//   else{
//     return "zero"
//   }
// }
// console.log(checkNumber(0))

// 7. Implement a function that calculates the grade of a student based on their score.
// let grade=(score)=>{
//   if (score>=90){
//     return "A"
//   }
//   else if (score>=80){
//     return "B"
//   }
//   else if (score>=70){
//     return "C"
//   }
//   else if (score>=60){
//     return "D"
//   }
//   else if (score>=50){
//     return "E"
//   }
//   else {
//     return "F"
//   }
// }
// console.log(grade(90))

// 8. Create a program that determines if a given string is a palindrome.

// let isPalindrome = (str) => {
//     let store = str;
//     let reverse = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }
//     if (store === reverse) {
//         return "Yes";
//     } else {
//         return "No";
//     }
// };
// console.log(isPalindrome("mam"));

// 9. Write a function that checks whether a person is eligible to vote based on their age.

// let age=(name,age)=>{
//     if (age>=18){
//         return `Hey ${name}, your age if ${age}  so you are eligible for vote `
//     }
//     else{

//         return `Hey ${name}, your age if ${age}  so you are not  eligible for vote `
//     }
// }

// console.log(age("Khan",19))

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.

// let typeOfTriangle=(a,b,c)=>{
//   if (a===b && b===c){
//     return "Equilateral"
//   }
//   else if (a==b || b==c || c==a){
//     return "Isosceles"
//   }
//   else{
//     return "Scalene"
//   }
// }
// console.log(typeOfTriangle(3,4,5))

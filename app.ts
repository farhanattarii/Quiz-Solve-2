                       /*** Activity 1: if-else statements ***/
 // Task : 1                      
// let number: number = 0; 

// if (number > 0) {
//     console.log(`${number} is positive.`);
// } else if (number < 0) {
//     console.log(`${number} is negative.`);
// } else {
//     console.log(`${number} is zero.`);
// }
 
//  Task : 2
// let age: number = 20; 

// if (age >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not eligible to vote yet.");
// }

                       /*** Activity 2: Nested if-else statements ***/
//  Task : 3
// let num1: number = 10;
// let num2: number = 7;
// let num3: number = 5;
// let largest: number;

// if (num1 >= num2) {
//     if (num1 >= num3) {
//         largest = num1;
//     } else {
//         largest = num3;
//     }
// } else {
//     if (num2 >= num3) {
//         largest = num2;
//     } else {
//         largest = num3;
//     }
// }

// console.log(`The largest number among ${num1}, ${num2}, and ${num3} is: ${largest}`);

                       /*** Activity 3: Switch case ***/

// Task : 4
// let dayOfWeek: number = 4; 

// switch (dayOfWeek) {
//     case 1:
//         console.log("Day 1 is Monday");
//         break;
//     case 2:
//         console.log("Day 2 is Tuesday");
//         break;
//     case 3:
//         console.log("Day 3 is Wednesday");
//         break;
//     case 4:
//         console.log("Day 4 is Thursday");
//         break;
//     case 5:
//         console.log("Day 5 is Friday");
//         break;
//     case 6:
//         console.log("Day 6 is Saturday");
//         break;
//     case 7:
//         console.log("Day 7 is Sunday");
//         break;
//     default:
//         console.log("Invalid day number");
// }

// Task : 5
// let score = 85; 

// let grade:string;

// switch (true) {
    // case score >= 90:
        // grade = "A";
        // break;
    // case score >= 80:
//         grade = "B";
//         break;
//     case score >= 70:
//         grade = "C";
//         break;
//     case score >= 60:
//         grade = "D";
//         break;
//     case score >= 50:
//         grade = "E";
//         break;
//     default:
//         grade = "F";
// }

// console.log(`For a score of ${score}, the grade is ${grade}`);

                       /*** Activity 4: Conditional (Ternary) operator ***/
// Task : 6
// let number = 21; 
// let result = number % 2 === 0 ? "even" : "odd";

// console.log(`${number} is ${result}`);

                       /*** Activity 5: Combinig conditions ***/

// Task : 7
// function isLeapYear(year: number): boolean {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;  // Leap year
//     } else {
//         return false; // Ordinary year
//     }
// }
// let year: number = 2024;
// if (isLeapYear(year)) {
//     console.log(`${year} leap year .`);
// } else {
//     console.log(`${year} Ordinary year .`);
// }

                       /*** Feature Request ***/

//  Number check script :
// function checkNumber(num: number): string {
//     if (num > 0) {
//         return "positive";
//     }
//     if (num < 0) {
//         return "negative";
//     }
//     return "zero";
// }
// let number: number = 42;
// console.log(`${number} is ${checkNumber(number)}.`);  

// number = -5;
// console.log(`${number} is ${checkNumber(number)}.`); 

// number = 0;
// console.log(`${number} is ${checkNumber(number)}.`);  

                       /*** Voting Eligibility Script ***/

// function checkVotingEligibility(age: number): string {
//     if (age < 0) {
//         return "Invalid age entered.";  
//     } else if (age >= 18) {
//         return "You are eligible to vote.";
//     } else {
//         return "You are not eligible to vote yet.";
//     }
// }
// let personAge: number = 25;
// console.log(`Age ${personAge}: ${checkVotingEligibility(personAge)}`);

// personAge = 16;
// console.log(`Age ${personAge}: ${checkVotingEligibility(personAge)}`);  

// personAge = -5;
// console.log(`Age ${personAge}: ${checkVotingEligibility(personAge)}`);  

                       /*** Day of the Week Script ***/

// function getDayOfWeek(dayNumber: number): string {
//     let day: string;

//     switch (dayNumber) {
//         case 1:
//             day = "Sunday";
//             break;
//         case 2:
//             day = "Monday";
//             break;
//         case 3:
//             day = "Tuesday";
//             break;
//         case 4:
//             day = "Wednesday";
//             break;
//         case 5:
//             day = "Thursday";
//             break;
//         case 6:
//             day = "Friday";
//             break;
//         case 7:
//             day = "Saturday";
//             break;
//         default:
//             day = "Invalid day number";
//     }
//     return day;
// }
// let dayNumber: number = 3;
// console.log(`Day ${dayNumber}: ${getDayOfWeek(dayNumber)}`); 


                       /***  Grade Assigement Script ***/

// function assignGrade(score:number) {
//     let grade:string;
    
//     switch(true) {
//         case (score >= 90 && score <= 100):
//             grade = 'A';
//             break;
//         case (score >= 80 && score < 90):
//             grade = 'B';
//             break;
//         case (score >= 70 && score < 80):
//             grade = 'C';
//             break;
//         case (score >= 60 && score < 70):
//             grade = 'D';
//             break;
//         case (score < 60 && score >= 40):
//             grade = 'F';
//             break;
//         default:
//             grade = 'Invalid score';
//     }
//     return grade;
// }
// console.log(assignGrade(85));  
// console.log(assignGrade(45));  
// console.log(assignGrade(105)); 
                    
                       /*** Leap year check script ***/
// function isLeapYear(year:number) {
//    if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true; 
//             } else {
//                 return false; 
//             }
//         } else {
//             return true; 
//         }
//     } else {
//         return false; 
//     }
// }
// console.log(isLeapYear(2020)); 
// console.log(isLeapYear(2021));
// console.log(isLeapYear(1900)); 
// console.log(isLeapYear(2000)); 
// console.log(isLeapYear(2400)); 

                       /***  Achievement:  ***/

               //  By the end of these activities :   

// function checkNumberSign(number: number): void {
    // if (number > 0) {
        // console.log("The number is positive.");
    // } else if (number < 0) {
        // console.log("The number is negative.");
    // } else {
        // console.log("The number is zero.");
    // }
// }
// checkNumberSign(10);   
// checkNumberSign(-5);   
// checkNumberSign(0);    

                        /***  nested if-else statement  ***/ 

// function categorizeNumber(number: number): void {
    // if (number >= 0) {
        // if (number <= 25) {
            // console.log("Number is between 0 and 25");
        // } else if (number <= 50) {
            // console.log("Number is between 26 and 50");
        // } else {
            // console.log("Number is greater than 50");
        // }
    // } else {
        // console.log("Number is negative");
    // }
// }

// categorizeNumber(15);    
// categorizeNumber(35);   
// categorizeNumber(70);   
// categorizeNumber(-10);

                       /***  utilize switch cases for control flow  ***/

// function dayOfWeek(dayNumber: number): void {
//     let dayName: string;

//     switch (dayNumber) {
//         case 1:
//             dayName = "Sunday";
//             break;
//         case 2:
//             dayName = "Monday";
//             break;
//         case 3:
//             dayName = "Tuesday";
//             break;
//         case 4:
//             dayName = "Wednesday";
//             break;
//         case 5:
//             dayName = "Thursday";
//             break;
//         case 6:
//             dayName = "Friday";
//             break;
//         case 7:
//             dayName = "Saturday";
//             break;
//         default:
//             dayName = "Invalid day number";
//     }

//     console.log(`Day ${dayNumber} is ${dayName}`);
// }
// dayOfWeek(3); 

                        /***  ternary operator for concise condition checking  ***/

//  function isAdult(age: number): string {
//     const message = (age >= 18) ? "Adult" : "Not an adult";
//     return message;
// }
// console.log(isAdult(25));  
// console.log(isAdult(15)); 


                         /***  Combine multiple conditions to solve more complex problems  ***/
// function calculateDiscount(age: number, isMember: boolean): number {
//     const basePrice = 100;
//     let discount = 0;

//     if (age >= 60 && isMember) {
//         discount = 30;  
//     } else if (age >= 60 && !isMember) {
//         discount = 20;  
//     } else if (age < 60 && isMember) {
//         discount = 10;  
//     }

//     const finalPrice = basePrice - (basePrice * (discount / 100));
//     return finalPrice;
// }
// console.log(calculateDiscount(65, true));   
// console.log(calculateDiscount(70, false));  
// console.log(calculateDiscount(50, true));  
// console.log(calculateDiscount(50, false));  



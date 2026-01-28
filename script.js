// Task 1: Add Two Numbers
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 5)); // 8


// Task 2: Check Even or Odd
function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(7)); // Odd


// Task 3: Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    return c * 1.8 + 32;
}
console.log(celsiusToFahrenheit(0)); // 32


// Task 4: Return Full Name
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName("Ali", "Khan")); // Ali Khan


// Task 5: Square a Number
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(4)); // 16


// Task 6: Count Vowels
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello")); // 2


// Task 7: Find Maximum of Three Numbers
function maxOfThree(a, b, c) {
    let max = a;

    if (b > max) max = b;
    if (c > max) max = c;

    return max;
}
console.log(maxOfThree(3, 9, 5)); // 9


// Task 8: Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("abc")); // cba


// Task 9: Palindrome Check
function isPalindrome(word) {
    let lowerWord = word.toLowerCase();
    return lowerWord === reverseString(lowerWord);
}
console.log(isPalindrome("Madam")); // true


// Task 10: Factorial
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120


// Task 11: Largest Number in Array
function largestInArray(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(largestInArray([3, 7, 2, 9, 5])); // 9


// Task 12: Return Even Numbers Only
function evenNumbers(arr) {
    let result = [];

    for (let num of arr) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}
console.log(evenNumbers([1, 2, 3, 4])); // [2,4]


// Task 13: Sum of Array Numbers
function sumArray(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumArray([1, 2, 3])); // 6


// Task 13 (Duplicate): Calculate Discount Price
function calculateDiscount(price, discountPercent) {
    let discount = price * (discountPercent / 100);
    return price - discount;
}
console.log(calculateDiscount(100, 20)); // 80


// Task 14: Generate 4-Digit OTP
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}
console.log(generateOTP()); // Random 4-digit number


// Task 15: Count Words in a Sentence
function countWords(sentence) {
    let trimmed = sentence.trim();
    if (trimmed === "") return 0;
    return trimmed.split(/\s+/).length;
}
console.log(countWords(" Hello world ")); // 2


// Task 16: Student Grade Calculator
function calculateGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";
}
console.log(calculateGrade(82)); // B


// Task 17: Voting Eligibility
function votingEligibility(age) {
    return age >= 18 ? "Eligible" : "Not Eligible";
}
console.log(votingEligibility(17)); // Not Eligible

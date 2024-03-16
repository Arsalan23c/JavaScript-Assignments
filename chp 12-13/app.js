//    CHAPTER "12-13"

// Q1

function checkCharacterType() {
    // Get the character input from the user
    var character = document.getElementById("characterInput").value;

    // Check if the character is a number
    if (!isNaN(character)) {
        document.getElementById("result").innerText = character + " is a number.";
    }
    // Check if the character is an uppercase letter
    else if (character >= 'A' && character <= 'Z') {
        document.getElementById("result").innerText = character + " is an uppercase letter.";
    }
    // Check if the character is a lowercase letter
    else if (character >= 'a' && character <= 'z') {
        document.getElementById("result").innerText = character + " is a lowercase letter.";
    }
    // If the character is neither a number nor a letter
    else {
        document.getElementById("result").innerText = character + " is not a number or a letter.";
    }
}



// Q2


// Function to compare two integers
function compareIntegers() {
    // Prompt the user to enter the first integer
    var firstInteger = parseInt(prompt("Enter the first integer:"));

    // Prompt the user to enter the second integer
    var secondInteger = parseInt(prompt("Enter the second integer:"));

    // Compare the integers
    if (firstInteger > secondInteger) {
        console.log("The larger integer is: " + firstInteger);
    } else if (firstInteger < secondInteger) {
        console.log("The larger integer is: " + secondInteger);
    } else {
        console.log("Both integers are equal.");
    }
}

// Call the function to start comparing integers
compareIntegers();


// Q3

// Function to determine the sign of a number
function checkSign() {
    // Prompt the user to enter a number
    var number = parseFloat(prompt("Enter a number:"));

    // Check if the number is positive, negative, or zero
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Call the function to start checking the sign of the number
checkSign();


// Q4


// Function to check if a character is a vowel
function isVowel(character) {
    // Convert the character to lowercase to handle both cases
    var lowerCaseCharacter = character.toLowerCase();

    // Check if the character is a vowel (a, e, i, o, u)
    if (lowerCaseCharacter === 'a' || lowerCaseCharacter === 'e' || lowerCaseCharacter === 'i' ||
        lowerCaseCharacter === 'o' || lowerCaseCharacter === 'u') {
        return true;
    } else {
        return false;
    }
}

// Test the function with user input
var inputCharacter = prompt("Enter a character:");
if (inputCharacter.length === 1) {
    var result = isVowel(inputCharacter);
    console.log("Is the character a vowel? " + result);
} else {
    console.log("Please enter only one character.");
}



// Q5

// Store correct password in a variable
var correctPassword = "MySecretPassword";

// Ask user to enter their password
var userInput = prompt("Enter your password:");

// Validate the passwords
if (userInput === null || userInput === "") {
    // Check if user has entered a password
    console.log("Please enter your password.");
} else if (userInput === correctPassword) {
    // Check if the entered password matches the correct password
    console.log("Correct! The password you entered matches the original password.");
} else {
    // Incorrect password
    console.log("Incorrect password.");
}


// Q6

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


// Q7



// Prompt the user to enter the time in 24-hour clock format
var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

// Implement different cases using if, else if, and else statements
if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
    console.log("Good evening!");
} else if (time >= 2000 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time format.");
}

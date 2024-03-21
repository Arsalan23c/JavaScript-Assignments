//Q1

for ( var i = 1; i <= 10; i++){
    console.log("Number: " + i)
}

//Q2

for (var i = 2; i <= 20; i += 2) {
    console.log("Even Numbers: " + i);
}

//Q3

for (var i = 1; i <= 15; i += 2) {
    console.log("Odd Numbers: " + i);
}

//Q4

var number = 5;
var factorial = 1;
for (var i = 1; i <= number; i++) {
    factorial *= i;
    console.log("Factorial: " + factorial)
}

//Q5

var num = 7;
for (var i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + (num * i));
}

//Q6

var a = 0, b = 1, temp;
console.log(a);
console.log(b);
for (var i = 3; i <= 10; i++) {
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
}

//Q7

var number = 123;
var sum = 0;
while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
console.log(sum);

//Q8

var str = "hello";
var reversedStr = "";
for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr)

//Q9

for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

//Q10

var array = [3, 7, 2, 9, 5];
var max = array[0];
for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max);
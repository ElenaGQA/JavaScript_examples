let admin;
let name0 = "John";
admin = name0;
alert(admin)
// result => John



let name1 = "John";
alert("Hello, " + name1 + "!")
//or
let name1 = "John";
alert(`Hello, ${name1}!`) // do NOT forget to use backtics ``
// will give the same result => Hello, Johny!

let first = 6;
let second = 20;
console.log(first > second)
// result=> false. It's a boolean



// TASK convert unswer into numbers and do math

let one1 = +prompt("First number", 0);
let two1 = +prompt(" and second number", 0);
alert(one1 + two1)

let one2 = prompt("First number", 0);
let two2 = prompt(" and second number", 0);
alert(+one2 + +two2)

let one3 = prompt("First number", 0);
let two3 = prompt(" and second number", 0);
alert(Number(one3) + Number(two3))

let one = prompt("First number", 0);
let two = prompt(" and second number", 0);
alert(one - two)  // because it's minus it will automatically convert it into numbers


// All this examples are converting veriables into numbers. With + and - it works without any additional + or Number in front
// of other words. For multiplications and divisions, it's a must. 

// TASK ask the user to put in two numbers, then output the substraction using alert

let one4 = prompt("Input first number", 0); //3
let two4 = prompt("Input second number", 0); //4
alert(one4 - two4) //or see options above // result => -1


// TASK the program must ask the user to input two numbers, compare if the first one is greater than second one and give the type of that comparison:

let one5 = prompt("Input first number", 0);
let two5 = prompt("Input second number", 0);
alert(typeof (one5 > two5))
// result => boolean

typeof (typeof true)
typeof (typeof "5")
// result for both => string

// TASK ask the user to input their age, name and number of years into the future they want to know their age. Alert greetings with name, age and age in the future. 
let age = prompt("Please, enter your age", 0);
let name = prompt("Please, enter your name", 0);
let years = prompt("Please, enter the number of years into the future you want to know your age", 0);
alert(`Hello, ${name}! Now you are ${age} years old. In ${years}, you will be ${+age + +years} old`)

//TASK Ask the user to input the radius of circle. Show the user the area of that circle(pi*r^2).
let radius = prompt("Input the radius of a circle", 0);
alert(`The area of the circle is ${Math.PI * radius ** 2}`)

//TASK Ask the user to enter the values of 2 sides of a right triangle. According to that value, calculate hypotenuse(c=(a^2+b^2)^1/2) and  area((a*b)/2).
let a = prompt("Enter lenth of side a", 0);
let b = prompt("Enter length of side b", 0);
let c = (a ** 2 + b ** 2) ** 1 / 2;
let d = (a * b) / 2;
alert(`The hypotenuse of the triangle is ${c} and area is ${d}`)

// the same in different format
let a1 = prompt("Enter lenth of side a", 0);
let b1 = prompt("Enter length of side b", 0);
alert("The hypotenuse of the triangle is " + (a1 ** 2 + b1 ** 2) ** 1 / 2 + " and area is " + (a1 * b1) / 2)

//TASK if else
let JSname = prompt("What is the 'official' name of JavaScript?");
if (JSname == "ECMAScript") {
    alert("Right!");
}
else {
    alert("You don't know? 'ECMASciprt'");
}

//the same in different format 
let JSname1 = prompt("What is the 'official' name of JavaScript?");
let message = (JSname1 == "ECMAScript") ? "Right!" : "You don't know? 'ECMASciprt'";
alert(message)

// TASK Using if..else, write the code which gets a number via prompt and then shows in alert: 1, if the value is greater than zero, -1, if less than zero, 0, if equals zero.
let number = prompt("Please, choose any number", 0);
if (number > 0) {
    alert(1);
}
else if (number < 0) {
    alert(-1);
}
else {
    alert(0);
}

//the same in different format
let number1 = prompt("Please, choose any number", 0);
let response = (number1 > 0) ? "1" : (number1 < 0) ? "-1" : "0"
alert(response)


//Output even numbers in the loop
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        alert(i)
    }
}
//or 
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) continue;
    alert(i)
}


//Count the arithmetic mean of numbers from 1 to 10 inclusive(sum divided by count)
let sum = 0;
let count = 0;
let lstNumber = 10;
for (let i = 1; i <= lastNumber; i++) {
    count++;
    sum += i;
}
let mean = sum / count;
alert(mean)

//Print the multiplication table of a given number, write code with ‘while’
let a = 2;
let i = 0;
while (i <= 10) {
    i++;
    let b = a * i;
    alert(`2 * ${i} = ${b}`)
}

//FizzBuzz: Write a program that prints numbers from 1 to 100. For multiples of 3, alert "Fizz" instead of the number. 
//For multiples of 5, alert "Buzz". For numbers that are multiples of both 3 and 5, alert "FizzBuzz". 
//Use a for loop to iterate through the numbers.
let number = 20;
for (let i = 1; i <= number; i++) {
    if (i % 15 == 0) {
        alert("FizzBuzz");
    }
    else if (i % 5 == 0) {
        alert("Buzz");
    }
    else if (i % 3 == 0) {
        alert("Fizz");
    }
    else {
        alert(i)
    }
}

// Find the sum of squares of all elements from 1 to 10. Sum=1*2+2*2+…+10*2
let number = 10;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i ** 2;
}
alert(sum)

//We have an object storing salaries of our team: Write the code to sum all salaries and store in the variable sum
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum;
alert(`The sum of all salaries is ${sum = salaries.John + salaries.Ann + salaries.Pete}`)

//or
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let persons in salaries) {
    sum += salaries[persons];
}
alert(`The sum of all salaries is ${sum}`)

//Given an object with food names and their prices. Write the code to find average price
let fruits = {
    "apple": 100,
    "banana": 200,
    "orange": 300,
    "grapes": 400,
    "watermelon": 500
}
let sum = 0;
let count = 0;
for (let positions in fruits) {
    count++;
    sum += fruits[positions];
}
alert(`The average price of fruits is ${sum / count}`)

//Calculate the sum of all elements in an array.
let arr = [1, 5, 7, -8, 10, 9]
let sum = 0;
for (let obj in arr) {
    sum += arr[obj];
}
alert(sum)

// Given an array of numbers, find the maximum or minimum element.
let arr = [12, 2, 5, 34, 12, 4, 6];
let max = arr[0];
for (let num of arr) {
    if (max > num) {
        max = num;
    }
}
alert(max) \

// Find the index of a specific element in an array.
let fruits = ["Apple", "Orange", "Kiwi", "Banana", "Plum"];
fruit = "Kiwi";
alert(fruits.indexOf(fruit))
//or
let fruits = ["Apple", "Orange", "Kiwi", "Banana", "Plum"];
alert(fruits.indexOf("Kiwi"))

let fruits = ["Apple", "Orange", "Kiwi", "Banana", "Plum"];
fruit = "Kiwi";
for (let i = 0; i < fruits.length; 1++) {
    if (fruits[i] == fruit) {
        alert(i)
    }
}

// Write a function min(a,b) which returns the least of two numbers a and b.

function minNumber(a, b) {
    if (a < b) {
        alert(a);
    }
    else if (b < a) {
        alert(b);
    }
    else { alert("a and b are equal") }
}
minNumber(5, 3)

// The built-in function Math.random() creates a random value from 0 to 1 (not including 1). 
//Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
function random(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(random(1, 5))

// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.
//Test Data : console.log(array_range(2, 4));    // [2, 3, 4, 5]
function intNumbers(start, length) {
    let arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(start + i);
    }
    console.log(arr)
}
intNumbers(2, 4)

// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
//Sample array: [NaN, 0, 15, false, -22, '',undefined, 47, null]       Expected result: [15, -22, 47]
function removeVal() {
    let arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
    arr = arr.filter(data => data !== 0 && data !== null && data !== false && data !== undefined &&
        data !== '' && !Number.isNaN(data))

    console.log(arr)
}
removeVal()

// Write a JavaScript function to get random items from an array.
//Hint: use Math.floor(Math.random())

function randomObj() {
    let arr = [1, 3, 5, 7, 9, 11, 13, 15];
    let index = Math.floor(Math.random() * arr.length)
    console.log(arr.at(index))
}
randomObj()

// Write a function isOne(a,b,c) which returns true if at least one number is equal to 1 otherwise return false( || if, else)
function isOne(a, b, c) {
    let result;
    if (a === 1 || b === 1 || c === 1) {
        result = true;
    } else {
        result = false;
    }
    console.log(result)
}
isOne(1, 4, 6)

// Write a function numMult(num) to find the sum of multipliers of the given number    e.g 10=1,2,5,10 return 1+2+5+10=18
function numMult(num) {
    let sum = 0;
    for (let div = 1; div <= num; div++) {
        if (num % div === 0) {
            sum += div;
        }
    }
    console.log(sum)
}
numMult(10)

//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and 
//lower or equal to b and return a result as an array. The function should not modify the array. It should return the new array. 
let arr = [5, 3, 8, 1]
let filtered = arr.filter(function (element) {
    return element >= 1 && element <= 4
})
console.log(filtered)
console.log(arr)

// or

let arr = [5, 3, 8, 1];
function filterRange(array, min, max) {
    return array.filter(function (element) {
        return element >= min && element <= max
    })
}
let filtered = filterRange(arr, 1, 4)
console.log(filtered)

//or

let arr = [5, 3, 8, 1, -5];
let filterRange = (array, min, max) => {
    return array.filter(element =>
        element >= min && element <= max
    )
}
let filtered = filterRange(arr, 1, 4)
console.log(filtered)


// Let arr be an array. Create a function unique(arr) that should return an array with unique items of arr. 
//Hint: use second empty array, use arr.includes() and use arr.push() methods
let strings = ["name", "name", "surname", "email", "surname", "gender", "age", "surname", "something"];
let uniqueStrings = [];
function unique(arr) {
    for (let element of strings) {
        if (uniqueStrings.includes(element)) continue;
    }
    uniqueStrings.push(element)
}
unique(strings);
alert(uniqueStrings)

//OR

let strings = ["name", "name", "surname", "email", "surname", "gender",
    "age", "surname", "something"];
let result = [];

for (let str of strings) {
    if (!result.includes(str)) {
        result.push(str)
    }
}

//OR 

strings.forEach(function (element) {
    if (!result.includes(element))
        result.push(element)
})

//OR 

let result = strings.filter(function (element, index) {
    return strings.indexOf(element) == index
})

console.log(result)

// Sort in decreasing order 
//let arr = [5, 2, 1, -10, 8];
let arr = [5, 2, 1, -10, 8];
arr.sort(function (a, b) {
    return b - a;
})
console.log(arr)

//or

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr)

//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
let arr = [
    { name: "Pete", age: 30 },
    { name: "John", age: 25 },
    { name: "Mary", age: 28 }
]
arr.sort(function (age1, age2) {
    return age1.age - age2.age
})
console.log(arr)
// [{
//     age: 25,
//     name: "John"
// }, {
//     age: 28,
//     name: "Mary"
// }, {
//         age: 30,
//         name: "Pete"
//     }]

//OR

let arr = [
    { name: "Pete", age: 30 },
    { name: "John", age: 25 },
    { name: "Mary", age: 28 }
]
arr.sort((age1, age2) => age1.age - age2.age)
console.log(arr)


// Write a function removeAtIndex which takes an array and returns a new array with the value at the given index removed. 
// Example: removeAtIndex([5, 10, 15, 20], 2); // should return [5, 10, 20] 

let str = [5, 10, 15, 20];
let result = [];

function removeAtIndex(arr, index) {
    str.forEach(function (element) {
        if (str.indexOf(element) !== index)
            result.push(element)
    })
}
removeAtIndex(str, 2)
console.log(result)

//OR 

let str = [5, 10, 15, 20];
let result = [];
str.forEach(function (element) {
    if (str.indexOf(element) !== 2)
        result.push(element)
})
console.log(result)

//Create a function called transform which takes an array of objects.The function should filter the list down to only
// those whose gender value is “female” and return an array with those objects 

let str = [
    { fn: "Joe", ph: "039 323 233", gender: "male" },
    { fn: "Mike", ph: "039 323 233", gender: "male" },
    { fn: "Jane", ph: "039 323 233", gender: "female" },
    { fn: "Jill", ph: "039 323 233", gender: "female" }
]
let result = [];
function transform(arr, key) {
    arr.forEach(function (item) {
        if (item.gender === key) {
            result.push(item)
        }
    })
}
transform(str, "female")
console.log(result)

//OR

let str = [
    { fn: "Joe", ph: "039 323 233", gender: "male" },
    { fn: "Mike", ph: "039 323 233", gender: "male" },
    { fn: "Jane", ph: "039 323 233", gender: "female" },
    { fn: "Jill", ph: "039 323 233", gender: "female" }
];
let result = [];
str.forEach(function (item) {
    if (item.gender === "female") {
        result.push(item)
    }
})
console.log(result)

let str = [
    { fn: "Joe", ph: "039 323 233", gender: "male" },
    { fn: "Mike", ph: "039 323 233", gender: "male" },
    { fn: "Jane", ph: "039 323 233", gender: "female" },
    { fn: "Jill", ph: "039 323 233", gender: "female" }
]
let result = [];
function transform(arr, key) {
    arr.forEach(function (item) {
        if (item.gender === key) {
            result.push(item)
        }
    })
}
transform(str, "female")
let finalResult = result.map(function (item) {
    return {
        FirstName: item.fn,
        Phone: item.ph,
        Gender: item.gender
    }
})
console.log(result)
console.log(finalResult)

//OR

let arr = [
    { fn: "Joe", ph: "039 323 233", gender: "male" },
    { fn: "Mike", ph: "039 323 233", gender: "male" },
    { fn: "Jane", ph: "039 323 233", gender: "female" },
    { fn: "Jill", ph: "039 323 233", gender: "female" }
]
let result = arr.filter(function (value) {
    return value.gender == "female"
}).map(function (value) {
    return {
        FirstName: value.fn,
        Phone: value.ph,
        Gender: value.gender
    }
})
console.log(result)

// Given the array numbers, with a map function as an arrow function create a new array where each number is doubled.
let numbers = [1, 2, 3, 4];
let newArr = numbers.map(value => value ** 2);
console.log(newArr)

// Write an arrow function that takes an array of numbers and returns a new array containing only the even numbers.
let numbers = [1, 2, 3, 4, 8, 9, 15, -8];
let newArr = numbers.filter(value => value % 2 == 0);
console.log(newArr)

// Transform a code below into arrow function:
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
)
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no()
}
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
)

// Write an arrow function that takes an array of numbers and returns a new array where each number is multiplied by its index in the array.
let numbers = [1, 2, 3];
let arr = numbers.map(number => number * numbers.indexOf(number))
console.log(arr)

// Write a function ucFirst(str) that returns the string str with the uppercased first character.
function ucFirst(str) {
    // let firstChar = str[0];
    //let endChar = str.slice(1) 
    console.log(str[0].toUpperCase() + str.slice(1))
}
ucFirst("john")


// Write a JavaScript function to extract a specified number of characters from a string.
let str = "Robin Singh";
console.log(str.slice(0, 4)) // "Robi"

//OR

function truncate_string(str, index) {
    let newStr = str.slice(0, index);
    return newStr
}
console.log(truncate_string("Robin Singh", 4))

// Write a function that checks if a string is a palindrome (a word, phrase, or sequence that reads the same backward as forward).
function isPalidrome(str) {
    let reverseStr = str.split("").reverse().join("");
    if (str == reverseStr) return true;
    else return false
}
console.log(isPalidrome("asdsa"))

//OR

let str = 'asdsa';
function polindrome(str) {
    for (let i = 0; i <= str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false
        }
    }
    return true
}
alert(polindrome(str))

//Write a function that finds the longest word in a string.
let str = "as sly as a fox, as strong as an ox!";
function longestWord(a) {
    let cleanStr = a.replace(/[,.!?]/g, "");
    let newStr = cleanStr.split(" ");
    let longest = "";
    newStr.forEach(function (word) {
        if (word.length > longest.length) {
            longest = word;
        }
    })
    return longest
}
console.log(longestWord(str))

// Given an array containing names of people. Get a new array containing the names that end with the letter "a".
let names = ["John", "Anna", "Sarah", "Sam", "Tom", "Adriana", "Elen", "Simon", "Mary", "Elena"];
let result = names.filter(function (name) {
    if (name[name.length - 1] === "a") { return name; }
    else { return null }
})
console.log(result)

//OR

let names = ["John", "Anna", "Sarah", "Sam", "Tom", "Adriana", "Elen", "Simon", "Mary", "Elena"];
let result = names.filter(function (name) {
    if (name.endsWith("a")) {
        return name;
    } else {
        return null
    }
})
console.log(result)

// Create a function user that will receive the user's email and return only the first name and last name
function userName(str) {
    let index = str.indexOf("@");
    let user = str.slice(0, index);
    return user
}
console.log(userName("johnsmith@gmail.com"))

//OR

function userName(str) {
    let user = str.slice(0, str.indexOf("@"));
    return user
}
console.log(userName("johnsmith@gmail.com"))


// Write a function called addOnlyNums that can take in any number of arguments(including numbers or strings), and returns the sum of only the numbers. 

function addOnlyNumbs(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        if (isFinite(number)) {
            if (number % 2 == 0) {
                sum += number
            }
        }
    }
    return sum
}
console.log(addOnlyNumbs(1, 5, 23, "klhgfkd", 6, "lkjf", [4, 5, 6]))

// OR

function addOnlyEvenNumbers(...numbers) {
    let sum = 0
    for (let number of numbers) {
        if (typeof number == "number" && !(number % 2)) {
            sum += number
        }
    }
    return sum
}
console.log(addOnlyEvenNumbers(1, 5, "smth", 6, 8, 10, { name: "John" }))

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

let object1 = {
    name: "John",
    lstName: "Smith"
};
let object2 = {
    position: "admin",
    company: "Apple"
}
let mergeObjects = { ...object1, ...object2 };
console.log(mergeObjects)


// OR 

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ name: "John" }, { age: 30 }))

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function () {
        alert(this.step);
        return this
    }
};
ladder.up().up().down().showStep().down().showStep() // shows 1 then 0


function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "admin") ok();
    else fail();
}
let user = {
    name: "John",
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

function Accumulator(value) {
    this.value = value;
    this.read = function () {
        let number = +prompt("input a number", 0)
        this.value += number;
    }
}
let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values

// we have abstract constructor function Person, it takes name, education, profession. Inside the constrcutor we should these properties and
// two methods myProfession and myEducation, these methods should say their education and their profession

function Person(name, education, profession) {
    this.personName = name;
    this.personEducation = education;
    this.personProfession = profession;
    this.myProfession = function () {
        alert(`My profession is ${this.personProfession}`)
    }
    this.myEducation = function () {
        alert(`My education is ${this.personEducation}`)
    }
}
let person = new Person("Ann", "Chemistry Degree", "chemist");
person.myProfession();
person.myEducation()

let item = ["Egg", 0.25, 12];
let [name, price, quantity] = item;
/* let name = item[0]; 
let price = item[1]; 
let quantity = item[2];  */
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`)

let user = {
    name: "John",
    years: 30,
}
let { name, years: age, isAdmin = false } = user;
console.log(name, age, isAdmin)

let person = ["Chris", 12, "Owen"];
let [firstName, , lastName] = person;
console.log(`Name: ${firstName} ${lastName}`)


function pow(x, n) {
    let counter = 1;
    for (let i = 1; i <= n; i++) {
        counter *= x
    }
    return counter
}
alert(pow(2, 3))

//Write a function factorial(n) that calculates n! using loop and recursive calls.

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
        console.log(result)
    }
}
factorial(5)

//OR

function factorial(n) {
    if (n == 1) return 1;
    else {
        let result = n * factorial(n - 1);
        console.log(result);
        return result;
    }
}
factorial(5)

// JSON.stringify

let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room
};
alert(JSON.stringify(meetup, ['title', 'participants', 'name']))
// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}]}


let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room
};
alert(JSON.stringify(meetup, null, 2))
// {
//  "title":"Conference",
//  "participants":[
//   {
//    "name":"John"
//   },
//   {
//    "name":"Alice"
//   }
//   ],
//  "place":{
//    "number":23
//    }
// }

//Turn the user into JSON and then read it back into another variable.
let user = {
    name: "John Smith",
    age: 35
};
let newUser = JSON.stringify(user);
alert(newUser)
// {"name":"John Smith","age":35}

// Write a function fib(n) that returns the n-th Fibonacci number.
function fib(n) {
    let a = 0;
    let b = 1;
    let c;
    if (n === 0) return 0;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fib(10))

//OR

function fib(n) {
    if (n === 0) return 0;       // Base case 1: fib(0) = 0
    if (n === 1) return 1;       // Base case 2: fib(1) = 1
    return fib(n - 1) + fib(n - 2); // Recursive case: fib(n) = fib(n-1) + fib(n-2)
}
console.log(fib(10));  // Outputs: 55

//Write a JavaScript function to determine whether a given year is a leap year(is divisible by 4 or not)
function leapYear(n) {
    if (!(n % 4)) {
        return "leap year"
    }
    return " not leap year"
}
alert(leapYear(2024))

function leapYear(n) {
    return (n % 4) ? "not leap year" : "leap year"
}
alert(leapYear(2024))

//Write a JavaScript function to convert temperatures from Celsius to Fahrenheit.
function temp(n) {
    return n * 9 / 5 + 32
}
alert(temp(200))

//Write a JavaScript function to create a new string from a given string by changing the position of the first and last characters. 
let str = "string";
let newStr = str.slice(1, str.length - 1);
console.log(str[str.length - 1] + newStr + str[0])

// Create a function where users give items and prices, and the program calculates and returns
// an estimated total cost and grocery list. Use an object to store items and prices.

let groceryList = {};
function sumOfProducts(groceryItems) {
    let sum = 0;
    for (let items of groceryItems) {
        let [product, price] = items;
        sum += price;
        groceryList[product] = price;
    }
    return sum
}
let groceryItems = [
    ["apple", 4],
    ["orange", 5],
]
console.log(sumOfProducts(groceryItems));
console.log(groceryList)

// Write a function called calculateTotalCost that takes an array of items, where each item is represented
// as an array with a name, quantity, and price per unit. The function should calculate the total cost of 
// all items and store each item's total cost (quantity * price per unit) in an object. The function should 
// return the total cost of all items combined.
let listOfItems = {};
function calculateTotalCost(items) {
    let cost = 0;
    for (let item of items) {
        let [name, quantaty, price] = item;
        let totalPrice = quantaty * price;
        cost += totalPrice;
        listOfItems[name] = totalPrice
    }
    return cost
}
let items = [
    ["banana", 3, 1],   // 3 bananas, each costs 1
    ["milk", 2, 2],     // 2 units of milk, each costs 2
    ["bread", 1, 3],    // 1 loaf of bread, costs 3
];
console.log(calculateTotalCost(items));
console.log(listOfItems)

// Create a constructor Book that takes title, author, and pages as arguments. It should have a method to check whether a 
// book is long or short (books with more than 300 pages are considered long, otherwise short)

function Book(title, author, pages) {
    this.bookName = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.isLongBook = function () {
        return pages > 300 ? "long book" : "short book"
    }
}
let book1 = new Book("JavaScript Essentials", "John Doe", 350)
console.log(`${book1.bookName} by ${book1.bookAuthor} is ${book1.isLongBook()}`)

let book2 = new Book("The Little Book of JS", "Jane Smith", 150)
console.log(`${book2.bookName} by ${book2.bookAuthor} is ${book2.isLongBook()}`)
// "JavaScript Essentials by John Doe is long book"
// "The Little Book of JS by Jane Smith is short book"


// Track a user's steps over several days and calculate the average. Details: Allow the user to input their step count for each day. 
// After the data is input, calculate the average steps and print a fitness suggestion.(if the average steps>=10000, “great job”, else “you need more steps”

let steps = []
function addSteps(stepCount) {
    steps.push(stepCount) //steps=[8000,12000,10000]
}
function getAverageSteps() {
    let sum = 0;
    steps.map((item) => { //or using forEach
        sum += item
    })
    let avSteps = sum / steps.length
    if (avSteps >= 10000) {
        return "Great job"
    }
    else {
        return "you need more steps"
    }
}
addSteps(8000)
addSteps(12000)
addSteps(10000)
alert(getAverageSteps())

// Create Employee salary calculation function that gets object. The object contains the employee’s name, salary and rating(from 0 to 10). 
// The bonus will be salary*(rating/10)


function calculateBonus(employee) {
    let { name, salary, rating } = employee
    if (isFinite(salary) && isFinite(rating)) {
        let bonus = salary * (rating / 10)
        return `${name} will receive a bonus of $${bonus}`
    }
}
let employeeData = { name: "John", salary: 5000, rating: 8 }
console.log(calculateBonus(employeeData))

// What will be the result?

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
alert(rabbit.jumps); // true
delete rabbit.jumps;
alert(rabbit.jumps); // null 
delete animal.jumps;
alert(rabbit.jumps); // undefined 

let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
let pockets = {
    money: 2000,
    __proto__: bed
};
alert(pockets.pen) // 3
alert(bed.glasses) //1

//Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person’s details. 
//Create two instances of the 'Person' class and display their details. 

class Person {
    constructor(name, age, country) {
        this.name = name
        this.age = age
        this.country = country
    }
    displayDetails() {
        return `${this.name} is ${this.age} years old and he is from ${this.country}`
    }
}
let person1 = new Person("John", 30, "USA")
let person2 = new Person("Mike", 40, "Canada")
console.log(person1.displayDetails())
console.log(person2.displayDetails())

// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. 
// Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class 
// and calculate its area and perimeter. (area=width*height,  perimeter=2(width + height) 

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    area() {
        return `The Rectangle area is ${this.width * this.height}`
    }
    perimeter() {
        return `The Rectangle perimeter is ${(this.width + this.height) * 2}`
    }
}
let rectangle = new Rectangle(2, 3)
console.log(rectangle.area())
console.log(rectangle.perimeter())


// Write a JavaScript program that creates a class called Bank with properties for bank names and branches(array). 
// Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class 
//and perform operations to add and remove branches.

class Bank {
    constructor(name, branch) {
        this.name = name
        this.branch = []
    }
    addBranch(branch) {
        this.branch.push(branch)
    }
    removeBranch(branch) {
        let position = this.branch.indexOf(branch)
        if (position === -1) {
            console.log(`${branch} not found.`)
        } else {
            this.branch.splice(position, 1)
        }
    }
    displayBranches() {
        console.log(this.branch)
    }
}
const bank = new Bank("ABC Bank")
bank.addBranch("Branch A")
bank.addBranch("Branch B")
bank.addBranch("Branch C")
bank.removeBranch("Branch B")
bank.displayBranches()

//Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. 
//Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and 
//includes an additional property for book price. Override the display method to include the book price. Create an 
//instance of the 'Ebook' class and display its details.

class Book {
    constructor(title, author, pubYear) {
        this.title = title
        this.author = author
        this.pubYear = pubYear
    }
    displayDetails() {
        console.log(`The book title is ${this.title} by ${this.author} published in ${this.pubYear}.`,)
    }
}
class Ebook extends Book {
    constructor(title, author, pubYear, price) {
        super(title, author, pubYear)
        this.price = price
    }
    displayDetails() {
        super.displayDetails()
        console.log(`The price is ${this.price}`)
    }
}
const ebook = new Ebook("Don Quixote", "Miguel de Cervantes", 1605, 21.49)
ebook.displayDetails()

//Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. 
//Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' 
//class and adds an additional property for department. Override the annual salary calculation method to add 1000$ to 
//the salary for managers. Create an instance of the 'Manager' class and calculate the  annual salary.

class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    calculateAnnualSalary() {
        return this.salary * 12
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary)
        this.department = department
    }
    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + 1000
    }
}
const manager1 = new Manager("Angela Luca", 5000, "Marketing")
const annualSalary1 = manager1.calculateAnnualSalary()
console.log(`Manager: ${manager1.name}`)
console.log(`Department: ${manager1.department}`)
console.log(`Annual Salary: $${annualSalary1}`)

// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. 
//Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' 
//class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    displayDetails() {
        console.log(`This vehicle make is ${this.make}`)
        console.log(`This vehicle model is ${this.model}`)
        console.log(`This vehicle year is ${this.year}`)
    }
}
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year)
        this.doors = doors
    }
    displayDetails() {
        super.displayDetails()
        console.log(`This car has ${this.doors} number of doors`)
    }
}
const vehicle = new Vehicle("Ford", "F-150", 2020)
console.log("Vehicle Details:")
vehicle.displayDetails()
const car = new Car("Honda", "Accord", 2023, 4)
console.log("Car Details:")
car.displayDetails()


// Create a class called Configuration.
// Define a static property called settings initialized to an empty object.
// Create a static method called setSetting(key, value) that sets a property on the settings object.
// Create another static method called getSetting(key) that returns the value of the specified property.

class Configuration {
    static obj = new Object()
    static setSetting(key, value) {
        this.obj[key] = value
    }
    static getSetting(key) {
        return this.obj[key]
    }
}
Configuration.setSetting('theme', 'dark');
console.log(Configuration.getSetting('theme'))

// Create a class called Person.
// Define a static property called population initialized to 0.
// In the constructor, increment the population by 1 each time a new instance is created.
// Create a static method called getPopulation() that returns the current population.

class Person {
    static population = 0
    constructor() {
        Person.population++
    }
    static getPopulation() {
        return this.population
    }
}
const john = new Person("John")
const jane = new Person("Jane")
console.log(Person.getPopulation())


// Create a class called Counter.
// Define a static property called count initialized to 0.
// Create a static method called increment() that increments count by 1.
// Create another static method called getCount() that returns the current value of count.

class Counter {
    static count = 0;
    static increment() {
        this.count++
    }
    static getCount() {
        return this.count
    }
}
Counter.increment();
Counter.increment();
console.log(Counter.getCount())

// Create a class called BankAccount with protected properties accountNumber and balance. 
// Provide public getter and setter methods to access and modify these variables.

class BankAccount {
    _accountNumber;
    _balance;
    get accountNumber() {
        return this._accountNumber
    }
    set accountNumber(val) {
        this._accountNumber = val
    }
    get balance() {
        return this._balance
    }
    set balance(val) {
        this._balance = val
    }
}
let account = new BankAccount()
account.accountNumber = 1254854748
account.balance = "1000$"
console.log(account.accountNumber)
console.log(account.balance)

// Create a class called Student with private properties student_id, student_name, and grades(array). 
// Provide public getter and setter methods to access and modify the student_id and student_name properties. 
// provide a method called addGrade() that allows adding a grade to the grades array. And have method getGrades to show the list.

class Student {
    #student_id;
    #student_name;
    #grades = new Array();
    get student_id() {
        return this.#student_id
    }
    set student_id(val) {
        this.#student_id = val
    }
    get student_name() {
        return this.#student_name
    }
    set student_name(val) {
        this.#student_name = val
    }
    addGrades(val) {
        this.#grades.push(val)
    }
    getGrades() {
        return this.#grades
    }
}
let student1 = new Student()
student1.student_name = "John"
student1.student_id = 1
student1.addGrades(9)
student1.addGrades(8)
console.log(student1.student_name)
console.log(student1.student_id)
console.log(student1.getGrades())


class Student {
    #student_id;
    #student_name;
    #grades;
    get student_id() {
        return this.#student_id
    }
    set student_id(val) {
        this.#student_id = val
    }
    get student_name() {
        return this.#student_name
    }
    set student_name(val) {
        this.#student_name = val
    }
    quality(grade) {
        if (grade >= 0 && grade <= 3) {
            console.log("The result is very bad")
        }
        else if (grade >= 4 && grade <= 6) {
            console.log("The result is bad")
        }
        else if (grade >= 7 && grade <= 9) {
            console.log("The result is good")
        }
        else console.log("The result is excelent")
    }

}
let student1 = new Student()
student1.student_name = "John"
student1.student_id = 1
student1.quality(3)
student1.quality(5)
student1.quality(9)
student1.quality(10)
console.log(student1.student_name)
console.log(student1.student_id)

/* Create a class called Movie with private properties title, director. Provide public getter and setter methods 
to access and modify these variables. Add a method called getMovieDetails() that returns the movie details. */

class Movie {
    #title;
    #director;
    get title() {
        return this.#title
    }
    set title(val) {
        this.#title = val
    }
    get director() {
        return this.#director
    }
    set director(val) {
        this.#director = val
    }
    getMovieDetails() {
        console.log(`This movie title is ${this.#title} and director is ${this.#director}`)
    }
}
let movie1 = new Movie()
movie1.title = "Wolfs"
movie1.director = "Jon Watts"
movie1.getMovieDetails()

class Smartphone {
    #brand;
    #model;
    #storage_capacity;
    get brand() {
        return this.#brand
    }
    set brand(val) {
        this.#brand = val
    }
    get model() {
        return this.#model
    }
    set model(val) {
        this.#model = val
    }
    get storage_capacity() {
        return this.#storage_capacity
    }
    set storage_capacity(val) {
        this.#storage_capacity = val
    }

    increaseStorage(val) {
        this.#storage_capacity += val
        return this.#storage_capacity
    }
    getDetails() {
        return `This is ${this.#brand} smartphone, ${this.#model} model, with storage capacity of ${this.#storage_capacity}`
    }
}
let smartphone1 = new Smartphone();
smartphone1.brand = "Samsung";
smartphone1.model = "Galaxy";
smartphone1.storage_capacity = 5
smartphone1.increaseStorage(3)
console.log(smartphone1.getDetails())

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true;
    }
    checkOut() {
        if (this.available == true) {
            this.available = false
            return "This book is rented out"
        } else {
            return "This book is not availbale"
        }
    }
    returnBook() {
        this.availbale = true
        return "This book is now availbale"
    }
    displayInfo() {
        console.log(
            `${this.title},${this.author} , availablility ${this.available}`,
        )
    }
}
class Library {
    constructor() {
        this.books = []
    }
    addBook(book) {
        this.books.push(book)
        return `The ${book.title} is added to the library`
    }
    listAvailableBooks() {
        for (let element of this.books) {
            if (element.available) {
                element.displayInfo()
            }
        }
    }
}
const library = new Library()
const book1 = new Book("book1", "author1")
const book2 = new Book("book2", "author2")
console.log(library.addBook(book1))
console.log(library.addBook(book2))
library.listAvailableBooks()
console.log(book1.checkOut())
library.listAvailableBooks()

class Book {
    constructor(title, author) {
        this.title = title; // No need for available in constructor parameters
        this.author = author;
        this.available = true;// Public property
    }
    checkOut() {
        if (this.available) {
            this.available = false
            return `${this.title} is checked out`
        } else {
            return `${this.title} is not available`
        }
    }
    returnBook() {
        this.available = true
        console.log(`${this.title} is returned`)
    }
    displayInfo() {
        console.log(
            `${this.title}, ${this.author}, availability: ${this.available}`,
        )
    }
}
class Library {
    constructor() {
        this.books = [] // Private property
    }
    addBook(book) {
        this.books.push(book)
        return `${book.title} is successfully added`
    }
    listAvailableBooks() {
        this.books.forEach((book) => {
            if (book.available) {
                book.displayInfo()
            }
        })
    }
}
const library = new Library()
const book1 = new Book("book1", "author1")
const book2 = new Book("book2", "author2")
console.log(library.addBook(book1))
console.log(library.addBook(book2))
library.listAvailableBooks()
console.log(book1.checkOut())
library.listAvailableBooks()

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `${this.name}`
    }
}
class Student extends Person {
    constructor(name, age, courses) {
        super(name, age);
        this.courses = [];
    }
    enroll(course) {
        this.courses.push(course)
    }
    listCourses() {
        super.displayInfo()
        console.log(`${this.name}'s courses' : ${this.courses}`)
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
        this.students = [];
    }

    listStudents() {

        console.log(`Students taught by ${this.name}: ${this.students.map(item => item.name).join(",")}`)
    }

    addStudent(student) {
        this.students.push(student)
    }
}
const student1 = new Student("Alice", 20)
const student2 = new Student("Bob", 21)
student1.enroll("Math")
student1.enroll("Science")
student2.enroll("Math")
student1.listCourses() // Output: Alice's Courses: Math, Science
student2.listCourses() // Output: Bob's Courses: Math
const teacher = new Teacher("Mr. Smith", 40, "Math")
teacher.addStudent(student1)
teacher.addStudent(student2)
teacher.listStudents() // Output: Students taught by Mr. Smith: Alice, Bob

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "John", age: 30 },
]
function getAdultNames(arr) {
    try {
        let somePeople = smth.filter((items) => items.age > 18)
        return somePeople.map((item) => item.name).join(",")
    } catch (err) {
        alert(err)
    }
}
console.log(getAdultNames(people))
// Output: supposed to be ['Alice', 'John']
// The alert will say: ReferenceError: smth is not defined

const original = {
    name: "Alice",
    address: {
        city: "New York",
        zip: "10001",
    },
}
function deepClone(obj) {
    try {
        return JSON.parse(JSON.stringify(obj))
    }
    catch (err) {
        alert(err)
    }
}
const cloned = deepClone(original)
console.log(cloned)
// Output: { name: 'Alice', address: { city: 'New York', zip: '10001' } }


let i = 0;
setTimeout(() => alert(i), 100);
for (let j = 0; j < 10000000; j++) {
    i++;
}
// Output: 10000000


// Create a function that displays a random quote from an array every 2 seconds.

let arr = [1, 2, 3, 4, 5]
let func = function (arr, interval) {
    let timer = setInterval(() => {
        let index = Math.floor(Math.random() * arr.length)
        console.log(arr[index])
    }, interval)
    return () => clearInterval(timer)
}
let stopTimer = func(arr, 1000)
setTimeout(stopTimer, 10000)

// OR

let arr = [1, 2, 3, 4, 5];
function func(arr, interval) {
    let timer = setInterval(() => {
        let index = Math.floor(Math.random() * arr.length);
        console.log(arr[index]);
    }, interval);
    return () => clearInterval(timer)
}
let stopTimer = func(arr, 500)
setTimeout(() => {
    stopTimer()
    alert("finished")
}, 3000)

// OR

function randomQuote(quotes, interval) {
    let timer = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * quotes.length)
        console.log(quotes[randomIndex])
    }, interval)

    return () => clearInterval(timer)
}
let quotes = ["hey", "you", "come", "here"]
let stopTimer = randomQuote(quotes, 2000)
setTimeout(() => {
    stopTimer()
    alert("finished")
}, 10000)

// Create a countdown timer that starts from a specified number of seconds and logs the remaining time to the 
// console every second. When the timer reaches zero, it should stop and display "Time's up!"

function countdown(time, interval) {
    let timing = setInterval(() => {
        console.log(time);
        time--;

        if (time < 0) {
            clearInterval(timing);
            console.log("Time's up");
        }
    }, interval)
}
countdown(10, 1000)

//OR

let count = 10;
const timer = setInterval(() => {
    console.log(count);
    count--;
    if (count === 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }
}, 1000)

//OR

let countDown = 10;
function countDownTimer() {
    countDown--;
    if (countDown >= 0) {
        console.log(countDown);
    } else {
        clearInterval(id);
    }
}
var id = setInterval(countDownTimer, 1000);

// Simulate a typewriter effect. 
// Input: A string and a delay in milliseconds between each character.
// Output: Log each character to the alert one at a time.

function typewriterEffect(text, delay) {
    let index = 0
    function printChar() {
        if (index < text.length) {
            console.log(text[index])
            index++
            setTimeout(printChar, delay)
        }
    }
    printChar()
}
typewriterEffect("Hello!", 500)

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it. 
function delay(ms) {
    let p = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("anything"), ms)
    })
    return p
}
delay(3000).then(() => alert("runs after 3 seconds"))

// Create a promise that resolves after 2 seconds with the message "First step completed". 
// Chain it with a second promise that resolves after 3 seconds with the message "Second step completed", 
// and a third promise that resolves after 1 second with the message "Third step completed". Log the output of each promise in the console. 

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("First step completed"), 10000)
})
    .then((result) => {
        console.log(result)
        setTimeout(() => console.log("Second step completed"), 3000)
    })
    .then(() => setTimeout(() => console.log("Third step completed"), 3000))

// Create a promise that resolves with an object { name: "John" }. In the next .then() block, access the name property from 
//the object and return it to the next .then() block, which will be executed by error (name not found), in the next catch block show the error. 

let promise = new Promise((resolve, reject) => {
    resolve({ name: "John" })
})
    .then((res) => {
        return (Object.values(res))
    })
    .then((res) => {
        console.log(res)
        throw new Error("name not found")
    })
    .catch((err) => alert(err))

let promise = new Promise((resolve, reject) => {
    resolve({ name: "John" })
})
    .then((res) => {
        return (res.name)
    })
    .then((res) => {
        console.log(res)
        throw new Error("name not found")
    })
    .catch((err) => alert(err))


fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(response => response.forEach(element => console.log(element.name.common)))

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(response => response.results)
    .then(response => {
        console.log(response[0].gender)
        console.log(response[0].name.first)
        console.log(response[0].location.country)
    })

fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true')
    .then(response => response.json())
    .then(response => {
        console.log(`Time zone is ${response.timezone}`)
        console.log(`Time is ${response.current_weather_units.time}`)
        console.log(`Temperature is ${response.current_weather_units.temperature}`)
        console.log(`Wind speed is ${response.current_weather.windspeed}`)
    })

const request1 = new Promise((resolve) =>
    setTimeout(() => resolve("Request 1 completed"), 5000),
)
const request2 = new Promise((resolve) =>
    setTimeout(() => resolve("Request 2 completed"), 2000),
)
const request3 = new Promise((resolve) =>
    setTimeout(() => resolve("Request 3 completed"), 3000),
)
function requests() {
    Promise.all([request1, request2, request3]).then((result) =>
        console.log(result),
    )

    Promise.any([request1, request2, request3]).then((result) =>
        console.log(result),
    )
}
requests()


async function loadJson(url) {
    let result = await fetch(url)
    if (result.status == 200) {
        let resultJSON = await result.json()
        return resultJSON
    } else {
        throw new Error(result.status)
    }
}
loadJson("https://javascript.info/no-such-user.json").catch(alert)





function createFrame(names) {
    const width = Math.max(...names.map(name => name.length)) + 4;
    const border = '*'.repeat(width);
    const lines = names.map(name => `* ${name.padEnd(width - 4)} *`);
    let result = [border, ...lines, border].join('\n')
    return result
}
createFrame(['midu', 'madeval', 'educalvolpz'])





function organizeInventory(inventory) {
    let result = {}

    for (let item of inventory) {
        if (!result[item.category]) {
            result[item.category] = {}
        }
        if (!result[item.category][item.name]) {
            result[item.category][item.name] = 0
        }

        result[item.category][item.name] += item.quantity
    }

    return result
}
const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]
organizeInventory(inventory)




async function displayUser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    let result = await response.json()
    console.log(result.name)
}
displayUser()





const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]
function organizeShoes(shoes) {
    let pairs = []
    let visited = []
    shoes.forEach((item1) => {
        shoes.forEach((item2) => {
            if (item1 !== item2 && item1.size === item2.size && item1.type !== item2.type && !visited.includes(item1) && !visited.includes(item2)) {
                pairs.push([item1.size])
                visited.push(item1, item2)
            }
        })
    })
    return pairs
    console.log (pairs)
}
organizeShoes(shoes)


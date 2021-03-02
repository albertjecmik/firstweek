const myAge = 19;
//this variable states my age

let earlyYears = 2;
//this variable temporarly sets value to earlyYear

earlyYears *= 10.5;
//changes variable early year * 10.5

console.log(earlyYears);
//print earlyYears

let laterYears = myAge - 2;
//cratees a variable called laterYears by substracting 2 from myAge

laterYears *= 4;
//changes variable 4 times every time a number is added

console.log(laterYears);
//prints out laterYears

let myAgeinDogYears = earlyYears + laterYears;
//creates a new variable which is the combination of EY and LY

let myName = 'Albert Jecmik'.toLowerCase();
//creates a variable myName, that takes a string and turns it into all lower case letters

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} years old in dog years.`);
//prints out the statement and substitutes myName, myAge and myAgeinDogYears into the statement


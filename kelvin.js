const kelvin = 293;
//this makes a constant for kelvins
const celsius = kelvin - 273;
//this converts from kelvin to celsius
let fahrenheit = celsius * (9 / 5) + 32;
//from fahrenheit to celsius
fahrenheit = Math.floor(fahrenheit);
//converts from decimal to whole number (rounded down)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
let raceNumber = Math.floor(Math.random() * 1000);

let early = true;

const age = 21;
// sets variables
if (early && age > 18){
  raceNumber += 1000
}
// adds 1000 to raceNumber if the person registered early and is over 18
if (age > 18 && early){
  console.log(`You will run at 9:30 am and your number is: ${raceNumber}. Have fun!`)
}
// prints the statement if the person is over eighteen and registered early
// adds the race number to the print
  else if (age > 18 && !early){
    console.log(`You will run at 11:00 am and your number is: ${raceNumber}. Have fun!`)
  }
  // prints the statement if the perosn is over 18 but did not register early
  // adds the race number to the statement
  else if (age < 18){
    console.log(`You will race at 12:30 am and your number is: ${raceNumber}. Have fun!`)
  }
  //prints the statement if the person is younger than 18
  // adds the race number to the statement
  else {
    console.log('Go see the registration desk.')
  }
  //this is printed mainly for people who are exactly 18

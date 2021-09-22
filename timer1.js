const numbers = process.argv.slice(2);

for (const input of numbers) {
  //console.log(input) to test
  if (input <= -1) {
    console.log("Negative number, no beep!");
  }
  else if (isNaN(input)) {
    console.log("Not a Number, no beep!");
  } else {
  setTimeout(() => {
    console.log("beep!")}
  , 
  input * 1000)
  }  
};
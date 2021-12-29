//   1          2       3
for (let i = 0; i < 10; i++) { // i++ === i += 1
  console.log(i);
}

/*
  1. Creating a variable
  2. Setting a stopping condition
  3. Increment expression
*/

for (let i = 0; i <= 20; i+=2) {
  console.log(i);
}


//Challenge: using a for loop, count from 10 to 0, going down by 1
for (let i = 10; i >= 0; i--) { // i-- === i-=1
  console.log(i);
}

//Challenge: using a for loop, count from 0, going down by 2's to -24

for (let i = 0; i >= -24; i-=2) {
  console.log(i);
}

// Challenge: using a for loop, go through a name and display each letter individually
let myName = "Ian";
//            012345

for (let i = 0; i < myName.length; i++) {
  console.log(myName[i]);
}


// Challenge: Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i; // sum = sum + i
  console.log('Inside:',sum);
}
console.log('Outside:',sum);
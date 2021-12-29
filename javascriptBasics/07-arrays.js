// Arrays
// Arrays are containers that hold lists of items
// denoted by [] (Square Brackets)
// can hold multiple data types

/*
  let list = {
    0: 'orange',
    1: 'banana',
    2: 'oreos'
  }
*/

//            0           1         2
let list = ['orange', 'banana', 'oreos'];
console.log(list);
console.log(list[1]);
console.log(typeof list[1]);
console.log(typeof list);


let names = ['Sage', 'Elon', 'Rosemary', 'Kaysen', 22, true, ['Ian', 'Alice', 'Aaron']];
console.log(names[2]);
console.log(names[0]);
// print out the name 'Aaron' from the names array
console.log(names[6][2]);
// let temp = names[6];
// console.log(temp[2]);


// .toString()
// toString method will turn all elements in an array into a string
const array = [10, 'student', 'cake', -78, 'zebra'];
console.log(array);
console.log(array.toString());
console.log(typeof array.toString());


// .length
// tells us the length of an array (how many things are in it)
const array = [10, 'student', 'cake', -78, 'zebra'];
console.log(array.length);


// .shift()
// the shift method removes the first element from an array and returns it
// this method changes the length of an array
const foods = [
  { name: 'bread', price: 100 },
  { name: 'beef', price: 200 },
  { name: 'mint', price: 10 },
  { name: 'shrimp', price: 5 },
  { name: 'ketchup', price: 500 },
  { name: 'bell pepper', price: 50 }
];
// 1
console.log('Before:', foods);
// 2
const firstObject = foods.shift();
// 3
console.log('After:', foods);
// 4
console.log('Shifted items:', firstObject);

/*
  1 => In the before, we see the entire array as we created it
  2 => We call the .shift() method and remove the first item
  3 => In the after, we see the array is missing what was the first item in the before
  4 => We see the previous first item from before is now in a variable
*/


// .unshift()
// unshift will add a value at the beginning of an array
const foods = [
  { name: 'bread', price: 100 },
  { name: 'beef', price: 200 },
  { name: 'mint', price: 10 },
  { name: 'shrimp', price: 5 },
  { name: 'ketchup', price: 500 },
  { name: 'bell pepper', price: 50 }
];
console.log('Before:', foods);
foods.unshift({ name: 'popcorn', price: 200000 });
console.log('After:', foods);


// .pop()
// remove the last item in an array and return the removed value
const foods = [
  { name: 'bread', price: 100 },
  { name: 'beef', price: 200 },
  { name: 'mint', price: 10 },
  { name: 'shrimp', price: 5 },
  { name: 'ketchup', price: 500 },
  { name: 'bell pepper', price: 50 }
];
console.log('Before:', foods);
const lastObject = foods.pop();
console.log('After:', foods);
console.log('Popped Item:', lastObject);


// .push()
// add an item to the end of an array
const foods = [
  { name: 'bread', price: 100 },
  { name: 'beef', price: 200 },
  { name: 'mint', price: 10 },
  { name: 'shrimp', price: 5 },
  { name: 'ketchup', price: 500 },
  { name: 'bell pepper', price: 50 }
];
console.log('Before:',foods);
foods.push({ name: 'avocado', price: -50 });
console.log('After:', foods);


// .reverse()
const foods = [
  { name: 'bread', price: 100 },
  { name: 'beef', price: 200 },
  { name: 'mint', price: 10 },
  { name: 'shrimp', price: 5 },
  { name: 'ketchup', price: 500 },
  { name: 'bell pepper', price: 50 }
];
console.log(foods.reverse());


// .slice()
// allows us to grab a specific section of our array
const foods = [
  { name: 'bread', price: 100 },
  { name: 'beef', price: 200 },
  { name: 'mint', price: 10 },
  { name: 'shrimp', price: 5 },
  { name: 'ketchup', price: 500 },
  { name: 'bell pepper', price: 50 }
];
// the array starting from index 2
console.log(foods.slice(2));
// the array starting from index 2, ending before index 4
console.log(foods.slice(2,4));


// .splice()
// remove or replace items in an array starting at a certain position
const months = ['Jan', 'Mar', 'Apr'];

// splice has 3 "parameters" or option to fill in
// 1: the index to start at
// 2: the number of items to remove
// 3 and up: the new items to add

months.splice(1, 0, 'Feb');
console.log(months);

months.splice(2, 2, 'March', 'April');
console.log(months);


// .join()
// this will combine each item in the array into a string
const greetings = ['Hi', 'Hello', 'Welcome', 'Howdy']
console.log(greetings.toString());
console.log(greetings.join());
console.log(greetings.join(' how are you doing? '))
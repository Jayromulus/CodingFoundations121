let officeCharacter = "Michael";

switch (officeCharacter) {
  case "Michael":
    console.log("My mind is going a mile an hour");
    break;
  case "Dwight":
    console.log("Perfectenschlag");
    break;
  case "Jim": // if(officeCharacter === "Jim")
    console.log("Bears. Beets. Battlestar Galactica.");
    break;    // }
  default:    // else
    console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}


// String Interpolation
let officeCharacter = "Michael";
console.log("I'm sorry, " + officeCharacter + ", but do I know you?")

let neighbor = "Penny";
// console.log("*knock knock knock*" + neighbor + "*knock knock knock*" + neighbor + "*knock knock knock*" + neighbor)

console.log(`*knock knock knock* ${neighbor} *knock knock knock* ${neighbor} *knock knock knock* ${neighbor}`)

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessertType = "CAKE";

switch (dessertType.toLowerCase()) {
  case "pie":
    console.log("Pie, Pie, me oh my!");
    break;
  case "cake":
    console.log("Cake is great!");
    break;
  case "ice cream":
    console.log("I scream for ice cream!");
    break;
  default:
    console.log("Not on the menu.");
}


let num = 7;

switch (true) {
  case (num < 0): // num < 0 -> -40 < 0 -> true
    console.log('Negative Number');
    break;
//  7 >= 0 -> true  &&   7 < 10 -> true
  case (num >= 0 && num < 10):
    console.log('Single Digit Number');
    break;
  
}
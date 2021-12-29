let student = {
  name: 'Rick',
  awesome: true,
  degree: 'Javascript',
  week: 2
};

for (item in student) {
  console.log(item);
  console.log(student[item]);
}


/*
  {
    0': 'tabby',
    1': 'british shorthair',
    2': 'burmese',
    3': 'rag doll'
  }
*/
//                  0             1                 2           3
const catArray = ['tabby', 'british shorthair', 'burmese', 'rag doll'];
for (cat in catArray) {
  console.log(cat);
  console.log(catArray[cat]);
}


// Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
// hint: remember a string is technically an array to JS

let myName = "jeROmE";
let casedName;

for (item in myName) {
  // console.log(item, ':', myName[item]);
  if (item === '0') {
    casedName = myName[item].toUpperCase();
  } else {
    casedName += myName[item].toLowerCase();
  }
}

console.log(casedName);
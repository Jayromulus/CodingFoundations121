let student = {
  name: 'Jeremy',
  awesome: true,
  degree: 'JavaScript',
  week: 1
};

for (item of student) {
  console.log(item);
}


let dogArray = ['Plott Hound', 'Belgian Shepherd', 'Husky', 'Lab', 'Poodle'];

for (breed of dogArray) {
  console.log(breed);
}

let myName = 'Jerome';

for (letter of myName) {
  console.log(letter);
}



// Challenge: print out each superhero's name using a for loop, for in loop, and for of loop (remember if you get an infinite loop, right click the output and click 'Stop Code Run')
const superheroes = ['Spiderman', 'Batman', 'Wonderwoman', 'Zantanna', 'Captain Boomerang', 'Omniman'];
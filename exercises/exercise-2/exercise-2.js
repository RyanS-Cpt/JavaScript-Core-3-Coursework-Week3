let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Hedwig",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Crookshanks",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Fawkes",
    occupation: "Teacher",
  },
];

//Display Name and Surname function
function displayCharacterName (ObjArr){
  for (let character of ObjArr){

    if(character.house === "Gryffindor"){

    let {firstName, lastName} = character;
    console.log(firstName, lastName);

    }

  }
}
/* Study session solution
hogwarts.filter(({house}) => house === "Gryffindor")
.forEach(({firstName, lastName}) => console.log(firstNAme, lastName));
*/

// FUnction to display teacher's who have pets
function displayTeachersWithPets(objArr){
  for (let character of objArr){
    if(character.occupation === "Teacher" && character.pet){
      let {firstName, lastName} = character;
      console.log(firstName, lastName);
    }
  }
}
/*
Study session solution
hogwarts.filter(({occupation, pet})=> occupation === "Teacher" && pet)
.forEach(({firstName, lastName}) => console.log(firstName, lastName));
 */

displayCharacterName(hogwarts); //Done
console.log(); //Just some space
displayTeachersWithPets(hogwarts);
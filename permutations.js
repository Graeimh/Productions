/*  ///////////////////////////////////////////////////
    /1 Exercice permutations
*/  ///////////////////////////////////////////////////

let a = 1, b = 2;

console.log("//1");
console.log("BEFORE");
console.log(a);
console.log(b);

[a,b]=[b,a];

console.log("AFTER");
console.log(a);
console.log(b);

/*  ///////////////////////////////////////////////////
    /2 Exercice assigner par décomposition
*/  ///////////////////////////////////////////////////

const student = {
    name: "Alan",
    notes: [10, 16, 17],
    average: null,
};

// TODO ...
student.average = student.notes.reduce((p, c)=> p + c, 0)/student.notes.length;
const { name : na, notes : no, average : av} = student;
  
// constantes
console.log("//2");
console.log(na, no, av.toFixed(2));

/*  ///////////////////////////////////////////////////
    /3  Exercice iterate destructuring
*/  ///////////////////////////////////////////////////

const students = [
    {
      name: "Alan",
      family: {
        mother: "Yvette",
        father: "Paul",
        sister: "Sylvie",
      },
      age: 35,
    },
    {
      name: "Bernard",
      family: {
        mother: "Martine",
        father: "Cécile",
        sister: "Sophie",
      },
      age: 55,
    },
];

console.log("//3");
for (stud of students){
    const { name, family: {sister}} = stud;
    console.log("Nom :", name);
    console.log("Soeur: ", sister);
}


/*  ///////////////////////////////////////////////////
    /4 Exercice push value
*/  ///////////////////////////////////////////////////

const str1 = ["one", "two"];
const str2 = ["three", "four"];

const strMerge = [ ...str1, ...str2 ];
console.log("//4");
console.log(strMerge);

/*  ///////////////////////////////////////////////////
    /6 Challenge Exercice accumulator
*/  ///////////////////////////////////////////////////


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// retourne la première valeur du tableau en la supprimant du tableau

function accumulator(numbers, acc = 0) {
    if (numbers.length){
        acc += numbers.shift();
        return accumulator(numbers, acc);
    } else {

        return acc;
    }
}

console.log(accumulator(numbers)); // doit retourner 55


/*  ///////////////////////////////////////////////////
    /7 Challenge deep copy
*/  ///////////////////////////////////////////////////

const studentsB = [
    {
      name: "Alan",
      family: {
        mother: "Yvette",
        father: "Paul",
        sister: "Sylvie",
      },
      age: 35,
    },
    {
      name: "Bernard",
      family: {
        mother: "Martine",
        father: "Cécile",
        sister: "Sophie",
      },
      age: 55,
    },
  ];

const clone = JSON.parse(JSON.stringify(studentsB));
studentsB[1].name = "Johnny";

console.log(studentsB);
console.log(clone);

interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Byeongmin Jeon",
  age: 24,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, and ${person.gender} `;
};

console.log(sayHi(person));

export {};

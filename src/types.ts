// Boolean
let b: boolean = true;

// Number
let num: number = 1 + 0b1 + 0o1 + 0x1;

// String
const hello: string = 'Hello';
const world: string = 'World';
const helloWorld = `
  ${hello}
  ${world}
`;

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

let someNumber: number | null = null;

const upperCaseFirstLetter = (str: string | null) => {
  if (str) {
    return str[0].toUpperCase() + str.slice(1);
  }
};

upperCaseFirstLetter(null);

console.log(upperCaseFirstLetter('hello'));

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;

let myObj1: object = {};
let myObj2: object = [];
let myObj3: object = new Map();

// Void
const log = (message: string): void => {
  console.log(message);
};

// Array
let array1: string[] = ['x', 'y'];
let array2: Array<string> = array1;

// Tuple
let tuple: [string, number] = ['str', 1];

// Enum
enum Color {
  Red = 'red',
  Green = 10,
  Blue = 99,
}

let myFavoriteColor: Color = Color.Blue;

console.log(Color.Red, Color.Green, Color.Blue);
console.log(Color[99]);

// Any
let ANY: any;
ANY = 'a string';
ANY = 1;
ANY = true;

// Type Assertions
const email = document.getElementById('email');

if (email) {
  email.addEventListener('change', e => {
    const input = e.currentTarget as HTMLInputElement;

    console.log(input.value);
  });
}

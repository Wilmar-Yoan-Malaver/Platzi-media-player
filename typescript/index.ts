console.log('Hello TypeScript');

function add(a: number, b: number) {
  return a + b;
}

const sum = add(2, 3);
// Boolean
let muted: boolean = true;
muted = false;
//si tratamos de reasignar un valor a esta de la siguiente forma genera un error
// muted = "Callado"; typo_string

//Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String

let nombre: string = 'Yoan';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['isable', 'Nicole', 'Raul'];
people.push('9000');

//Array con strings y numbers

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9000);

//Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Verde;
console.log(`Mi color Favorito es ${colorFavorito}`);

//Any
let comodin: any = 'Joker';
comodin = { type: 'wildcard' };

//object
let someObject: object = { type: 'wildcard' };

//Funciones
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

//funciones que regresan otras funciones

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);
('');
// function fullName(firstName: string, lastName: string = 'Smith): string { Valor por omision 'smith'
function fullName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

//const yoan = fullName('Yoan', 'Malaver');
const yoan = fullName('Yoan');
console.log(yoan);

//interfaces

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo,
};

function area(r: Rectangulo) {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};
console.log(rect.toString());

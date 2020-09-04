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

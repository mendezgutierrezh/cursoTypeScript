let mensaje: string = "Hola Mundo";

mensaje = "Chanchito feliz";
console.log(mensaje);

mensaje = "chao mundo";
console.log(mensaje);

console.log(typeof []);
/* 
Tipos de JS
Number
String
Boolean
null
object
function
Tipos de TS
any => no recomendable de usar
unknow
never
arrays
tuplas
Enums
tipos Inferidos
*/

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos = true; //===> tipo de dato inferido

//====> Variable de tipo any, no es recomendable usar, ya que pierde esl sentido de utilizar TS <====/

let mivariable;
mivariable = "Chanchito feliz";
mivariable = "34";

function chanchitoFeliz(config: any) {
  return config;
}

//====> Arreglos
let animales: string[] = ["chanchito", "feliz", "felipe"];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];
//animales.map(x => x.) ====> El auto completado de typescript suguiere metodos dle tipo de dato

//======> Tuplas

let tupla: [number, string] = [1, "Chanchito feliz"];
let tupla2: [number, string[]] = [1, ["chanchito feliz", "chanchito felipe"]];

//====> Enums

const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";

//PascalCase
enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl",
}

const variable1 = Talla.ExtraGrande;
console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;

//====> Objetos (definicion)

type Persona = {
  readonly id: number; //====> readonly indica que no se puede modificar esta propiedad
  nombre: string;
  talla: Talla;
};

type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona1 = {
  readonly id: number;
  nombre: string;
  talla: Talla;
  direccion: Direccion;
};

const objeto: Persona = {
  id: 1,
  nombre: "Hola Mundo",
  talla: Talla.Grande,
};

const objeto1: Persona1 = {
  id: 1,
  nombre: "Hola Mundo 1",
  talla: Talla.Mediana,
  direccion: {
    numero: 1,
    calle: "Las Huertas",
    pais: "Chile",
  },
};

const arr: Persona[] = [];

//=====> Funciones

const fn = () => {}; //=> funcion con retorno void, no esta devolviendo nada
function fun1() {}

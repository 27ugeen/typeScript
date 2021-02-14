// Примитивные типы данных

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.1;
const num: number = 3e10;

const message: string = 'Hello TypeScript';

// ===============

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13, 21];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13, 21]; //Дженерик тип

const words: string[] = ['Hello', 'TypeScript'];

// Tuple - массив из разных типов данных
const contact: [string, number] = ['Gin', 12345];

// Any
let variable: any = 42;
// ..
variable = 'string';
variable = [];

// ===
// пустой тип для функции - функция ничего не  возвращает указываем void
const sayMyName = (name: string): void => console.log(name);
sayMyName('Hello TypeScript');

//  Never
const throwError = (message: string): never => {
  throw new Error(message);
};

const infitite = (): never => {
  while (true) {}
};

// Type - можем создавать свои именованые типы для раработки
type Login = string;

const login: Login = 'admin';
// const login2: Login = 2;

type ID = number | string; //нужны только на этапе разработки, исчезают при компиляции
const id1: ID = 12345;
const id2: ID = '12345';
// const id3: ID = true;

type someType = string | null | undefined;
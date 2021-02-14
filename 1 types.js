// Примитивные типы данных
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.1;
var num = 3e10;
var message = 'Hello TypeScript';
// ===============
var numberArray = [1, 1, 2, 3, 5, 8, 13, 21];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13, 21]; //Дженерик тип
var words = ['Hello', 'TypeScript'];
// Tuple - массив из разных типов данных
var contact = ['Gin', 12345];
// Any
var variable = 42;
// ..
variable = 'string';
variable = [];
// ===
// пустой тип для функции - функция ничего не  возвращает указываем void
var sayMyName = function (name) { return console.log(name); };
sayMyName('Hello TypeScript');
//  Never
var throwError = function (message) {
    throw new Error(message);
};
var infitite = function () {
    while (true) { }
};
var login = 'admin';
var id1 = 12345;
var id2 = '12345';

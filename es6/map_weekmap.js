let map = new Map();


let keyString = "string",
    keyObject = {},
    keyFunction = function() {};

map.set(keyString, 'Значение для ключа строки');
map.set(keyObject, 'Значение для ключа объекта');
map.set(keyFunction, 'Значение для ключа функции');

console.log(map.size);//3

console.log( map.get(keyString) ); //Значение для ключа строки
console.log( map.get(keyObject) ); //Значение для ключа объекта
console.log( map.get(keyFunction) ); //Значение для ключа функции


let person = {
    name: "Bob",
    age: 20
}

let weak = new WeakMap();
//weak.set('a','b'); //TypeError: Invalid value used as weak map key
let o1 = {},
    o2 = function(){},
    o3 = person;

weak.set(o1, 37);
weak.set(o2,'qwerty');
weak.set(o3, undefined);

console.log( weak.get(o2) ); //querty
console.log(weak.has(o1)); //true
weak.delete(o1);
console.log(weak.has(o1)); //false
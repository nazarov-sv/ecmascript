let obj = {x:'yyy', y:1};

console.log(Object.values(obj)); //[ 'yyy', 1 ]
console.log(Object.entries(obj)); //[ [ 'x', 'yyy' ], [ 'y', 1 ] ]

let obj2 = ['e','s','8'];
console.log(Object.values(obj2));//[ 'e', 's', '8' ]
console.log(Object.entries(obj2));//[ [ '0', 'e' ], [ '1', 's' ], [ '2', '8' ] ]

let obj3 = {10:'x', 1:'yyy', 3:'zzz'};
console.log(Object.values(obj3)); //[ 'yyy', 'zzz', 'x' ]
console.log(Object.entries(obj3)); //[ [ '1', 'yyy' ], [ '3', 'zzz' ], [ '10', 'x' ] ]
console.log(Object.values('es8')); //[ 'e', 's', '8' ]
console.log(Object.entries('es8')); //[ [ '0', 'e' ], [ '1', 's' ], [ '2', '8' ] ]

let obj4 = {
    get es8(){
        return 'es8';
    }
}

console.log(Object.getOwnPropertyDescriptor(obj4,'es8'));
// { get: [Function: get es8],
//     set: undefined,
//     enumerable: true,
//     configurable: true }
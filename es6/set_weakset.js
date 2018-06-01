
let set = new Set([1,1,3,3,5,6]);
console.log(set.size); //4
console.log(set.has(1)); // true
set.add('qwerty');
set.add({a:1, b:2});

set.forEach( item => {
    console.log(item);
});
// 1
// 3
// 5
// 6
// qwerty
// { a: 1, b: 2 }


for (let item of set)
    console.log(item);
// 1
// 3
// 5
// 6
// qwerty
// { a: 1, b: 2 }
    

let weak = new WeakSet();
let obj = {},
    obj2 = {};

weak.add(obj);
console.log(weak.has(obj2)); //false

weak.add(obj2);
console.log(weak.has(obj2));//true
weak.delete(obj2);
console.log(weak.has(obj2));//false


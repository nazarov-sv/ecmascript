let arr = [1,2,3,4];
let itr = arr[Symbol.iterator]();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }


function *getNumbers(){
    let n = 1;
    while(true){
        yield n++;
    }
}

let nummbers = getNumbers();

console.log(nummbers.next());
console.log(nummbers.next());
console.log(nummbers.next());
console.log(nummbers.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }

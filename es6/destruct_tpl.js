function getArray(){
    return [1,2,3];
}

let arr = getArray();
let [a,b,c] = getArray();

console.log(arr); //[ 1, 2, 3 ]
console.log(a,b,c); // 1 2 3

function getObject()
{
    return {
        x:1,
        y:2,
        z:3
    }
}

let {x:d, y:e, z:f} = getObject();
console.log(d,e,f); //1 2 3
let {x,y,z} = getObject();
console.log(x,y,z); //1 2 3


let username = "Bob";
let str = `Hello, ${username}`;
console.log(str); // Hello, Bob
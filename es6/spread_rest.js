

// Spread (разбивка на индивидуальные элементы)
function print(x,y,z){
    console.log(x,y,z); // 1 2 3
}

let arr = [1,2,3];
print(...arr);

// Rest (объединение набора)

function print2(...args){
    console.log(args); //[ 1, 2, 3, 4, 5 ]
}

print2(1,2,3,4,5);
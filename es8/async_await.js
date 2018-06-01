function getPromise(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('es8')
        },2000);
    });
}

async function sayHello() {
    const externalPromise = await getPromise();
    console.log(`Hello ${externalPromise}`);
}

console.log('Before function');
sayHello();
console.log("After function");



// Before function
// After function
// Hello es8
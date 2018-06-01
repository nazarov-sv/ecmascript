
//Стандартная функция 
let sum1 = function(a,b){
    return a+b;
}

// Стрелочная функция
let sum2 = (a,b) => a+b;

let arr = [1,2,3,4,5,6];

let mulArr = arr.map(item => {
    return item*2;
})

console.log(mulArr); // [ 2, 4, 6, 8, 10, 12 ]



// Стандартная функция
function Car(){

    var self = this;
    this.age = 1;

    setInterval(function(){
        self.age++;
        console.log(self.age);
    },1000);
}


let c = new Car();

//Стрелочная функция
function Car(){
    this.age = 1;

    setInterval(()=>{
        this.age++;
        console.log(this.age);
    },1000);
}
let c = new Car();
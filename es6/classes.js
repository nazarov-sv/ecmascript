class Task{


    constructor(name){
        this.id = 1;
        this.name = name
    }

    getInfo(){
        console.log(`Task ${this.id}: ${this.name}`);
    }

    static load(){
        console.log("Loading Tasks");
    }

}

let task = new Task("Test task");
console.log(typeof task); //object
console.log(typeof Task); //function
task.getInfo(); //Task 1: Test task
Task.load(); //Loading Tasks

class Car{
    constructor(){
        console.log('Create new Car');
    }

    getInfo(){
        console.log('Show car info');
    }

    getVin(){
        console.log(this.vin);
    }
}

class Lada extends Car{
   
    constructor(){
        super();
        console.log('Create new Lada');
        this.vin = '123456';
        super.getInfo();
        super.getVin();
    }
}


let c = new Lada();
// Create new Car
// Create new Lada
// Show car info
// 123456
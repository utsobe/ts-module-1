"use strict";
// interface
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    ;
    startEngine() {
        console.log('I am starting engine');
    }
    stopEngine() {
        console.log('I am stopping engine');
    }
    move() {
        console.log('I am moving car');
    }
    test() {
        console.log('I a for testing purpose only');
    }
}
const vehicle1 = new Car('Car', 'Toyota', 20000);
// abstract clas
// abstract class Vehicle {
//     constructor(public name: string, public brand: string, public model: number) { };
//     abstract startEngine(): void;
//     abstract stopEngine(): void;
//     move(): void {
//         console.log('I am moving car');
//     }
//     test() {
//         console.log('I a for testing purpose only');
//     }
// }
// class Car extends Vehicle {
//     startEngine(): void {
//         console.log('I amr staring engine...');
//     }
//     stopEngine(): void {
//         console.log('I amr stopping engine...');
//     }
// }

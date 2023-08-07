// interface

// interface IVehicle {
//     name: string;
//     model: string;
// }

// const vehicle: IVehicle = {
//     name: 'Car',
//     model: '2000',
// }

interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Car implements Vehicle {

    constructor(public name: string, public brand: string, public model: number) { };

    startEngine(): void {
        console.log('I am starting engine');

    }
    stopEngine(): void {
        console.log('I am stopping engine');

    }
    move(): void {
        console.log('I am moving car');

    }
    test() {
        console.log('I a for testing purpose only');

    }
}

const vehicle1 = new Car('Car', 'Toyota', 20000)



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

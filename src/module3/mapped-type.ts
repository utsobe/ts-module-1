// const arrayofNumbers = [1, 2, 3]; // make string array

// const arrayOfStrings = arrayofNumbers.map(number => number.toString());

// console.log(arrayOfStrings);

// type Volume = {
//     height: number;
//     width: string;
//     depth: number;
// };

// type Area<T> = {
//     readonly [key in keyof T]: T[key]; //
// }

// const area1: Area<{ height: number, width: string }> = { height: 10, width: '10' };

// area1.height = 18

// type AreaString = {
//     height: string;
//     width: string;
// }

// type AreaReadOnly = {
//     readonly height: number;
//     readonly width: number;
// }

// const rectangularArea: AreaReadOnly = {
//     height: 10,
//     width: 12,
// }

// // rectangularArea.height = 12

// type A = AreaNumber['height'] // look up types

// type B = keyof AreaNumber; // 'width' | 'height'

// // const obj = {
// //     name: 'Persian'
// // };
// // obj['name']

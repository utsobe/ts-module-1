"use strict";
let emni;
emni = 'Next level web development';
emni.length;
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is ${value}`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram('1000');
try {
}
catch (e) {
    console.log(e.message);
}

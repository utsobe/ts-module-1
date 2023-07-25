// normal function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 5, 7]

const newArray = arr.map((elem: number) => elem * elem);
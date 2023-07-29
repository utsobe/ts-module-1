const searchName = (value: string | null) => {
    if (value === null) {
        console.log('There is nothing to search');
    } else {
        console.log('Searching...');
    }
}

searchName(null);

const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3;
        console.log(`My speed is ${convertedSpeed}`);

    }
    if (typeof speed === "string") {
        const [value, unit] = speed.split(' ');

        const convertedSpeed = (parseFloat(value) * 1000) / 3;
        console.log(`My speed is ${convertedSpeed}`);

    } else {
        console.log('There is wrong type');

    }
}

getMyCarSpeed(10);
getMyCarSpeed('10 kmh');
getMyCarSpeed(true);

function throwError(message: string): never {
    throw new Error(message);
}

throwError('Error hoyeche bhai');

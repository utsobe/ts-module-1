let emni: any;

emni = 'Next level web development';

<string>emni.length;

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is ${value}`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram('1000') as string;

type CustomErrorType = {
    message: string;
}

try {

} catch (e) {
    console.log((e as CustomErrorType).message);

}
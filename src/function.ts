// normal function

function add(num1: number, num2: number = 10): number {
    return num1 + num2;
}

add(30, 50);

const myFriends = ['chandler', 'joey', 'ross'];
const newFriends = ['monica', 'rachel', 'phobe'];
const myBestFriend = {
    fullName: 'Abdul Bashar',
    age: 24,
}

const [bestfriend] = myFriends;
const { fullName: myFullName } = myBestFriend;

myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter

const greetFriends = (...friends: string[]): void => friends.forEach((friend) => console.log(`Hi ${friend}`)
);

greetFriends('kashem', 'hashem', 'gashem', 'lahsem', 'bangla bhai', 'English bhai',);

// array and object destructuring



const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 5, 7]

const newArray = arr.map((elem: number) => elem * elem);
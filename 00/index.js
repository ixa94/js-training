const name = 'Insaf';
const surename = 'Gilmanov';
let age = 24;

alert('"Hello, world! Встречай, JS! Я ' + name + ' ' + surename + ',и мне ' + age + '.Рад встрече!"');


const user = {
    name: "Anton",
    height: 180,
    age:23,
    smokes:"no",
    friends:["Igor","Artem","Egor"]
};

console.log(user.height);

user.canSingSongs = 'Yes';

user.friends = null;
console.log(user);
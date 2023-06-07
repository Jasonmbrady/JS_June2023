// const myArr = [10, 12, 5, 3, 6, 20]
// console.log(myArr.sort())
// console.log(myArr)

// const myArr = [1, 2, 3, 4];
// myArr = [];
// const myOtherArr = myArr;
// myOtherArr.pop();
// console.log(myArr)
// let myStr = "Hello";
// let myOtherStr = myStr;
// myStr = "Hi"
// console.log(myOtherStr)
// console.log(myStr)

// var, let, const
function double(num) {
    return 2 * num;
}

const arrowDouble = (num) => {
    return 2 * num;
}

const impliedDouble = (num) => 2 * num;

console.log(impliedDouble(10));


const immutableArr = ["apple", "banana", ["lentils", "beans"], "tomato"];
immutableArr[3] = "peach";
Object.freeze(immutableArr);

const actuallyFruit = [...immutableArr];
// actuallyFruit.pop();
// console.log(actuallyFruit);
// const firstFruit = actuallyFruit[0];
const [fruit1, fruit2, ...otherFruit] = actuallyFruit;
console.log(otherFruit)
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

const {firstName, lastName, ...attributes} = person;
const {email} = person
// console.log(email)
// console.log(firstName)
// console.log(attributes)
let a = 10;
let b = 20;
// let temp = a;
// a = b;
// b = temp;
[a, b] = [b, a];

const person1 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

  const { addresses: [ , address] } = person1;
  const london = address.city
console.log(london);
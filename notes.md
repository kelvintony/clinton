```ts
const firstName: string = 'amarachi';

const userAddress = '';

const number: number = 60;

const stringOrNumber: string | number = 'james';

const isAdmin: boolean = true;

let studentNames: string[];
let studentScores: number[];
studentNames = ['Camney', 'jerermy', 'Natasha'];

let stringOrNumberArray: (string | number)[];
stringOrNumberArray = ['james', 'amaka', 90];

console.log(studentNames);
console.log(stringOrNumberArray);

//!objects without declaring the type
const userDetails = {
  username: 'james',
  age: 29,
  isAdmin: true,
};

userDetails.username = 'cunny';
userDetails.age = 50;

//! objets with types
let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string; // phone number is optonal
};

userObj = {
  username: 'james smth',
  age: 50,
  isAdmin: true,
};

//! An any type - a declare variable that is not assigned a type is given an any type explicitly
let userReg; //* or use let userReg:any
userReg = 'jameey';
(userReg = 89), (userReg = true);

//! Fuctions
// in function you can omit the type
let submitRecord = (): string => {
  return 'management is ready';
};
//
let checkUser = (phoneNos: number, name: string, optionalValue?: number) => {
  return `His name is -- ${name}, having a phone number of ${phoneNos}`;
};
console.log('data', checkUser(9065536637, 'mark twin'));

// passing an object as an argument to a function
let funct = (user: { username: string; age: number; phone: number }) => {
  return `${user.username} ${user.age} ${user.phone}`;
};
// but we can achieve that using Type Aliases

//! Type Aliases - Using custom type
type userType = {
  username: string;
  age: number;
  phone?: number;
};

let betterFunct = (user: userType) => {
  return `${user.age}`;
};

type userType2 = {
  //* use this for type - this is good
  username: string;
  age: number;
  phone?: number;
  theme: 'Light' | 'Dark';
};

let userWithTheme: userType2 = {
  username: 'john',
  age: 78,
  phone: 90644887746,
  theme: 'Light',
};

console.log(userWithTheme);
let nawaOh = ({ username, age, phone, theme }: userType2) => {
  console.log('values2--', { username, age, phone, theme });
};
//check this, its not working
nawaOh({ username: 'mat', age: 67, phone: 9088277263, theme: 'Light' });

//! Interfaces - please only use interface when you want to extend types else use type
interface IUser {
  username: string;
  email: string;
  age: number;
}
// let's asume some of our users are employees

// the employee interface has everything that the Iuser has
interface IEmployee extends IUser {
  employeeId: string;
}

// creating an employee object
const emp: IEmployee = {
  username: 'jemmy',
  email: 'jemmy@gmail.com',
  age: 45,
  employeeId: 'ee4255515-1182',
};
// creating a client object
const client: IUser = {
  username: 'sammy',
  email: 'sammy@gmail.com',
  age: 20,
};

//! Generics
interface IAuthor {
  id: number;
  username: string;
}
interface Icategory {
  id: number;
  title: string;
}
interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | Icategory[];
}
// use generics below if the value of extra will change in the future if you don't know

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const userPost: IPostBetter<String> = {
  id: 1,
  title: 'post title',
  desc: 'post description',
  extra: ['str', 'str2', 'str11'],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}
const userPost2: IPostEvenBetter<{ id: number; username: string }> = {
  id: 1,
  title: 'post title',
  desc: 'post description',
  extra: [
    { id: 1, username: 'mike@gmail.com' },
    { id: 2, username: 'ken@gmail.com' },
  ],
};
//! Or do it this way
const userPost3: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: 'post title',
  desc: 'post description',
  extra: [
    { id: 1, username: 'mike2@gmail.com' },
    { id: 2, username: 'ken2@gmail.com' },
  ],
};
```

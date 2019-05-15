var i = 23;
for(var i=0; i<5; i++){
    console.log(i);
}

console.log(i);

let J = 23;
for(let J=0; J<5; J++){
    console.log(J);
}

console.log( "ES6 " + J);

// IIFE = immediately invoked function expression

// ES5

(function(){
    var c = 3;
    console.log(c);
})();

// ES6

{
    const a = 1;
    let b = 2;
}
// console.log(a+b);  not possible






/////////////////////////////////
/*** String in ES6 ***/

// ` `= backticks,  ${}= template literals

let firstName = 'Saikat';
let lastName = 'Bhuiyan';
const yearOfBirth = 1996;

function calAge(year){
    return 2019 - year;
}





// ES6 

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.`);

const n = `${firstName} ${lastName}`;

// obj.startsWith()
console.log(n.startsWith('S'));

// obj.endsWith()
console.log(n.endsWith('N'));

// obj.includes()
console.log(n.includes(' '));

// obj.repeat()
console.log(`${lastName} `.repeat(3));







////////////////////////////////////
/**** Arrow function ****/

const years = [1996, 2006, 2010, 2014];

// ES5 

var age5 = years.map(function(el){
    return 2019 - el;
});
console.log(age5);
// ES6 

let age6 = years.map(el => {
    let now = new Date().getFullYear();
    console.log(now-el);
});

age6 = years.map((el,index) => {
    let now = new Date().getFullYear();
    console.log(`Age element ${index + 1}: ${now - el}`);
});





//////////////////////////////////////////
/**** Arrow function2(this) ****/

// ES5

var box5 = {
    color: 'blue',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = "This is box nunber " + self.position + ' and it is color ' + self.color;
            alert(str);
        });
    }
}

//box5.clickMe();


//ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = "This is box nunber " + this.position + ' and it is color ' + this.color;
            alert(str);
        });
    }
}

box6.clickMe();


function Person(name){
    this.name = name;
}

// ES5

Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);



//ES6 

Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(el => {
        return `${this.name} is friends with ${el}`;
    });
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

         



/////////////////////////////////
/***** Destructturing *****/
// ES5
var d = ['sami', 13];

console.log(d[0]);
console.log(d[1]);


// ES6

const [name, age] = ['sajid', 8];

console.log(name);
console.log(age);

const obj = {
    firstName: 'john',
    lastName: 'Smith'
};

const{firstName1, lastName2} = obj;

console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;

console.log(a);
console.log(b);



function calcAgeRet(year){
    const age = new Date().getFullYear() - year;
    return [age,62 - age];
}

const [age2, retirement] = calcAgeRet('1996');
console.log(age2);
console.log(retirement);




////////////////////////////
/**** Array in ES6 *****/

const boxes = document.querySelectorAll('.box');

// ES5 

var boxArr5 = Array.prototype.slice.call(boxes);
boxArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});

// ES6

const boxArr6 = Array.from(boxes);
boxArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ES5 

// for(var i = 0; i < boxes.length; i++){
//     if(boxArr5[i].className === 'box blue!'){
//         continue;
//     }

//     boxArr5[i].textContent = 'I changed to blue!';
// }


// ES6

for(const cur of boxArr6){
    if(cur.className === 'box blue'){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}



var ages  = [12,34,56,8,23];

//ES6

var full = ages.map(function(cur){
    return cur>=18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));





/////////////////////////////////////
/******* Spread operator *****/

var ages = [18, 14, 30, 50];

function add(a, b, c, d){
    return a+b+c+d;
}

// ES5

var sum = add.apply(null, ages);
console.log(sum);

// ES6

const sum2 = add(...ages);
console.log(sum2);

const f1 = ['sami', 'sajid'];
const f2 = ['saikat', 'shakil'];

const join = [...f1, ...f2];
const join2 = [...f1, 'faiza', ...f2];

console.log(join);
console.log(join2);

//

const h = document.querySelector('h1');
const boxes2 = document.querySelectorAll('.box');

const all = [h, ...boxes2];

Array.from(all).forEach(cur => cur.style.color = 'purple');





/////////////////////////////////////
/******* rest operator *****/

// ES5

function isFull5(){
    var arg = Array.prototype.slice.call(arguments);

    var now = new Date().getFullYear();

    arg.forEach(function(cur){
        console.log((now - cur)>=18);
    });
}

isFull5(1990,1999,1995,1996);

// ES6

function isFull6(limit, ...years){

    const now = new Date().getFullYear();

    years.forEach(cur => console.log(now-cur)>= limit);

}

isFull6(21,1990,1999,1995,1996);





/////////////////////////////////////
/******* default operator *****/

// ES5

function sami(firstName, lastName){
    lastName === undefined ? lastName = 'bhuiyan': lastName = lastName;

    this.firstName = firstName;
    this.lastName = lastName;

}

var sami = new sami('saikat');

// ES6

function sajid(firstName, lastName = 'Bhuiyan'){
    lastName === undefined ? lastName = 'bhuiyan': lastName = lastName;

    this.firstName = firstName;
    this.lastName = lastName;

}

var sajid= new sajid('saikat');








///////////////////////////////////////////////////////////////////////////////////////////////
/*********************************** Map *******************************************/

const question = new Map();

question.set('question', 'What is the latest virson of javaScript');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015')
question.set(4, 'ES7');

question.set('correct', 3);

question.set(true, 'Correct answer!');
question.set(false, 'Wrong answer, Please try again');

console.log(question.get('question'));


// console.log(question.size);
// console.log(question.clear());

// if(question.has(4)){
//     // console.log(question.delete(4));
//     console.log('Answer 4');
// }

// question.forEach((key, value) =>console.log(`This  is ${key} and set ${value}`));

for(let [key,value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key} : ${value}`);
    }
}

// const ans = parseInt(prompt('Enter correct answer!'));

// console.log(question.get(ans === question.get('correct')));




/###############################################################################/
/**************** class in ES6 ********************/

// var Person5 = function(name, yearOfBirth, job){

//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function(){
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var sami5 = new Person5('sami', 1996, 'teacher');
// sami5.calculateAge();



// class Person6{
//     constructor(name, yearOfBirth, job){

//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;

//     }

//     calculateAge(){

//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting(){
//         console.log('Hey sami!');
//     }
// }

// const sami6 = new Person6('sami', 1996, 'teacher');
// sami6.calculateAge();

// Person6.greeting();


// /###############################################################################################/
/**************** classes(also called superclass) & subclasses in ES6 ********************/


// ES5 Way

var Person5 = function(name, yearOfBirth, job){

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){

    Person5.call(this, name, yearOfBirth, job);
    
    this.olympicGames = olympicGames;
    this.medals = medals;

}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var sajidAthlete5 = new Athlete5('sajid', 1996, 'swimmer', 3, 10);

sajidAthlete5.calculateAge();
sajidAthlete5.wonMedal();


// ES6 Way 
class Person6{
    constructor(name, yearOfBirth, job){

        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;

    }

    calculateAge(){

        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    
}

class Athlete6 extends Person6{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);

        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal6(){
        this.medals++;
        console.log(this.medals);
    }
}


const sajidAthlete6 = new Athlete6('sajid', 1990, 'swimmer', 3, 10);

sajidAthlete6.calculateAge();
sajidAthlete6.wonMedal6();

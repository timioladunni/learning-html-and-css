//Template literals
let name = 'Timi';
console.log(`hi ${name}`)

function getReasonCount(){return 2;}
let interpolation = `Give me ${(getReasonCount()==1) ? 'one good reason' : 'a few reason'} to try this`;
console.log(interpolation);

//Regular Expressions
let pattern = /xyz/;
console.log(pattern);
console.log(typeof pattern);
let value = 'This is xyz a test.';
//returns a boolean to check if pattern /xyz/ exists in the string
console.log(pattern.test(value));
//This is to replace the pattern with another string value
console.log(value.replace(pattern, 'just'));
//Used to get more information on the found pattern
console.log(value.match(pattern));
//Used to work with taht particular pattern found
var match = value.match(pattern);
console.log(match.index);

//Built in Natives
let myString = new String('howdy'); //this is a native string functon
console.log(myString); // returns a native string
console.log(myString.toString()); // returns a normal string
//more examples of native strings
/*String()
Number()
Boolean();
Object();
Function();
Symbol();
*/


/*Array();
RegExp();*/

/*Date();
Error();*/

let myPrimitive =  'THIS IS CRAZY';
console.log(typeof myPrimitive);
myPrimitive = myPrimitive.toLowerCase();
console.log(typeof myPrimitive);

//How to convert a built in native to a primitive string
let myNumber =  new Number(7);
console.log(typeof myNumber);
let primitive = myNumber.valueOf();
console.log(typeof primitive);

//Constructors
 /*function Car(make,model,year){
     this.make = make;
     this.model = model;
     this.year = year;
 };
 //It's the 'new' keyword makes a function a constructor
 let myCar = new Car('bmw', '745li', 2010);
 console.log(myCar);*/

 function MyFunction(){
     console.log('I am a simple function');
 };
 let myFunction = new MyFunction();
 console.log(typeof myFunction);
 //Can't really do anything with this particular object
 //it's not a function reference anymore!


 //Objects and Prototype chain
 //Objects linking to other objects
 let originalCar = {
     make: 'bmw',
     model: '745li',
     year: 2010
 };
 //How to create the prototype of the original car in the new car
 let newCar = Object.create(originalCar);
 console.log(newCar.make);
 //Note: Javascript doesnt look at the prototype chain when the new has 
 //it's own property

 let myPrototype = Object.getPrototypeOf(newCar); //get the original car it's referencing to
console.log(myPrototype.make);
//Assinging a new property to an object
originalCar.doors = 4; 
console.log(newCar.doors);
//How to check which object has the property
console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));


//JavaScript Classes
//declarations
class Car{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //creating a method print
    print(){
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}
let myCar = new Car('bmw','745Li', 2010);
myCar.print();
//expression
//let car = class{}



//How to perform inheritance in javascript
class SportsCar extends Car{
    revEngine(){
        console.log('Vrroom goes the '+ this.model)
    }
}
//mySportsCar is using the objects of the class 'Car'
//but myCar cannot use the objects of class 'SportsCar' because
//'SportsCar' is the child class inherinting from the parent class 'Car'
let mySportsCar = new SportsCar('dodge', 'viper', 2011);
mySportsCar.print();


//Arrow functions

/*let hi = ()=> {console.log('howdy')}
hi();*/

/*let hi = (name)=>{console.log(`howdy ${name}`)};
hi('bob');*/

/*let add=(a,b)=>{return a+b};
console.log(add(7,3));*/

//Way of iterating through an array
let names = ['david','timi','femi','tade'];
names.map((name)=>{console.log(`howdy ${name}!`)});

//iterating through strings and numbers
let names = ['david','timi','femi','tade'];
let i = 0;
names.map((name)=>{console.log(`howdy ${name} ${i}!`)});

//return a list of arrays
let names = ['david','timi','femi','tade'];
var transformed = names.map((name)=> {return `howdy ${name}!`});
console.log(transformed);


//Truthy and falsy values
//Falsy values
if(false) {}else {"falsy"}
if(null) {}else{"falsy" }
if(undefined) {}else{"falsy"}
if(0) {}else{"falsy"}
if(NaN) {}else{"falsy"}
if('') {}else{"empty string '' is falsy"}
if("") {}else{'empty string "" falsy'}

//Everything is truthy
if(true) {"truthy"}
if({}) {"empty object is truthy"}
if([]) {"empty array is truthy"}
if('bob') {"a non empty string truthy"}


//Date Objects
let today = new Date();

let bob = new Date('January 31, 1998 07:01:23');

//var elapsedTime = today - bob;
//console.log(elapsedTime);

//get parts
console.log(bob.getDate()); //Moday=1, Sunday=7
console.log(bob.getTime());

//String Methods
let first = 'Knowdedge is power but entusiasm pulls the switch. ';
let second = 'Do or do not. Ther is no try.';
let third = '4,8,15,16,23,42';

//You can even call methods on string literals
//console.log('bob loves you'.toUpperCase());

let mySplit = third.split(',');
console.log(mySplit);

let mySlice =  first.slice(13, 18); // first and last index
console.log(mySlice);
let mySubstr =  first.substr(13, 5); //first and the lenght of the index

let myEndsWith = second.endsWith('try.');

let myStartsWith = second.startsWith('Do');

let myInclude = second.includes('there');

let myRepeat = 'Ha! '.repeat(3);

let myTrim = '   bloated     ';
console.log(myTrim.length);
console.log(myTrim.trim().length);


//Array methods
let namess =['david','eddie','alex','micheal'];
let others = ['sammy', 'gary','wolfgang','mark'];
let lost = [4,8,15,16,23,42];
let fibonacci = [1,1,2,3,5,8,13,21,34,55];

//combining arrays
var combine = lost.concat(fibonacci);
console.log(combine);

console.log(fibonacci.join('~'));

//push- add values to the back, pop- removes the last value

console.log(lost.shift()); // removes values from the front
console.log(lost.unshift()) // add values to the front

console.log(namess.reverse()) // reverse the order of values

console.log(namess.sort()) // sorts to alphbetical order

console.log(others.indexOf('mark')) //check the position of a given value

console.log(combine.lastIndexOf(1)); // checks the last index of a value

var filtered =  combine.filter((x)=>{if(x<=15) return x;});
namess.forEach((name)=> console.log(`howdy ${name}`));

filtered.every((num)=> num<10); //checks if every function meets a particular check
filtered.some((num)=>num<10) // checks if any function meets a particular check

//Handling Errors with try and catch
let a = 7 * undefined / "panama";
console.log(a);

function beforeTryCatch(){
    let obj = undefined;
    console.log(obj.b);
    console.log('you won\'t see this');
}
 

function afterTryCatch(){
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log('you won\'t see this');
    } catch (error) {
       console.log('I caught an exception: '+ error.message); 
    }
    console.log('still running')
}

function performCalculation(obj){
    if(!obj.hasOwnProperty('b')){
        throw new Error('Object missing property')
    }
    //continue running
    return 6;
}

function performHigerLevelCaluculation(){
    let obj = {};
    let value = 0;
    try {
        value = performCalculation(obj)
    } catch (error) {
        console.log(error.message)
    }
    if(value == 0){
        //contigency
        //retry logic
    }
}
 
//Map function
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
//Mapping an array of numbers to an array of square roots
let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

//Using map to reformat objects in an array
let kvArray = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
let rObj = {}
rObj[obj.key] = obj.value
return rObj
})
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

//Mapping an array of numbers using a function containing an argument
let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  return num * 2
})
// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]

//Using map generically
let map = Array.prototype.map
let a = map.call('Hello World', function(x) {
  return x.charCodeAt(0)
})
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

//Using map generically querySelectorAll
let elems = document.querySelectorAll('select option:checked')
let values = Array.prototype.map.call(elems, function(obj) {
  return obj.value
})

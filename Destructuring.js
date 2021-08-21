let a,b,c,d,e;

let names = ['Timi', 'Tade', 'Femi', 'Seyi','Abdul'];

//Destructuring Arrays
/*[a,b,c,e,d] = names;
console.log(a);
console.log(c);
console.log(d);*/


/*let others;
[a,b, ...others] = names;

console.log(a);
console.log(b);
console.log(others);*/

//Destructuring Objects
//This is how to destructure objects
let year, model;
({year, model} = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    value: 5000
});
console.log(year);
console.log(model);

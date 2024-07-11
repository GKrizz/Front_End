// -----------------------------|   Arrow Function   |-----------------------------

/*
export default function DoSomething(){// In normal function we use |default|.
    console.log("Hello Function");
}
DoSomething()

export const DoSomething=()=>{//In arrow function we use |export| alone. 
    console.log("Hello Arrow Function");
}
DoSomething()*/

// -----------------------------|   Ternary Operator   |-----------------------------

// Ternary Operator is used to write a short if else statement.
// Syntax: condition ? expression1:expression2

/*
let age=12;
let message=age>=18?"Eligible":"Not Eligible";
console.log(message);

const component=()=>{
    return age>=18 ? <div>Eligible</div>:<div>Not Eligible</div>
}*/

// -----------------------------|   Objects   |-----------------------------

// Objects are used to store data in key value pairs.
// Syntax: {key:value,key:value,key:value}
// Objects are mutable.
// Objects are reference type.

const person={
    name:"John",
    age:12,
    isMarried:false,
};
console.log(person);

const person2={...person,name:"gobal"}
console.log(person2);

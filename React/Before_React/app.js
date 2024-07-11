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

/*

const person={
    name:"John",
    age:12,
    isMarried:false,
};
console.log(person);

const person2={...person,name:"gobal"}
console.log(person2);

*/

// -----------------------------|   Map , Filter ,Reduce  |-----------------------------
/*
const marks = [35,55,89,25,45]
console.log(marks);

// Map is used to iterate over an array and return a new array.
// Syntax: array.map((item,index)=>{return item;});

const grade= marks.map((e)=> e>=45? "pass":"fail") // fail , pass
console.log("grade",grade)

// Filter is used to iterate over an array and return a new array.
// Syntax: array.filter((item,index)=>{return item;});

const pass = marks.filter((e)=> e>=45)
console.log("pass",pass)

// Reduce is used to iterate over each element of an array and return a single value.
// Syntax: array.reduce((acc,item)=>{return acc+item;},0);

const sum = marks.reduce((acc , e ) => {
    return acc + e ;
},0 );
console.log("sum",sum);
*/
// -----------------------------|    Promise ,Async-await , Fetch  |-----------------------------

// Promise is used to make the code asynchronous.
// Syntax: new Promise((resolve,reject)=>{resolve("data");})
            // .then((data)=>{console.log(data)})
            // .catch((err)=>{console.log(err)});
let takal_ticket=new Promise((resolve,reject)=>{
    let is_bookingSuccess=true;
    if(is_bookingSuccess)
        resolve(250);
    else
        reject();
});
takal_ticket.then((amt)=>console.log(`Thanks for booking.I had sent rs.${amt}`))
.catch(()=>console.log("Its ok i wll book bus"));

// Async-await is used to make the code asynchronous.
// Syntax: async function name(){return await promise;}



// Fetch is used to make the code asynchronous.
// Syntax: fetch("url")
        // .then((data)=>{console.log(data)})
        // .catch((err)=>{console.log(err)});



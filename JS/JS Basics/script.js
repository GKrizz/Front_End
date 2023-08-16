// function greet(){
//     let age = parseInt(window.prompt("Please enter your age:")); // Prompting for age and converting to an integer
//     let type = age >= 18 ? "adult" : "child"; // Checking if the age is 18 or older
//     window.alert("You are a " + type + " and your age is " + age); // Displaying the alert
// }


// let income = parseInt(window.prompt("enter your income"));
// let score = parseInt(window.prompt("enter your score"));
// // let elegible= income >500 && score >50;
// let elegible= income >500 || score >50;
// window.alert("status " + elegible);/


// -----------------------------If-Else---------------------------------------------------

// function time() {
//     let time = parseInt(window.prompt("Enter a number:"));

//     if (time >= 0 && time < 12) {
//         window.alert("Good morning");
//     } else if (time >= 12 && time < 15) {
//         window.alert("Good afternoon");
//     } else if (time >= 15 && time < 18) {
//         window.alert("Good eve ");
//     } else {
//         window.alert("Good night");
//     }
// }

// time();

// -----------------------------Looping---------------------------------------------------

// IF-Else

/* 
let weather = window.prompt("Please Enter weather : ");
if (weather== "hot"){
    document.write('<h3 class="hot">It\'s Hot</h3>');
}
else{
    document.write('<h3>It\'s cold</h3>');
    }
*/

// WHILE
/*
let i = 0;
while (i < 6) {
    if(i%2!==0){
    document.write('number - ' + i + '<br>');
    }
    i++;
}
*/

// FOR - IN
/*
const person={
    name:"Gobala Krishnan",
    age:20,
    gender:'male',
    hobbies:[
        'coding','reading'
        ]
        };
        for (var key in person ){
            // document.write(`${key}: ${person[key]}`,'<br>');
            document.write(key+": ",person[key],'<br>')
        }
  */
//  FOR - OF
/*let fruit=["mango","apple","banana"];
for (let i in fruit){
    document.write(fruit[i]+'<br>')
}
for (let color of fruit){
    document.write("color : "+fruit+'<br>');
}
*/
//  -----------------------------------OBJECT & OOPS (object oriented programming )-------------------------\

/*
let person={
    name:"gobal",
    age: 20,
    greeting : function(){
        let msg = `My name is ${this.name},im ${this.age} years old`;
        document.write(msg);
    }
}
person.greeting()

*/
// ------------------------FACTORY Functions----------------------

function createPerson(name){//camel case
    return{
        // name: name,
        name,
        age : 20,
        // greeting : function(){
        greeting(){
            let msg = `My name is ${this.name},im ${this.age} years old <br>` ;
            document.write(msg);
        }
    }; 
}
let gobal=  createPerson("gobal");
let sanju = createPerson("sanjeevi kumar");
gobal.greeting();
sanju.greeting();

// ----------------------------Constructor functions------------------------------------

function Person(name){//pascal -> MyFirstName
    this.name = name;
    this.greeting = function(){
        document.write(`my name is ${this.name}`);
    }
}
let person = new Person('gobal');
person.greeting();
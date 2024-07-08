// ------------------------|     Array       |--------------------------
 /*
let color=['red','yellow'];
console.log(color)
color[2]='pink'
console.log(color)
color.push('blue')
console.log(color)
color.unshift('green')
console.log(color)
color.pop()
console.log(color)
color.shift()
console.log(color)
*/
// ------------------------|     Function       |--------------------------
/*
function sample(){
    console.log('hello world')
    let i=0;
    while(i<=10){
        if(i%2!==0){
            console.log(i)
        }
        else{
            console.log('-------------'+i)
        }
        i++;
    }
    for(i;i<=10;i++){
        console.log(i)
    }

    const person={
        name:'sachin',
        age:20,
        address:'mumbai'
    };
    for(i in person){
        console.log(person[i])
    }

}
sample()

//Parameter
function add(a,b){
    console.log(a+b)
}
add(4,5);

//Return
function add(a,b){
    return (a+b)
}
var result= add(4,5)
console.log(result)
*/
// ------------------------|     DOM Manipulation       |--------------------------

// Select paragraph tag by using ID
var para=document.getElementById("one")
console.log(para.textContent)

// eventhandler
var change=document.getElementById("change");
change.addEventListener("click",function(){
    console.log("clicked");
    para.textContent="Bye World";
});

//Add two numbers
var button = document.querySelector(".result_class");
var output = document.getElementById("result");
button.addEventListener("click", function() {
    var number_1 =parseFloat(document.getElementById("num1").value);
    var number_2 =parseFloat(document.getElementById("num2").value);
    var add = number_1 + number_2;
    output.textContent = "Result : " + add;
});

// Generate a random number between 1 and 10
var rand = Math.floor((Math.random() * 10) + 1);
console.log(rand); // For debugging purposes
var msg = document.getElementById("msg");
var scoreElement = document.getElementById("score");
var button1 = document.getElementById("check_btn");
var score=10;

button1.addEventListener("click", function() {
    var number = parseFloat(document.getElementById("number").value);
    if (number === rand) {
        msg.textContent = "You are Right! ✅";
    } else {
        msg.textContent = "You are wrong❌";
        score=score-1;
        scoreElement.textContent="Chance : "+score;
        if(score==0){
            window.alert("Game over");
            window.location.reload(); // Refresh the page
        }
    }
});


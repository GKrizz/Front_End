// getElementById
var result = document.getElementById('result');
function calc(){
    var num=document.getElementById("num");
    result.innerText=num.value; 

}

// getElementsByName
var output = document.getElementById("output");
var btn = document.getElementById("btn");
function fn(){
    var a = document.getElementsByName('r');
    a.forEach((r) =>{
        if (r.checked){
            output.innerText =`${"you clicked "+r.value}`;
        }
    })
}       

// getElementsByTagName
let h1=document.getElementsByTagName("h5")
function count(){
    // let p = document.querySelectorAll(".p") 
    // for (let i of p ){
    //     i.style="color:red";
    //     }
    alert("Total count : "+h1.length);
}

// getElementsByClassName
var all = document.getElementsByClassName("black");
function blue(){
    document.getElementsByClassName("blue")[0].style.backgroundColor="blue";
}
function green(){
    document.getElementsByClassName("green")[0].style.backgroundColor="green";
}
function red(){
    document.getElementsByClassName("red")[0].style.backgroundColor="red";
}
function reset(){
    for (i in all){
        all[i].style.backgroundColor="";
        }
}
// --------------------------------------------------------------------------------------------
// ------------------------|     Array       |--------------------------
 

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



// ------------------------|     Function       |--------------------------

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

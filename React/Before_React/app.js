export default function DoSomething(){// In normal function we use |default|.
    console.log("Hello Function");
}
DoSomething()

export const DoSomething=()=>{//In arrow function we use |export| alone. 
    console.log("Hello Arrow Function");
}
DoSomething()



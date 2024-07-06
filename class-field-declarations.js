class Example {

    static name = 'Gabriel'; // declare a static field

    static { 
        // static block
        console.log('class static block initialization'); 
    }

    #field1 = 'José'; // Declare a private field

    #makeSomething() {} // private method
}

const example = new Example();

console.log(Example.name)

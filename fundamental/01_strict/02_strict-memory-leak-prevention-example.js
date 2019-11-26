//'use strict' //Strict mode can prevent memory leaks.

// Memory Leak
function getname(){
    name = "Stack Overflow"; // Not using var keyword
    //this variable will be created in the global scope since it is not declared in inner or outer scope
    //and will be available in the entire application.
    //which we may not want
    return name;
}
getname();
console.log(name); // Stack Overflow
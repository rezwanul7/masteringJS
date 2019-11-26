//var is less preferred to be used in ES6
var firstName = "Rezwanul";

function setProgress(){
    //var is function scoped
    var varProgress = 'delivered'
    console.log(progress);
}
//varProgress can not be used here(outside of the function it was defined)
console.log(varProgress);

//Use const binding when the value of the binding doesn't change over time.
const allowLastName = true;

if(allowLastName){
    //var is function scoped
    var varLastName = "Islam";
    // let is block scoped
    let letLastName = "Islam";
}
//varLastName can be used here
console.log(firstName + ' ' + varLastName);

//letLastName can not be used here (outside of the block). letLastname is not defined here
console.log(firstName + ' ' + letLastName);


var Person = (function () {
    function Person() {
        this.str1 = "I am a private data";
    }
    Person.prototype.disp = function () {
        console.log("This is the entered string " + this.name);
    };
    return Person;
}());
var aPerson = new Person();
aPerson.name = "Ramesh";
aPerson.disp();
var isPerson = aPerson instanceof Person;
console.log("Is obj is instance of Person =" + isPerson);
// console.log("Printing the private variable"+ aPerson.str1); 

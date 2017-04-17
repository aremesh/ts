var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello world from class");
    };
    Greeting.prototype.display = function () {
        return this.name + " " + this.score.toString() + " " + this.age.toString();
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
obj.name = "Ramesh";
obj.age = 23;
obj.score = 85;
console.log(obj.display());

class Greeting {
    greet(): void {
        console.log("Hello world from class")
    }
    name: string;// variable declaration
    age: number;//variable declaration
    score: number;
    display() {// function calling 
        return this.name + " " + this.score.toString() + " " + this.age.toString();
    }
}
var obj = new Greeting();
obj.greet();
obj.name = "Ramesh";
obj.age = 23;
obj.score = 85;
console.log(obj.display());

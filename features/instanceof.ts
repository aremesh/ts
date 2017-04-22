class Person{
    name:string;
    private str1:string="I am a private data";
    disp():void{
        console.log("This is the entered string "+this.name);
    }
}
var aPerson =new Person();
aPerson.name="Ramesh";
aPerson.disp();
var isPerson=aPerson instanceof Person;
console.log("Is obj is instance of Person ="+isPerson )
// console.log("Printing the private variable"+ aPerson.str1);
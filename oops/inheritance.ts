//class child_class_name extends parent_class_name
class Shape { 
   Area:number 
   
   constructor(a:number) { 
      this.Area = a 
   } 
} 

class Circle extends Shape { 
   disp():void { 
      console.log("Area of the circle:  "+this.Area) 
   } 
}
  
var inhertanceobj = new Circle(223); 
inhertanceobj.disp()

class Root { 
   str:string; 
} 

class Child extends Root {} 
class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  

var multilevel = new Leaf(); 
multilevel.str ="hello" 
console.log(multilevel.str)
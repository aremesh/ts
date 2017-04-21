class StaticClass{
    static num:number;
    static display():void{
        console.log("The value of the num is"+ StaticClass.num);
    }
}
StaticClass.num=12;
StaticClass.display()
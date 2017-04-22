class PrinterClass{
    doPrint():void{
        console.log("Print Parent method is called.")
    }
}
class StringPrinter extends PrinterClass{
    doPrint():void{
        console.log("Child class method is called.")
    }
}
var obj=new StringPrinter();
obj.doPrint();
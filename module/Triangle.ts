import shape=require("./IShape")
export class Triangle implements shape.IShape{
    public draw(){
        console.log("Triangle is drawn from external module");
    }
}
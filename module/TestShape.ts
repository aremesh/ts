import shape=require("./IShape");
import circle=require("./Circle");
import triangle=require("./Triangle");
function drawAllShape(shapeToDraw:shape.IShape){
    shapeToDraw.draw();
}
drawAllShape(new circle.Circle());
drawAllShape(new triangle.Triangle());
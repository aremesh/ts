/// <reference path="IShape.ts"/>
/// <reference path="circle.ts"/>
/// <reference path="triangle.ts"/>
 function drawAllShapes(shape:Drawing.IShape) { 
            shape.draw(); 
         } 
        drawAllShapes(new Drawing.Circle());
         drawAllShapes(new Drawing.Triangle());

         // after this complile them into app.js by the below commands
         //tsc --out app.js TestShape.ts
         //node app.js
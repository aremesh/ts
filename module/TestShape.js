"use strict";
exports.__esModule = true;
var circle = require("./Circle");
var triangle = require("./Triangle");
function drawAllShape(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShape(new circle.Circle());
drawAllShape(new triangle.Triangle());

"use strict";
exports.__esModule = true;
var Triangle = (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log("Triangle is drawn from external module");
    };
    return Triangle;
}());
exports.Triangle = Triangle;

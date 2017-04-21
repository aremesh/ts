//Anonymous Function
var invokedPerson = function (obj) {
    console.log("firstName" + obj.fname);
    console.log("firstName" + obj.lname);
};
invokedPerson({ fname: "test new", lname: "tester" });
invokedPerson({ fname: "aperson1", lname: "aperson2" });
function addPoint(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
var newPoint = addPoint({ x: 3, y: 4 }, { x: 4, y: 5 });

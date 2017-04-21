var StaticClass = (function () {
    function StaticClass() {
    }
    StaticClass.display = function () {
        console.log("The value of the num is" + StaticClass.num);
    };
    return StaticClass;
}());
StaticClass.num = 12;
StaticClass.display();

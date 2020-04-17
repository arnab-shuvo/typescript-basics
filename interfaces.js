"use strict";
var automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function (velocity) {
        console.log("this " + this.brand + " is going at " + this.speed + " miles an Hour");
    }
};
function car1(automobile) {
    automobile.speedMethod(3);
}
//  car1(automobile);
var AutomobileClass = /** @class */ (function () {
    function AutomobileClass(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    AutomobileClass.prototype.speedMethod = function (speed) {
        console.log('hi My Car is going at ' + this.speed + ' Miles Per Hour');
    };
    return AutomobileClass;
}());
var carObj = new AutomobileClass("BMW", 200);
carObj.speedMethod(10000);

"use strict";
function stringFunction() {
    console.log('Hello Type Script');
    return "asdasd";
}
function cal(val1, val2) {
    var total = val1 + val2;
    console.log(total);
    return total;
}
var universal;
universal = cal;
console.log(universal(2, 2));

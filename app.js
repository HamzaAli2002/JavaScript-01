//=====ASSIGNMENT-01========


var a =  15;

           //16  + 17   -  16
var value1 = a++ + ++a  -  --a;
           //15  + 17   -  16 = 16

console.log(value1)           

var a = 15;

           //16  +17   -16   +15   +15 -15 -16   -15
var value2 = ++a + ++a - --a + a-- + a - a - a++ - --a;
           //16  +17   -16   +16   +15 -15 -15   -15   = 3

console.log(value2)           
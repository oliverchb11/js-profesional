// IIFE INDENTITY INVOQUE FUNCTION EXPRESION
(function() {

    let color = 'green';

    function printColor() {
        console.log(color);
    }


    printColor();
})();

function makeColorPrinter(color) {
    let colorMessage = `The color is ${color}`;
    return function() {
        console.log(colorMessage);
    }

}

let printGreen = makeColorPrinter("green");
console.log(printGreen());
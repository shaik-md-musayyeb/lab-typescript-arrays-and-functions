"use strict";
exports.__esModule = true;
var ArrayManipulations = /** @class */ (function () {
    function ArrayManipulations() {
    }
    ArrayManipulations.prototype.arrayFindMultiples = function (myArray) {
        var multiples = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 == 0 || myArray[i] % 10 == 0) {
                multiples[j] = myArray[i];
                j++;
            }
        }
        return multiples;
    };
    ArrayManipulations.prototype.arraySeparate = function (myArray) {
        var answer;
        var j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof (myArray[i]) === 'string') {
                answer[j] = myArray[i];
                j++;
            }
        }
        return answer;
    };
    // arraySplit(myString : string) : Array<number> method is used to find the prime number in the mixed array.
    //  First identify the   numbers in the array, typecast it and then check whether the number is a prime number or not.
    ArrayManipulations.prototype.arraySplit = function (myString) {
        var number;
    };
    ArrayManipulations.prototype.arraySort = function (myArray) {
    };
    ArrayManipulations.prototype.arrayReplace = function (myArray) {
    };
    return ArrayManipulations;
}());

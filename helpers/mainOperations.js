function stringOperation(str) {
    const numbers = Number(str);
    let array;
    let numbersArray = [];
    let newArray = [];

    if (Number.isInteger(numbers)) {
        array = str.match(/[0-9]/g);
        array.forEach(number => {
            numbersArray.push(Number(number));
        });

        numbersArray.forEach(number => {
            if (number % 2) {
                if (newArray[newArray.length - 1] === "-") {
                    newArray.push(number.toString());
                    newArray.push("-");
                } else {
                    newArray.push("-");
                    newArray.push(number.toString());
                    newArray.push("-");
                }
            } else {
                newArray.push(number.toString());
            }
        });

        if(newArray[0] === "-")
            newArray.shift();
        if(newArray[newArray.length - 1] === "-")
            newArray.pop();

        return newArray.join('');
    } else if (isNaN(str)) {
        return NaN
    }
    return null;
}

module.exports.stringOperation = stringOperation;

function arrayOperation(array) {

}
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {


    // write your solution here

    let tempArr = [];
    let newExpr = [];

    for (let i = 0; i < expr.length; i++) {
        let currentChar = expr[i];

        if(tempArr.length < 10) {
            tempArr.push(currentChar);
        } else {
            newExpr.push(tempArr);
            tempArr = [];
            tempArr.push(currentChar);
        }
    }
    newExpr.push(tempArr);

    let exprWithoutStartZeroes = [];


    for (let i = 0; i < newExpr.length; i++) {
        let currentNewExprArr = newExpr[i]

        for (let j = 0; j < currentNewExprArr.length; j++) {
            let currentNewExprArrChar = currentNewExprArr[j];
            if (Number(currentNewExprArrChar) !== 0) {
                currentNewExprArr.splice(0, j)
                exprWithoutStartZeroes.push(currentNewExprArr);
                break;
            }
        }
    }

    let morseSum = 0;
    let exprMorseArr = [];
    let morseItem = '';
    let currentMorseItem;
    let nextMorseItem;

    for (let i = 0; i < exprWithoutStartZeroes.length; i++) {
        exprMorseArr.push(morseItem);
                morseItem = '';
        let exprWithoutStartZeroesItem = exprWithoutStartZeroes[i];

        for (let j = 0; j < exprWithoutStartZeroesItem.length-1; j = j + 2) {
            if (exprWithoutStartZeroesItem[j] === '*') {
                morseItem = morseItem + ' '
                break
            }
            currentMorseItem = Number(exprWithoutStartZeroesItem[j]);
            nextMorseItem = Number(exprWithoutStartZeroesItem[j+1]);
            morseSum = currentMorseItem + nextMorseItem;
            if (morseSum === 1) {
                morseItem = morseItem + '.'
                morseSum = 0;
            } else {
                morseItem = morseItem + '-'
                morseSum = 0;
        }
    }
}

exprMorseArr.push(morseItem);

exprMorseArr.splice(0,1)

let result = '';
let morseKeys = Object.keys(MORSE_TABLE);
let morseValues = Object.values(MORSE_TABLE);

for (let i = 0; i < exprMorseArr.length; i++) {
    let currentMorseChar = exprMorseArr[i];



    if (currentMorseChar === ' ') {
        result = result + currentMorseChar;
    } else {
        let findIndex = morseKeys.indexOf(currentMorseChar);
        result = result + morseValues[findIndex];
    }

}

return result;

}


module.exports = {
    decode
}
const defaultResult = 0;
let currentResult = defaultResult;


function getUserInputNumer(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforCalc, calcNumber){
    //generate equation output for html
    const calcDescription = `${resultBeforCalc} ${operator} ${calcNumber}`
    //display in html: calculated value and equation
    outputResult(currentResult, calcDescription);
}

function add() {
    //parse entered value
    const enteredNumber = getUserInputNumer();

    //store previous result
    const initialResult = currentResult;

    //add values
    currentResult = currentResult + enteredNumber;

    //update UI
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract(){
    //parse entered value
    const enteredNumber = getUserInputNumer();

    //store previous result
    const initialResult = currentResult;

    //subtract values
    currentResult = currentResult - enteredNumber;

    //update UI
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply(){
    //parse entered value
    const enteredNumber = getUserInputNumer();

    //store previous result
    const initialResult = currentResult;

    //multiply values
    currentResult = currentResult * enteredNumber;

    //update UI
    createAndWriteOutput('*', initialResult, enteredNumber);
}


function divide(){
    //parse entered value
    const enteredNumber = getUserInputNumer();

    //store previous result
    const initialResult = currentResult;

    //divide values
    currentResult = currentResult / enteredNumber;

    //update UI
    createAndWriteOutput('/', initialResult, enteredNumber);
}

/*
* These event listeners will wait for user to click
* on a specific button. Once clicked it will call 
* appropiate functions.
*/
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
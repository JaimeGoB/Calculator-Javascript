const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){

    //creating object to hold values of every operation
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    
    logEntries.push(logEntry);

    console.log(logEntries);
}

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
    currentResult += enteredNumber;

    //update UI
    createAndWriteOutput('+', initialResult, enteredNumber);

    //keeping track of all operations
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract(){
    //parse entered value
    const enteredNumber = getUserInputNumer();

    //store previous result
    const initialResult = currentResult;

    //subtract values
    currentResult -= enteredNumber;

    //update UI
    createAndWriteOutput('-', initialResult, enteredNumber);

    //keeping track of all operations
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply(){
    //parse entered value
    const enteredNumber = getUserInputNumer();

    //store previous result
    const initialResult = currentResult;

    //multiply values
    currentResult *= enteredNumber;

    //update UI
    createAndWriteOutput('*', initialResult, enteredNumber);

    //keeping track of all operations
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}


function divide(){
    //parse entered value
    const enteredNumber = getUserInputNumer();

    //store previous result
    const initialResult = currentResult;

    //divide values
    currentResult /= enteredNumber;

    //update UI
    createAndWriteOutput('/', initialResult, enteredNumber);

    //keeping track of all operations
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
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
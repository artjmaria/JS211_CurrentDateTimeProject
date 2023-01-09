// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};


// ====================================================================================================================================================
// Write a JavaScript program to convert a number to a string.


const convertToString = () => {
  const num = document.getElementById('numberEntered').value;
  const conv = num.toString();
  document.getElementById('outputString').innerHTML = `'${conv}'`
};


// ====================================================================================================================================================

// Write a JavaScript program to convert a string to the number.

const convertToNumber = () => {
  const string = document.getElementById('stringEntered').value;
  const convert = parseInt(string);
  document.getElementById("outputNumber").innerHTML = convert;
}

// ====================================================================================================================================================


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

const dataTypes = () => {
  const dataInput = document.getElementById('dataInputted').value;

  if (dataInput === 'true' || dataInput === 'false') {
    return document.getElementById("dataType").innerHTML = 'Boolean'
  };
  if (dataInput === 'null') {
    return document.getElementById("dataType").innerHTML = 'null'
  };
  if (dataInput === 'undefined') {
    return document.getElementById("dataType").innerHTML = 'undefined'
  };
  if (isNaN(dataInput)) {
    return document.getElementById("dataType").innerHTML = 'NaN'
  } else {
    return document.getElementById("dataType").innerHTML = 'Number'
  };
};

// ====================================================================================================================================================


// Write a JavaScript program that adds 2 numbers together.

const summation = () => {
  const numInput1 = parseInt(document.getElementById('num1').value)
  const numInput2 = parseInt(document.getElementById('num2').value)
  let sumNumbers = numInput1 + numInput2
  return document.getElementById("results").innerHTML = sumNumbers;
}

// ====================================================================================================================================================


// Write a JavaScript program that runs only when 2 things are true.


const bothTruthy = () => {
  const userInput1 = document.getElementById('input1').value
  const userInput2 = document.getElementById('input2').value
  if (userInput1 && userInput2) {
    document.getElementById("bothTrue").innerHTML = `${userInput1} & ${userInput2}, are truthy inputs!`
  }
}

// ====================================================================================================================================================


// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTruthy = () => {
  const userInput1 = document.getElementById('inputUno').value
  const userInput2 = document.getElementById('inputDos').value
  if (userInput1 || userInput2) {
    document.getElementById("oneTruthyVal").innerHTML = `${userInput1} ${userInput2}, at least one of them is truthy!`
  }
}

// ====================================================================================================================================================


// Write a JavaScript program that runs when both things are not true.  


const bothFalsy = () => {
  const userInput1 = document.getElementById('inputA').value
  const userInput2 = document.getElementById('inputB').value
  if (!userInput1 && !userInput2) {
    document.getElementById("bothFalsyVal").innerHTML = `Nothing was entered which results in empty strings, so it's falsy!`
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
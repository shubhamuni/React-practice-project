document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  let currentNumber = '';
  let prevNumber = '';
  let operator = '';
  let resultDisplayed = false;

  const numberButtons = document.querySelectorAll('.btn:not(#equals):not(#clear):not(#decimal)');
  const operatorButtons = document.querySelectorAll('.btn[id=add], .btn[id=subtract], .btn[id=multiply], .btn[id=divide]');
  const equalsButton = document.getElementById('equals');
  const clearButton = document.getElementById('clear');
  const decimalButton = document.getElementById('decimal');

  numberButtons.forEach(button => {
      button.addEventListener('click', function() {
          if (resultDisplayed) {
              display.innerText = '';
              resultDisplayed = false;
          }
          if (button.innerText === '0' && currentNumber === '0') {
              return; // Prevent adding multiple leading zeros
          }
          currentNumber += button.innerText;
          display.innerText = currentNumber;
      });
  });

  operatorButtons.forEach(button => {
      button.addEventListener('click', function() {
          if (currentNumber !== '') {
              if (prevNumber === '') {
                  prevNumber = currentNumber;
                  currentNumber = '';
              } else if (currentNumber === '' && operator === '-' && prevNumber === '-') {
                  return; // Prevent adding multiple negative signs
              } else {
                  if (operator !== '') {
                      if (currentNumber === '') {
                          operator = button.innerText; // Update the operator
                          return;
                      }
                      prevNumber = operate(parseFloat(prevNumber), parseFloat(currentNumber), operator).toString();
                      currentNumber = '';
                  }
              }
              operator = button.innerText;
          } else if (button.innerText === '-' && prevNumber === '' && currentNumber === '') {
              currentNumber = '-';
              display.innerText = currentNumber;
          }
      });
  });

  equalsButton.addEventListener('click', function() {
      if (prevNumber !== '' && currentNumber !== '') {
          const result = operate(parseFloat(prevNumber), parseFloat(currentNumber), operator);
          display.innerText = result;
          currentNumber = result.toString();
          prevNumber = '';
          operator = '';
          resultDisplayed = true;
      }
  });

  clearButton.addEventListener('click', function() {
      display.innerText = '0';
      currentNumber = '';
      prevNumber = '';
      operator = '';
      resultDisplayed = false;
  });

  decimalButton.addEventListener('click', function() {
      if (!currentNumber.includes('.')) {
          currentNumber += '.';
          display.innerText = currentNumber;
      }
  });

  function operate(a, b, op) {
      switch (op) {
          case '+':
              return a + b;
          case '-':
              return a - b;
          case '*':
              return a * b;
          case '/':
              return b !== 0 ? a / b : 'Error';
          default:
              return 'Error';
      }
  }
});

// Below code is for printing count to the DOM where we click

  //Creates counter to increment the number which can be print on DOM
  // var count = 0;
// Function to create and display the number at the clicked position
// function printNumberOnPosition(event) {
//   // Calculate the coordinates of the click event
//   const x = event.clientX;
//   const y = event.clientY;
//   //Counter is incremented by one
//   count++;
//   // Create a new element for the number
//   const numberElement = document.createElement('div');
//   numberElement.classList.add('number');
//   numberElement.textContent = count; // You can set any number here

//   // Position the number element at the clicked coordinates
//   numberElement.style.left = `${x}px`;
//   numberElement.style.top = `${y}px`;

//   // Append the number element to the document body
//   document.body.appendChild(numberElement);
// }

// // Add event listener to the entire document to detect clicks
// document.addEventListener('click', printNumberOnPosition);
// Select all the buttons
const buttons = document.querySelectorAll('button');

// Select the result input field
const result = document.getElementById('result');

// Add an event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button value
    const buttonValue = button.textContent;

    // If the button is the "=" button, evaluate the expression
    if (buttonValue === '=') {
      try {
        const expression = result.value;
        const answer = eval(expression);
        result.value = answer;
      } catch (error) {
        result.value = 'Error';
      }
    }
    // If the button is the "C" button, clear the input field
    else if (buttonValue === 'C') {
      result.value = '';
    }
    // If the button is the "←" button, remove the last character from the input field
    else if (buttonValue === '←') {
      result.value = result.value.slice(0, -1);
    }
    // For all other buttons, append the button value to the input field
    else {
      result.value += buttonValue;
    }
  });
});

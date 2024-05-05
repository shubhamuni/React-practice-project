const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Update preview on input
editor.addEventListener('input', updatePreview);

// Initial rendering
updatePreview();

function updatePreview() {
  const markdown = editor.value;
  const html = (markdown); 
  preview.innerHTML = html;
}

// Below code is for printing count to the DOM where we click

  //Creates counter to increment the number which can be print on DOM
  var count = 0;
// Function to create and display the number at the clicked position
function printNumberOnPosition(event) {
  // Calculate the coordinates of the click event
  const x = event.clientX;
  const y = event.clientY;
  //Counter is incremented by one
  count++;
  // Create a new element for the number
  const numberElement = document.createElement('div');
  numberElement.classList.add('number');
  numberElement.textContent = count; // You can set any number here

  // Position the number element at the clicked coordinates
  numberElement.style.left = `${x}px`;
  numberElement.style.top = `${y}px`;

  // Append the number element to the document body
  document.body.appendChild(numberElement);
}

// Add event listener to the entire document to detect clicks
document.addEventListener('click', printNumberOnPosition);
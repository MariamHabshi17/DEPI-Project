   $('#imageCarousel').carousel({
        interval: 2000 // Change slide every 2 seconds
    });
function toggleCustomInput(selectElement, containerId, inputId) {
  const container = document.getElementById(containerId);
  const input = document.getElementById(inputId);
  if (selectElement.value === 'Others') {
    container.style.display = 'block'; // Show the text input for custom option
  } else {
    container.style.display = 'none'; // Hide the text input
    input.value = ''; // Clear the input when hidden
  }
}

// Event Listeners for Base, Glaze, and Topping select fields
document.getElementById('baseSelect').addEventListener('change', function() {
  toggleCustomInput(this, 'customBaseContainer', 'customBaseInput');
});

document.getElementById('glazeSelect').addEventListener('change', function() {
  toggleCustomInput(this, 'customGlazeContainer', 'customGlazeInput');
});

document.getElementById('toppingSelect').addEventListener('change', function() {
  toggleCustomInput(this, 'customToppingContainer', 'customToppingInput');
});
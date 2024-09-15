// Select all input fields
const inputs = document.querySelectorAll('.inp input');

// Auto-focus to the next input field
inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index + 1 < inputs.length) {
            inputs[index + 1].focus();
        }
    });

    // Allow backspace to focus previous input
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// Reset OTP fields on Verify button click
document.querySelector('button').addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = ''; // Clear the input value
    });
    inputs[0].focus(); // Focus back to the first input field
});

// Optional: Reset OTP fields on Resend link click
document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    inputs.forEach(input => {
        input.value = ''; // Clear the input value
    });
    inputs[0].focus(); // Focus back to the first input field
});

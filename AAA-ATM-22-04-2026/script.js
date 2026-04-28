let inputs = document.querySelectorAll(".form-otp-control");
let currentIndex = 0;
let correctPin = "1234"; // you can change this

function handleDialerButton(number) {
    if (currentIndex < inputs.length) {
        inputs[currentIndex].value = number;
        currentIndex++;
    }
}

// DELETE button (X)
document.querySelectorAll(".btn")[x].addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        inputs[currentIndex].value = "";
    }
});

function checkCorrectPin() {
    let enteredPin = "";

    inputs.forEach(input => {
        enteredPin += input.value;
    });

    if (enteredPin.length < 4) {
        alert("Please enter 4-digit PIN");
        return;
    }

    if (enteredPin === correctPin) {
        alert("✅ Correct PIN! Access Granted");
    } else {
        alert("❌ Wrong PIN");
    }

    // Reset after checking
    inputs.forEach(input => input.value = "");
    currentIndex = 0;
}
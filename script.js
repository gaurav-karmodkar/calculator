let screen = document.getElementById("screen");
let currentExpression = "";

function appendToScreen(value) {
    currentExpression += value;
    screen.value = currentExpression;
}

function clearScreen() {
    currentExpression = "";
    screen.value = "";
}

function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    screen.value = currentExpression;
}

function calculateResult() {
    try {
        if (/\/0(?!\d)/.test(currentExpression)) { 
            screen.value = "Cannot divide by zero";  // Specific error message
        } else {
            let result = eval(currentExpression);
            if (result === Infinity || result === -Infinity || isNaN(result)) {
                screen.value = "Cannot divide by zero";
            } else {
                screen.value = result;
                currentExpression = result.toString(); // Keep result for further calculations
            }
        }
    } catch {
        screen.value = "Error!";
    }
}

// Allow keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendToScreen(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearScreen();
    }
});
var display = document.getElementById('display');
function append(value) {
    if (display) {
        display.value += value;
    }
}
function clear() {
    if (display) {
        display.value = '';
    }
}
function calculate() {
    if (display) {
        try {
            display.value = eval(display.value).toString();
        }
        catch (error) {
            display.value = 'Error';
        }
    }
}
function showMessage(message) {
    alert("Message: ".concat(message));
}
document.addEventListener("DOMContentLoaded", function () {
    showMessage("TypeScript is now functional!");
});

let display = document.getElementById('display') as HTMLInputElement;

function append(value: string) {
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
        } catch (error) {
            display.value = 'Error';
        }
    }
}
function showMessage(message: string): void {
    alert(`Message: ${message}`);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showMessage("TypeScript is now functional!");
  });
  


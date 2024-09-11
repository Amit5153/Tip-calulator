
const btnE1 = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
const resetBtn = document.getElementById("reset");
const errorMessage = document.getElementById("error-message"); 

function calculateTotal() {
    const billValue = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);

   
    if (isNaN(billValue) || isNaN(tipValue) || billValue <= 0 || tipValue < 0) {
        errorMessage.innerText = "Please enter valid numbers for bill and tip.";
        errorMessage.style.display = "block"; // Show error message
        totalSpan.innerText = ""; // Clear previous total
        return;
    } else {
        errorMessage.style.display = "none"; 
    }

    // Calculate total value
    const totalValue = billValue * (1 + tipValue / 100);

    // Display total with two decimal points
    totalSpan.innerText = totalValue.toFixed(2);
}


btnE1.addEventListener("click", calculateTotal);


function resetFields() {
    billInput.value = "";
    tipInput.value = "";
    totalSpan.innerText = "";
    errorMessage.style.display = "none"; // Hide error message
}

// Event listener for Reset button
resetBtn.addEventListener("click", resetFields);


const tipButtons = document.querySelectorAll(".tip-button");
tipButtons.forEach(button => {
    button.addEventListener("click", function () {
        tipInput.value = this.getAttribute("data-tip"); 
        calculateTotal(); 
    });
});

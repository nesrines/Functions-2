document.getElementById("Calculate").onclick = () => {
    let amount = parseFloat(document.getElementById("Amount").value);
    let period = parseInt(document.getElementById("Period").value);
    let percent = parseFloat(document.getElementById("Percent").value);
    if (!isNaN(amount) && !isNaN(period) && !isNaN(percent)) {
        let total = (amount + amount * percent / 100).toFixed(2);
        document.getElementById("Monthly").innerHTML = `${(total / period).toFixed(2)} AZN`;
        document.getElementById("Total").innerHTML =  `${total} AZN`;
        document.getElementById("Order").style.display = "inline-block";
    }
}
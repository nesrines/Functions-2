document.getElementById("Calculate").onclick = () => {
    let amount = parseInt(document.getElementById("Amount").value);
    let period = parseInt(document.getElementById("Period").value);
    let percent = parseFloat(document.getElementById("Percent").value);
    document.getElementById("Monthly").innerHTML = ((amount + amount * percent / 100) / period).toFixed(2);
    document.getElementById("Total").innerHTML = amount + amount * percent / 100;
}
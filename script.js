let numbers = [];


function generateArray() {
    numbers = [];

    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 10) + 1);
    }

    
    document.getElementById("arrayOutput").style.display = "none";
    document.getElementById("result").innerText = "";
}

function checkGuess() {
    let guess = parseInt(document.getElementById("guess").value);

    if (numbers.length === 0) {
        document.getElementById("result").innerText =
            "You must generate the array first!";
        return;
    }

    if (isNaN(guess) || guess < 1 || guess > 10) {
        document.getElementById("result").innerText =
            "Please enter a valid number (1–10)";
        return;
    }

    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === guess) {
            count++;
        }
    }

  
    document.getElementById("result").innerText =
        "Your number appears " + count + " time(s).";

    document.getElementById("arrayOutput").innerText =
        "Generated Array: " + numbers.join(", ");
    document.getElementById("arrayOutput").style.display = "block";
}

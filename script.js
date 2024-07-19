let min, max, guess;

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('reset-btn').addEventListener('click', resetGame);
document.getElementById('yes-btn').addEventListener('click', handleYes);
document.getElementById('no-btn').addEventListener('click', handleNo);
document.getElementById('greater-btn').addEventListener('click', handleGreater);
document.getElementById('less-btn').addEventListener('click', handleLess);

function startGame() {
    min = 1;
    max = 100;
    document.getElementById('start-btn').classList.add('d-none');
    document.getElementById('guess-section').classList.remove('d-none');
    guessNumber();
}

function guessNumber() {
    if (min <= max) {
        guess = Math.floor((min + max) / 2);
        document.getElementById('guess-number').textContent = `¿Es tu número el ${guess}?`;
    } else {
        document.getElementById('result').textContent = "No pude adivinar tu número.";
    }
}

function handleYes() {
    document.getElementById('result').textContent = `¡Tu número es el ${guess}, excelente decisión!`;
    document.getElementById('guess-section').classList.add('d-none');
    document.getElementById('reset-btn').classList.remove('d-none');

    // Confetti effect
    confetti({
        particleCount: 50,
        spread: 75,
        origin: { y: 0.6 }
    });
}

function handleNo() {
    document.getElementById('yes-btn').classList.add('d-none');
    document.getElementById('no-btn').classList.add('d-none');
    document.getElementById('greater-btn').classList.remove('d-none');
    document.getElementById('less-btn').classList.remove('d-none');
}

function handleGreater() {
    min = guess + 1;
    document.getElementById('greater-btn').classList.add('d-none');
    document.getElementById('less-btn').classList.add('d-none');
    document.getElementById('yes-btn').classList.remove('d-none');
    document.getElementById('no-btn').classList.remove('d-none');
    guessNumber();
}

function handleLess() {
    max = guess - 1;
    document.getElementById('greater-btn').classList.add('d-none');
    document.getElementById('less-btn').classList.add('d-none');
    document.getElementById('yes-btn').classList.remove('d-none');
    document.getElementById('no-btn').classList.remove('d-none');
    guessNumber();
}

function resetGame() {
    document.getElementById('result').textContent = '';
    document.getElementById('reset-btn').classList.add('d-none');
    document.getElementById('start-btn').classList.remove('d-none');
    document.getElementById('guess-section').classList.add('d-none');
}

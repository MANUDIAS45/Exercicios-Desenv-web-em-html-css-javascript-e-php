function generateCombinations() {
    const letters = document.getElementById('lettersInput').value;
    const resultElement = document.getElementById('result');

    if (letters.length !== 3) {
        resultElement.textContent = "Por favor, digite exatamente 3 letras.";
        return;
    }

    const combinations = getCombinations(letters);
    resultElement.textContent = `Combinações: ${combinations.join(', ')}`;
}

function getCombinations(letters) {
    const combinations = new Set();

    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < letters.length; k++) {
                if (i !== j && j !== k && i !== k) {
                    combinations.add(letters[i] + letters[j] + letters[k]);
                }
            }
        }
    }

    return Array.from(combinations);
}

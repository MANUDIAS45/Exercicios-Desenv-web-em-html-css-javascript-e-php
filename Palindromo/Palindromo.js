function Palindromo(palavra) {
    // Converte a palavra para minúsculas e remove espaços
    palavra = palavra.toLowerCase().replace(/\s+/g, '');

    // Reverte a palavra
    var palavraReversa = palavra.split('').reverse().join('');

    // Verifica se a palavra original é igual à palavra reversa
    return palavra === palavraReversa;
}

// Exemplo de uso
var palavra = "Radar";
if (Palindromo(palavra)) {
    console.log(palavra + " é um palíndromo.");
} else {
    console.log(palavra + " não é um palíndromo.");
}


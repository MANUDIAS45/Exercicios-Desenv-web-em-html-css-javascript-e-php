function Palindromo(palavra) {
    
    // Converte a palavra para minúscula e remove espaços
        palavra = palavra.toLowerCase().replace(/\s+/g, '');
    
    // Reverte a palavra
        var palavraReversa = palavra.split('').reverse().join('');
    
    // Verifica se a palavra original é igual à palavra reversa
        return palavra === palavraReversa;
    } 
    
    // Exemplo 
    var palavra ="Raiar";
    if (Palindromo(palavra)) {
        console.log(palavra + " é um palíndromo.");
    } else {
        console.log(palavra + " não é um palíndromo.");
    }
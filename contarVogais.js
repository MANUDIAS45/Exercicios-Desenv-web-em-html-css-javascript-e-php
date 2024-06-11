function contarVogais(frase) {
    // Define as vogais
    const vogais = 'aeiouAEIOU';
    let contagem = 0;

    // Percorre cada caractere da frase
    for (let char of frase) {
        // Se o caractere for uma vogal, incrementa o contador
        if (vogais.includes(char)) {
            contagem++;
        }
    }

    return contagem;
}

// Exemplo de uso
let frase = "Eu sou uma tonta6.";
let contagemVogais = contarVogais(frase);
console.log("Número de vogais na frase: " + contagemVogais);

function contarVogais(frase) {
 // Define as vogais
    const vogais = 'aeiouAEIOU';
    let contagem = 0;

 // Percorre cada caracter da frase
    for (let char of frase) {
 // Se o caracter for uma vogal, incrementa o contador
        if (vogais.includes(char)) {
            contagem++;
        }
    }

    return contagem;
}

// Exemplo 
let frase = "Eu sou uma tonta.";
let contagemVogais = contarVogais(frase);
console.log("Número de vogais na frase: " + contagemVogais);

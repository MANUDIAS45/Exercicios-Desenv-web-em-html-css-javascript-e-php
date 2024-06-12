const container = document.querySelector(".container");
const botaoReiniciar = document.querySelector("button");
let primeiraCarta = "";
let segundaCarta = "";
let bloqueio = false;

// Imagens
const items = [
    {nome: "cachorro", imagem: "imagens/cachorro-png.png"},
    {nome: "coelho", imagem: "imagens/coelho-png.png"},
    {nome: "elefante", imagem: "imagens/elefante-png.png"},
    {nome: "gato", imagem: "imagens/gato-png.png"},
    {nome: "hipopotamo", imagem: "imagens/hipopotamo-png.png"},
    {nome: "leao", imagem: "imagens/leao-png.png"},
    {nome: "tigre", imagem: "imagens/tigre-png.png"},
    {nome: "urso", imagem: "imagens/urso-png.png"}
    
];

function criarCartas() {
    let itemsDuplicado = [...items, ...items];
    // Organizar as imagens de forma aleatória
    let animais = itemsDuplicado.sort(() => Math.random() - 0.5);

    animais.forEach(animal => {
        const carta = document.createElement("div");
        carta.classList.add("carta");
        carta.dataset.carta = animal.nome;

        const atras = document.createElement("div");
        atras.classList.add("atras");
        atras.textContent = "?";

        const frente = document.createElement("div");
        frente.classList.add("frente");

        const img = document.createElement("img");
        img.src = animal.imagem;
        img.width = 180;
        img.height = 180;

        frente.appendChild(img);
        carta.appendChild(atras);
        carta.appendChild(frente);

        carta.addEventListener("click", virarCarta);

        container.appendChild(carta);
    });
}

function virarCarta() {
    if (bloqueio) return;
    if (this === primeiraCarta) return;

    this.classList.add("virada");

    if (!primeiraCarta) {
        // Primeiro clique
        primeiraCarta = this;
        return;
    }

    // Segundo clique
    segundaCarta = this;
    verificarCartas();
}

function verificarCartas() {
    let eMatch = primeiraCarta.dataset.carta === segundaCarta.dataset.carta;

    eMatch ? desativarCartas() : desvirarCartas();
}

function desativarCartas() {
    primeiraCarta.removeEventListener("click", virarCarta);
    segundaCarta.removeEventListener("click", virarCarta);

    resetarCartas();
}

function desvirarCartas() {
    bloqueio = true;

    setTimeout(() => {
        primeiraCarta.classList.remove("virada");
        segundaCarta.classList.remove("virada");

        resetarCartas();
    }, 1000);
}

function resetarCartas() {
    [primeiraCarta, segundaCarta] = ["", ""];
    bloqueio = false;
}

botaoReiniciar.addEventListener("click", () => {
    container.innerHTML = "";
    criarCartas();
    resetarCartas();
});

criarCartas();

// cria referência aos elementos da página

var outFrutas = document.getElementById("outFrutas");
var imgBanana = document.getElementById("imgBanana");
var imgMorango = document.getElementById("imgMorango");
var imgLaranja = document.getElementById("imgLaranja");
var imgMaca = document.getElementById("imgMaca");
var imgUva = document.getElementById("imgUva");
var divJogo = document.getElementById("divJogo");
var btVerificar = document.getElementById("btVerificar");
var btJogarNovamente = document.getElementById("btJogarNovamente")
var divBotoes = document.getElementById("divBotoes");

var ctBanana = 0;
var ctMorango = 0;
var ctLaranja = 0;
var ctMaca = 0;
var ctUva = 0;

var num = 0;

function adicionaFruta(fruta) {

    // cria um novo elemento na página
    var novaImagem = document.createElement("img");
    if (fruta == "banana") { ctBanana++ }
    if (fruta == "morango") { ctMorango++ }
    if (fruta == "laranja") { ctLaranja++ }
    if (fruta == "maca") { ctMaca++ }
    if (fruta == "uva") { ctUva++ }

    // muda propriedades do elemento
    novaImagem.src = "img/" + fruta + ".png";
    novaImagem.textAlt = "Imagem de " + fruta;
    novaImagem.className = "img-" + fruta;

    num++;
    var idImg = "img" + num;
    novaImagem.id = idImg;

    novaImagem.onclick = function() {
        if (fruta == "banana") { ctBanana-- }
        if (fruta == "morango") { ctMorango-- }
        if (fruta == "laranja") { ctLaranja-- }
        if (fruta == "maca") { ctMaca-- }
        if (fruta == "uva") { ctUva-- }
        removerFruta(idImg)

    };

    // indica que o elemento criado é filho de divJogo
    divJogo.appendChild(novaImagem);

    if (num == 1) { divBotoes.className = "d-inline"; }
}

function removerFruta(idFruta) {
    var retirar = document.getElementById(idFruta);
    divJogo.removeChild(retirar);
}

imgBanana.addEventListener("click", function() {
    adicionaFruta("banana");
})
imgMorango.addEventListener("click", function() {
    adicionaFruta("morango");
})
imgLaranja.addEventListener("click", function() {
    adicionaFruta("laranja");
})
imgMaca.addEventListener("click", function() {
    adicionaFruta("maca");
})
imgUva.addEventListener("click", function() {
    adicionaFruta("uva");
})

btVerificar.addEventListener("click", verificar);
btJogarNovamente.addEventListener("click", recarregar);

// cria variáveis globais
var numBananas;
var numMorangos;
var numLaranjas;
var numMacas;
var numUvas;

function recarregar() {
    window.location.reload();
}

function verificar() {

    if (ctBanana != numBananas || ctLaranja != numLaranjas || ctMorango != numMorangos || ctMaca != numMacas || ctUva != numUvas) {
        alert("Ops! Você errou a receita. Tente novamente!")
        return
    }
    var frutaAtual = "";
    var vetor = divJogo.getElementsByTagName("img");
    var frutaRepetida = 0;
    for (var x = 0; x < vetor.length - 1; x++) {
        var altFruta = vetor[x].textAlt;
        var vetorFruta = altFruta.split(" ");
        if (frutaAtual == vetorFruta[2]) {
            var frutaAtual = vetorFruta[2];
            frutaRepetida++
        } else { var frutaAtual = vetorFruta[2] }
    }
    if (frutaRepetida == 0) {
        alert("Parabéns, você acertou! Sua salada ficou ótima! :)")
    } else { alert("Ops! Você não misturou as frutas") }
}

function sorteiaFrutas() {
    // gera um valor aleatório entre 1 e 5 para cada fruta

    numBananas = Math.ceil(Math.random() * 5);
    numMorangos = Math.ceil(Math.random() * 5);
    numLaranjas = Math.ceil(Math.random() * 5);
    numMacas = Math.ceil(Math.random() * 5);
    numUvas = Math.ceil(Math.random() * 5);

    outFrutas.textContent =
        numBananas + " Banana(s) :: " +
        numMorangos + " Morango(s) :: " +
        numLaranjas + " Laranja(s) :: " +
        numMacas + " Maca(s) :: " +
        numUvas + " Uva(s)"
}

// evento que ocorre quando a página é carregada

window.addEventListener("load", sorteiaFrutas);
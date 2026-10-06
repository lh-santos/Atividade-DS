let nome = document.getElementById("nome");

let nomeadd = window.prompt("Qual o seu nome?");

if (nomeadd) {
    nome.textContent = nomeadd;
}
function oculto() {

    let texto = document.getElementById("texto");
    let cartao = document.getElementById("body-cartao");


    texto.textContent = "Você acabou de descobrir o outro lado do meu cartão!";

    cartao.style.backgroundColor = "#1e1e2f";
    cartao.style.color = "#bf7bfe";
    cartao.style.transform = "rotateY(360deg)";


    alert("Você clicou no botão! O cartão foi alterado.");
}

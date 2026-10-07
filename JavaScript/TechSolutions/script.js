
var modoEscuroAtivo = false;




function corOriginalTitulo() {
  if (modoEscuroAtivo) {
    return "#f2a900";
  }
  return "";
}

function conhecerEmpresa() {
  var mensagem = document.getElementById("mensagem");
  var titulo = document.getElementById("titulo");

  mensagem.textContent =
    "Bem-vindo à TechSolutions! Estamos prontos para transformar sua ideia em realidade.";
  mensagem.style.color = "#ffffff";
  mensagem.style.backgroundColor = "#2e9e5b";

  titulo.style.color = "#e8590c";

  alert("Bem-vindo à TechSolutions!");
}

// Função específica para restaurar a página
function restaurarPagina() {
  var mensagem = document.getElementById("mensagem");
  var titulo = document.getElementById("titulo");

  mensagem.textContent = "Clique no botão para conhecer nossa empresa.";
  mensagem.style.color = "";
  mensagem.style.backgroundColor = "";

  titulo.style.color = corOriginalTitulo();
}

function saibaMaisSites() {
  var mensagem = document.getElementById("mensagemServico1");
  mensagem.textContent =
    "Nosso serviço de desenvolvimento de sites cria soluções personalizadas para cada empresa.";
  mensagem.style.color = "#2e9e5b"; 
}

function saibaMaisApps() {
  var mensagem = document.getElementById("mensagemServico2");
  mensagem.textContent =
    "Desenvolvemos aplicativos pensados para facilitar a experiência dos usuários.";
  mensagem.style.color = "#e8590c"; 
}

function saibaMaisSistemas() {
  var mensagem = document.getElementById("mensagemServico3");
  mensagem.textContent =
    "Nossos sistemas ajudam empresas a organizar seus processos e informações.";
  mensagem.style.color = "#7048e8";
}


function enviarMensagem() {
  var mensagem = document.getElementById("mensagemForm");

  mensagem.textContent =
    "Mensagem enviada com sucesso! A equipe TechSolutions entrará em contato em breve.";
  mensagem.style.color = "#2e9e5b";

  alert("Sua mensagem foi enviada!");
}

function pintar(id, fundo, texto) {
  var elemento = document.getElementById(id);
  if (elemento !== null) {
    elemento.style.backgroundColor = fundo;
    elemento.style.color = texto;
  }
}

function modoEscuro() {
  modoEscuroAtivo = true;

  pintar("pagina", "#121a1f", "#e8eef1");

  pintar("card1", "#1e2b33", "#e8eef1");
  pintar("card2", "#1e2b33", "#e8eef1");
  pintar("card3", "#1e2b33", "#e8eef1");

  document.getElementById("titulo").style.color = "#f2a900";
  var apresentacao = document.getElementById("textoApresentacao");
  if (apresentacao !== null) {
    apresentacao.style.color = "#b8c7cf";
  }
  var intro = document.getElementById("introContato");
  if (intro !== null) {
    intro.style.color = "#b8c7cf";
  }
}

function modoClaro() {
  modoEscuroAtivo = false;

  pintar("pagina", "", "");
  pintar("card1", "", "");
  pintar("card2", "", "");
  pintar("card3", "", "");

  document.getElementById("titulo").style.color = "";
  var apresentacao = document.getElementById("textoApresentacao");
  if (apresentacao !== null) {
    apresentacao.style.color = "";
  }
  var intro = document.getElementById("introContato");
  if (intro !== null) {
    intro.style.color = "";
  }
}

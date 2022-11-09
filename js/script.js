//MENU ATIVO 
const links = document.querySelectorAll(".header-menu a");

//ativar link 
function ativarLink(link) {
    //verificar se a url contém a informaçao do href
    const url = location.href;
    const href = location.href;
       //método includes verifica se a palavra existe na string 
       if (url.includes(href)){
        //adicionando classe de ativo
        link.classList.add("ativo");
    } 
}

links.forEach(ativarLink);


//Ativar itens do Orçamento

const parametros = new URLSearchParams (location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true; 
    }
}

parametros.forEach(ativarProduto);


//Perguntas Frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    console.log(ativa);
    pergunta.setAttribute('aria-expended', ativa);
   
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

console.log(perguntas);

//GALERIA DE IMAGENS
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//prepend-remove o elemento e joga para outro canto

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}


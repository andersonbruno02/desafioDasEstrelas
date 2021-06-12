const imagem1 = document.getElementById('img1');
const imagem2 = document.getElementById('img2');
const imagem3 = document.getElementById('img3');
const imagem4 = document.getElementById('img4');
const nome1 = document.getElementById('nome1');
const nome2 = document.getElementById('nome2');
const nome3 = document.getElementById('nome3');
const nome4 = document.getElementById('nome4');
const numeroMaximoDePersonagens = 671;

numeroAleatorio = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

pegaPersonagem = (imagem,nome) => {
let id =numeroAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    "Content-Type": 'application/json'
    }
    }).then((response) => response.json()).then((data) => {
    imagem.src = data.image;
    imagem.alt = 'Imagem do personagem: ' + data.name;
    nome.innerHTML = data.name;
    });
    }
    
    pegaPersonagem(imagem1,nome1);
    pegaPersonagem(imagem2,nome2);
    pegaPersonagem(imagem3,nome3);
    pegaPersonagem(imagem4,nome4);
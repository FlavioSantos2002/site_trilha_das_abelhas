
// Crie um elemento de imagem
const imgElement = document.createElement('img');

// Defina os atributos da imagem
imgElement.src = 'https://images2.imgbox.com/f5/bf/g3qwXWBI_o.png';
imgElement.alt = 'Imagem Adicionada com JavaScript';

// Adicione a classe para estilo (opcional)
imgElement.classList.add('centered-image4');

// Encontre o elemento de contêiner onde deseja adicionar a imagem
const imageContainer = document.getElementById('teste');


var botao = document.querySelector("#casa")
var botao2 = document.querySelector("#flor")


botao2.addEventListener("mouseover", function(){

    botao.addEventListener("click", function(){
        // Adicione a imagem ao contêiner
        imageContainer.appendChild(imgElement);
        setTimeout(function() {
            
            imgElement.remove();

            }, 1000);
    })
});









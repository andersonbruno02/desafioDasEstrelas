
<p>O que foi pedido para o desafio foi:</p>

<p>Faça uma página que mostre 4 personagens aleatórios de Rick e Morty e seus nomes
sempre que a página for atualizada.
Essa página serve para ajudar quem não conhece o desenho a conhecer pelo menos seus
personagens, sendo assim a página deve apresentar duas informações: a foto do
personagem e o nome dele.</p>
<p>O que você vai precisar:</p>
<ol>
<li> Um arquivo HTML para os elementos</li>
<li>Um arquivo CSS para deixar organizado</li>
<li>Um arquivo JavaScript para conseguir buscar esse personagens no banco de dados
  da API Rick e Morty</li>
  </ol>

Para resolver:

O processo foi dividido em quatro etapas: Pesquisa na W3 Schools e MDN (presente em todo o processo) e, respectivamente, estrutura, funcionalidade e visual.

Comecei desenvolvendo um "esqueleto" em HTML que continha os elementos básicos para estruturar o site. No cabeçalho coloquei os metadados como protocolo UTF, idioma e a indicação para Javascript e CSS).Já no Main criei quatro sessões com tags de imagem e parágrafo, com uma "id" cada, para poder posteriormente chamá-las resultando no acesso do bloco de imagens e do nome do personagem de acordo com o sorteio. 

Em seguida, passei para as funcionalidades em JavaScript: criei e nomeei constantes para acessar os blocos de imagem (uma espécie de atalho para o "id"), criei uma constante com número máximo de personagens da API e depois criei outra variável e atribui uma função para gerar um número aleatório de 0 até o numero maximo de personagens para fazer o sorteio do personagem. 
Eu  adaptei a função que o professor ensinou para acessar a API e ela recebeu mais dois argumentos (id das tags de imagem e parágrafo do HTML). Com isso eu consigo chamar a função várias vezes, com fotos e nomes diferentes em tags distintas. Inclusive enquanto escrevia esse texto percebia algumas melhorias que poderia fazer para deixar o código ainda mais simples e aí atualizei o programa.

Depois fui para o CSS fazendo algumas alterações para o texto ficar mais "legível" e organizado, utilizei "display:grid" para mostrar os itens em formato de grade com um tamanho predefinido por mim para ficar um visual mais organizado. 

const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const tituloProduto      = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const opcaoImagem0       = document.getElementById('0-imagem-miniatura');
const opcaoImagem1       = document.getElementById('1-imagem-miniatura');
const opcaoImagem2       = document.getElementById('2-imagem-miniatura');

//Criação dos objetos
const verdeCipreste = {
    nome: 'Verde-cipreste',
    nomePastaImagens: 'imagens-verde-cipreste',
}

const rosaClaro = {
    nome: 'Rosa-claro',
    nomePastaImagens: 'imagens-rosa-claro'
}

const meiaNoite = {
    nome: 'Meia-noite',
    nomePastaImagens: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    nomePastaImagens: 'imagens-estelar'
}

const azulInverno = {
    nome: 'azul-inverno',
    nomePastaImagens: 'imagens-azul-inverno'
}

// esta array esta armazenando os objetos logo acima
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

const opcoesTamanho = ['41 mm', '45 mm'];

let corSelecionada = 1;
let tamanhoSelecionado = 1;
let imagemSelecionada = 1;

function atualizarCorSelecionada() {
    const numeroCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0)
    corSelecionada = numeroCorSelecionada
    //textos
    /*nesta linha de código 'opcoesCores[corSelecionada].nome' o "corSelecionada" esta armazenando um numero
    que foi dado pelo "id.charAt(0) e apartir deste numero eu vou na minha array "opcoesCores" e vou pegar
    a cor que estiver na posicao 1 (por exemplo) e ir no meu objeto e pegar o .nome  */ 
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa ' + opcoesTamanho[tamanhoSelecionado]
    nomeCorSelecionada.innerText = 'Cor -' + opcoesCores[corSelecionada].nome
    //imagem grande
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].nomePastaImagens +'/imagem-1.jpeg'
    //imagem miniaturas
    opcaoImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].nomePastaImagens + '/imagem-0.jpeg'
    opcaoImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].nomePastaImagens + '/imagem-1.jpeg'
    opcaoImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].nomePastaImagens + '/imagem-2.jpeg'
}

function atualizarTamanho() {
    const tamanhoCorSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0)
    tamanhoSelecionado = tamanhoCorSelecionado
    tituloProduto.innerText = 'Pulseira loop esportiva azul-inverno para caixa de ' + opcoesTamanho[tamanhoSelecionado]

    //imagem tamanho
    if(tamanhoSelecionado === '0') {
        imagemVisualizacao.classList.add('caixa-pequena')
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena')
    }

}

function atualizarImagemSelecionada() {
    const miniaturaSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0)
    imagemSelecionada = miniaturaSelecionada
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].nomePastaImagens + '/imagem-' + imagemSelecionada + '.jpeg'

}
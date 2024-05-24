import { conectaApi } from "/https---github.com-karinekim-pdvorchgeek.git/js/conectaApi.js";
import constroiCard from "/https---github.com-karinekim-pdvorchgeek.git/js/mostrarProdutos.js";

async function buscarProdutos(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscarProduto(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.preco, elemento.quantia, elemento.tag, elemento.imagem)))

    if (busca.length == 0) {
        lista.innerHTML = `<h3 class="mensagem__titulo">Não existem produto com esse termo</h3>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarProdutos(evento));
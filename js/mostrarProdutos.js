import { conectaApi } from "/https---github.com-karinekim-pdvorchgeek.git/js/conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(produtos) {
    const produtos = document.createElement("li");
    productCard.className = 'produtos';

    produtosCard.innerHTML = `
        <img src="${produtos.imagem}" alt="imagem do produto">
        <div class="produtos-titulo">${produtos.titulo}</div>
        <div class="produtos-descricao">${produtos.descricao}</div>
        <div class="produtos-preco">Preço: $${produtos.preco}</div>
        <div class="produtos-tags">Tag: ${produtos.tag}</div>
        <div class="produtos-quantia">Quantia: ${produtos.quantia}</div>
    `;
    return produtos;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.imagem, elemento.titulo, elemento.descricao, elemento.preco, elemento.tag, elemento.quantia)))
    } catch {
        lista.innerHTML = `<h3 class="mensagem__titulo">Não foi possível carregar a lista de Produtos</h3>`
    }
}

listaProdutos();
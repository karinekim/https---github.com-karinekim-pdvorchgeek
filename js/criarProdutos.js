import { conectaApi } from "/https---github.com-karinekim-pdvorchgeek.git/js/conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProdutos(evento) {
    evento.preventDefault();

    const formData = new FormData();
    formData.append('descricao', description);
    formData.append('preco', price);
    formData.append('quantia', amount);
    formData.append('tag', category);
    formData.append('imagem', fileInput.files[0]);
    try {
        await conectaApi.criarProdutos(titulo, descricao, preco, quantia, tag, imagem);

        window.location.href = "./envio-concluido.html";
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento =>criarProdutos(evento));
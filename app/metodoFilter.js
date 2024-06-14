const botoesFiltros = document.querySelectorAll(".btn");
botoesFiltros.forEach((btn) => btn.addEventListener("click", filtrarDados));

function filtrarDados() {
  const elementosBtn = document.getElementById(this.id);
  const categoria = elementosBtn.value;

  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarDisponibilidadePorQuantidade()
      : filtrarDisponibilidadePorCategoria(categoria);

  exibirLivrosDaApi(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
  }
}
function filtrarDisponibilidadePorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarDisponibilidadePorQuantidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
  elementoParaExibirValorTotal.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `;
}

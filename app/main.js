let livros = [];
const endPointApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
  const res = await fetch(endPointApi);
  livros = await res.json();
  let livroComDesconto = aplicarDesconto(livros);
  exibirLivrosDaApi(livroComDesconto);

  console.table(livros);
}

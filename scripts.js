function adicionarFilme() {
  var campoFilmeFavorito = document.getElementById("filme").value
  var teste = document.querySelector('#filme')
  //var campoFilmeFavorito = document.querySelector('#filme').value
  listarFilmesNaTela(campoFilmeFavorito)
  teste.value = ""
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + filme + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
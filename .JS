document.addEventListener('DOMContentLoaded', function() {
  // Variables para los elementos del DOM
  var botonSortear = document.getElementById('boton-sortear');
  var botonVerLista = document.getElementById('boton-ver-lista');
  var nombreSorteado = document.getElementById('nombre-sorteado');
  var listaParticipantes = document.getElementById('lista-participantes');

  // Evento al hacer clic en el botón de sortear
  botonSortear.addEventListener('click', function() {
    // Obtener un número aleatorio para seleccionar un participante
    var indiceAleatorio = Math.floor(Math.random() * listaParticipantes.children.length);
    // Obtener el nombre del participante sorteado
    var nombreParticipante = listaParticipantes.children[indiceAleatorio].textContent;
    // Mostrar el nombre del participante sorteado
    nombreSorteado.textContent = " " + nombreParticipante;
  });

  // Evento al hacer clic en el botón de ver la lista
  botonVerLista.addEventListener('click', function() {
    // Mostrar u ocultar la lista de participantes
    listaParticipantes.style.display = listaParticipantes.style.display === 'none' ? 'block' : 'none';
  });
});

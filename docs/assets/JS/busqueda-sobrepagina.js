// Funciones para ver o ocultar el cuadro de busqueda en pantalla completa
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// Funcion filtro para poder seleccionar lo que buscamos mientras lo escribimos
function filterFunction() {
  var input, filter, a, i, txtValue;

  input = document.getElementById("buscar");        // Se guarda en una variable la infromacion que se va escribiendo en el input
  filter = input.value.toUpperCase();               // Lo que se va escribiendo se guarda en un formato especifico
  div = document.getElementById("overlayContent");  // Se guarda el contenedor de todas las etiquetas "a" de opciones
  a = div.getElementsByTagName("a");                // Se guardan todas las etiquetas donde vienen las opciones

  // Ciclo para ir comparando letra por letra y mostrando opciones
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


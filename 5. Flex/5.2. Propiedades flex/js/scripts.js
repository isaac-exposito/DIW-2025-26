$(document).ready(function () {
  // Obtenemos el texto del h2 de la página
  var textoH2 = $("h2").text();

  // Cargamos la barra de navegación
  $("nav").load("./inc/_nav.html", function () {
    // Buscamos el enlace cuyo texto coincide con el texto del h2
    $("nav a").each(function () {
      if ($(this).text() === textoH2) {
        $(this).addClass("active");
      }
    });
  });
});

function showSizes() {
  // Recorremos cada elemento con la clase .item y mostramos el ancho total (border-box)
  // Usamos outerWidth() para incluir padding y bordes en la medida
  $(".item").each(function () {
    $(this)
      .find(".width-indicator")
      .text($(this).outerWidth().toFixed(1) + "px");
  });
}

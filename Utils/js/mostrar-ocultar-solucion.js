// cSpell: disable
$(document).ready(function () {
  $("#mostrar-solucion").on("click", function () {
    $("#solucion-codigo").slideToggle();
    const textoBoton = $(this).find(".texto-boton");
    const iconoBoton = $(this).find(".bi");
    if (textoBoton.text() === "Mostrar solución") {
      textoBoton.text("Ocultar solución");
      iconoBoton.removeClass("bi-chevron-down").addClass("bi-chevron-up");
    } else {
      textoBoton.text("Mostrar solución");
      iconoBoton.removeClass("bi-chevron-up").addClass("bi-chevron-down");
    }
  });
});

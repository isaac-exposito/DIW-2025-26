function showSizes() {
  // Recorremos cada elemento con la clase .item y mostramos el ancho total (border-box)
  // Usamos outerWidth() para incluir padding y bordes en la medida
  $(".item").each(function () {
    $(this)
      .find(".width-indicator")
      .text($(this).outerWidth().toFixed(1) + "px");
  });
}

// Añadir un botón de "click para copiar"
var snippets = document.getElementsByTagName("pre");
var numberOfSnippets = snippets.length;

// Iterar sobre todos los elementos <pre>
for (let i = 0; i < numberOfSnippets; i++) {
  // Obtener el <code> dentro del <pre>
  let codeElement = snippets[i].getElementsByTagName("code")[0];
  // Obtener el texto del código
  let code = codeElement.innerText;

  // Crear el botón de copiar
  let copyButton = document.createElement("button");
  copyButton.className = "hljs-copy";
  copyButton.innerText = "Copiar";

  // Añadir el botón antes del <code> sin sobrescribir el contenido de <pre>
  snippets[i].insertBefore(copyButton, codeElement);

  // Agregar el event listener al botón para copiar el código
  copyButton.addEventListener("click", function () {
    this.innerText = "Copiando..."; // Cambiar el texto del botón

    // Intentar copiar el código usando la API del portapapeles
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          this.innerText = "¡Copiado!";
        })
        .catch((err) => {
          console.error("Error al copiar:", err);
          this.innerText = "Error";
        });
    } else {
      // Fallback para navegadores que no soportan clipboard API (como Safari)
      prompt("Selecciona el texto y copia manualmente: ⌘+a, ⌘+c", code);
      this.innerText = "¡Copiado!";
    }

    // Restablecer el texto del botón después de 1 segundo
    setTimeout(() => {
      this.innerText = "Copiar";
    }, 1000);
  });
}

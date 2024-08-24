// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     Swal.fire({
//         title: '¡Formulario enviado!',
//         text: 'El formulario se ha enviado correctamente.',
//         icon: 'success',
//         confirmButtonText: 'Aceptar'
//     });
// });

$(document).ready(function () {
  $("#contact-form").on("submit", function (event) {
    event.preventDefault();
    Swal.fire({
      title: "¡Formulario enviado!",
      text: "El formulario se ha enviado correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  });
});

document.getElementById("contact-form").addEventListener("mouseover", function () {
  this.style.backgroundColor = "#e1e1e1";
});

document.getElementById("contact-form").addEventListener("mouseout", function () {
  this.style.backgroundColor = "#fff";
});

document.getElementById("name").addEventListener("input", function () {
  console.log("Nombre ingresado:", this.value);
});

document.getElementById("message").addEventListener("keydown", function (event) {
  console.log("Tecla presionada:", event.key);
});

const images = document.querySelectorAll(".image-gallery img");
images.forEach((image) => {
  image.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.2)";
  });

  image.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
  });
});

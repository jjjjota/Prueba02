// Inicializar con evento ready
$(function() {

  // Prevenir evento de los logos
  $('a').click(function(event) {
    if ($(this).attr('href') == '#') {
      event.preventDefault();
    };
  });

  // Añadir/eliminar la clase .tuit__heart--liked al hacer click sobre .tuit__heart
  $(".boardTuits").on('click', '.tuit__heart', function(event) {
    event.preventDefault();  // prevenir evento

    var counter = $(this).next(),  // obtengo el elemento con el número de likes
        newCounter;                // aquí se guardará el nuevo valor
    counter.text(newCounter);  // se actualiza el string

    if (!$(this).hasClass('tuit__heart--liked')) {
      newCounter = parseInt(counter.text()) + 1;

      $(this).addClass('tuit__heart--liked');
    }
    else {
      newCounter = parseInt(counter.text()) - 1;

      $(this).removeClass('tuit__heart--liked');
    }

    counter.text(newCounter);
  });

  // Eliminar el div .tuit al hacer click sobre .tuit__trash
  $(".boardTuits").on('click', '.tuit__trash', function(event) {
    event.preventDefault();

    var tuit = $(this).parents('.tuit');

    tuit.fadeOut(650);  // linda desaparición
    setTimeout(function() {
      tuit.remove();  // remover el elemento del DOM luego de 2 seg
    }, 2000);
  });

  // Obtener imagen del input y actualizar src de img
  $('.createTuit__file').change(function(e) {
    var file   = e.target.files[0] || window.event.srcElement.files[0],
        reader = new FileReader(),
        image  = $(this).prev();

    reader.onload = function (event) {
      image.attr('src', event.target.result);  // reemplazarlo en la ruta de la imagen
    };

    reader.readAsDataURL(file);
  });

  // Obtener data del form y crear tuit
  $('form').submit(function(event) {
    event.preventDefault();  // prevenir evento

    var image = $(this).children('.createTuit__image').attr('src'),  // obtener source
        quote = $(this).children('.createTuit__quote').val();

    var template = $('article#template').clone().removeAttr('id'); // clonar el template

    template.children('.tuit__image').attr('src', `${image}`); // setear la imagen
    template.find('.tuit__quote').text(`${quote}`);  // setear el texto
    $(template).prependTo('.boardTuits').hide().fadeIn(1350); // agregar tuit

    $(this).children('textarea').val(''); // limpiar sólo textarea del form
  });
});

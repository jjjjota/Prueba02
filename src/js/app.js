// 01: inicializar con evento ready
$(function() {

  // prevenir evento de los logos
  $('a').click(function(event) {
    if ($(this).attr('href') == '#') {
      event.preventDefault();
    };
  });

  // 02: Añadir/eliminar la clase .tuit__heart--liked al hacer click sobre .tuit__heart
  $(".boardTuits").on('click', '.tuit__heart', function(event) {
    event.preventDefault();  // prevenir evento

    $(this).addClass('tuit__heart--liked');

    var counter = $(this).next(),  // obtengo el elemento con el número de likes
        newCounter = parseInt(counter.text()) + 1;  // su string se convierte a number y se suma 1

    counter.text(newCounter);  // se actualiza el string

    // SI LOS LIKES NO FURAN INFINITOS
    // if (!$(this).hasClass('tuit__heart--liked')) {
    //   newCounter = parseInt(counter.text()) + 1;
    //
    //   $(this).addClass('tuit__heart--liked');
    // }
    // else {
    //   newCounter = parseInt(counter.text()) - 1;
    //
    //   $(this).removeClass('tuit__heart--liked');
    // }
    //
    // counter.text(newCounter);
  });

  // 03: Eliminar el div .tuit al hacer click sobre .tuit__trash
  $(".boardTuits").on('click', '.tuit__trash', function(event) {
    event.preventDefault();

    var tuit = $(this).parents('.tuit');

    tuit.fadeOut(650);  // linda desaparición
    setTimeout(function() {
      tuit.remove();  // remover el elemento del DOM luego de 0.5 seg
    }, 2000);
  });

  // 04: Obtener imagen del input y actualizar src de img
  $('.createTuit__file').change(function(e) {
    var source = e.target.files[0].path;  // obtener ruta
    $(this).prev().attr('src', source);  // reemplazarlo en la ruta de la imagen
  });

  // 05: Obtener data del form y crear tuit
  $('form').submit(function(event) {
    event.preventDefault();  // prevenir evento

    var image = $(this).children('.createTuit__image').attr('src'),  // obtener source
        quote = $(this).children('.createTuit__quote').val();

    if (image == 'images/uk.png' || quote === '' ) {
      return; // si no ha puesto foto ni escrito algo, no agregar tuit
    }

    var template = $('article#template').clone().removeAttr('id'); // clonar el template

    template.children('.tuit__image').attr('src', `${image}`); // setear la imagen
    template.find('.tuit__quote').text(`${quote}`);  // setear el texto
    $(template).prependTo('.boardTuits').hide().fadeIn(1350); // agregar tuit

    $(this).children('textarea').val(''); // limpiar sólo textarea del form

    // reset todo el form, incluso la imagen
    // $(this)[0].reset();
    // $(this).children(":first-child").attr('src', 'images/uk.png');

  });
});

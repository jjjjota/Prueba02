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

    tuit.fadeOut(500);  // linda desaparición
    setTimeout(function() {
      tuit.remove();  // remover el elemento del DOM luego de 0.5 seg
    }, 600);
  });

  // 04: Obtener imagen del select y cambiarla actualizar src de img
  $("select#file").change(function() {
    var value = $(this).val(),  // obtener valor
        source = `images/${value}`;

    $(this).prev().attr('src', source);  // reemplazarlo en la ruta de la imagen
  });

  // 05: Obtener data del form y crear tuit
  $('form').submit(function(event) {
    event.preventDefault();  // prevenir evento

    var data = $(this).serializeArray(),  // obtener data
        image = data[0].value,
        quote = data[1].value;

    if (image == 'uk.png') {
      return; // si no ha puesto foto, no agregar tuit
    }

    var template = $('article#template').clone().removeAttr('id'); // clonar el template

    template.children('.tuit__image').attr('src', `images/${image}`); // setear la imagen
    template.find('.tuit__quote').text(`${quote}`);  // setear el texto
    $(template).prependTo('.boardTuits').hide().fadeIn(1000); // agregar tuit

    $(this).children('textarea').val(''); // limpiar sólo textarea del form

    // reset todo el form, incluso la imagen
    // $(this)[0].reset();
    // $(this).children(":first-child").attr('src', 'images/uk.png');

  });
});

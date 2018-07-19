// 01: inicializar con evento ready
$(function() {

  $('a').click(function(event) {
    if ($(this).attr('href') == '#') {
      event.preventDefault();  // prevenir evento de los logos vacíos
    };
  });

  // 02: Añadir/eliminar la clase .boardTuits__heart--liked al hacer click sobre .boardTuits__heart
  $(".boardTuits").on('click', '.boardTuits__heart', function(event) {
    event.preventDefault();  // prevenir evento

    $(this).addClass('boardTuits__heart--liked');

    var counter = $(this).next(),  // obtengo el elemento con el número de likes
        newCounter = parseInt(counter.text()) + 1;  // obtengo el string, se convierte a number y se suma 1

    counter.text(newCounter);  // se actualiza el string

    // ESTE DEBERÍA SER LO CORRECTO: NO LIKES INFINITOS >:(
    // if (!$(this).hasClass('boardTuits__heart--liked')) {
    //   newCounter = parseInt(counter.text()) + 1;
    //
    //   $(this).addClass('boardTuits__heart--liked');
    // } else {
    //   newCounter = parseInt(counter.text()) - 1;
    //
    //   $(this).removeClass('boardTuits__heart--liked');
    // }
    // counter.text(newCounter);
  });

  // 03: Eliminar el div .boardTuits__tuit al hacer click sobre .boardTuits__trash
  $(".boardTuits").on('click', '.boardTuits__trash', function(event) {
    event.preventDefault();

    var tuit = $(this).parents('.boardTuits__tuit');

    tuit.fadeOut(500);  // linda desaparición
    setTimeout(function() {
      tuit.remove();  // remover el elemento del DOM luego de 0.5 seg
    }, 500);
  });

  // 04: Obtener imagen del input y cambiarla en img
  $("[name='file']").change(function(event) {
    var value = $(event.target).val(),  // obtener valor
        source = `images/${value}`;

    $(this).siblings('img').attr('src', source);  // reemplazarlo en la ruta de la imagen
  });

  // 05: Obtener data del form y crear tuit
  $('form').submit(function(event) {
    event.preventDefault();  // prevenir evento

    var data = $(this).serializeArray(),  // obtener data
        image = data[0].value,
        quote = data[1].value;

    if (image == 'uk.png') { // si no ha puesto foto, no agregar tuit
      return;
    }

    var tuit = `<article class="tuit">\
        <img class="tuit__image" src="images/${image}" alt="author" />\

        <div class="tuit__border">\
          <div class="tuit__quote">\
            ${quote}\
          </div>\

          <div class="tuit__features">\
            <div class="tuit__item tuit__heart"><a href='#'><i class="fas fa-heart"></i></a></div>\
            <div class="tuit__item">0</div>\
            <div class="tuit__item tuit__trash"><a href='#'><i class="far fa-trash-alt"></i></a></div>\
          </div>\

        </div>\
      </article>`

    $(tuit).prependTo('.boardTuits').hide().fadeIn(500); // agregar tuit

    $(this)[0].reset();  // limpiar form

    $(this).children(":first-child").attr('src', 'images/uk.png');
  });
});

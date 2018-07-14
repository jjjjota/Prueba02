// TODO: delimitar 140 caracteres

// 01: inicializar con evento ready
$(function() {

  // 02: Añadir/eliminar la clase .boardTuits__heart--liked al hacer click sobre .boardTuits__heart
  $(".boardTuits__tuit").on('click', '.boardTuits__heart', function(event) {
    event.preventDefault();

    var counter = $(this).next(),
        newCounter;

    if (!$(this).hasClass('boardTuits__heart--liked')) {
      newCounter = parseInt(counter.text()) + 1;

      $(this).addClass('boardTuits__heart--liked');
    } else {
      newCounter = parseInt(counter.text()) - 1;

      $(this).removeClass('boardTuits__heart--liked');
    }

    counter.text(newCounter);
  });

  // 03: Eliminar el div .boardTuits__tuit al hacer click sobre .boardTuits__trash
  $(".boardTuits__tuit").on('click', '.boardTuits__trash', function(event) {
    event.preventDefault();

    var tuit = $(this).parents('.boardTuits__tuit');

    tuit.fadeOut(500);
    setTimeout(function() {
      tuit.remove();
    }, 500);
  });

  // 04: Agegar imagen seleccionada en el select #image
  // $("select#image").change(function(event) {
  //   var value = $(event.target).val(),
  //       source = `../src/images/${value}`;
  //
  //   p = $(this).siblings().children().attr('src', source);

    // .children('.createTuit__image').attr('src', source);
  // });
});

$(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-inverse");
    } else {
        $("#menu").removeClass("bg-inverse");
    }
  });
  $('.galeria_img').click(function(e){
    var img = e.target.src;
    var modal = '<div class="modal" id="modal"><img src="'+ img + '" class="modal_img"><div class="modal_boton" id="modal_boton">X</div></div>';
    $('body').append(modal);
    $('#modal_boton').click(function(){
      $('#modal').remove();
    })
  });
  
  
  $(document).keyup(function(e){
    if (e.which==27) {
      $('#modal').remove();
    }
  })
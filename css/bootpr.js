$(document).ready(function() {

  $('#emailInpute').focusout(function() {

    if($(this).val().indexOf('@') > -1 &&  $(this).val().indexOf('.') > -1){
        $('.status').html("Valid email");
      } else{
        $('.status').html("You typed incorrent email");
      }
    });

});

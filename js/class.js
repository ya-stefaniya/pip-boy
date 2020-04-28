$(document).ready(function() {


     $ ('#go-button').on('click', function () {
       alert("fantsatic code writing!");
});

      $(document).on('contextmenu', function() {
        return false;
      });


      $(document).on('mousedown', function(event){
        event.stopPropagation();

            if (event.which==3) {

              $('.hidden').removeClass('shown');
              if($(event.target).is('img')){
                $ ('.saveimg , .newtab').addClass('shown');
              }


              console.log(event.pageY, event.pageX);

                $('#context').css({
                 top:event.pageY,
                 left:event.pageX
               });

                $('#context').fadeIn();
                return false;
            }
                $('#context').fadeOut();
      });

      $('textarea').focusin(function() {
        console.log("The text area has been focused");
      });

      $('.text').focusout(function() {
        console.log("Text area has lost focus");
      });

      $('input').focusout(function() {

        if($(this).val().indexOf('@') > -1 &&  $(this).val().indexOf('.') > -1){
            $('.status').html("Valid email");
          } else{
            $('.status').html("You typed incorrent email");
          }
        });


      });


      $('[data-trigger="dropdown"]').on("mouseenter", function() {
         var submenu = $(this).parent().find('#profile-submenu');
         submenu.fadeIn(300);

         $('#profile-submenu').on("mouseleave", function(){
           submenu.fadeOut(300);
          })
      });

      $('#prepend,#append,#replace').on('click',function(e){
        var el=$(e.currentTarget);
        var action= el.attr('id');
        var content=$('.text').val();

        if(action == "prepend") {
          console.log("prepending",content);
          $('#main').prepend(content);

          }else if (action=="append") {
            console.log("appending");
            $('#main').append(content);

            }else if (action =="replace") {
              console.log("replacing");
              $('#main').html(content);
              }

            });

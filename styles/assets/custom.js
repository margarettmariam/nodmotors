$(document).ready(function(){
   $(".navbar-toggler").click(function(){
       $(this).toggleClass("expanded");
       $(".navigation").toggleClass("expanded");
   });

    $(".book-btn").click(function(){
        $("body").toggleClass("modal-open");
    });

    $("form.inputs").submit(function(e){
        e.preventDefault();
        $(this).slideUp();
        $(".success-booking-wrapper").slideDown();

    })
});

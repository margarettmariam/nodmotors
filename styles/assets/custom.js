$(document).ready(function(){
   $(".navbar-toggler").click(function(){
       $(this).toggleClass("expanded")
       $(".navigation").toggleClass("expanded")
   })
});
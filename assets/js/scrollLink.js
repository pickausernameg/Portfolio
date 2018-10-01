$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".nav-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function(){

    // Set scroll to first box
    if ($(this).scrollTop() > 250) {
      $(".nav").css({"position" : "fixed", "z-index" : "99", "top" : "0px",});
      $("#Sub").css({"display" : "block"}); 
    }else{
      $(".nav").css({"position" : "relative"}); 
      $("#Sub").css({"display" : "none"});
    }
  })

});
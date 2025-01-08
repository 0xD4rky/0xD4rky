// Wait for the document to load before running the script 
(function ($) {
    // Handle page navigation and content display
    $(window).on('load hashchange', function(){
      // Hide all content regions
      $('.content-region').hide();
      
      // Remove active class from all menu items
      $('.main-menu a').removeClass('active');
      
      // Get the current hash or default to home
      var region = location.hash.toString() || $('.main-menu a:first').attr('href');
      
      // Show the selected region
      $(region).show();
      
      // Add active class to current menu item
      $('.main-menu a[href="'+ region +'"]').addClass('active');
    });
    
  })(jQuery);
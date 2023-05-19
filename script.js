$(document).ready(function() {
  $('.hamburger').click(function() {
    $('.navigation-bar').slideToggle();
  });
});

function toggleButton() {
  var element = document.getElementById("animatedButton");
  element.classList.toggle("cross");
}

$(document).ready(function() {
  // Get current page URL
  var url = window.location.href;

  // Loop through each nav item
  $('.navigation-bar li a').each(function() {
    // Check if the href of the nav item matches the current page URL
    if (this.href === url) {
      // Add the 'current' class to the matching nav item
      $(this).addClass('current');
    }
  });
});
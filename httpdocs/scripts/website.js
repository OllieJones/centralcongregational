//===================================================================
//  website.js
//===================================================================

//----------------------------------------
// document.ready()
//----------------------------------------
$(document).ready(function() {
  showBackToTopButton();
  animatePageScrolling();
  showViewportSize();
});


//----------------------------------------
// enableBackToTop()
//----------------------------------------
function showBackToTopButton() {
  var offset = 600;
  var duration = 500;

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('#back-to-top').fadeIn(duration);
    } else {
      $('#back-to-top').fadeOut(duration);
    }
  });
    
  $('#back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
}


//----------------------------------------
// animatePageScrolling()
//----------------------------------------
function animatePageScrolling() {
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if ( locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {

      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
}


//----------------------------------------
// filterPath()
//----------------------------------------
function filterPath(string) {
  return string
  .replace(/^\//,'')
  .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
  .replace(/\/$/,'');
}


//----------------------------------------
// scrollableElement()
//----------------------------------------
function scrollableElement(els) {
  for (var i = 0, argLength = arguments.length; i < argLength; i++) {
    var el = arguments[i],
    $scrollElement = $(el);
    if ($scrollElement.scrollTop() > 0) {
      return el;
    } else {
      $scrollElement.scrollTop(1);
      var isScrollable = $scrollElement.scrollTop() > 0;
      $scrollElement.scrollTop(0);
      if (isScrollable) {
        return el;
      }
    }
  }
  return [];
}


//----------------------------------------
// scrollableElement()
//----------------------------------------
$(window).scroll(checkscroll);  

function checkscroll(){
  var top = $(window).scrollTop();
  var viewportWidth = $(window).width();
  if(top > 600) {
    $("#menu-bar").css("background-color", "rgb(204, 236, 246)");
  } else {
      $("#menu-bar").css("background-color", "rgba(204, 236, 246, 0.75)");
  }
}

checkscroll();


//===================================================================
//  end: website.js
//===================================================================

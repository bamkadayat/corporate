jQuery(document).ready(function (){
  $("button").click(function(){
    $(".main-mobile").slideToggle();
  });
  // slider
  "use strict";
  $('#slider-carousel').carouFredSel({
    responsive:true,
    width:'100%',
    circular:true,
    scroll:{
      items:1,
      duration:500,
      pauseOnHover:true
    },
    auto:true,
    items:{
      visible:{
        min:1,
        max:1
      },
      height:"variable"
    },
    pagination:{
      container:".sliderpager",
      anchorBuilder:false
    }
  });
  // portfolio slider
  $('.portfolio-carousel').carouFredSel({
    responsive:true,
    width:'100%',
    circular:true,
    prev:"#prev",
    next:"#next",
    scroll:{
      items:1,
      duration:500,
      pauseOnHover:true
    },
    auto:true,
    items:{
      visible:{
        min:1,
        max:4
      }
    }
  });
  // team slider
  $('.team-carousel').carouFredSel({
    responsive:true,
    width:'100%',
    circular:true,
    prev:"#team-prev",
    next:"#team-next",
    scroll:{
      items:1,
      duration:500,
      pauseOnHover:true
    },
    auto:true,
    items:{
      visible:{
        min:1,
        max:4
      }
    }
  });
  // menu fixed while scrolling
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>=70){
      $("header").addClass('secondary-dark-blue-bg');
    }else
      if($("header").addClass('secondary-dark-blue-bg')){
        $("header").removeClass('secondary-dark-blue-bg');
      }
  });
});
// menu link active when clicking on it
function myFunction(e) {
  menuItems = document.querySelector('#navList .active');
  if(menuItems !== null){
    menuItems.classList.remove('active');
  }
  e.target.className = "active";
}
//page scrolling 
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});
//page loader
$(window).load(function() {
  // Animate loader off screen
  $(".loader-page").fadeOut("slow");
});
//mobile menu
// function mobileFunctionOpen(){
//   document.getElementById('mobile-menu').style.display = 'block';
//   document.getElementById('mobile-icon').style.display = 'none';
// }
// function mobileFunctionClose(){
//   document.getElementById('mobile-menu').style.display = 'none';
//   document.getElementById('mobile-icon').style.display = 'block';

// }


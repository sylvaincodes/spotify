'use strict'

// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get(variable) {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // return the value
  return  rs.getPropertyValue(variable);
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--blue', 'lightblue');
}

const search_input = document.getElementById('search-field');

const parent_list_mobile = document.querySelector('[data-sidebar-card-mobile]');
const sub_list_mobile = document.querySelector('[data-sub-list-mobile]');

const parent_list_mobile_570 = document.querySelector('[data-sidebar-card-mobile-570]');
const sub_list_mobile_570 = document.querySelector('[data-sub-list-mobile-570]');

const parent_list_web = document.querySelector('[data-sidebar-card-web]');
const sub_list_web = document.querySelector('[data-sub-list-web]');

const parent_list_web_570 = document.querySelector('[data-sidebar-card-web-570]');
const sub_list_web_570 = document.querySelector('[data-sub-list-web-570]');

const focus = function () { 
    search_input.focus(); 
    search_input.placeholder='Recherche';
}
const lostfocus = function () { 
    search_input.blur(); 
    search_input.placeholder='';
}
search_input.addEventListener('mouseover',focus);
search_input.addEventListener('mouseleave',lostfocus);


const opensublist570 = function () { 

    document.getElementById('left-sidebar-item-web-570').style.opacity = "1";
    sub_list_web_570.classList.add('active'); 
    document.getElementById('left-sidebar-item-mobile-570').style.opacity = "0.3";
    document.getElementById('left-sidebar-item-game-570').style.opacity = "0.3";
    document.getElementById('sidebar-title-web-570').style.color = myFunction_get('--black');
    document.getElementById('tv-outline-570').style.color=myFunction_get('--orange');
}

const opensublist = function () { 

   /* sub_list_mobile.classList.remove('active'); */
    sub_list_web.classList.add('active'); 
    document.getElementById('sidebar-title-web').style.color = myFunction_get('--black');
    document.getElementById('tv-outline').style.color=myFunction_get('--orange');
}
const closesublist = function () { 

  document.getElementById('left-sidebar-item-web-570').style.opacity = "1";
    document.getElementById('left-sidebar-item-mobile-570').style.opacity = "1";
    document.getElementById('left-sidebar-item-game-570').style.opacity = "1";

    sub_list_web.classList.remove('active'); 
    document.getElementById('tv-outline').style.color=myFunction_get('--white');
    document.getElementById('left-sidebar-item-web').style.backgroundColor = myFunction_get('--black');
    document.getElementById('sidebar-title-web').style.color = myFunction_get('--white-2');
}
const closesublist570 = function () { 


  document.getElementById('left-sidebar-item-web-570').style.opacity = "1";
    document.getElementById('left-sidebar-item-mobile-570').style.opacity = "1";
    document.getElementById('left-sidebar-item-game-570').style.opacity = "1";

    sub_list_web_570.classList.remove('active'); 
    document.getElementById('tv-outline').style.color=myFunction_get('--white');
    document.getElementById('left-sidebar-item-web-570').style.backgroundColor = myFunction_get('--black');
    document.getElementById('sidebar-title-web-570').style.color = myFunction_get('--white-2');
}

const keepcontent = function () { 
  document.getElementById('tv-outline').style.color=myFunction_get('--orange');
  document.getElementById('left-sidebar-item-web').style.backgroundColor = myFunction_get('--white-2');
  document.getElementById('sidebar-title-web').style.color = myFunction_get('--black');
}

const keepcontent570 = function () { 
  document.getElementById('tv-outline').style.color=myFunction_get('--orange');
  document.getElementById('left-sidebar-item-web-570').style.backgroundColor = myFunction_get('--white-2');
  document.getElementById('sidebar-title-web-570').style.color = myFunction_get('--black');
}


if (parent_list_web_570) {
parent_list_web_570.addEventListener('mouseover',opensublist570);
parent_list_web_570.addEventListener('mouseleave',keepcontent570);
}

if (parent_list_web) {
parent_list_web.addEventListener('mouseover',opensublist);
parent_list_web.addEventListener('mouseleave',keepcontent);
}

if (sub_list_web) {
sub_list_web.addEventListener('mouseleave',closesublist);
sub_list_web_570.addEventListener('mouseleave',closesublist570);
}





const opensublistmobile = function () { 

    closesublist();
    sub_list_mobile.classList.add('active'); 
    document.getElementById('sidebar-title-mobile').style.color = myFunction_get('--black');
    document.getElementById('tv-outline').style.color=myFunction_get('--orange');
}
const opensublistmobile570 = function () { 

    document.getElementById('left-sidebar-item-mobile-570').style.opacity = "1";
    closesublist570();
    document.getElementById('left-sidebar-item-web-570').style.opacity = "0.3";
    document.getElementById('left-sidebar-item-game-570').style.opacity = "0.3";
    sub_list_mobile_570.classList.add('active'); 
    document.getElementById('sidebar-title-mobile-570').style.color = myFunction_get('--black');
    document.getElementById('tv-outline').style.color=myFunction_get('--orange');
}
const closesublistmobile = function () { 


  document.getElementById('left-sidebar-item-web-570').style.opacity = "1";
    document.getElementById('left-sidebar-item-mobile-570').style.opacity = "1";
    document.getElementById('left-sidebar-item-game-570').style.opacity = "1";

    sub_list_mobile.classList.remove('active'); 
    document.getElementById('tv-outline').style.color=myFunction_get('--white');
    document.getElementById('left-sidebar-item-mobile').style.backgroundColor = myFunction_get('--black');
    document.getElementById('sidebar-title-mobile').style.color = myFunction_get('--white-2');
}
const closesublistmobile570 = function () { 

    document.getElementById('left-sidebar-item-web-570').style.opacity = "1";
    document.getElementById('left-sidebar-item-mobile-570').style.opacity = "1";
    document.getElementById('left-sidebar-item-game-570').style.opacity = "1";

    sub_list_mobile_570.classList.remove('active'); 
    document.getElementById('tv-outline').style.color=myFunction_get('--white');
    document.getElementById('left-sidebar-item-mobile-570').style.backgroundColor = myFunction_get('--black');
    document.getElementById('sidebar-title-mobile-570').style.color = myFunction_get('--white-2');
}
const keepcontentmobile = function () { 
  document.getElementById('terminal-outline').style.color=myFunction_get('--orange');
  document.getElementById('left-sidebar-item-mobile').style.backgroundColor = myFunction_get('--white-2');
  document.getElementById('sidebar-title-mobile').style.color = myFunction_get('--black');
}

const keepcontentmobile570 = function () { 
  document.getElementById('terminal-outline-570').style.color=myFunction_get('--orange');
  document.getElementById('left-sidebar-item-mobile-570').style.backgroundColor = myFunction_get('--white-2');
  document.getElementById('sidebar-title-mobile-570').style.color = myFunction_get('--black');
}

if (parent_list_mobile) {
  parent_list_mobile.addEventListener('mouseover',opensublistmobile);
  parent_list_mobile.addEventListener('mouseleave',keepcontentmobile);
}


if (sub_list_mobile) {
sub_list_mobile.addEventListener('mouseleave',closesublistmobile);
}

if (parent_list_web_570 ) {
parent_list_mobile_570.addEventListener('mouseover',opensublistmobile570);
parent_list_mobile_570.addEventListener('mouseleave',keepcontentmobile570);
sub_list_mobile_570.addEventListener('mouseleave',closesublistmobile570);
}

if (document.getElementById('left-sidebar-item-game-570')) {
document.getElementById('left-sidebar-item-game-570').style.opacity = "1";
document.getElementById('left-sidebar-item-game-570').style.opacity = "1";
}


/*Carousel mobile*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (slides.length==0) {}else {    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
}




const mobile_menu = document.querySelector('[data-mobile-menu]');
const overlay = document.querySelector('[data-overlay]');

const btn_click_open_menu_fixed = document.querySelector('[data-nav-toggler-fixed]');
const openMenu = function () { 
      overlay.classList.add('active') ;
    mobile_menu.classList.add('active'); 
}
btn_click_open_menu_fixed.addEventListener('click',openMenu);

const btn_click_close_menu = document.querySelector('[data-close-menu]');
const closeMenu = function () { mobile_menu.classList.remove('active');    
overlay.classList.remove('active'); 
}
btn_click_close_menu.addEventListener('click',closeMenu);


/*
(function(){
  var addEvent = function(object, type, callback) {
      if (object == null || typeof(object) == 'undefined') return;
      if (object.addEventListener) {
          object.addEventListener(type, callback, false);
      } else if (object.attachEvent) {
          object.attachEvent("on" + type, callback);
      } else {
          object["on"+type] = callback;
      }
  };
  function detectMouseMove() {
    // Initial container width
    var containerWidth = document.getElementsByClassName('.container').outerWidth();
    document.addEventListener('mousemove', function(e) {
      $('.hover').css({
         left:  e.pageX
      });
      $('.left-side').css({
        left: e.pageX + 75
      });
      var rightSideLeft = containerWidth - e.pageX;
      $('.right-side').css({
        right: rightSideLeft
      });

    })
  }
  detectMouseMove();
  
  
  function detectTouch() {
    // Initial container width
    var containerWidth = document.getElementsByClassName('.container').outerWidth();
    document.addEventListener('mousemove', function(e) {
      $('.hover').css({
         left:  e.pageX
      });
      $('.left-side').css({
        left: e.pageX + 75
      });
      var rightSideLeft = containerWidth - e.pageX;
      $('.right-side').css({
        right: rightSideLeft
      });
    })
  }
  detectMouseMove();
  
  function touchMove(){
    // Initial container width
    var containerWidth = document.getElementsByClassName('.container').outerWidth();
    document.addEventListener('touchmove', function(e) {
      $('.hover').css({
         left:  e.pageX
      });
      $('.left-side').css({
        left: e.pageX + 75
      });
      var rightSideLeft = containerWidth - e.pageX;
      $('.right-side').css({
        right: rightSideLeft
      });

    })
  }
  
  touchMove();
  
  function detectInput(inputType){
    // Detect container width after resizing
    addEvent(window, "resize", function(event) {
    var containerWidth = document.getElementsByClassName('.container').outerWidth();
      $(document).bind(inputType, function(e){
        $('.hover').css({
           left:  e.pageX
        });
        $('.left-side').css({
          left: e.pageX + 75
        });
        var rightSideLeft = containerWidth - e.pageX;
        $('.right-side').css({
          right: rightSideLeft
        });
      });
    });
  }
  
  detectInput('mousemove');
  detectInput('touchmove');
  
})();*/
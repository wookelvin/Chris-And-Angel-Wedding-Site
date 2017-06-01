//smooth scrolling

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function(){
  $('#theForm').validate({
        address:{
          email:true,
          required:true
        }
      });
  
  guestcheck();
  numguests();
  $("#guest").change(function () {guestcheck();});
  $("#yesno").change(function() { numguests();});
  
  $("#name").on('input',function(){
    $("#name1").val($("#name").val());
  });
  
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    //linkElement: '.animsition-link',
    linkElement: 'a:not([target="_blank"]):not([href^=#])',
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
  
  
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.scrollreveal').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight()/4;
          //var top_of_object = $(this).offset().top;
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){

              $(this).animate({'opacity':'1'},500);

          }

      }); 

  });

});


function numguests(){
  
  if ($("#yesno").val() == "yes"){ 
    $("#numguests").show();
    //$("#guest").addClass('required');
    $("#guest").removeClass('ignore');
    
    $("#group1").show();
    //$("#name1").addClass('required');
    $("#name1").removeClass('ignore');
    
    $("#mealoptions").show();
    
    $("#aller").show();
    guestcheck();
  }else{
    
    $("#numguests").hide();
    $("#guest").addClass('ignore');
    
    $("#mealoptions").hide();
    
    $("#group1").hide();
    $("#name1").addClass('ignore');
    
    $("#group2").hide();
    $("#name2").addClass('ignore');
    
    $("#group3").hide();
    $("#name3").addClass('ignore');
    
    $("#group4").hide();
    $("#name4").addClass('ignore');
    
    $("#group5").hide();
    $("#name5").addClass('ignore');
    
    $("#group6").hide();
    $("#name6").addClass('ignore');
    
    $("#group7").hide();
    $("#name7").addClass('ignore');
    
    
    $("#aller").hide();
    
  }
}


function guestcheck() {
  if ($("#guest").val() == 0){
    
    
    //$("#name1").addClass('required');
    $("#name1").removeClass('ignore');
    $("#name2").addClass('ignore');
    $("#name3").addClass('ignore');
    $("#name4").addClass('ignore');
    $("#name5").addClass('ignore');
    $("#name6").addClass('ignore');
    $("#name7").addClass('ignore');
    
    $("#group1").show();
    $("#group2").hide();
    $("#group3").hide();
    $("#group4").hide();
    $("#group5").hide();
    $("#group6").hide();
    $("#group7").hide();
    
  }else if ($("#guest").val() == 1){
    $("#name1").removeClass('ignore');
    $("#name2").removeClass('ignore');
    $("#name3").addClass('ignore');
    $("#name4").addClass('ignore');
    $("#name5").addClass('ignore');
    $("#name6").addClass('ignore');
    $("#name7").addClass('ignore');
    
    $("#group1").show();
    $("#group2").show();
    $("#group3").hide();
    $("#group4").hide();
    $("#group5").hide();
    $("#group6").hide();
    $("#group7").hide();
    
  }else if ($("#guest").val() == 2){
    $("#name1").removeClass('ignore');
    $("#name2").removeClass('ignore');
    $("#name3").removeClass('ignore');
    $("#name4").addClass('ignore');
    $("#name5").addClass('ignore');
    $("#name6").addClass('ignore');
    $("#name7").addClass('ignore');
    
    $("#group1").show();
    $("#group2").show();
    $("#group3").show();
    $("#group4").hide();
    $("#group5").hide();
    $("#group6").hide();
    $("#group7").hide();
    
  }else if ($("#guest").val() == 3){
    $("#name1").removeClass('ignore');
    $("#name2").removeClass('ignore');
    $("#name3").removeClass('ignore');
    $("#name4").removeClass('ignore');
    $("#name5").addClass('ignore');
    $("#name6").addClass('ignore');
    $("#name7").addClass('ignore');
    
    $("#group1").show();
    $("#group2").show();
    $("#group3").show();
    $("#group4").show();
    $("#group5").hide();
    $("#group6").hide();
    $("#group7").hide();
    
  }else if ($("#guest").val() == 4){
    $("#name1").removeClass('ignore');
    $("#name2").removeClass('ignore');
    $("#name3").removeClass('ignore');
    $("#name4").removeClass('ignore');
    $("#name5").removeClass('ignore');
    $("#name6").addClass('ignore');
    $("#name7").addClass('ignore');
    
    $("#group1").show();
    $("#group2").show();
    $("#group3").show();
    $("#group4").show();
    $("#group5").show();
    $("#group6").hide();
    $("#group7").hide();
    
    
  }else if ($("#guest").val() == 5){
    $("#name1").removeClass('ignore');
    $("#name2").removeClass('ignore');
    $("#name3").removeClass('ignore');
    $("#name4").removeClass('ignore');
    $("#name5").removeClass('ignore');
    $("#name6").removeClass('ignore');
    $("#name7").addClass('ignore');
    
    $("#group1").show();
    $("#group2").show();
    $("#group3").show();
    $("#group4").show();
    $("#group5").show();
    $("#group6").show();
    $("#group7").hide();
    
    
  }else if ($("#guest").val() == 6){
    $("#name1").removeClass('ignore');
    $("#name2").removeClass('ignore');
    $("#name3").removeClass('ignore');
    $("#name4").removeClass('ignore');
    $("#name5").removeClass('ignore');
    $("#name6").removeClass('ignore');
    $("#name7").removeClass('ignore');
    
    $("#group1").show();
    $("#group2").show();
    $("#group3").show();
    $("#group4").show();
    $("#group5").show();
    $("#group6").show();
    $("#group7").show();
    
    
  }else{
    $("#name1").addClass('ignore');
    $("#name2").addClass('ignore');
    $("#name3").addClass('ignore');
    $("#name4").addClass('ignore');
    $("#name5").addClass('ignore');
    $("#name6").addClass('ignore');
    $("#name7").addClass('ignore');
    
    $("#group1").hide();
    $("#group2").hide();
    $("#group3").hide();
    $("#group4").hide();
    $("#group5").hide();
    $("#group6").hide();
    $("#group7").hide();
  }
}
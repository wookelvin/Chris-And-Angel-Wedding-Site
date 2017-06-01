var $stage = 0;



$('.rsvp').click(function(){
  if ($stage == 0){
    $stage = 1;
    $('.coverbg').removeClass('disappear');
    $('.bigcontainer').addClass('movebigcontainer');
  }
});

$('#rsvpbtnback').click(function(){
   if ($stage == 1){
      $stage = 0;
      $('.coverbg').addClass('disappear');
      $('.bigcontainer').removeClass('movebigcontainer');
   }
});
  
$('#rsvpbtnconfirm').click(function(){
  if ($stage ==1 ){
    $stage =2;
    $('.respond').addClass('flipresponse');
    $('.readytosend').addClass('readytosendflip');
  }  
});


$('#rsvpbtnback2').click(function(){
  if ($stage ==2){
   $stage = 1; 
    $('.respond').removeClass('flipresponse');
    $('.readytosend').removeClass('readytosendflip');
  }
});

$('#rsvpbtnsend').click(function(){
  if ($stage ==2){
   $stage = 3; 
    $('.readytosend').addClass('readytosendsent');
    $('.thankyou').addClass('thankyoushow');
  }
});

$('#finish').click(function(){
  if ($stage == 3){
    $stage = 0;
    $('.coverbg').addClass('disappear');
    $('.bigcontainer').removeClass('movebigcontainer');
    setTimeout(function() {
      $('.readytosend').removeClass('readytosendsent');
      $('.thankyou').removeClass('thankyoushow');
      $('.respond').removeClass('flipresponse');
      $('.readytosend').removeClass('readytosendflip');
    }, 500);
  }
});

//adding custom text to front of envelope
$("#name").on('input',function(){
  $("#addlabelname").text($("#name").val());
});
  
$("#address").on('input',function(){
  $("#addlabelemail").text($("#address").val());
});

        
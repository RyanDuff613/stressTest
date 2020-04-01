$(document).ready(function(){

var totalChecked = 0;



  $('#stressTest').submit(function(event){

    $('input:checkbox[name=stressSigns]:checked').each(function(){
      var section1answers = parseInt($(this).val());
      totalChecked += section1answers; 
      console.log(totalChecked);
    });

    $('input:checkbox[name=symptoms]:checked').each(function(){
      var section2answers = $(this).val();
      
    });

    $('input:checkbox[name=copingMethods]:checked').each(function(){
      var section3answers = $(this).val();
    
    });
    
    $('#recommendations').show();
    event.preventDefault();
  });
 
  console.log(totalChecked);

});
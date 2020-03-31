$(document).ready(function(){



  $('#stressTest').submit(function(event){

    $('input:checkbox[name=stressSigns]:checked').each(function(){
      var section1answers = []; 
      sections1answers = section1answers.push($(this).val());
      console.log(section1answers);
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
});
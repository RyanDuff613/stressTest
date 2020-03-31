$(document).ready(function(){
  $('#stressTest').submit(function(event){

    $('input:checkbox[name=stressSigns]:checked').each(function(){

    });

    $('input:checkbox[name=symptoms]:checked').each(function(){

    });

    $('input:checkbox[name=copingMethods]:checked').each(function(){

    });





    $('#recommendations').show();
    event.preventDefault();
  });
});
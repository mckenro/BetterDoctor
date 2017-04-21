var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
  $('form#pingpong-form').submit(function(event){
    event.preventDefault();
    var goal = parseInt($('input#goal').val());
    var simpleCalculator = new Calculator ("hot pink");
    var output = simpleCalculator.pingpong(goal);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('form#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('form#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

var Health = require('./../js/health.js').healthModule;

$(document).ready(function(){
  var healthObject = new Health();
  $('form#health-form').submit(function(event){
    event.preventDefault();
    var condition = $('input#condition').val();
    // var location = $('input#location').val();
    // var zipcode = parseInt(location);
    var error = "Sorry, we couldn't find a good match.";
    healthObject.getDoctor(condition);
  });
});

// https://api.betterdoctor.com/2016-03-01/doctors?query=dermatology&location=98101&skip=0&limit=100&user_key=5347729089b5253ce372a9693a75cd33

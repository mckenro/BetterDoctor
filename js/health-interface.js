var Health = require('./../js/health.js').healthModule;

var displayDoctor = function(results){
  $('#result').append("<div class='profile-card'>" + "<img class='profile-pic' src=" + results.image + ">" + "<div class='profile-info'>" + "<h3>" + results.first_name + " " + results.last_name + "</h3>" + "<h5>" + results.title + "</h5>" + "<p>" + results.city + ", " + results.state + " " + results.zip + "</p>" + "<p class='space'>phone: " + "<span class='phone'>" + results.phone + "</span></p>" +"</div>" + "</div>");
};


$(document).ready(function(){
  var healthObject = new Health();
  $('form#health-form').submit(function(event){
    event.preventDefault();
    var condition = $('input#condition').val();
    healthObject.getDoctor(condition, displayDoctor);
  });
});

var Health = require('./../js/health.js').healthModule;

$(document).ready(function(){
  var healthObject = new Health();
  $('form#health-form').submit(function(event){
    event.preventDefault();
    var condition = $('input#condition').val();
    healthObject.getDoctor(condition);
  });
});

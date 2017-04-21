var apiKey = require('./../.env').apiKey;

Health = function(){
}

Health.prototype.getDoctor = function(condition){

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ condition+'&location=47.6204%2C-122.3508%2C%205&user_location=47.6204%2C-122.3493&skip=0&limit=100&user_key=' + apiKey)
    .then(function(response) {
      for (i = 0; i<response.data.length; i++) {
        console.log(response.data[i].profile.first_name + " " + response.data[i].profile.last_name)
      }
    })
    .fail(function(error) {
      $('.result').text(error.responseJSON.message);
    });

};

exports.healthModule = Health;

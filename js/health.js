var apiKey = require('./../.env').apiKey;

Health = function(){
}

Health.prototype.getDoctor = function(condition){

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ condition+'&location=47.6204%2C-122.3508%2C%205&user_location=47.6204%2C-122.3493&skip=0&limit=100&user_key=' + apiKey)
    .then(function(response) {
      for (i = 0; i<response.data.length; i++) {
        //profile photo
        $('#result').append("<div class='doc-section'>" + "<img class='profile-pic' src=" + response.data[i].profile.image_url + "</img></div>");

        //name
        $('#result').append("<div class='profile-info'>" + "<h3>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</h3>" + "<p>" + response.data[i].profile.specialties.description + "</p>" +"</div>");

        //title
        $('#result').append("<div class='doc-section'>" + "<h3>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</h3>" + "</div>");

        //specialty
        $('#result').append("<div class='doc-section'>" + "<h3>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</h3>" + "</div>");

        //bio
        $('#result').append("<div class='doc-section'>" + "<h3>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</h3>" + "</div>");

        //street
        $('#result').append("<div class='doc-section'>" + "<h3>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</h3>" + "</div>");


      }
    })
    .fail(function(response) {
      $('#result').append(error.responseJSON.message);
    });

};

exports.healthModule = Health;

var apiKey = require('./../.env').apiKey;

Health = function(){
};

Health.prototype.getDoctor = function(condition){

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ condition+'&location=47.6204%2C-122.3508%2C%205&user_location=47.6204%2C-122.3493&skip=0&limit=100&user_key=' + apiKey)
    .then(function(response) {
      //loop through profile
      for (i = 0; i<response.data.length; i++) {
        //profile photo
        $('#result').append("<div class='profile-card'>" + "<img class='profile-pic' src=" + response.data[i].profile.image_url + ">" + "<div class='profile-info'>" + "<h3>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</h3>" + "<h5>" + response.data[i].profile.title + "</h5>" + "<p>" + response.data[i].practices[0].visit_address.city + ", " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip + "</p>" + "<p class='space'>phone: " + "<span class='phone'>" + response.data[i].practices[0].phones[0].number + "</span></p>" +"</div>" + "</div>");

        //name
        // $('#result').append("<div class='profile-info'>" + "<h3>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</h3>" + "<h5>" + response.data[i].profile.title + "</h5>" + "</div>");
        // console.log(response.data[i].practices[0].phones[0].number);

        //contact
        // $('#result').append("<div class='contact'>" + "<p>" + response.data[i].practices[0].visit_address.city + ", " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip + "</p>" + "<p class='space'>phone: " + "<span class='phone'>" + response.data[i].practices[0].phones[0].number + "</span></p></div>");

      }

    })

    .fail(function(response) {
      $('#result').append(error.responseJSON.message);
    });

};

exports.healthModule = Health;

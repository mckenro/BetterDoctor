var apiKey = require('./../.env').apiKey;

Health = function(image, first_name, last_name, title, city, state, zip, phone){
  this.image = image;
  this.first_name = first_name;
  this.last_name = last_name;
  this.title = title;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
};

Health.prototype.getDoctor = function(condition, displayResults){

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ condition+'&location=47.6204%2C-122.3508%2C%205&user_location=47.6204%2C-122.3493&skip=0&limit=40&user_key=' + apiKey)
    .then(function(response) {
      for (i = 0; i<response.data.length; i++) {
        var results = new Health (image = response.data[i].profile.image_url, response.data[i].profile.first_name,  response.data[i].profile.last_name,  response.data[i].profile.title, response.data[i].practices[0].visit_address.city, response.data[i].practices[0].visit_address.state, response.data[i].practices[0].visit_address.zip, response.data[i].practices[0].phones[0].number);
        displayResults(results);
      }

    }).fail(function(error) {
      $('#result').text("Sorry, we couldn't find a match for that search term.");
    });

};

exports.healthModule = Health;

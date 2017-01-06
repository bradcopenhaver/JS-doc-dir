var apiKey = require("./../.env").apiKey;

var retrieveAilments = function(populateFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/conditions?user_key='+ apiKey).then(function(response){
    populateFunction(response);
  }).fail(function(response) {
    console.log(response);
  });
};

exports.retrieveAilmentsModule = retrieveAilments;

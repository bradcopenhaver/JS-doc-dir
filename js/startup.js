var apiKey = require("./../.env").apiKey;

var retrieveAilments = function(populateFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/conditions?user_key='+ apiKey).then(function(response){
    console.log(response);
    populateFunction(response);
  });
};

exports.retrieveAilmentsModule = retrieveAilments;

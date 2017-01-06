var apiKey = require("./../.env").apiKey;

function LookupDr() {
  var ailment;
  var searchResults;
}

LookupDr.prototype.search = function (ailment, displayFunction) {
  this.ailment = ailment;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ ailment+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      this.searchResults=result;
      displayFunction(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.LookupDrModule = LookupDr;

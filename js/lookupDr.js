var apiKey = require("./../.env").apiKey;

function LookupDr() {
  var keyword;
  var searchResults;
}

LookupDr.prototype.search = function (keyword, radius, location, displayFunction) {
  this.keyword = keyword;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ keyword+'&location=' + location + '%2C%20' + radius + '&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      this.searchResults=result;
      displayFunction(result);
    })
    .fail(function(error){
      console.log(error);
    });
};

exports.LookupDrModule = LookupDr;

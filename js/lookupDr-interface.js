var LookupDr = require('./../js/lookupDr.js').LookupDrModule;

var displayResults = function(results) {
  $('result-doctors').empty();
  for (i=0; i<results.data.length; i++) {
    $('#result-doctors').append("<li>"+ results.data[i].profile.first_name + " "+ results.data[i].profile.last_name + "</li>");
  }
};

$(function() {
  $('#find-dr').submit(function(event) {
    event.preventDefault();
    var newLookup = new LookupDr();
    newLookup.search($('#ailment').val(), displayResults);
  });
});

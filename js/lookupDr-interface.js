var LookupDr = require('./../js/lookupDr.js').LookupDrModule;

var displayResults = function(results) {
  $('#result-doctors').empty();
  if (results.data.length > 0){
    $('#result-doctors').append("<ul id='doctor-list'></ul>");
    for (i=0; i<results.data.length; i++) {
      $('#doctor-list').append("<li>"+ results.data[i].profile.first_name + " "+ results.data[i].profile.last_name + "</li>");
    }
  } else {
    $('#result-doctors').html("<h4>No results for that ailment. Try a different word or phrase.</h4>");
  }
};

$(function() {
  $('#find-dr').submit(function(event) {
    event.preventDefault();
    var newLookup = new LookupDr();
    newLookup.search($('#ailment').val(), displayResults);
  });
});

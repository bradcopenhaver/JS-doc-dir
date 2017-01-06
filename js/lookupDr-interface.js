var LookupDr = require('./../js/lookupDr.js').LookupDrModule;

var displayResults = function(results) {
  $('#result-doctors').empty();
  if (results.data.length > 0){
    for (i=0; i<results.data.length; i++) {
      $('#result-doctors').append("<div class='listing'><h4>"+ results.data[i].profile.first_name + " "+ results.data[i].profile.last_name + " " + results.data[i].profile.title +"</h4><img src="+ results.data[i].profile.image_url +"></div>");
    }
  } else {
    $('#result-doctors').html("<h4>No results for that keyword. Try a different word or phrase.</h4>");
  }
};

$(function() {
  $('#find-dr').submit(function(event) {
    event.preventDefault();
    var newLookup = new LookupDr();
    newLookup.search($('#keyword').val() + $('#ailment').val(), $('#radius').val(), $('#location').val(), displayResults);
  });

  $('.clickable').click(function() {
    $('#keyword-input').toggle();
    $('#ailment-input').toggle();
    $('#keyword').val("");
    $('#ailment').val("");
  });
});

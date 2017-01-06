var LookupDr = require('./../js/lookupDr.js').LookupDrModule;

var displayResults = function(results) {
  $('#result-doctors').empty();
  if (results.data.length > 0){
    for (i=0; i<results.data.length; i++) {
      var mult = "";
      if(results.data[i].specialties.length > 1) mult = " and more";
      $('#result-doctors').append("<div class='listing'><h4>"+ results.data[i].profile.first_name + " "+ results.data[i].profile.last_name + " " + results.data[i].profile.title +"</h4><h5>" + results.data[i].specialties[0].actor + mult + "</h5><img src="+ results.data[i].profile.image_url +"></div>");
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

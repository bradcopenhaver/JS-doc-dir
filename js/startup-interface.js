var retrieveAilments = require("./../js/startup.js").retrieveAilmentsModule;

var populateDatalist = function(ailmentArray) {
  for(i=0; i<ailmentArray.data.length; i++) {
    $("#ailments").append("<option value='" + ailmentArray.data[i].name + "'>");
  }
}
$(function(){
  retrieveAilments(populateDatalist);
});

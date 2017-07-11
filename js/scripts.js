$(document).ready(function() {
  $("#boobies").click(function() {

  var flavors = ['birthdaycake', 'mint-chocolatechip', 'cookie-dough'];


  flavors.forEach(function(flavor) {
    $("#flavors-list").append("<li>" + flavor + "</li>");
  });
  $("#flavors-list").show();
});

});

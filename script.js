$(document).ready(function() {
  alert("It's working!");

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/someanimal"
  })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
    });





})

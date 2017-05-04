$(document).ready(function() {

  $(".nav.navbar-nav").on("submit", "#sign-up-form", function(event) {
    event.preventDefault();
    var data = $(this).serialize()

    $.ajax({
      url: "/users",
      method: "POST",
      data: data
    })
    .done(function(response) {
      window.location = "/"
    })
    .fail(function(response) {
      $(".errors-list").remove();
      $("#sign-up-button").before(response.responseText)
    });
  });

  $(".nav.navbar-nav").on("submit", "#login-form", function(event) {
    event.preventDefault();
    var data = $(this).serialize()

    $.ajax({
      url: "/login",
      method: "POST",
      data: data
    })
    .done(function(response) {
      window.location = "/"
    })
    .fail(function(response) {
      $(".errors-list").remove();
      $("#login-button").before(response.responseText)
    });
  });

});

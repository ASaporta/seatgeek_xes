$(document).ready(function() {

  // User sign up submission
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

  // User log in form
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

  // Navbar search submission
  $("#nav-bar-search").submit(function(event) {
    event.preventDefault();
    var searched_performer = $("#nav-bar-search-input").val()
    var url = '/performers/' + searched_performer

    $.ajax({
      url: url,
      method: "GET"
    });

  });

});

/*global jQuery:true, equal:true, test:true, sorter:true, $:true*/
/*jslint browser: true, white: true, vars: true, devel: true, bitwise: true, debug: true, nomen: true, sloppy: true, indent: 2*/

module("QA Tests", {
  setup: function() {
    // Load web page into iframe
    $('#myFrame').attr('src', 'index.html');
    window.iframe = $('#myFrame');

    stop();

    setTimeout(function() {
      start();
    }, 1000);
  }
});

test('When the page is loaded, I should see a form', function(){
  //var iframe = $('#myFrame')

  ok($("#form", iframe.contents()).is(":visible"), "when the page is loaded");
});

test('When I click save with empty fields, I should get an error', function() {
  //var iframe = $('#myFrame')
  $("#form", iframe.contents()).submit()

  stop();

  setTimeout(function() {
    equal($(".alert-danger", iframe.contents()).text(), "Error! There were errors in your form.");

    start();
  }, 1000);

});

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
  ok($("#form", iframe.contents()).is(":visible"), "when the page is loaded");
});

test('When I click save with empty fields, I should get an error', function() {
  $("#form", iframe.contents()).submit()

  stop();

  setTimeout(function() {
    equal($(".alert-danger", iframe.contents()).text(), "Error! There were errors in your form.");

    start();
  }, 1000);
});

// Basically a check more like the first one - state of the first element
test('Check the first element', function () {
	ok($("#RiskTitle", iframe.contents()).is(":visible"), "RiskTitle element is seen");
});

// Checking the drop down - state of the second element
test('Check the second element', function () {
	ok($("#status", iframe.contents()).is(":visible"), "Status drop down is seen");
});

// Checking the approval date - state of the third element
test('Check the third element', function () {
	ok($("#approvalDate", iframe.contents()).is(":visible"), "Approval date is seen");
});

// Checkiing the owner - state of the fourth element
test('Check the fourth element', function () {
	ok($("#owner", iframe.contents()).is(":visible"), "Owner is seen");
});

// Checking the button - state of the submit element
test('Check the button element', function () {
	ok($(".btn.btn-primary", iframe.contents()).is(":visible"), "Button is seen");
});

// Checking how the element will handle text input.
test('Check how the "risk title" element handles text insert', function (assert) {
	var iframe = $('#myFrame').contents();
	iframe.find("#RiskTitle").val("SampleText");
	assert.equal("SampleText", iframe.find("#RiskTitle").val(), "RiskTitle element handles insert");
});

// Checking how the element will handle date input. This works well in IE, but fails in Chrome I believe I am missing something here, and will be glad to know what :)
test('Check how the "approval date" element handles date insert', function (assert) {
	var iframe = $('#myFrame').contents();
	iframe.find("#approvalDate").val("1984/03/16");
	assert.deepEqual("1984/03/16", iframe.find("#approvalDate").val(), "Approval Date element handles insert");
});

// Checking the drop down for proper values - array of objects. Using two approaches
test('When you check the drop down items', function (assert) {
	var options = $('#myFrame').contents().find("#status option");
	assert.equal('Open', options[0].innerHTML);
	assert.equal('Closed', $(options[1]).html());
	assert.equal('Rejected', $(options[2]).html());
	assert.equal('Approved', $(options[3]).html());
});

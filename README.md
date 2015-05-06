QA Exercise QUnit Tests
=======================

The index.html has been developed against the specification below. Using QUnit in javascript produce some tests to demonstrate the correctness of the solution and highlight any errors.

There are currently two example tests in tests.js. Please add additional tests here.

You can run test-runner.html in the browser to run the tests.

The easiest way to run an http server from OSX or if you have python installed is ```python -m SimpleHTTPServer 8000``` from the command line and then going to http://localhost:8000/test-runner.html in your browser.

You can view the actually web page at http://localhost:8000

* A user should be able to fill in all the fields and save a risk.
* They should be informed that either the save was successful or a validation error occured.
* All fields are mandatory.
* When changing the risk status to approved, the approval date should be set to today's date.
* The approval date should not be in the past.

The following repo should be forked, commited and pushed into your own repostitory.

Be prepared to discuss your solution and explain how you approached devising a test plan.
What other issues did you find with the webpage?

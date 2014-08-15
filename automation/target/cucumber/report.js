$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login.feature");
formatter.feature({
  "id": "login-feature",
  "tags": [
    {
      "name": "@login",
      "line": 1
    }
  ],
  "description": "",
  "name": "Login Feature",
  "keyword": "Feature",
  "line": 2
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.step({
  "name": "i open the http://www.google.com url",
  "keyword": "Given ",
  "line": 5
});
formatter.match({
  "location": "LoginSteps.i_open_the_http_www_google_com_url()"
});
formatter.result({
  "duration": 17442943413,
  "status": "passed"
});
formatter.scenario({
  "id": "login-feature;check-title",
  "description": "",
  "name": "Check title",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "Google title displayed",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "close the browser",
  "keyword": "And ",
  "line": 9
});
formatter.match({
  "location": "LoginSteps.Google_title_displayed()"
});
formatter.result({
  "duration": 51451892,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 667469729,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.step({
  "name": "i open the http://www.google.com url",
  "keyword": "Given ",
  "line": 5
});
formatter.match({
  "location": "LoginSteps.i_open_the_http_www_google_com_url()"
});
formatter.result({
  "duration": 16442005261,
  "status": "passed"
});
formatter.scenario({
  "id": "login-feature;singin-with-valid-username-and-invalid-password",
  "description": "",
  "name": "Singin With valid username and invalid password",
  "keyword": "Scenario",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "i click on signin button in home page",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "signin page displayed",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "i enter valid username and invalid password",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "click on signin button in sign in page",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "should display \"The email or password you entered is incorrect. \" error message",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "close the browser",
  "keyword": "And ",
  "line": 17
});
formatter.match({
  "location": "LoginSteps.i_click_on_signin_button_in_home_page()"
});
formatter.result({
  "duration": 3304905570,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.signin_page_displayed()"
});
formatter.result({
  "duration": 117233654,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_enter_valid_username_and_invalid_password()"
});
formatter.result({
  "duration": 2318632849,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_signin_button_in_sign_in_page()"
});
formatter.result({
  "duration": 3237497991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email or password you entered is incorrect. ",
      "offset": 16
    }
  ],
  "location": "LoginSteps.should_display_error_message(String)"
});
formatter.result({
  "duration": 86560548,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_the_browser()"
});
formatter.result({
  "duration": 893868215,
  "status": "passed"
});
});
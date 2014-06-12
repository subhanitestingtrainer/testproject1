$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "id": "login-feature",
  "description": "",
  "name": "Login Feature",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "i am in the \"http://www.gmail.com\" page",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gmail.com",
      "offset": 13
    }
  ],
  "location": "LoginSteps.i_am_in_the_page(String)"
});
formatter.result({
  "duration": 31308974429,
  "status": "passed"
});
formatter.scenario({
  "id": "login-feature;login-with-invalid-username-and-invalid-password",
  "description": "",
  "name": "Login with invalid username and invalid password",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "i enter username \"abcd123\" password \"etettetewrewrwerw\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "click on sign In button",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "the user should see the error message \"The email or password you entered is incorrect. ?\"",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123",
      "offset": 18
    },
    {
      "val": "etettetewrewrwerw",
      "offset": 37
    }
  ],
  "location": "LoginSteps.i_enter_username_password(String,String)"
});
formatter.result({
  "duration": 2433825627,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_on_sign_In_button()"
});
formatter.result({
  "duration": 4212153222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email or password you entered is incorrect. ?",
      "offset": 39
    }
  ],
  "location": "LoginSteps.the_user_should_see_the_error_message(String)"
});
formatter.result({
  "duration": 737568730,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "id": "design-signin-page",
  "description": "",
  "name": "Design SignIn page",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "i am in this \"http://www.gmail.com\" page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "i click on signin button",
  "keyword": "When ",
  "line": 5
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gmail.com",
      "offset": 14
    }
  ],
  "location": "SinginSteps.i_am_in_this_page(String)"
});
formatter.result({
  "duration": 26465629500,
  "status": "passed"
});
formatter.match({
  "location": "SinginSteps.i_click_on_signin_button()"
});
formatter.result({
  "duration": 43718,
  "status": "passed"
});
formatter.scenario({
  "id": "design-signin-page;check-email,-password-textfields-and-sign-in-button",
  "description": "",
  "name": "Check Email, password textfields and sign in button",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "email and password text fields displayed",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "sign in button displayed",
  "keyword": "And ",
  "line": 9
});
formatter.match({
  "location": "SinginSteps.email_and_password_text_fields_displayed()"
});
formatter.result({
  "duration": 821036022,
  "status": "passed"
});
formatter.match({
  "location": "SinginSteps.sign_in_button_displayed()"
});
formatter.result({
  "duration": 213815667,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "i am in this \"http://www.gmail.com\" page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "i click on signin button",
  "keyword": "When ",
  "line": 5
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gmail.com",
      "offset": 14
    }
  ],
  "location": "SinginSteps.i_am_in_this_page(String)"
});
formatter.result({
  "duration": 30631621204,
  "status": "passed"
});
formatter.match({
  "location": "SinginSteps.i_click_on_signin_button()"
});
formatter.result({
  "duration": 57305,
  "status": "passed"
});
formatter.scenario({
  "id": "design-signin-page;check-google-logo-and-photo-block",
  "description": "",
  "name": "Check google logo and photo block",
  "keyword": "Scenario",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "google logo and photo block displayed",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "SinginSteps.google_logo_and_photo_block_displayed()"
});
formatter.result({
  "duration": 657091949,
  "status": "passed"
});
});
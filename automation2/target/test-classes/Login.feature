Feature: Login Feature

Background:
	Given i am in the "http://www.gmail.com" page
		
Scenario: Login with invalid username and invalid password
	When i enter username "abcd123" password "etettetewrewrwerw"
	And click on sign In button
	Then the user should see the error message "The email or password you entered is incorrect. ?"
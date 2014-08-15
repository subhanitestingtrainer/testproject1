@login
Feature: Login Feature

Background:
	Given i open the http://www.google.com url

Scenario: Check title	
	Then Google title displayed
	And close the browser

Scenario: Singin With valid username and invalid password	
	When i click on signin button in home page
	Then signin page displayed
	When i enter valid username and invalid password
	And click on signin button in sign in page
	Then should display "The email or password you entered is incorrect. " error message
	And close the browser


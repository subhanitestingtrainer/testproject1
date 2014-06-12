Feature: Design SignIn page

Background:
	Given i am in this "http://www.gmail.com" page
	When i click on signin button
	
Scenario: Check Email, password textfields and sign in button	
	Then email and password text fields displayed
	And sign in button displayed

Scenario: Check google logo and photo block	
	Then google logo and photo block displayed
package com.testqa.automation.test;

import java.io.File;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	WebDriver driver;

	@Given("^i open the http://www.google.com url$")
	public void i_open_the_http_www_google_com_url() throws Throwable {
		driver = new FirefoxDriver();
		driver.get("http://www.google.co.uk");
		Thread.sleep(3000);
	}

	@When("^i click on signin button in home page$")
	public void i_click_on_signin_button_in_home_page() throws Throwable {
		driver.findElement(By.id("gb_70")).click();
		Thread.sleep(3000);
	}

	@Then("^signin page displayed$")
	public void signin_page_displayed() throws Throwable {
		Assert.assertEquals("One account. All of Google.",
				driver.findElement(By.xpath("//h1")).getText());
	}

	@When("^i enter valid username and invalid password$")
	public void i_enter_valid_username_and_invalid_password() throws Throwable {
		Workbook workbook = Workbook.getWorkbook(new File("D:\\testproject\\automation\\src\\test\\resources\\testdata\\logindata.xls"));
		Sheet sheet = workbook.getSheet(0);
		Cell username = sheet.getCell(0, 1);		
		Cell password = sheet.getCell(1, 1);	
		
		driver.findElement(By.id("Email")).sendKeys(username.getContents());
		driver.findElement(By.id("Passwd")).sendKeys(password.getContents());
		workbook.close();
	}

	@When("^click on signin button in sign in page$")
	public void click_on_signin_button_in_sign_in_page() throws Throwable {
		driver.findElement(By.id("signIn")).click();
		Thread.sleep(3000);
	}

	@Then("^should display \"([^\"]*)\" error message$")
	public void should_display_error_message(String arg1) throws Throwable {
		Assert.assertEquals(
				"The email or password you entered is incorrect. ?", driver
						.findElement(By.id("errormsg_0_Passwd")).getText());
	}

	@Then("^Google title displayed$")
	public void Google_title_displayed() throws Throwable {
		Assert.assertEquals("Google", driver.getTitle());
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.quit();
	}

}

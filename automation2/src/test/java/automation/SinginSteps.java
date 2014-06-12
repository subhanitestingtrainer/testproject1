package automation;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SinginSteps {
	
	WebDriver driver ;
	
	@Given("^i am in this \"([^\"]*)\" page$")
	public void i_am_in_this_page(String url) throws Throwable {
		driver = new FirefoxDriver();
		driver.get(url);
	}
	
	@When("^i click on signin button$")
	public void i_click_on_signin_button() throws Throwable {
		//driver.findElement(By.xpath(".//*[@id='gmail-sign-in']")).click();
	}

	@Then("^email and password text fields displayed$")
	public void email_and_password_text_fields_displayed() throws Throwable {
		Assert.assertTrue(driver.findElement(By.xpath(".//*[@id='Email']")).isDisplayed()); //Email text field displayed
		Assert.assertTrue(driver.findElement(By.xpath(".//*[@id='Passwd']")).isDisplayed()); //Password text field displayed
	}

	@Then("^sign in button displayed$")
	public void sign_in_button_displayed() throws Throwable {
		boolean actSignInButton = driver.findElement(By.xpath(".//*[@id='signIn']")).isDisplayed();
		Assert.assertTrue(actSignInButton);
	}

	@Then("^google logo and photo block displayed$")
	public void google_logo_and_photo_block_displayed() throws Throwable {
		Assert.assertTrue(driver.findElement(By.xpath("html/body/div[1]/div[1]/div/img")).isDisplayed());
		Assert.assertTrue(driver.findElement(By.xpath("html/body/div[1]/div[2]/div[2]/img")).isDisplayed());
	}

}

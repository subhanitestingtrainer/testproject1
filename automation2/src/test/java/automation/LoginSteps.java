package automation;



import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	WebDriver driver = null;
	
	@Given("^i am in the \"([^\"]*)\" page$")
	public void i_am_in_the_page(String url) throws Throwable {
	    driver = new FirefoxDriver();
	    driver.get(url);
	}
	
	@When("^i enter username \"([^\"]*)\" password \"([^\"]*)\"$")
	public void i_enter_username_password(String username, String password) throws Throwable {
	  driver.findElement(By.xpath(".//*[@id='Email']")).sendKeys(username); //Type Username
	  driver.findElement(By.xpath(".//*[@id='Passwd']")).sendKeys(password); //Type Password
	}

	@When("^click on sign In button$")
	public void click_on_sign_In_button() throws Throwable {
	    driver.findElement(By.xpath(".//*[@id='signIn']")).click(); // click sign in button
	}

	@Then("^the user should see the error message \"([^\"]*)\"$")
	public void the_user_should_see_the_error_message(String actMessage) throws Throwable {
	   String expMessage = driver.findElement(By.xpath(".//*[@id='errormsg_0_Passwd']")).getText();
	   System.out.println(expMessage);
	   Assert.assertEquals(expMessage, actMessage);
	}
}

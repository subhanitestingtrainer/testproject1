package com.testqa.automation.test;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@Cucumber.Options(format={"pretty", "html:target/cucumber"}, features="src/test/resources/login.feature")
@Cucumber.Options(tags = {"@login"}, format={"pretty", "html:target/cucumber"}, features="src/test/resources/login.feature")
public class RunTest {

}

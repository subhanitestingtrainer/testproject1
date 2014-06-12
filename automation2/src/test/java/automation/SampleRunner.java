package automation;

import org.junit.runner.RunWith;
import cucumber.api.junit.*;

@RunWith(Cucumber.class)
@Cucumber.Options(format={"pretty", "html:target/cucumber"}, features="src/test/resources/")
public class SampleRunner {
}

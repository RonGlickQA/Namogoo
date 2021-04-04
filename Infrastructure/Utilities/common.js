import config from "../../lib/config";
import Assertions from "../Extensions/assertions";

class Common{
  openBrowser(URL) {
    driver.maximizeWindow();
    driver.url(URL);
    Assertions.assertEquals(driver.getUrl(), config.baseUrl);
  }
}

export default new Common();

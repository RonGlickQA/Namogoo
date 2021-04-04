import Common from "../Infrastructure/Utilities/common";
import NavBar from "../Infrastructure/PageObjects/Shared/navBar";
import Assertions from "../Infrastructure/Extensions/assertions";
import data from "../lib/data";

describe("Navigation", () =>
{
  it("to 'Catalog' tab", () => 
  {
    Common.openBrowser("https://shelly-studio.com");
    NavBar.navToTab("Catalog");
    Assertions.assertEquals(driver.getUrl(), data.links.catalog);
  });
  it("to 'Bags' tab", () => 
  {
    NavBar.navToTab("Bags");
    Assertions.assertEquals(driver.getUrl(), data.links.bags);
  });
});

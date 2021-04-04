import Assertions from "../../Extensions/assertions";
import MouseExtensions from "../../Extensions/mouseExtensions";

class NavBar {
  get img_logo() {
    return $("//a[@class = 'site-header__logo-link']");
  }

  get tab_home() {
    return $("//ul[@id='AccessibleNav']//a[@href = '/']");
  }

  get tab_catalog() {
    return $("//ul[@id='AccessibleNav']//a[@href = '/collections/all']");
  }

  get tab_bags() {
    return $("//ul[@id='AccessibleNav']//a[@href = '/collections/bags']");
  }

  get tab_jewelery() {
    return $("//ul[@id='AccessibleNav']//a[@href = '/collections/jewelry']");
  }

  get icon_search() {
    return $("//ul[@id='AccessibleNav']//a[@href = '/search']");
  }

  get icon_cart() {
    return $("//ul[@id='AccessibleNav']//a[@href = '/cart']");
  }

  navToTab(name) {
    try {
      name = name.toUpperCase();
      var tab;
      switch (name) {
        case "HOME":
          tab = this.tab_home;
          break;
        case "CATALOG":
          tab = this.tab_catalog;
          break;
        case "BAGS":
          tab = this.tab_bags;
          break;
        case "JEWELERY":
          tab = this.tab_jewelery;
          break;
        default:
          break;
      }
      Assertions.assertEquals(tab.getText(), name);
      MouseExtensions.clickElement(tab, name);
    } catch (error) {
      throw new Error("The '" + name + "' element was not found");
    }
  }

  clickSearchIcon() {
    MouseExtensions.clickElement(this.icon_search, "search icon");
  }
}

export default new NavBar();

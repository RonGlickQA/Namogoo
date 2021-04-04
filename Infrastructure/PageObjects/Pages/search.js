import Assertions from "../../Extensions/assertions";
import KeyboardExtensions from "../../Extensions/keyboardExtensions";
import MouseExtensions from "../../Extensions/mouseExtensions";
import Waits from "../../Extensions/waits";
import NavBar from "../Shared/navBar";

class Search {
  get btn_close() {
    return $("//button[@type = 'button']");
  }

  get searchField() {
    return $("//input[@type = 'search']");
  }

  get btn_search() {
    return $("//button[@type = 'submit']");
  }

  get title_searchResults() {
    return $("//h1[@class = 'text-center']");
  }

  get list_foundItems() {
    return $$("//a[@class = 'grid-product__image-link']");
  }

  get list_itemsNames() {
    return $$("//span[@class = 'grid-product__title']");
  }

  openSearch() {
    NavBar.clickSearchIcon();
    Waits.waitForElementVisibility(this.searchField, "search input field");
  }

  searchItem(item) {
    KeyboardExtensions.typeTextValue(this.searchField, "search field", item);
    MouseExtensions.clickElement(this.btn_search, "search button");
  }

  searchresults(item) {
    Assertions.assertEquals(this.searchField.getAttribute("value"), item);
    Waits.waitForElementVisibility(
      this.title_searchResults,
      "search results title"
    );
    if (this.list_foundItems.length > 0) {
      Assertions.assertEquals(
        this.title_searchResults.getText(),
        'Your search for "' + item + '" revealed the following:'
      );
    } else {
      Assertions.assertEquals(
        this.title_searchResults.getText(),
        'Your search for "' + item + '" did not yield any results.'
      );
    }
  }

  selectItem(index) {
    if (this.list_foundItems.length == 1) {
      index = 0;
    } else {
      index = --index;
    }
    MouseExtensions.clickElement(
      this.list_foundItems[index],
      this.list_foundItems[index].getText()
    );
  }
}

export default new Search();

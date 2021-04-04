import data from "../../../lib/data";
import Assertions from "../../Extensions/assertions";
import MouseExtensions from "../../Extensions/mouseExtensions";
import Waits from "../../Extensions/waits";

class CurrencyWidget {
  get widget_currency() {
    return $("//div[contains(@class, 'bacurr-choiceDesign')]");
  }

  get window_widget()
  {
    return $("//ul[@class = 'bacurr-dropdown-choices']");
  }

  get list_currencies() {
    return $$("//ul[@class = 'bacurr-dropdown-choices']/li[@class = 'currMovers']");
  }

  changeCurrency(currency) {
    MouseExtensions.clickElement(this.widget_currency, "currency widget");
    Waits.waitForElementVisibility(this.window_widget, "widget's window");
    Waits.waitForListVisibilty(this.list_currencies, "currencies' list");
    Assertions.assertEquals(this.list_currencies.length, data.currenciesCount);
    this.findCurrency(currency);
  }

  findCurrency(currency)
  {
    try
    {
    this.currency = currency.toUpperCase();
    this.list_currencies.forEach((element) => 
    {
      if(this.currency == element.getAttribute("id"))
      {
        MouseExtensions.clickElement(element, "selected currency: " + this.currency)
      }
    });
  }
  catch(error)
  {
    throw new Error("The currency " + currency + " is invalid");
  }
  }

}

export default new CurrencyWidget();

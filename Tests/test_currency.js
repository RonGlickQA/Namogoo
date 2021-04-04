import CurrencyWidget from "../Infrastructure/PageObjects/Shared/currencyWidget";
import Common from "../Infrastructure/Utilities/common";

describe("Changes of currency", () => {
  it("to RON", () => {
    Common.openBrowser("https://shelly-studio.com");
    CurrencyWidget.changeCurrency("Ron");
  });
});

import Cart from "../Infrastructure/PageObjects/Pages/cart";
import Item from "../Infrastructure/PageObjects/Pages/item";
import PaymentConfirmation from "../Infrastructure/PageObjects/Pages/paymentConfirmation";
import RecipientInformation from "../Infrastructure/PageObjects/Pages/recipientInformation";
import Search from "../Infrastructure/PageObjects/Pages/search";
import ShippingConfirmation from "../Infrastructure/PageObjects/Pages/shippingConfirmation";
import Common from "../Infrastructure/Utilities/common";
import data from "../lib/data";

describe("Search for item", () => {
    it("Open search window", () => {
    Common.openBrowser("https://shelly-studio.com");
    Search.openSearch();
  });
  it("Search item: " + data.item.name, () => {
    Search.searchItem(data.item.name);
  });
  it("Verify search results", () => {
    Search.searchresults(data.item.name);
  });
  it("Select item", () => {
    Search.selectItem(2);
  });
  it("Select color: " + data.item.color, () => {
    Item.selectColor(data.item.color);
  });
  it("Add to cart", () => {
    Item.addItemToCart();
  });
  it("Cart checkout", () => {
    Cart.checkoutCart();
  });
  it("Fill recipient's information", () => {
    RecipientInformation.submitInformation(
      data.recipient.email,
      data.recipient.firstName,
      data.recipient.lastName,
      data.recipient.address,
      data.recipient.city
    );
  });
  it("Continue to payment", () => {
    ShippingConfirmation.submitShipingInformation();
  });
  it("Verify contact information", () => {
    PaymentConfirmation.verifyContactInformation();
  });
});

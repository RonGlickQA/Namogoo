import data from "../../../lib/data";
import Assertions from "../../Extensions/assertions";
import KeyboardExtensions from "../../Extensions/keyboardExtensions";
import MouseExtensions from "../../Extensions/mouseExtensions";
import Waits from "../../Extensions/waits";

class RecipientInformation {
  get txt_emailField() {
    return $("//input[@type = 'email']");
  }

  get txt_firstName() {
    return $("//input[@id = 'checkout_shipping_address_first_name']");
  }

  get txt_lastName() {
    return $("//input[@id = 'checkout_shipping_address_last_name']");
  }

  get txt_shippingAddress() {
    return $("//input[@id = 'checkout_shipping_address_address1']");
  }

  get txt_shippingAddressCity() {
    return $("//input[@id = 'checkout_shipping_address_city']");
  }

  get btn_continueToShipping() {
    return $("//button[@type = 'submit']");
  }

  submitInformation(email, firstName, lastName, address, city)
  {
    this.fillShippingInformation(email, firstName, lastName, address, city);
    this.clickSubmit();
  }
  

  fillShippingInformation(email, firstName, lastName, address, city) {
    KeyboardExtensions.typeTextValue(this.txt_emailField, "email field", email);
    KeyboardExtensions.typeTextValue(this.txt_firstName, "first name field", firstName);
    KeyboardExtensions.typeTextValue(this.txt_lastName, "last name field", lastName);
    KeyboardExtensions.typeTextValue(this.txt_shippingAddress, "shipping address", address);
    KeyboardExtensions.typeTextValue(this.txt_shippingAddressCity, "address' city", city);
  }

  clickSubmit() 
  {
    Waits.waitForElementVisibility(this.btn_continueToShipping, "continue to shipping button");
    Assertions.assertEquals(this.btn_continueToShipping.getText(), data.buttons.toShipping);
    MouseExtensions.clickElement(this.btn_continueToShipping, "continue to shipping button");
  }
}

export default new RecipientInformation();

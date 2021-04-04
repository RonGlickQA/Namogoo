import data from "../../../lib/data";
import Assertions from "../../Extensions/assertions";
import MouseExtensions from "../../Extensions/mouseExtensions";
import Waits from "../../Extensions/waits";

class Cart {
  get btn_checkout() {
    return $("//button[@name = 'checkout']");
  }

  checkoutCart() {
    Waits.waitForElementVisibility(this.btn_checkout, "checkout button");
    Assertions.assertEquals(this.btn_checkout.getText(), data.buttons.checkout);
    MouseExtensions.clickElement(this.btn_checkout, "checkout button");
  }
}

export default new Cart();

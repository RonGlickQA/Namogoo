import data from "../../../lib/data";
import Assertions from "../../Extensions/assertions";
import MouseExtensions from "../../Extensions/mouseExtensions";
import Waits from "../../Extensions/waits";

class ShippingConfirmation {
  get btn_continueToPayment() {
    return $("//button[@type = 'submit']");
  }

  submitShipingInformation() {
    Waits.waitForElementVisibility(
      this.btn_continueToPayment,
      "continue to payment button"
    );
    Assertions.assertEquals(
      this.btn_continueToPayment.getText(),
      data.buttons.toPayment
    );
    MouseExtensions.clickElement(
      this.btn_continueToPayment,
      "continue to payment button"
    );
  }
}
export default new ShippingConfirmation();

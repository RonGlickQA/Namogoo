import data from "../../../lib/data";
import Assertions from "../../Extensions/assertions";
import Waits from "../../Extensions/waits";

class PaymentConfirmation {
  get title_contact() {
    return $("//div[@role = 'cell']");
  }

  verifyContactInformation() {
    Waits.waitForElementVisibility(this.title_contact, "contact information");
    Assertions.assertEquals(this.title_contact.getText(), data.recipient.email);
    driver.pause(3000);
  }
}

export default new PaymentConfirmation();

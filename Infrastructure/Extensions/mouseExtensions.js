import Waits from "./waits";

class MouseExtensions {
  clickElement(element, name) {
    Waits.waitForElementClick(element, name);
    element.click();
  }
}

export default new MouseExtensions();

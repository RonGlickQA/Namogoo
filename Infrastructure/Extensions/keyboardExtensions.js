import Waits from "./waits";

class KeyboardExtensions {
  typeTextValue(element, name, input) {
    Waits.waitForElementToBeEnabled(element, name);
    element.setValue(input);
  }
}

export default new KeyboardExtensions();

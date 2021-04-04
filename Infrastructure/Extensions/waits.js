class Waits {
  waitForElementVisibility(element, name) {
    try {
      expect(element).toBeVisible();
    } catch (error) {
      throw new Error("The '" + name + "' element is not visible");
    }
  }

  waitForListVisibilty(list, name) {
    try {
      expect(list).toBeVisible();
    } catch (error) {
      throw new Error("The '" + name + "' list is not visible");
    }
  }

  waitForElementToBeEnabled(element, name) {
    try {
      expect(element).toBeEnabled();
    } catch (error) {
      throw new Error("The '" + name + "' element is disabled");
    }
  }

  waitForElementClick(element, name) {
    try {
      expect(element).toBeClickable();
    } catch (error) {
      throw new Error("The '" + name + "' element could not be clicked");
    }
  }
}

export default new Waits();

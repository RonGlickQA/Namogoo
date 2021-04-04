import MouseExtensions from "../../Extensions/mouseExtensions";

class Item {
  get list_itemColors() {
    return $$("//label[contains(@for,'ProductSelect-option-color-')]");
    // return $$("//input[@type = 'radio']");
  }

  get btn_addToCart() {
    return $("//button[@id = 'AddToCart--product-template']");
  }

  selectColor(color) {
    try {
      this.color = color.toUpperCase();
      this.list_itemColors.forEach((element) => {
        if (this.color == element.getText()) {
          MouseExtensions.clickElement(element, this.color);
        }
      });
    } catch (error) {
      throw new Error("The color " + color + " is invalid");
    }
  }

  addItemToCart() {
    MouseExtensions.clickElement(this.btn_addToCart, "add to cart button");
  }
}

export default new Item();

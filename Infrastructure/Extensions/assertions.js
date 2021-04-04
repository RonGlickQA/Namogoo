const assert = require("chai").assert;

class Assertions {
  assertEquals(actual, expected) {
    try {
      assert.equal(actual, expected);
    } catch (error) {
      throw new Error(
        "The actaul value '" +
          actual +
          "' does not match expected: '" +
          expected +
          "'"
      );
    }
  }
}

export default new Assertions();

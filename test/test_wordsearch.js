const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function () {
    const result = wordSearch(
      [
        ["A", "S", "C", "F", "Q", "U", "A", "L"],
        ["P", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "I", "C", "F", "Q", "U", "A", "L"],
        ["H", "N", "J", "T", "E", "V", "R", "G"],
        ["W", "F", "C", "S", "Y", "E", "R", "L"],
        ["B", "E", "R", "E", "N", "E", "Y", "B"],
        ["U", "L", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present from top right to bottom left", function () {
    //top right to bottom left
    const result = wordSearch(
      [
        ["D", "W", "C", "F", "Q", "U", "A", "S"],
        ["D", "E", "I", "N", "F", "E", "A", "D"],
        ["Y", "L", "I", "F", "Q", "H", "L", "L"],
        ["H", "M", "E", "N", "I", "I", "R", "G"],
        ["W", "H", "C", "L", "M", "E", "R", "L"],
        ["B", "F", "R", "A", "N", "E", "Y", "B"],
        ["U", "B", "S", "W", "A", "I", "L", "I"],
        ["O", "E", "C", "A", "K", "U", "A", "I"],
        ["S", "Z", "K", "F", "Q", "U", "A", "S"],
      ],
      "SAHIL"
    );
    assert.isTrue(result);
  });

  it("should return true if the word is reversed", function () {
    const result = wordSearch(
      [
        ["D", "W", "L", "E", "C", "R", "A", "M"],
        ["D", "E", "I", "N", "F", "E", "A", "D"],
        ["Y", "L", "I", "F", "Q", "H", "L", "L"],
        ["H", "M", "E", "N", "I", "I", "R", "G"],
        ["W", "H", "C", "L", "M", "E", "R", "L"],
        ["B", "F", "R", "A", "N", "E", "Y", "B"],
        ["U", "B", "S", "W", "A", "I", "L", "I"],
        ["O", "E", "C", "A", "K", "U", "A", "I"],
        ["S", "Z", "K", "F", "Q", "U", "A", "S"],
      ],
      "MARCEL"
    );
    assert.isTrue(result);
  });
});

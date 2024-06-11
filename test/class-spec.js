const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const testWord = new Word("example");
      expect(testWord).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      const testWord = new Word("example");
      expect(testWord.word).to.equal("example");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const testWord = new Word("example");
      const result = testWord.removeVowels();
      expect(result).to.equal("xmpl");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const testWord = new Word("example");
      const result = testWord.removeConsonants();
      expect(result).to.equal("eae");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const testWord1 = new Word("example");
      const result1 = testWord1.pigLatin();
      expect(result1).to.equal("exampleyay");

      const testWord2 = new Word("latin");
      const result2 = testWord2.pigLatin();
      expect(result2).to.equal("atinlay");
    });
  });
});

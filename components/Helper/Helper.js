class Helper {
  static formatPriceTag = (string) => {
    let newString = this.#deleteSymbolsAfterPoint(string);
    newString = this.addSpaces(newString);

    return newString;
  };

  static formatPriceInput = (sting) => {
    let newStr = this.#deleteLettersAndSpacesFromString(sting);
    newStr = this.#deleteStartZeroFromString(newStr);

    return newStr;
  };

  // adds a space each every 3 characters from the end
  static addSpaces = (string) => {
    let newStr = string;
    if (newStr.length > 3) {
      const { length } = newStr;
      const chars = newStr.split('');
      const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = (length - i) % 3 === 0 ? ' ' : '';
        return spaceOrNothing + char + acc;
      }, '');
      if (strWithSpaces[0] === ' ') newStr = strWithSpaces.slice(1);
      else newStr = strWithSpaces;
    }

    return newStr;
  };

  static #deleteStartZeroFromString = (string) => {
    let newString = string;
    if (newString[0] === '0' && newString.length !== 1)
      newString = newString.replace('0', '');

    return newString;
  };

  static #deleteLettersAndSpacesFromString = (string) => {
    let newStr = '';
    for (let i = 0; i < string.length; i += 1)
      if (
        string[i].charCodeAt(0) >= '0'.charCodeAt(0) &&
        string[i].charCodeAt(0) <= '9'.charCodeAt(0)
      ) {
        newStr += string[i];
      }

    return newStr;
  };

  static #deleteSymbolsAfterPoint = (string) => {
    let newStr = '';
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] !== '.') newStr += string[i];
      else return newStr;
    }
    return newStr;
  };
}

export default Helper;

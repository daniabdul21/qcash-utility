export const regexes = {
  validEmail: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

  alphabetsAndNumbers: /^[a-zA-Z0-9]+$/,

  onlyAlphabets: /^[a-zA-Z]+$/,

  onlyNumbers: /^[0-9]+$/,

  safeCharacters: /^[a-zA-Z0-9.,'"/!?() -]+$/,

  accountReceivableFileDescription: /^[a-zA-Z0-9.,'"/!?() +&_-]+$/,

  accountReceivableFileName: /^[\w\s. \-_()&+]+$/,

  normalSentence: /^[a-zA-Z0-9.,\s]+$/,

  alphanumericWhitespaceHyphenUnderscoreDot: /^[a-zA-Z0-9\s\-_.]+$/,

  alphanumericHyphenUnderscoreDot: /^[a-zA-Z0-9\-_.]+$/,

  unAllowedCharacterForRemarkBiFast: /["$\'\]\[`/\\{|}$~'"?]/g,

  bgClaimFileDecsriptionAllowedCharacter: /[^a-zA-Z0-9\s'"*^:;<>!@()_.,&%$#?+=/\]\[-]+/,

  bgAllowedCharactedRemark: /[^a-zA-Z0-9\s/:;.,()_&@#%$-]+/,
};

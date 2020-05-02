const rewriteTextAtPosition = (
  text,
  position,
  rewriteText,
  rewriteLength = rewriteText.length
) =>
  text.substr(0, position) +
  rewriteText +
  text.substr(position + rewriteLength);

const insertTextAtPosition = (text, position, insertText) =>
  rewriteTextAtPosition(text, position, insertText, 0);


const escapeChars = (text, charsToEscape) => {
  for (const char of charsToEscape) {
    text = text.split(char).join(`\\${char}`);
  }

  return text;
};

module.exports = {
  rewriteTextAtPosition,
  insertTextAtPosition,
  escapeChars,
}
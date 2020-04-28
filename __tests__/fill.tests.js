const { fillMarkdownEntitiesMarkup } = require('../src');

describe('fill entities markup', () => {
  test('telegram docs sample', () => {
    // https://core.telegram.org/bots/api#markdownv2-style
    const plainText = `bold *text
italic *text
underline
strikethrough
bold italic bold italic bold strikethrough underline italic bold bold
inline URL
inline mention of a user
inline fixed-width code
pre-formatted fixed-width code block

pre-formatted fixed-width code block written in the Python programming language`;

    const entities = [
      { offset: 0, length: 10, type: 'bold' },
      { offset: 11, length: 12, type: 'italic' },
      { offset: 24, length: 9, type: 'underline' },
      { offset: 34, length: 13, type: 'strikethrough' },
      { offset: 48, length: 5, type: 'bold' },
      { offset: 53, length: 12, type: 'bold' },
      { offset: 53, length: 12, type: 'italic' },
      { offset: 65, length: 26, type: 'bold' },
      { offset: 65, length: 26, type: 'italic' },
      { offset: 65, length: 25, type: 'strikethrough' },
      { offset: 91, length: 26, type: 'bold' },
      { offset: 91, length: 21, type: 'italic' },
      { offset: 91, length: 21, type: 'underline' },
      {
        offset: 118,
        length: 10,
        type: 'text_link',
        url: 'http://www.example.com/',
      },
      { offset: 154, length: 23, type: 'code' },
      { offset: 178, length: 37, type: 'pre' },
      { offset: 216, length: 79, type: 'pre', language: 'python' },
    ];

    expect(
      JSON.stringify(fillMarkdownEntitiesMarkup(plainText, entities))
    ).toEqual(
      JSON.stringify(
        '*bold \\*text*\n\r_italic \\*text_\r\n\r__underline__\r\n~strikethrough~\n*bold **\r_italic bold _\r**\r_~italic bold strikethrough~ _\r**\r_\r__underline italic bold__\r_\r bold*\n[inline URL](http://www.example.com/)\ninline mention of a user\n`inline fixed-width code`\n```\npre-formatted fixed-width code block\n```\n```python\npre-formatted fixed-width code block written in the Python programming language```'
      )
    );
  });
});

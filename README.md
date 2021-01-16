## DEPRECATED: Bot API since [version 5](https://core.telegram.org/bots/api#november-4-2020) has ability to specify message entities using [MessageEntity](https://core.telegram.org/bots/api#messageentity)

### Introduction

Simple library that helps fills text with entities markup

### Installation

```
$ npm install telegram-text-entities-filler
```
or using `yarn`:
```
$ yarn add telegram-text-entities-filler
```

### Example

This bot will respond with the same message, keeping the text markup

```js
const Telegraf = require('telegraf');
const { fillMarkdownEntitiesMarkup } = require('telegram-text-entities-filler');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on('text', (ctx) =>
  ctx.reply(
    fillMarkdownEntitiesMarkup(ctx.message.text, ctx.message.entities),
    { parse_mode: "MarkdownV2" }
  )
);

bot.launch();
```

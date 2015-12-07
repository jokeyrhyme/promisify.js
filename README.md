# promisify.js

wrap a Node.js-style asynchronous function so that it returns a Promise

[![Build Status](https://travis-ci.org/jokeyrhyme/promisify.js.png)](https://travis-ci.org/jokeyrhyme/promisify.js)


## Usage

```js
const promisify = require('@jokeyrhyme/promisify');

const fs = require('fs');

const readdir = promisify(fs, fs.readdir);

fs.readdir(process.cwd())
  .then((result) => { /* ... */ })
  .catch((err) => { /* ... */ });
```


## Related

- callbackify: https://github.com/jokeyrhyme/callbackify.js

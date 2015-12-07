# promisify.js

wrap a Node.js-style asynchronous function so that it returns a Promise

[![npm module](https://img.shields.io/npm/v/@jokeyrhyme/promisify.svg)](https://www.npmjs.com/package/@jokeyrhyme/promisify)
[![Build Status](https://travis-ci.org/jokeyrhyme/promisify.js.png)](https://travis-ci.org/jokeyrhyme/promisify.js)


## Usage

```js
const promisify = require('@jokeyrhyme/promisify');

const fs = require('fs');

const readdir = promisify(fs.readdir);

fs.readdir(process.cwd())
  .then((result) => { /* ... */ })
  .catch((err) => { /* ... */ });
```


## API


### `promisify (context?: Object, Function) => Promiser`

```
interface Promiser {
  (...args: Any[]) => Promise
}
```


## Related

- callbackify: https://github.com/jokeyrhyme/callbackify.js

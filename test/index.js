'use strict';

const test = require('ava');

const promisify = require('..');

test('is a function', (t) => {
  t.is(typeof promisify, 'function');
});

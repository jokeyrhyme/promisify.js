'use strict';

const test = require('ava');

const promisify = require('..');

const cases = require('./fixtures/cases');

const { getError, getResult } = require('./fixtures/async-functions');

cases.forEach(({ args, expected }) => {
  test(`with error: args.length=${args.length}`, (t) => {
    const fn = promisify(getError);
    const returns = fn(...args);

    t.is(typeof returns.then, 'function');

    return returns
      .then(() => {
        t.fail('resolved');
      })
      .catch((err) => {
        t.ok(err);
        t.is(err.message, expected);
        t.pass('rejected');
      });
  });

  test(`with result: args.length=${args.length}`, (t) => {
    const fn = promisify(getResult);
    const returns = fn(...args);

    t.is(typeof returns.then, 'function');

    return returns
      .then((result) => {
        t.is(result, expected);
        t.pass('resolved');
      })
      .catch((err) => {
        t.ifError(err);
        t.fail('rejected');
      });
  });
});

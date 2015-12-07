'use strict';

const test = require('ava');

const promisify = require('..');

const cases = require('./fixtures/cases');

const context = require('./fixtures/async-functions');
const { getError, getResult } = context;

cases.forEach(({ args, expected }) => {
  test(`with error: args.length=${args.length}`, (t) => {
    const fn = promisify(context, getError);
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
    const fn = promisify(context, getResult);
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

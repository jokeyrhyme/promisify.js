'use strict';

/**
interface Promiser {
  (...args: Any[]) => Promise
}

promisify (context?: Object, Function) => Promiser
*/
module.exports = function promisify () {
  var ctx, fn;
  if (arguments.length === 2) {
    ctx = arguments[0];
    fn = arguments[1];
  }
  if (arguments.length === 1) {
    ctx = null;
    fn = arguments[0];
  }
  return function () {
    var args = Array.prototype.slice.call(arguments, 0);
    return new Promise(function (resolve, reject) {
      args.push(function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
      fn.apply(ctx, args);
    });
  };
};

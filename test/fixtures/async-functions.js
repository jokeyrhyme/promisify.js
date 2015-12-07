'use strict';

module.exports = {
  getError: function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var cb = args.pop();
    cb(new Error('abc' + arguments.length));
  },

  getResult: function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var cb = args.pop();
    cb(null, 'abc' + arguments.length);
  }
};

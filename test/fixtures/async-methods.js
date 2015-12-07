'use strict';

module.exports = {
  text: 'abc',

  getError: function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var cb = args.pop();
    cb(new Error(this.text + arguments.length));
  },

  getResult: function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var cb = args.pop();
    cb(null, this.text + arguments.length);
  }
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrappersMock = undefined;

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrappersMock = exports.wrappersMock = function wrappersMock() {
  return {
    axiosWrapper: {
      get: _sinon2.default.mock(),
      postWithPolling: _sinon2.default.mock()
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L21vY2tzL290aGVycy9qc1V0aWxzLmpzIl0sIm5hbWVzIjpbIndyYXBwZXJzTW9jayIsImF4aW9zV3JhcHBlciIsImdldCIsIm1vY2siLCJwb3N0V2l0aFBvbGxpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQU87QUFDakNDLGtCQUFlO0FBQ2JDLFdBQUssZ0JBQU1DLElBQU4sRUFEUTtBQUViQyx1QkFBaUIsZ0JBQU1ELElBQU47QUFGSjtBQURrQixHQUFQO0FBQUEsQ0FBckIiLCJmaWxlIjoianNVdGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaW5vbiBmcm9tICdzaW5vbidcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXJzTW9jayA9ICgpID0+ICh7XG4gIGF4aW9zV3JhcHBlcjogKHtcbiAgICBnZXQ6IHNpbm9uLm1vY2soKSxcbiAgICBwb3N0V2l0aFBvbGxpbmc6IHNpbm9uLm1vY2soKVxuICB9KVxufSlcbiJdfQ==
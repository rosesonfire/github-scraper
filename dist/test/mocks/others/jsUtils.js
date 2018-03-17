'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrappersMock = exports.utilsStub = undefined;

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utilsStub = exports.utilsStub = function utilsStub() {
  return {
    createDefensivePromise: _sinon2.default.stub()
  };
};

var wrappersMock = exports.wrappersMock = function wrappersMock() {
  return {
    axiosWrapper: {
      get: _sinon2.default.mock(),
      postWithPolling: _sinon2.default.mock()
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L21vY2tzL290aGVycy9qc1V0aWxzLmpzIl0sIm5hbWVzIjpbInV0aWxzU3R1YiIsImNyZWF0ZURlZmVuc2l2ZVByb21pc2UiLCJzdHViIiwid3JhcHBlcnNNb2NrIiwiYXhpb3NXcmFwcGVyIiwiZ2V0IiwibW9jayIsInBvc3RXaXRoUG9sbGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNQSxnQ0FBWSxTQUFaQSxTQUFZO0FBQUEsU0FBTztBQUM5QkMsNEJBQXdCLGdCQUFNQyxJQUFOO0FBRE0sR0FBUDtBQUFBLENBQWxCOztBQUlBLElBQU1DLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQ2pDQyxrQkFBZTtBQUNiQyxXQUFLLGdCQUFNQyxJQUFOLEVBRFE7QUFFYkMsdUJBQWlCLGdCQUFNRCxJQUFOO0FBRko7QUFEa0IsR0FBUDtBQUFBLENBQXJCIiwiZmlsZSI6ImpzVXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2lub24gZnJvbSAnc2lub24nXG5cbmV4cG9ydCBjb25zdCB1dGlsc1N0dWIgPSAoKSA9PiAoe1xuICBjcmVhdGVEZWZlbnNpdmVQcm9taXNlOiBzaW5vbi5zdHViKClcbn0pXG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyc01vY2sgPSAoKSA9PiAoe1xuICBheGlvc1dyYXBwZXI6ICh7XG4gICAgZ2V0OiBzaW5vbi5tb2NrKCksXG4gICAgcG9zdFdpdGhQb2xsaW5nOiBzaW5vbi5tb2NrKClcbiAgfSlcbn0pXG4iXX0=
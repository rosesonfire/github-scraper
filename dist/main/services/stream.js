'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtils = require('js-utils');

// TODO: this is not going to work because
//    1. the sleep is synchronous (verify though..)
//    2. the internal promises don't get resolved before going to
//       next sleep cycle... :( (verify though..)

// Start scrapping
exports.default = function (_ref) {
  var Rx = _ref.Rx,
      scrape = _ref.scrape,
      fetchInterval = _ref.fetchInterval;
  return function () {
    return (0, _jsUtils.createDefensivePromise)(function (resolve, reject) {
      return Rx.Observable.interval(fetchInterval)
      // .take(10) // used while testing
      .map(function (_) {
        return scrape();
      })
      // eslint-disable-next-line no-console
      .catch(function (e) {
        return console.error(e);
      })
      // .takeLast(1) // used while testing
      // .map(resolve) // used while testing
      .subscribe(function (response) {
        return response
        // eslint-disable-next-line no-console
        .then(function (response) {
          return console.log(response);
        })
        // eslint-disable-next-line no-console
        .catch(function (er) {
          return console.error(er);
        });
      });
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL3N0cmVhbS5qcyJdLCJuYW1lcyI6WyJSeCIsInNjcmFwZSIsImZldGNoSW50ZXJ2YWwiLCJyZXNvbHZlIiwicmVqZWN0IiwiT2JzZXJ2YWJsZSIsImludGVydmFsIiwibWFwIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJlIiwic3Vic2NyaWJlIiwicmVzcG9uc2UiLCJ0aGVuIiwibG9nIiwiZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO2tCQUNlO0FBQUEsTUFBR0EsRUFBSCxRQUFHQSxFQUFIO0FBQUEsTUFBT0MsTUFBUCxRQUFPQSxNQUFQO0FBQUEsTUFBZUMsYUFBZixRQUFlQSxhQUFmO0FBQUEsU0FBbUM7QUFBQSxXQUNoRCxxQ0FBdUIsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWO0FBQUEsYUFDckJKLEdBQUdLLFVBQUgsQ0FDR0MsUUFESCxDQUNZSixhQURaO0FBRUU7QUFGRixPQUdHSyxHQUhILENBR087QUFBQSxlQUFLTixRQUFMO0FBQUEsT0FIUDtBQUlFO0FBSkYsT0FLR08sS0FMSCxDQUtTO0FBQUEsZUFBS0MsUUFBUUMsS0FBUixDQUFjQyxDQUFkLENBQUw7QUFBQSxPQUxUO0FBTUU7QUFDQTtBQVBGLE9BUUdDLFNBUkgsQ0FRYTtBQUFBLGVBQ1RDO0FBQ0U7QUFERixTQUVHQyxJQUZILENBRVE7QUFBQSxpQkFBWUwsUUFBUU0sR0FBUixDQUFZRixRQUFaLENBQVo7QUFBQSxTQUZSO0FBR0U7QUFIRixTQUlHTCxLQUpILENBSVM7QUFBQSxpQkFBTUMsUUFBUUMsS0FBUixDQUFjTSxFQUFkLENBQU47QUFBQSxTQUpULENBRFM7QUFBQSxPQVJiLENBRHFCO0FBQUEsS0FBdkIsQ0FEZ0Q7QUFBQSxHQUFuQztBQUFBLEMiLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSB9IGZyb20gJ2pzLXV0aWxzJ1xuXG4vLyBUT0RPOiB0aGlzIGlzIG5vdCBnb2luZyB0byB3b3JrIGJlY2F1c2Vcbi8vICAgIDEuIHRoZSBzbGVlcCBpcyBzeW5jaHJvbm91cyAodmVyaWZ5IHRob3VnaC4uKVxuLy8gICAgMi4gdGhlIGludGVybmFsIHByb21pc2VzIGRvbid0IGdldCByZXNvbHZlZCBiZWZvcmUgZ29pbmcgdG9cbi8vICAgICAgIG5leHQgc2xlZXAgY3ljbGUuLi4gOiggKHZlcmlmeSB0aG91Z2guLilcblxuLy8gU3RhcnQgc2NyYXBwaW5nXG5leHBvcnQgZGVmYXVsdCAoeyBSeCwgc2NyYXBlLCBmZXRjaEludGVydmFsIH0pID0+ICgpID0+XG4gIGNyZWF0ZURlZmVuc2l2ZVByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICBSeC5PYnNlcnZhYmxlXG4gICAgICAuaW50ZXJ2YWwoZmV0Y2hJbnRlcnZhbClcbiAgICAgIC8vIC50YWtlKDEwKSAvLyB1c2VkIHdoaWxlIHRlc3RpbmdcbiAgICAgIC5tYXAoXyA9PiBzY3JhcGUoKSlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKVxuICAgICAgLy8gLnRha2VMYXN0KDEpIC8vIHVzZWQgd2hpbGUgdGVzdGluZ1xuICAgICAgLy8gLm1hcChyZXNvbHZlKSAvLyB1c2VkIHdoaWxlIHRlc3RpbmdcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT5cbiAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIC5jYXRjaChlciA9PiBjb25zb2xlLmVycm9yKGVyKSkpKVxuIl19
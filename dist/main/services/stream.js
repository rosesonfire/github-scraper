"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// TODO: this is not going to work because
//    1. the sleep is synchronous (verify though..)
//    2. the internal promises don't get resolved before going to
//       next sleep cycle... :( (verify though..)

// Start scrapping
exports.default = function (_ref) {
  var Rx = _ref.Rx,
      scrape = _ref.scrape,
      fetchInterval = _ref.fetchInterval,
      utils = _ref.utils;
  return function () {
    return utils.createDefensivePromise(function (resolve, reject) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL3N0cmVhbS5qcyJdLCJuYW1lcyI6WyJSeCIsInNjcmFwZSIsImZldGNoSW50ZXJ2YWwiLCJ1dGlscyIsImNyZWF0ZURlZmVuc2l2ZVByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiT2JzZXJ2YWJsZSIsImludGVydmFsIiwibWFwIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJlIiwic3Vic2NyaWJlIiwicmVzcG9uc2UiLCJ0aGVuIiwibG9nIiwiZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO2tCQUNlO0FBQUEsTUFBR0EsRUFBSCxRQUFHQSxFQUFIO0FBQUEsTUFBT0MsTUFBUCxRQUFPQSxNQUFQO0FBQUEsTUFBZUMsYUFBZixRQUFlQSxhQUFmO0FBQUEsTUFBOEJDLEtBQTlCLFFBQThCQSxLQUE5QjtBQUFBLFNBQTBDO0FBQUEsV0FDdkRBLE1BQU1DLHNCQUFOLENBQTZCLFVBQUNDLE9BQUQsRUFBVUMsTUFBVjtBQUFBLGFBQzNCTixHQUFHTyxVQUFILENBQ0dDLFFBREgsQ0FDWU4sYUFEWjtBQUVFO0FBRkYsT0FHR08sR0FISCxDQUdPO0FBQUEsZUFBS1IsUUFBTDtBQUFBLE9BSFA7QUFJRTtBQUpGLE9BS0dTLEtBTEgsQ0FLUztBQUFBLGVBQUtDLFFBQVFDLEtBQVIsQ0FBY0MsQ0FBZCxDQUFMO0FBQUEsT0FMVDtBQU1FO0FBQ0E7QUFQRixPQVFHQyxTQVJILENBUWE7QUFBQSxlQUNUQztBQUNFO0FBREYsU0FFR0MsSUFGSCxDQUVRO0FBQUEsaUJBQVlMLFFBQVFNLEdBQVIsQ0FBWUYsUUFBWixDQUFaO0FBQUEsU0FGUjtBQUdFO0FBSEYsU0FJR0wsS0FKSCxDQUlTO0FBQUEsaUJBQU1DLFFBQVFDLEtBQVIsQ0FBY00sRUFBZCxDQUFOO0FBQUEsU0FKVCxDQURTO0FBQUEsT0FSYixDQUQyQjtBQUFBLEtBQTdCLENBRHVEO0FBQUEsR0FBMUM7QUFBQSxDIiwiZmlsZSI6InN0cmVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IHRoaXMgaXMgbm90IGdvaW5nIHRvIHdvcmsgYmVjYXVzZVxuLy8gICAgMS4gdGhlIHNsZWVwIGlzIHN5bmNocm9ub3VzICh2ZXJpZnkgdGhvdWdoLi4pXG4vLyAgICAyLiB0aGUgaW50ZXJuYWwgcHJvbWlzZXMgZG9uJ3QgZ2V0IHJlc29sdmVkIGJlZm9yZSBnb2luZyB0b1xuLy8gICAgICAgbmV4dCBzbGVlcCBjeWNsZS4uLiA6KCAodmVyaWZ5IHRob3VnaC4uKVxuXG4vLyBTdGFydCBzY3JhcHBpbmdcbmV4cG9ydCBkZWZhdWx0ICh7IFJ4LCBzY3JhcGUsIGZldGNoSW50ZXJ2YWwsIHV0aWxzIH0pID0+ICgpID0+XG4gIHV0aWxzLmNyZWF0ZURlZmVuc2l2ZVByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICBSeC5PYnNlcnZhYmxlXG4gICAgICAuaW50ZXJ2YWwoZmV0Y2hJbnRlcnZhbClcbiAgICAgIC8vIC50YWtlKDEwKSAvLyB1c2VkIHdoaWxlIHRlc3RpbmdcbiAgICAgIC5tYXAoXyA9PiBzY3JhcGUoKSlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmVycm9yKGUpKVxuICAgICAgLy8gLnRha2VMYXN0KDEpIC8vIHVzZWQgd2hpbGUgdGVzdGluZ1xuICAgICAgLy8gLm1hcChyZXNvbHZlKSAvLyB1c2VkIHdoaWxlIHRlc3RpbmdcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT5cbiAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIC5jYXRjaChlciA9PiBjb25zb2xlLmVycm9yKGVyKSkpKVxuIl19
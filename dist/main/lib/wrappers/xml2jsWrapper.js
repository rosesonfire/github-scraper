"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var xml2js = _ref.xml2js,
      utils = _ref.utils;
  return {
    convert: function convert(xml) {
      return utils.createDefensivePromise(function (resolve, reject) {
        xml2js.parseString(xml, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyLmpzIl0sIm5hbWVzIjpbInhtbDJqcyIsInV0aWxzIiwiY29udmVydCIsImNyZWF0ZURlZmVuc2l2ZVByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2VTdHJpbmciLCJ4bWwiLCJlcnIiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFBZTtBQUFBLE1BQUdBLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdDLEtBQVgsUUFBV0EsS0FBWDtBQUFBLFNBQXdCO0FBQ3JDQyxhQUFTO0FBQUEsYUFBT0QsTUFBTUUsc0JBQU4sQ0FBNkIsVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ2hFTCxlQUFPTSxXQUFQLENBQW1CQyxHQUFuQixFQUF3QixVQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBaUI7QUFDdkMsY0FBSUQsR0FBSixFQUFTO0FBQ1BILG1CQUFPRyxHQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0xKLG9CQUFRSyxNQUFSO0FBQ0Q7QUFDRixTQU5EO0FBT0QsT0FSZSxDQUFQO0FBQUE7QUFENEIsR0FBeEI7QUFBQSxDIiwiZmlsZSI6InhtbDJqc1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyB4bWwyanMsIHV0aWxzIH0pID0+ICh7XG4gIGNvbnZlcnQ6IHhtbCA9PiB1dGlscy5jcmVhdGVEZWZlbnNpdmVQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB4bWwyanMucGFyc2VTdHJpbmcoeG1sLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuIl19
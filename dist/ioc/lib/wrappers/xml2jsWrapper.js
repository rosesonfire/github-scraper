'use strict';

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var _jsUtils = require('js-utils');

var _xml2jsWrapper = require('./../../../main/lib/wrappers/xml2jsWrapper');

var _xml2jsWrapper2 = _interopRequireDefault(_xml2jsWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = _jsUtils.utils.iocHelper.createNewInstance({
  instanceConstructor: _xml2jsWrapper2.default,
  dependencyInstances: {
    xml2js: _xml2js2.default,
    utils: _jsUtils.utils
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pb2MvbGliL3dyYXBwZXJzL3htbDJqc1dyYXBwZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIm1vZHVsZSIsImlvY0hlbHBlciIsImNyZWF0ZU5ld0luc3RhbmNlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImRlcGVuZGVuY3lJbnN0YW5jZXMiLCJ4bWwyanMiLCJ1dGlscyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOztBQUVBOzs7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixlQUFNRSxTQUFOLENBQWdCQyxpQkFBaEIsQ0FBa0M7QUFDM0RDLDhDQUQyRDtBQUUzREMsdUJBQXFCO0FBQ25CQyw0QkFEbUI7QUFFbkJDO0FBRm1CO0FBRnNDLENBQWxDLENBQTNCIiwiZmlsZSI6InhtbDJqc1dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeG1sMmpzIGZyb20gJ3htbDJqcydcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnanMtdXRpbHMnXG5cbmltcG9ydCB4bWwyanNXcmFwcGVyIGZyb20gJy4vLi4vLi4vLi4vbWFpbi9saWIvd3JhcHBlcnMveG1sMmpzV3JhcHBlcidcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdXRpbHMuaW9jSGVscGVyLmNyZWF0ZU5ld0luc3RhbmNlKHtcbiAgaW5zdGFuY2VDb25zdHJ1Y3RvcjogeG1sMmpzV3JhcHBlcixcbiAgZGVwZW5kZW5jeUluc3RhbmNlczoge1xuICAgIHhtbDJqcyxcbiAgICB1dGlsc1xuICB9XG59KVxuIl19
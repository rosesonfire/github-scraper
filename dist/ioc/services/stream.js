'use strict';

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _jsUtils = require('js-utils');

var _stream = require('./../../main/services/stream');

var _stream2 = _interopRequireDefault(_stream);

var _config = require('./../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = _jsUtils.utils.iocHelper.createNewInstance({
  instanceConstructor: _stream2.default,
  configuration: {
    fetchInterval: _config2.default.scraper.fetchInterval
  },
  dependencyInstances: {
    Rx: _rxjs2.default,
    utils: _jsUtils.utils
  },
  dependencyConfig: {
    scrape: 'services/scrape'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc3RyZWFtLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpb2NIZWxwZXIiLCJjcmVhdGVOZXdJbnN0YW5jZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJjb25maWd1cmF0aW9uIiwiZmV0Y2hJbnRlcnZhbCIsInNjcmFwZXIiLCJkZXBlbmRlbmN5SW5zdGFuY2VzIiwiUngiLCJ1dGlscyIsImRlcGVuZGVuY3lDb25maWciLCJzY3JhcGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixlQUFNRSxTQUFOLENBQWdCQyxpQkFBaEIsQ0FBa0M7QUFDM0RDLHVDQUQyRDtBQUUzREMsaUJBQWU7QUFDYkMsbUJBQWUsaUJBQU9DLE9BQVAsQ0FBZUQ7QUFEakIsR0FGNEM7QUFLM0RFLHVCQUFxQjtBQUNuQkMsc0JBRG1CO0FBRW5CQztBQUZtQixHQUxzQztBQVMzREMsb0JBQWtCO0FBQ2hCQyxZQUFRO0FBRFE7QUFUeUMsQ0FBbEMsQ0FBM0IiLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJ4IGZyb20gJ3J4anMnXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gJ2pzLXV0aWxzJ1xuXG5pbXBvcnQgc3RyZWFtIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9zdHJlYW0nXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vLi4vLi4vY29uZmlnJ1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB1dGlscy5pb2NIZWxwZXIuY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiBzdHJlYW0sXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICBmZXRjaEludGVydmFsOiBjb25maWcuc2NyYXBlci5mZXRjaEludGVydmFsXG4gIH0sXG4gIGRlcGVuZGVuY3lJbnN0YW5jZXM6IHtcbiAgICBSeCxcbiAgICB1dGlsc1xuICB9LFxuICBkZXBlbmRlbmN5Q29uZmlnOiB7XG4gICAgc2NyYXBlOiAnc2VydmljZXMvc2NyYXBlJ1xuICB9XG59KVxuIl19
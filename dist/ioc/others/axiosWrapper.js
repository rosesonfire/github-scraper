'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _jsUtils = require('js-utils');

var _iocHelper = require('./../iocHelper');

var _config = require('./../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
  instanceConstructor: _jsUtils.wrappers.axiosWrapper,
  configuration: {
    maxPollTries: _config2.default.scraper.maxPollTries,
    pollingInterval: _config2.default.scraper.pollingInterval
  },
  dependencyInstances: {
    axios: _axios2.default,
    Rx: _rxjs2.default
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvb3RoZXJzL2F4aW9zV3JhcHBlci5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibW9kdWxlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImF4aW9zV3JhcHBlciIsImNvbmZpZ3VyYXRpb24iLCJtYXhQb2xsVHJpZXMiLCJzY3JhcGVyIiwicG9sbGluZ0ludGVydmFsIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsImF4aW9zIiwiUngiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQUEsVUFBVUMsT0FBT0QsT0FBUCxHQUFpQixrQ0FBa0I7QUFDM0NFLHVCQUFxQixrQkFBU0MsWUFEYTtBQUUzQ0MsaUJBQWU7QUFDYkMsa0JBQWMsaUJBQU9DLE9BQVAsQ0FBZUQsWUFEaEI7QUFFYkUscUJBQWlCLGlCQUFPRCxPQUFQLENBQWVDO0FBRm5CLEdBRjRCO0FBTTNDQyx1QkFBcUI7QUFDbkJDLDBCQURtQjtBQUVuQkM7QUFGbUI7QUFOc0IsQ0FBbEIsQ0FBM0IiLCJmaWxlIjoiYXhpb3NXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJ4IGZyb20gJ3J4anMnXG5pbXBvcnQgeyB3cmFwcGVycyB9IGZyb20gJ2pzLXV0aWxzJ1xuXG5pbXBvcnQgeyBjcmVhdGVOZXdJbnN0YW5jZSB9IGZyb20gJy4vLi4vaW9jSGVscGVyJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLy4uLy4uL2NvbmZpZydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlTmV3SW5zdGFuY2Uoe1xuICBpbnN0YW5jZUNvbnN0cnVjdG9yOiB3cmFwcGVycy5heGlvc1dyYXBwZXIsXG4gIGNvbmZpZ3VyYXRpb246IHtcbiAgICBtYXhQb2xsVHJpZXM6IGNvbmZpZy5zY3JhcGVyLm1heFBvbGxUcmllcyxcbiAgICBwb2xsaW5nSW50ZXJ2YWw6IGNvbmZpZy5zY3JhcGVyLnBvbGxpbmdJbnRlcnZhbFxuICB9LFxuICBkZXBlbmRlbmN5SW5zdGFuY2VzOiB7XG4gICAgYXhpb3MsXG4gICAgUnhcbiAgfVxufSlcbiJdfQ==
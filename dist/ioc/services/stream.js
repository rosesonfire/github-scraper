'use strict';

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _jsUtils = require('js-utils');

var _iocHelper = require('./../iocHelper');

var _stream = require('./../../main/services/stream');

var _stream2 = _interopRequireDefault(_stream);

var _config = require('./../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = (0, _iocHelper.createNewInstance)({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc3RyZWFtLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpbnN0YW5jZUNvbnN0cnVjdG9yIiwiY29uZmlndXJhdGlvbiIsImZldGNoSW50ZXJ2YWwiLCJzY3JhcGVyIiwiZGVwZW5kZW5jeUluc3RhbmNlcyIsIlJ4IiwidXRpbHMiLCJkZXBlbmRlbmN5Q29uZmlnIiwic2NyYXBlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsa0NBQWtCO0FBQzNDRSx1Q0FEMkM7QUFFM0NDLGlCQUFlO0FBQ2JDLG1CQUFlLGlCQUFPQyxPQUFQLENBQWVEO0FBRGpCLEdBRjRCO0FBSzNDRSx1QkFBcUI7QUFDbkJDLHNCQURtQjtBQUVuQkM7QUFGbUIsR0FMc0I7QUFTM0NDLG9CQUFrQjtBQUNoQkMsWUFBUTtBQURRO0FBVHlCLENBQWxCLENBQTNCIiwiZmlsZSI6InN0cmVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSeCBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tICdqcy11dGlscydcblxuaW1wb3J0IHsgY3JlYXRlTmV3SW5zdGFuY2UgfSBmcm9tICcuLy4uL2lvY0hlbHBlcidcbmltcG9ydCBzdHJlYW0gZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL3N0cmVhbSdcbmltcG9ydCBjb25maWcgZnJvbSAnLi8uLi8uLi9jb25maWcnXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU5ld0luc3RhbmNlKHtcbiAgaW5zdGFuY2VDb25zdHJ1Y3Rvcjogc3RyZWFtLFxuICBjb25maWd1cmF0aW9uOiB7XG4gICAgZmV0Y2hJbnRlcnZhbDogY29uZmlnLnNjcmFwZXIuZmV0Y2hJbnRlcnZhbFxuICB9LFxuICBkZXBlbmRlbmN5SW5zdGFuY2VzOiB7XG4gICAgUngsXG4gICAgdXRpbHNcbiAgfSxcbiAgZGVwZW5kZW5jeUNvbmZpZzoge1xuICAgIHNjcmFwZTogJ3NlcnZpY2VzL3NjcmFwZSdcbiAgfVxufSlcbiJdfQ==
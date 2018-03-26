'use strict';

var _jsUtils = require('js-utils');

var _saveData = require('./../../main/services/saveData');

var _saveData2 = _interopRequireDefault(_saveData);

var _config = require('./../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = _jsUtils.utils.iocHelper.createNewInstance({
  instanceConstructor: _saveData2.default,
  configuration: {
    url: 'http://' + _config2.default.dataAPI.host + ':' + _config2.default.dataAPI.port + ('' + _config2.default.dataAPI.path)
  },
  dependencyConfig: {
    http: 'others/axiosWrapper'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc2F2ZURhdGEuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIm1vZHVsZSIsImlvY0hlbHBlciIsImNyZWF0ZU5ld0luc3RhbmNlIiwiaW5zdGFuY2VDb25zdHJ1Y3RvciIsImNvbmZpZ3VyYXRpb24iLCJ1cmwiLCJkYXRhQVBJIiwiaG9zdCIsInBvcnQiLCJwYXRoIiwiZGVwZW5kZW5jeUNvbmZpZyIsImh0dHAiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsZUFBTUUsU0FBTixDQUFnQkMsaUJBQWhCLENBQWtDO0FBQzNEQyx5Q0FEMkQ7QUFFM0RDLGlCQUFlO0FBQ2JDLFNBQUssWUFBVSxpQkFBT0MsT0FBUCxDQUFlQyxJQUF6QixTQUFpQyxpQkFBT0QsT0FBUCxDQUFlRSxJQUFoRCxTQUNHLGlCQUFPRixPQUFQLENBQWVHLElBRGxCO0FBRFEsR0FGNEM7QUFNM0RDLG9CQUFrQjtBQUNoQkMsVUFBTTtBQURVO0FBTnlDLENBQWxDLENBQTNCIiwiZmlsZSI6InNhdmVEYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXRpbHMgfSBmcm9tICdqcy11dGlscydcblxuaW1wb3J0IHNhdmVEYXRhIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9zYXZlRGF0YSdcbmltcG9ydCBjb25maWcgZnJvbSAnLi8uLi8uLi9jb25maWcnXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHV0aWxzLmlvY0hlbHBlci5jcmVhdGVOZXdJbnN0YW5jZSh7XG4gIGluc3RhbmNlQ29uc3RydWN0b3I6IHNhdmVEYXRhLFxuICBjb25maWd1cmF0aW9uOiB7XG4gICAgdXJsOiBgaHR0cDovLyR7Y29uZmlnLmRhdGFBUEkuaG9zdH06JHtjb25maWcuZGF0YUFQSS5wb3J0fWAgK1xuICAgICAgICAgYCR7Y29uZmlnLmRhdGFBUEkucGF0aH1gXG4gIH0sXG4gIGRlcGVuZGVuY3lDb25maWc6IHtcbiAgICBodHRwOiAnb3RoZXJzL2F4aW9zV3JhcHBlcidcbiAgfVxufSlcbiJdfQ==
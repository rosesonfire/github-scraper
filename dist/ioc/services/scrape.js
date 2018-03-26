'use strict';

var _jsUtils = require('js-utils');

var _scrape = require('./../../main/services/scrape');

var _scrape2 = _interopRequireDefault(_scrape);

var _config = require('./../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = _jsUtils.utils.iocHelper.createNewInstance({
  instanceConstructor: _scrape2.default,
  configuration: {
    url: _config2.default.scraper.endpoint
  },
  dependencyConfig: {
    getBaseUrl: 'services/getBaseUrl',
    fetchData: 'services/fetchData',
    convertXMLToJSON: 'services/convertXMLToJSON',
    saveData: 'services/saveData'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvc2NyYXBlLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpb2NIZWxwZXIiLCJjcmVhdGVOZXdJbnN0YW5jZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJjb25maWd1cmF0aW9uIiwidXJsIiwic2NyYXBlciIsImVuZHBvaW50IiwiZGVwZW5kZW5jeUNvbmZpZyIsImdldEJhc2VVcmwiLCJmZXRjaERhdGEiLCJjb252ZXJ0WE1MVG9KU09OIiwic2F2ZURhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsZUFBTUUsU0FBTixDQUFnQkMsaUJBQWhCLENBQWtDO0FBQzNEQyx1Q0FEMkQ7QUFFM0RDLGlCQUFlO0FBQ2JDLFNBQUssaUJBQU9DLE9BQVAsQ0FBZUM7QUFEUCxHQUY0QztBQUszREMsb0JBQWtCO0FBQ2hCQyxnQkFBWSxxQkFESTtBQUVoQkMsZUFBVyxvQkFGSztBQUdoQkMsc0JBQWtCLDJCQUhGO0FBSWhCQyxjQUFVO0FBSk07QUFMeUMsQ0FBbEMsQ0FBM0IiLCJmaWxlIjoic2NyYXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXRpbHMgfSBmcm9tICdqcy11dGlscydcblxuaW1wb3J0IHNjcmFwZSBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvc2NyYXBlJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLy4uLy4uL2NvbmZpZydcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdXRpbHMuaW9jSGVscGVyLmNyZWF0ZU5ld0luc3RhbmNlKHtcbiAgaW5zdGFuY2VDb25zdHJ1Y3Rvcjogc2NyYXBlLFxuICBjb25maWd1cmF0aW9uOiB7XG4gICAgdXJsOiBjb25maWcuc2NyYXBlci5lbmRwb2ludFxuICB9LFxuICBkZXBlbmRlbmN5Q29uZmlnOiB7XG4gICAgZ2V0QmFzZVVybDogJ3NlcnZpY2VzL2dldEJhc2VVcmwnLFxuICAgIGZldGNoRGF0YTogJ3NlcnZpY2VzL2ZldGNoRGF0YScsXG4gICAgY29udmVydFhNTFRvSlNPTjogJ3NlcnZpY2VzL2NvbnZlcnRYTUxUb0pTT04nLFxuICAgIHNhdmVEYXRhOiAnc2VydmljZXMvc2F2ZURhdGEnXG4gIH1cbn0pXG4iXX0=
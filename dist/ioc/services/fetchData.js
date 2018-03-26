'use strict';

var _jsUtils = require('js-utils');

var _fetchData = require('./../../main/services/fetchData');

var _fetchData2 = _interopRequireDefault(_fetchData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = _jsUtils.utils.iocHelper.createNewInstance({
  instanceConstructor: _fetchData2.default,
  dependencyConfig: {
    http: 'others/axiosWrapper'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pb2Mvc2VydmljZXMvZmV0Y2hEYXRhLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJtb2R1bGUiLCJpb2NIZWxwZXIiLCJjcmVhdGVOZXdJbnN0YW5jZSIsImluc3RhbmNlQ29uc3RydWN0b3IiLCJkZXBlbmRlbmN5Q29uZmlnIiwiaHR0cCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7Ozs7O0FBRUFBLFVBQVVDLE9BQU9ELE9BQVAsR0FBaUIsZUFBTUUsU0FBTixDQUFnQkMsaUJBQWhCLENBQWtDO0FBQzNEQywwQ0FEMkQ7QUFFM0RDLG9CQUFrQjtBQUNoQkMsVUFBTTtBQURVO0FBRnlDLENBQWxDLENBQTNCIiwiZmlsZSI6ImZldGNoRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV0aWxzIH0gZnJvbSAnanMtdXRpbHMnXG5cbmltcG9ydCBmZXRjaERhdGEgZnJvbSAnLi8uLi8uLi9tYWluL3NlcnZpY2VzL2ZldGNoRGF0YSdcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdXRpbHMuaW9jSGVscGVyLmNyZWF0ZU5ld0luc3RhbmNlKHtcbiAgaW5zdGFuY2VDb25zdHJ1Y3RvcjogZmV0Y2hEYXRhLFxuICBkZXBlbmRlbmN5Q29uZmlnOiB7XG4gICAgaHR0cDogJ290aGVycy9heGlvc1dyYXBwZXInXG4gIH1cbn0pXG4iXX0=
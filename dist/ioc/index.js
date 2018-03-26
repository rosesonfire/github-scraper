'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInstance = undefined;

var _electrolyte = require('electrolyte');

var _electrolyte2 = _interopRequireDefault(_electrolyte);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_electrolyte2.default.use(_electrolyte2.default.dir('dist/ioc'));

var dependencies = {
  stream: 'services/stream'
};

var createInstance = exports.createInstance = function createInstance(name) {
  return _electrolyte2.default.create(dependencies[name]);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pb2MvaW5kZXguanMiXSwibmFtZXMiOlsidXNlIiwiZGlyIiwiZGVwZW5kZW5jaWVzIiwic3RyZWFtIiwiY3JlYXRlSW5zdGFuY2UiLCJjcmVhdGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBLHNCQUFJQSxHQUFKLENBQVEsc0JBQUlDLEdBQUosQ0FBUSxVQUFSLENBQVI7O0FBRUEsSUFBTUMsZUFBZTtBQUNuQkMsVUFBUTtBQURXLENBQXJCOztBQUlPLElBQU1DLDBDQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxTQUFRLHNCQUFJQyxNQUFKLENBQVdILGFBQWFJLElBQWIsQ0FBWCxDQUFSO0FBQUEsQ0FBdkIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW9DIGZyb20gJ2VsZWN0cm9seXRlJ1xuXG5Jb0MudXNlKElvQy5kaXIoJ2Rpc3QvaW9jJykpXG5cbmNvbnN0IGRlcGVuZGVuY2llcyA9IHtcbiAgc3RyZWFtOiAnc2VydmljZXMvc3RyZWFtJ1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlSW5zdGFuY2UgPSBuYW1lID0+IElvQy5jcmVhdGUoZGVwZW5kZW5jaWVzW25hbWVdKVxuIl19
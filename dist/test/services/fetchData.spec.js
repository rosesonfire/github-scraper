'use strict';

var _setup = require('./../setup');

var _fetchData = require('./../../main/services/fetchData');

var _fetchData2 = _interopRequireDefault(_fetchData);

var _jsUtils = require('./../mocks/others/jsUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('FetchData', function () {
  var mocks = void 0,
      axios = void 0,
      url = void 0,
      data = void 0;

  (0, _setup.before)(function () {
    url = 'https://github.com/timeline';
    data = '<xml><tag>Some data</tag></xml>';
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When fetching data', function () {
    (0, _setup.beforeEach)(function () {
      axios = (0, _jsUtils.wrappersMock)().axiosWrapper;
      mocks = [axios.get];
      axios.get.once().withExactArgs(url).returns(Promise.resolve(data));
    });

    (0, _setup.it)('should return a promise', function () {
      return (0, _fetchData2.default)({ http: axios })(url).should.be.a('promise');
    });

    (0, _setup.it)('should fetch data', function () {
      return (0, _fetchData2.default)({ http: axios })(url).should.eventually.equal(data);
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL2ZldGNoRGF0YS5zcGVjLmpzIl0sIm5hbWVzIjpbIm1vY2tzIiwiYXhpb3MiLCJ1cmwiLCJkYXRhIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJheGlvc1dyYXBwZXIiLCJnZXQiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImh0dHAiLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7Ozs7QUFFQTs7OztBQUhBO0FBS0EscUJBQVMsV0FBVCxFQUFzQixZQUFNO0FBQzFCLE1BQ0VBLGNBREY7QUFBQSxNQUVFQyxjQUZGO0FBQUEsTUFHRUMsWUFIRjtBQUFBLE1BSUVDLGFBSkY7O0FBTUEscUJBQU8sWUFBTTtBQUNYRCxVQUFNLDZCQUFOO0FBQ0FDLFdBQU8saUNBQVA7QUFDRCxHQUhEOztBQUtBLHdCQUFVO0FBQUEsV0FBTUgsTUFBTUksT0FBTixDQUFjO0FBQUEsYUFBUUMsS0FBS0MsTUFBTCxFQUFSO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBVjs7QUFFQSx1QkFBUyxvQkFBVCxFQUErQixZQUFNO0FBQ25DLDJCQUFXLFlBQU07QUFDZkwsY0FBUSw2QkFBZU0sWUFBdkI7QUFDQVAsY0FBUSxDQUFFQyxNQUFNTyxHQUFSLENBQVI7QUFDQVAsWUFBTU8sR0FBTixDQUFVQyxJQUFWLEdBQWlCQyxhQUFqQixDQUErQlIsR0FBL0IsRUFBb0NTLE9BQXBDLENBQTRDQyxRQUFRQyxPQUFSLENBQWdCVixJQUFoQixDQUE1QztBQUNELEtBSkQ7O0FBTUEsbUJBQUcseUJBQUgsRUFBOEI7QUFBQSxhQUM1Qix5QkFBVSxFQUFFVyxNQUFNYixLQUFSLEVBQVYsRUFBMkJDLEdBQTNCLEVBQWdDYSxNQUFoQyxDQUF1Q0MsRUFBdkMsQ0FBMENDLENBQTFDLENBQTRDLFNBQTVDLENBRDRCO0FBQUEsS0FBOUI7O0FBR0EsbUJBQUcsbUJBQUgsRUFBd0I7QUFBQSxhQUN0Qix5QkFBVSxFQUFFSCxNQUFNYixLQUFSLEVBQVYsRUFBMkJDLEdBQTNCLEVBQWdDYSxNQUFoQyxDQUF1Q0csVUFBdkMsQ0FBa0RDLEtBQWxELENBQXdEaEIsSUFBeEQsQ0FEc0I7QUFBQSxLQUF4QjtBQUVELEdBWkQ7QUFhRCxDQTNCRDtBQUhBIiwiZmlsZSI6ImZldGNoRGF0YS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoLCBpdCB9IGZyb20gJy4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9mZXRjaERhdGEnXG4vLyBtb2Nrc1xuaW1wb3J0IHsgd3JhcHBlcnNNb2NrIH0gZnJvbSAnLi8uLi9tb2Nrcy9vdGhlcnMvanNVdGlscydcblxuZGVzY3JpYmUoJ0ZldGNoRGF0YScsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgYXhpb3MsXG4gICAgdXJsLFxuICAgIGRhdGFcblxuICBiZWZvcmUoKCkgPT4ge1xuICAgIHVybCA9ICdodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmUnXG4gICAgZGF0YSA9ICc8eG1sPjx0YWc+U29tZSBkYXRhPC90YWc+PC94bWw+J1xuICB9KVxuXG4gIGFmdGVyRWFjaCgoKSA9PiBtb2Nrcy5mb3JFYWNoKG1vY2sgPT4gbW9jay52ZXJpZnkoKSkpXG5cbiAgZGVzY3JpYmUoJ1doZW4gZmV0Y2hpbmcgZGF0YScsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGF4aW9zID0gd3JhcHBlcnNNb2NrKCkuYXhpb3NXcmFwcGVyXG4gICAgICBtb2NrcyA9IFsgYXhpb3MuZ2V0IF1cbiAgICAgIGF4aW9zLmdldC5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwpLnJldHVybnMoUHJvbWlzZS5yZXNvbHZlKGRhdGEpKVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgZmV0Y2hEYXRhKHsgaHR0cDogYXhpb3MgfSkodXJsKS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgaXQoJ3Nob3VsZCBmZXRjaCBkYXRhJywgKCkgPT5cbiAgICAgIGZldGNoRGF0YSh7IGh0dHA6IGF4aW9zIH0pKHVybCkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwoZGF0YSkpXG4gIH0pXG59KVxuIl19
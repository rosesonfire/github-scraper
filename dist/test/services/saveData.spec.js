'use strict';

var _setup = require('./../setup');

var _saveData = require('./../../main/services/saveData');

var _saveData2 = _interopRequireDefault(_saveData);

var _jsUtils = require('./../mocks/others/jsUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('SaveData', function () {
  var mocks = void 0,
      axios = void 0,
      url = void 0,
      data = void 0,
      reply = void 0;

  (0, _setup.before)(function () {
    url = 'https://github.com/timeline';
    data = {
      data: { someKey: 'someValue' }
    };
    reply = { reply: 'OK' };
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When saving data', function () {
    (0, _setup.beforeEach)(function () {
      axios = (0, _jsUtils.wrappersMock)().axiosWrapper;
      mocks = [axios.postWithPolling];
      axios.postWithPolling.once().withExactArgs(url, data).returns(Promise.resolve(reply));
    });

    (0, _setup.it)('should return a promise', function () {
      return (0, _saveData2.default)({ http: axios, url: url })(data.data).should.be.a('promise');
    });

    (0, _setup.it)('should save data', function () {
      return (0, _saveData2.default)({ http: axios, url: url })(data.data).should.eventually.equal(reply);
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL3NhdmVEYXRhLnNwZWMuanMiXSwibmFtZXMiOlsibW9ja3MiLCJheGlvcyIsInVybCIsImRhdGEiLCJyZXBseSIsInNvbWVLZXkiLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsImF4aW9zV3JhcHBlciIsInBvc3RXaXRoUG9sbGluZyIsIm9uY2UiLCJ3aXRoRXhhY3RBcmdzIiwicmV0dXJucyIsIlByb21pc2UiLCJyZXNvbHZlIiwiaHR0cCIsInNob3VsZCIsImJlIiwiYSIsImV2ZW50dWFsbHkiLCJlcXVhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7OztBQUVBOzs7O0FBSEE7QUFLQSxxQkFBUyxVQUFULEVBQXFCLFlBQU07QUFDekIsTUFDRUEsY0FERjtBQUFBLE1BRUVDLGNBRkY7QUFBQSxNQUdFQyxZQUhGO0FBQUEsTUFJRUMsYUFKRjtBQUFBLE1BS0VDLGNBTEY7O0FBT0EscUJBQU8sWUFBTTtBQUNYRixVQUFNLDZCQUFOO0FBQ0FDLFdBQU87QUFDTEEsWUFBTSxFQUFFRSxTQUFTLFdBQVg7QUFERCxLQUFQO0FBR0FELFlBQVEsRUFBRUEsT0FBTyxJQUFULEVBQVI7QUFDRCxHQU5EOztBQVFBLHdCQUFVO0FBQUEsV0FBTUosTUFBTU0sT0FBTixDQUFjO0FBQUEsYUFBUUMsS0FBS0MsTUFBTCxFQUFSO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBVjs7QUFFQSx1QkFBUyxrQkFBVCxFQUE2QixZQUFNO0FBQ2pDLDJCQUFXLFlBQU07QUFDZlAsY0FBUSw2QkFBZVEsWUFBdkI7QUFDQVQsY0FBUSxDQUFFQyxNQUFNUyxlQUFSLENBQVI7QUFDQVQsWUFBTVMsZUFBTixDQUFzQkMsSUFBdEIsR0FBNkJDLGFBQTdCLENBQTJDVixHQUEzQyxFQUFnREMsSUFBaEQsRUFDR1UsT0FESCxDQUNXQyxRQUFRQyxPQUFSLENBQWdCWCxLQUFoQixDQURYO0FBRUQsS0FMRDs7QUFPQSxtQkFBRyx5QkFBSCxFQUE4QjtBQUFBLGFBQzVCLHdCQUFTLEVBQUVZLE1BQU1mLEtBQVIsRUFBZUMsUUFBZixFQUFULEVBQStCQyxLQUFLQSxJQUFwQyxFQUEwQ2MsTUFBMUMsQ0FBaURDLEVBQWpELENBQW9EQyxDQUFwRCxDQUFzRCxTQUF0RCxDQUQ0QjtBQUFBLEtBQTlCOztBQUdBLG1CQUFHLGtCQUFILEVBQXVCO0FBQUEsYUFDckIsd0JBQVMsRUFBRUgsTUFBTWYsS0FBUixFQUFlQyxRQUFmLEVBQVQsRUFBK0JDLEtBQUtBLElBQXBDLEVBQTBDYyxNQUExQyxDQUFpREcsVUFBakQsQ0FBNERDLEtBQTVELENBQWtFakIsS0FBbEUsQ0FEcUI7QUFBQSxLQUF2QjtBQUVELEdBYkQ7QUFjRCxDQWhDRDtBQUhBIiwiZmlsZSI6InNhdmVEYXRhLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNjcmliZSwgYmVmb3JlLCBiZWZvcmVFYWNoLCBhZnRlckVhY2gsIGl0IH0gZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBzYXZlRGF0YSBmcm9tICcuLy4uLy4uL21haW4vc2VydmljZXMvc2F2ZURhdGEnXG4vLyBtb2Nrc1xuaW1wb3J0IHsgd3JhcHBlcnNNb2NrIH0gZnJvbSAnLi8uLi9tb2Nrcy9vdGhlcnMvanNVdGlscydcblxuZGVzY3JpYmUoJ1NhdmVEYXRhJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICBheGlvcyxcbiAgICB1cmwsXG4gICAgZGF0YSxcbiAgICByZXBseVxuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgdXJsID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1lbGluZSdcbiAgICBkYXRhID0ge1xuICAgICAgZGF0YTogeyBzb21lS2V5OiAnc29tZVZhbHVlJyB9XG4gICAgfVxuICAgIHJlcGx5ID0geyByZXBseTogJ09LJyB9XG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICBkZXNjcmliZSgnV2hlbiBzYXZpbmcgZGF0YScsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGF4aW9zID0gd3JhcHBlcnNNb2NrKCkuYXhpb3NXcmFwcGVyXG4gICAgICBtb2NrcyA9IFsgYXhpb3MucG9zdFdpdGhQb2xsaW5nIF1cbiAgICAgIGF4aW9zLnBvc3RXaXRoUG9sbGluZy5vbmNlKCkud2l0aEV4YWN0QXJncyh1cmwsIGRhdGEpXG4gICAgICAgIC5yZXR1cm5zKFByb21pc2UucmVzb2x2ZShyZXBseSkpXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICBzYXZlRGF0YSh7IGh0dHA6IGF4aW9zLCB1cmwgfSkoZGF0YS5kYXRhKS5zaG91bGQuYmUuYSgncHJvbWlzZScpKVxuXG4gICAgaXQoJ3Nob3VsZCBzYXZlIGRhdGEnLCAoKSA9PlxuICAgICAgc2F2ZURhdGEoeyBodHRwOiBheGlvcywgdXJsIH0pKGRhdGEuZGF0YSkuc2hvdWxkLmV2ZW50dWFsbHkuZXF1YWwocmVwbHkpKVxuICB9KVxufSlcbiJdfQ==
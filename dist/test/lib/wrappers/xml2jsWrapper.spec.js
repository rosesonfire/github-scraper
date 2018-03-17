'use strict';

var _setup = require('./../../setup');

var _xml2jsWrapper = require('./../../../main/lib/wrappers/xml2jsWrapper');

var _xml2jsWrapper2 = _interopRequireDefault(_xml2jsWrapper);

var _xml2js = require('./../../mocks/others/xml2js');

var _jsUtils = require('./../../mocks/others/jsUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mocks
(0, _setup.describe)('XML2JSWrapper', function () {
  var mocks = void 0,
      xml2js = void 0,
      xml = void 0,
      jsonData = void 0,
      utils = void 0;

  (0, _setup.before)(function () {
    xml = '<xml>Some xml data</xml>';
    jsonData = { a: 1, b: 2 };
  });

  (0, _setup.beforeEach)(function () {
    utils = (0, _jsUtils.utilsStub)();
    utils.createDefensivePromise.callsFake(function (f) {
      return new Promise(f);
    });
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When converting xml to json (1)', function () {
    (0, _setup.beforeEach)(function () {
      xml2js = (0, _xml2js.xml2jsStub)();
      mocks = [];
    });
    (0, _setup.describe)('When successful', function () {
      (0, _setup.beforeEach)(function () {
        xml2js.parseString.callsFake(function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return args[args.length - 1](null, jsonData);
        });
      });

      (0, _setup.it)('should return a promise', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js, utils: utils }).convert(xml).should.be.a('promise');
      });

      (0, _setup.it)('should return correct json', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js, utils: utils }).convert(xml).should.eventually.equal(jsonData);
      });
    });

    (0, _setup.describe)('When core xml2js returns error', function () {
      (0, _setup.beforeEach)(function () {
        xml2js.parseString.callsFake(function () {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return args[args.length - 1](new Error('err'), null);
        });
      });

      (0, _setup.it)('should fail', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js, utils: utils }).convert(xml).should.eventually.be.rejected;
      });
    });

    (0, _setup.describe)('When core xml2js fails', function () {
      (0, _setup.beforeEach)(function () {
        xml2js.parseString.callsFake(function () {
          throw new Error('err');
        });
      });

      (0, _setup.it)('should fail', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js, utils: utils }).convert(xml).should.eventually.be.rejected;
      });
    });
  });

  (0, _setup.describe)('When converting xml to json (2)', function () {
    (0, _setup.beforeEach)(function () {
      xml2js = (0, _xml2js.xml2jsMock)();
      mocks = [xml2js.parseString];
      xml2js.parseString.once().withArgs(xml);
    });

    (0, _setup.it)('should be called with proper arguments', function () {
      (0, _xml2jsWrapper2.default)({ xml2js: xml2js, utils: utils }).convert(xml);
      '1'.should.equal('1');
    });
  });
});
// unit
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyLnNwZWMuanMiXSwibmFtZXMiOlsibW9ja3MiLCJ4bWwyanMiLCJ4bWwiLCJqc29uRGF0YSIsInV0aWxzIiwiYSIsImIiLCJjcmVhdGVEZWZlbnNpdmVQcm9taXNlIiwiY2FsbHNGYWtlIiwiUHJvbWlzZSIsImYiLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsInBhcnNlU3RyaW5nIiwiYXJncyIsImxlbmd0aCIsImNvbnZlcnQiLCJzaG91bGQiLCJiZSIsImV2ZW50dWFsbHkiLCJlcXVhbCIsIkVycm9yIiwicmVqZWN0ZWQiLCJvbmNlIiwid2l0aEFyZ3MiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7Ozs7QUFFQTs7QUFDQTs7OztBQUZBO0FBSUEscUJBQVMsZUFBVCxFQUEwQixZQUFNO0FBQzlCLE1BQ0VBLGNBREY7QUFBQSxNQUVFQyxlQUZGO0FBQUEsTUFHRUMsWUFIRjtBQUFBLE1BSUVDLGlCQUpGO0FBQUEsTUFLRUMsY0FMRjs7QUFPQSxxQkFBTyxZQUFNO0FBQ1hGLFVBQU0sMEJBQU47QUFDQUMsZUFBVyxFQUFFRSxHQUFHLENBQUwsRUFBUUMsR0FBRyxDQUFYLEVBQVg7QUFDRCxHQUhEOztBQUtBLHlCQUFXLFlBQU07QUFDZkYsWUFBUSx5QkFBUjtBQUNBQSxVQUFNRyxzQkFBTixDQUE2QkMsU0FBN0IsQ0FBdUM7QUFBQSxhQUFLLElBQUlDLE9BQUosQ0FBWUMsQ0FBWixDQUFMO0FBQUEsS0FBdkM7QUFDRCxHQUhEOztBQUtBLHdCQUFVO0FBQUEsV0FBTVYsTUFBTVcsT0FBTixDQUFjO0FBQUEsYUFBUUMsS0FBS0MsTUFBTCxFQUFSO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBVjs7QUFFQSx1QkFBUyxpQ0FBVCxFQUE0QyxZQUFNO0FBQ2hELDJCQUFXLFlBQU07QUFDZlosZUFBUyx5QkFBVDtBQUNBRCxjQUFRLEVBQVI7QUFDRCxLQUhEO0FBSUEseUJBQVMsaUJBQVQsRUFBNEIsWUFBTTtBQUNoQyw2QkFBVyxZQUFNO0FBQ2ZDLGVBQU9hLFdBQVAsQ0FDR04sU0FESCxDQUNhO0FBQUEsNENBQUlPLElBQUo7QUFBSUEsZ0JBQUo7QUFBQTs7QUFBQSxpQkFBYUEsS0FBS0EsS0FBS0MsTUFBTCxHQUFjLENBQW5CLEVBQXNCLElBQXRCLEVBQTRCYixRQUE1QixDQUFiO0FBQUEsU0FEYjtBQUVELE9BSEQ7O0FBS0EscUJBQUcseUJBQUgsRUFBOEI7QUFBQSxlQUM1Qiw2QkFBYyxFQUFFRixjQUFGLEVBQVVHLFlBQVYsRUFBZCxFQUFpQ2EsT0FBakMsQ0FBeUNmLEdBQXpDLEVBQThDZ0IsTUFBOUMsQ0FBcURDLEVBQXJELENBQXdEZCxDQUF4RCxDQUEwRCxTQUExRCxDQUQ0QjtBQUFBLE9BQTlCOztBQUdBLHFCQUFHLDRCQUFILEVBQWlDO0FBQUEsZUFDL0IsNkJBQWMsRUFBRUosY0FBRixFQUFVRyxZQUFWLEVBQWQsRUFBaUNhLE9BQWpDLENBQXlDZixHQUF6QyxFQUE4Q2dCLE1BQTlDLENBQXFERSxVQUFyRCxDQUNHQyxLQURILENBQ1NsQixRQURULENBRCtCO0FBQUEsT0FBakM7QUFHRCxLQVpEOztBQWNBLHlCQUFTLGdDQUFULEVBQTJDLFlBQU07QUFDL0MsNkJBQVcsWUFBTTtBQUNmRixlQUFPYSxXQUFQLENBQ0dOLFNBREgsQ0FDYTtBQUFBLDZDQUFJTyxJQUFKO0FBQUlBLGdCQUFKO0FBQUE7O0FBQUEsaUJBQWFBLEtBQUtBLEtBQUtDLE1BQUwsR0FBYyxDQUFuQixFQUFzQixJQUFJTSxLQUFKLENBQVUsS0FBVixDQUF0QixFQUF3QyxJQUF4QyxDQUFiO0FBQUEsU0FEYjtBQUVELE9BSEQ7O0FBS0EscUJBQUcsYUFBSCxFQUFrQjtBQUFBLGVBQ2hCLDZCQUFjLEVBQUVyQixjQUFGLEVBQVVHLFlBQVYsRUFBZCxFQUFpQ2EsT0FBakMsQ0FBeUNmLEdBQXpDLEVBQThDZ0IsTUFBOUMsQ0FBcURFLFVBQXJELENBQWdFRCxFQUFoRSxDQUNHSSxRQUZhO0FBQUEsT0FBbEI7QUFHRCxLQVREOztBQVdBLHlCQUFTLHdCQUFULEVBQW1DLFlBQU07QUFDdkMsNkJBQVcsWUFBTTtBQUNmdEIsZUFBT2EsV0FBUCxDQUNHTixTQURILENBQ2EsWUFBYTtBQUFFLGdCQUFNLElBQUljLEtBQUosQ0FBVSxLQUFWLENBQU47QUFBd0IsU0FEcEQ7QUFFRCxPQUhEOztBQUtBLHFCQUFHLGFBQUgsRUFBa0I7QUFBQSxlQUNoQiw2QkFBYyxFQUFFckIsY0FBRixFQUFVRyxZQUFWLEVBQWQsRUFBaUNhLE9BQWpDLENBQXlDZixHQUF6QyxFQUE4Q2dCLE1BQTlDLENBQXFERSxVQUFyRCxDQUFnRUQsRUFBaEUsQ0FDR0ksUUFGYTtBQUFBLE9BQWxCO0FBR0QsS0FURDtBQVVELEdBeENEOztBQTBDQSx1QkFBUyxpQ0FBVCxFQUE0QyxZQUFNO0FBQ2hELDJCQUFXLFlBQU07QUFDZnRCLGVBQVMseUJBQVQ7QUFDQUQsY0FBUSxDQUFDQyxPQUFPYSxXQUFSLENBQVI7QUFDQWIsYUFBT2EsV0FBUCxDQUFtQlUsSUFBbkIsR0FBMEJDLFFBQTFCLENBQW1DdkIsR0FBbkM7QUFDRCxLQUpEOztBQU1BLG1CQUFHLHdDQUFILEVBQTZDLFlBQU07QUFDakQsbUNBQWMsRUFBRUQsY0FBRixFQUFVRyxZQUFWLEVBQWQsRUFBaUNhLE9BQWpDLENBQXlDZixHQUF6QztBQUNBLFVBQUlnQixNQUFKLENBQVdHLEtBQVgsQ0FBaUIsR0FBakI7QUFDRCxLQUhEO0FBSUQsR0FYRDtBQVlELENBMUVEO0FBTkEiLCJmaWxlIjoieG1sMmpzV3JhcHBlci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVzY3JpYmUsIGJlZm9yZSwgYmVmb3JlRWFjaCwgYWZ0ZXJFYWNoLCBpdCB9IGZyb20gJy4vLi4vLi4vc2V0dXAnXG4vLyB1bml0XG5pbXBvcnQgeG1sMmpzV3JhcHBlciBmcm9tICcuLy4uLy4uLy4uL21haW4vbGliL3dyYXBwZXJzL3htbDJqc1dyYXBwZXInXG4vLyBtb2Nrc1xuaW1wb3J0IHsgeG1sMmpzTW9jaywgeG1sMmpzU3R1YiB9IGZyb20gJy4vLi4vLi4vbW9ja3Mvb3RoZXJzL3htbDJqcydcbmltcG9ydCB7IHV0aWxzU3R1YiB9IGZyb20gJy4vLi4vLi4vbW9ja3Mvb3RoZXJzL2pzVXRpbHMnXG5cbmRlc2NyaWJlKCdYTUwySlNXcmFwcGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICB4bWwyanMsXG4gICAgeG1sLFxuICAgIGpzb25EYXRhLFxuICAgIHV0aWxzXG5cbiAgYmVmb3JlKCgpID0+IHtcbiAgICB4bWwgPSAnPHhtbD5Tb21lIHhtbCBkYXRhPC94bWw+J1xuICAgIGpzb25EYXRhID0geyBhOiAxLCBiOiAyIH1cbiAgfSlcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICB1dGlscyA9IHV0aWxzU3R1YigpXG4gICAgdXRpbHMuY3JlYXRlRGVmZW5zaXZlUHJvbWlzZS5jYWxsc0Zha2UoZiA9PiBuZXcgUHJvbWlzZShmKSlcbiAgfSlcblxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIGRlc2NyaWJlKCdXaGVuIGNvbnZlcnRpbmcgeG1sIHRvIGpzb24gKDEpJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgeG1sMmpzID0geG1sMmpzU3R1YigpXG4gICAgICBtb2NrcyA9IFtdXG4gICAgfSlcbiAgICBkZXNjcmliZSgnV2hlbiBzdWNjZXNzZnVsJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHhtbDJqcy5wYXJzZVN0cmluZ1xuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IGFyZ3NbYXJncy5sZW5ndGggLSAxXShudWxsLCBqc29uRGF0YSkpXG4gICAgICB9KVxuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzLCB1dGlscyB9KS5jb252ZXJ0KHhtbCkuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gY29ycmVjdCBqc29uJywgKCkgPT5cbiAgICAgICAgeG1sMmpzV3JhcHBlcih7IHhtbDJqcywgdXRpbHMgfSkuY29udmVydCh4bWwpLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsKGpzb25EYXRhKSlcbiAgICB9KVxuXG4gICAgZGVzY3JpYmUoJ1doZW4gY29yZSB4bWwyanMgcmV0dXJucyBlcnJvcicsICgpID0+IHtcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICB4bWwyanMucGFyc2VTdHJpbmdcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obmV3IEVycm9yKCdlcnInKSwgbnVsbCkpXG4gICAgICB9KVxuXG4gICAgICBpdCgnc2hvdWxkIGZhaWwnLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzLCB1dGlscyB9KS5jb252ZXJ0KHhtbCkuc2hvdWxkLmV2ZW50dWFsbHkuYmVcbiAgICAgICAgICAucmVqZWN0ZWQpXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCdXaGVuIGNvcmUgeG1sMmpzIGZhaWxzJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHhtbDJqcy5wYXJzZVN0cmluZ1xuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IHsgdGhyb3cgbmV3IEVycm9yKCdlcnInKSB9KVxuICAgICAgfSlcblxuICAgICAgaXQoJ3Nob3VsZCBmYWlsJywgKCkgPT5cbiAgICAgICAgeG1sMmpzV3JhcHBlcih7IHhtbDJqcywgdXRpbHMgfSkuY29udmVydCh4bWwpLnNob3VsZC5ldmVudHVhbGx5LmJlXG4gICAgICAgICAgLnJlamVjdGVkKVxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gY29udmVydGluZyB4bWwgdG8ganNvbiAoMiknLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICB4bWwyanMgPSB4bWwyanNNb2NrKClcbiAgICAgIG1vY2tzID0gW3htbDJqcy5wYXJzZVN0cmluZ11cbiAgICAgIHhtbDJqcy5wYXJzZVN0cmluZy5vbmNlKCkud2l0aEFyZ3MoeG1sKVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHByb3BlciBhcmd1bWVudHMnLCAoKSA9PiB7XG4gICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzLCB1dGlscyB9KS5jb252ZXJ0KHhtbClcbiAgICAgICcxJy5zaG91bGQuZXF1YWwoJzEnKVxuICAgIH0pXG4gIH0pXG59KVxuIl19
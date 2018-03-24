'use strict';

var _jsUtils = require('js-utils');

var _setup = require('./../../setup');

var _xml2jsWrapper = require('./../../../main/lib/wrappers/xml2jsWrapper');

var _xml2jsWrapper2 = _interopRequireDefault(_xml2jsWrapper);

var _xml2js = require('./../../mocks/others/xml2js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('XML2JSWrapper', function () {
  var mocks = void 0,
      xml2js = void 0,
      xml = void 0,
      jsonData = void 0;

  (0, _setup.before)(function () {
    xml = '<xml>Some xml data</xml>';
    jsonData = { a: 1, b: 2 };
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
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js, utils: _jsUtils.utils }).convert(xml).should.be.a('promise');
      });

      (0, _setup.it)('should return correct json', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js, utils: _jsUtils.utils }).convert(xml).should.eventually.equal(jsonData);
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
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js, utils: _jsUtils.utils }).convert(xml).should.eventually.be.rejected;
      });
    });

    (0, _setup.describe)('When core xml2js fails', function () {
      (0, _setup.beforeEach)(function () {
        xml2js.parseString.callsFake(function () {
          throw new Error('err');
        });
      });

      (0, _setup.it)('should fail', function () {
        return (0, _xml2jsWrapper2.default)({ xml2js: xml2js, utils: _jsUtils.utils }).convert(xml).should.eventually.be.rejected;
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
      (0, _xml2jsWrapper2.default)({ xml2js: xml2js, utils: _jsUtils.utils }).convert(xml);
      '1'.should.equal('1');
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90ZXN0L2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyLnNwZWMuanMiXSwibmFtZXMiOlsibW9ja3MiLCJ4bWwyanMiLCJ4bWwiLCJqc29uRGF0YSIsImEiLCJiIiwiZm9yRWFjaCIsIm1vY2siLCJ2ZXJpZnkiLCJwYXJzZVN0cmluZyIsImNhbGxzRmFrZSIsImFyZ3MiLCJsZW5ndGgiLCJ1dGlscyIsImNvbnZlcnQiLCJzaG91bGQiLCJiZSIsImV2ZW50dWFsbHkiLCJlcXVhbCIsIkVycm9yIiwicmVqZWN0ZWQiLCJvbmNlIiwid2l0aEFyZ3MiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7QUFFQTs7OztBQUhBO0FBS0EscUJBQVMsZUFBVCxFQUEwQixZQUFNO0FBQzlCLE1BQ0VBLGNBREY7QUFBQSxNQUVFQyxlQUZGO0FBQUEsTUFHRUMsWUFIRjtBQUFBLE1BSUVDLGlCQUpGOztBQU1BLHFCQUFPLFlBQU07QUFDWEQsVUFBTSwwQkFBTjtBQUNBQyxlQUFXLEVBQUVDLEdBQUcsQ0FBTCxFQUFRQyxHQUFHLENBQVgsRUFBWDtBQUNELEdBSEQ7O0FBS0Esd0JBQVU7QUFBQSxXQUFNTCxNQUFNTSxPQUFOLENBQWM7QUFBQSxhQUFRQyxLQUFLQyxNQUFMLEVBQVI7QUFBQSxLQUFkLENBQU47QUFBQSxHQUFWOztBQUVBLHVCQUFTLGlDQUFULEVBQTRDLFlBQU07QUFDaEQsMkJBQVcsWUFBTTtBQUNmUCxlQUFTLHlCQUFUO0FBQ0FELGNBQVEsRUFBUjtBQUNELEtBSEQ7QUFJQSx5QkFBUyxpQkFBVCxFQUE0QixZQUFNO0FBQ2hDLDZCQUFXLFlBQU07QUFDZkMsZUFBT1EsV0FBUCxDQUNHQyxTQURILENBQ2E7QUFBQSw0Q0FBSUMsSUFBSjtBQUFJQSxnQkFBSjtBQUFBOztBQUFBLGlCQUFhQSxLQUFLQSxLQUFLQyxNQUFMLEdBQWMsQ0FBbkIsRUFBc0IsSUFBdEIsRUFBNEJULFFBQTVCLENBQWI7QUFBQSxTQURiO0FBRUQsT0FIRDs7QUFLQSxxQkFBRyx5QkFBSCxFQUE4QjtBQUFBLGVBQzVCLDZCQUFjLEVBQUVGLGNBQUYsRUFBVVkscUJBQVYsRUFBZCxFQUFpQ0MsT0FBakMsQ0FBeUNaLEdBQXpDLEVBQThDYSxNQUE5QyxDQUFxREMsRUFBckQsQ0FBd0RaLENBQXhELENBQTBELFNBQTFELENBRDRCO0FBQUEsT0FBOUI7O0FBR0EscUJBQUcsNEJBQUgsRUFBaUM7QUFBQSxlQUMvQiw2QkFBYyxFQUFFSCxjQUFGLEVBQVVZLHFCQUFWLEVBQWQsRUFBaUNDLE9BQWpDLENBQXlDWixHQUF6QyxFQUE4Q2EsTUFBOUMsQ0FBcURFLFVBQXJELENBQ0dDLEtBREgsQ0FDU2YsUUFEVCxDQUQrQjtBQUFBLE9BQWpDO0FBR0QsS0FaRDs7QUFjQSx5QkFBUyxnQ0FBVCxFQUEyQyxZQUFNO0FBQy9DLDZCQUFXLFlBQU07QUFDZkYsZUFBT1EsV0FBUCxDQUNHQyxTQURILENBQ2E7QUFBQSw2Q0FBSUMsSUFBSjtBQUFJQSxnQkFBSjtBQUFBOztBQUFBLGlCQUFhQSxLQUFLQSxLQUFLQyxNQUFMLEdBQWMsQ0FBbkIsRUFBc0IsSUFBSU8sS0FBSixDQUFVLEtBQVYsQ0FBdEIsRUFBd0MsSUFBeEMsQ0FBYjtBQUFBLFNBRGI7QUFFRCxPQUhEOztBQUtBLHFCQUFHLGFBQUgsRUFBa0I7QUFBQSxlQUNoQiw2QkFBYyxFQUFFbEIsY0FBRixFQUFVWSxxQkFBVixFQUFkLEVBQWlDQyxPQUFqQyxDQUF5Q1osR0FBekMsRUFBOENhLE1BQTlDLENBQXFERSxVQUFyRCxDQUFnRUQsRUFBaEUsQ0FDR0ksUUFGYTtBQUFBLE9BQWxCO0FBR0QsS0FURDs7QUFXQSx5QkFBUyx3QkFBVCxFQUFtQyxZQUFNO0FBQ3ZDLDZCQUFXLFlBQU07QUFDZm5CLGVBQU9RLFdBQVAsQ0FDR0MsU0FESCxDQUNhLFlBQWE7QUFBRSxnQkFBTSxJQUFJUyxLQUFKLENBQVUsS0FBVixDQUFOO0FBQXdCLFNBRHBEO0FBRUQsT0FIRDs7QUFLQSxxQkFBRyxhQUFILEVBQWtCO0FBQUEsZUFDaEIsNkJBQWMsRUFBRWxCLGNBQUYsRUFBVVkscUJBQVYsRUFBZCxFQUFpQ0MsT0FBakMsQ0FBeUNaLEdBQXpDLEVBQThDYSxNQUE5QyxDQUFxREUsVUFBckQsQ0FBZ0VELEVBQWhFLENBQ0dJLFFBRmE7QUFBQSxPQUFsQjtBQUdELEtBVEQ7QUFVRCxHQXhDRDs7QUEwQ0EsdUJBQVMsaUNBQVQsRUFBNEMsWUFBTTtBQUNoRCwyQkFBVyxZQUFNO0FBQ2ZuQixlQUFTLHlCQUFUO0FBQ0FELGNBQVEsQ0FBQ0MsT0FBT1EsV0FBUixDQUFSO0FBQ0FSLGFBQU9RLFdBQVAsQ0FBbUJZLElBQW5CLEdBQTBCQyxRQUExQixDQUFtQ3BCLEdBQW5DO0FBQ0QsS0FKRDs7QUFNQSxtQkFBRyx3Q0FBSCxFQUE2QyxZQUFNO0FBQ2pELG1DQUFjLEVBQUVELGNBQUYsRUFBVVkscUJBQVYsRUFBZCxFQUFpQ0MsT0FBakMsQ0FBeUNaLEdBQXpDO0FBQ0EsVUFBSWEsTUFBSixDQUFXRyxLQUFYLENBQWlCLEdBQWpCO0FBQ0QsS0FIRDtBQUlELEdBWEQ7QUFZRCxDQXBFRDtBQUhBIiwiZmlsZSI6InhtbDJqc1dyYXBwZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV0aWxzIH0gZnJvbSAnanMtdXRpbHMnXG5cbmltcG9ydCB7IGRlc2NyaWJlLCBiZWZvcmUsIGJlZm9yZUVhY2gsIGFmdGVyRWFjaCwgaXQgfSBmcm9tICcuLy4uLy4uL3NldHVwJ1xuLy8gdW5pdFxuaW1wb3J0IHhtbDJqc1dyYXBwZXIgZnJvbSAnLi8uLi8uLi8uLi9tYWluL2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyJ1xuLy8gbW9ja3NcbmltcG9ydCB7IHhtbDJqc01vY2ssIHhtbDJqc1N0dWIgfSBmcm9tICcuLy4uLy4uL21vY2tzL290aGVycy94bWwyanMnXG5cbmRlc2NyaWJlKCdYTUwySlNXcmFwcGVyJywgKCkgPT4ge1xuICBsZXRcbiAgICBtb2NrcyxcbiAgICB4bWwyanMsXG4gICAgeG1sLFxuICAgIGpzb25EYXRhXG5cbiAgYmVmb3JlKCgpID0+IHtcbiAgICB4bWwgPSAnPHhtbD5Tb21lIHhtbCBkYXRhPC94bWw+J1xuICAgIGpzb25EYXRhID0geyBhOiAxLCBiOiAyIH1cbiAgfSlcblxuICBhZnRlckVhY2goKCkgPT4gbW9ja3MuZm9yRWFjaChtb2NrID0+IG1vY2sudmVyaWZ5KCkpKVxuXG4gIGRlc2NyaWJlKCdXaGVuIGNvbnZlcnRpbmcgeG1sIHRvIGpzb24gKDEpJywgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgeG1sMmpzID0geG1sMmpzU3R1YigpXG4gICAgICBtb2NrcyA9IFtdXG4gICAgfSlcbiAgICBkZXNjcmliZSgnV2hlbiBzdWNjZXNzZnVsJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHhtbDJqcy5wYXJzZVN0cmluZ1xuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IGFyZ3NbYXJncy5sZW5ndGggLSAxXShudWxsLCBqc29uRGF0YSkpXG4gICAgICB9KVxuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBhIHByb21pc2UnLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzLCB1dGlscyB9KS5jb252ZXJ0KHhtbCkuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gY29ycmVjdCBqc29uJywgKCkgPT5cbiAgICAgICAgeG1sMmpzV3JhcHBlcih7IHhtbDJqcywgdXRpbHMgfSkuY29udmVydCh4bWwpLnNob3VsZC5ldmVudHVhbGx5XG4gICAgICAgICAgLmVxdWFsKGpzb25EYXRhKSlcbiAgICB9KVxuXG4gICAgZGVzY3JpYmUoJ1doZW4gY29yZSB4bWwyanMgcmV0dXJucyBlcnJvcicsICgpID0+IHtcbiAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICB4bWwyanMucGFyc2VTdHJpbmdcbiAgICAgICAgICAuY2FsbHNGYWtlKCguLi5hcmdzKSA9PiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0obmV3IEVycm9yKCdlcnInKSwgbnVsbCkpXG4gICAgICB9KVxuXG4gICAgICBpdCgnc2hvdWxkIGZhaWwnLCAoKSA9PlxuICAgICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzLCB1dGlscyB9KS5jb252ZXJ0KHhtbCkuc2hvdWxkLmV2ZW50dWFsbHkuYmVcbiAgICAgICAgICAucmVqZWN0ZWQpXG4gICAgfSlcblxuICAgIGRlc2NyaWJlKCdXaGVuIGNvcmUgeG1sMmpzIGZhaWxzJywgKCkgPT4ge1xuICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHhtbDJqcy5wYXJzZVN0cmluZ1xuICAgICAgICAgIC5jYWxsc0Zha2UoKC4uLmFyZ3MpID0+IHsgdGhyb3cgbmV3IEVycm9yKCdlcnInKSB9KVxuICAgICAgfSlcblxuICAgICAgaXQoJ3Nob3VsZCBmYWlsJywgKCkgPT5cbiAgICAgICAgeG1sMmpzV3JhcHBlcih7IHhtbDJqcywgdXRpbHMgfSkuY29udmVydCh4bWwpLnNob3VsZC5ldmVudHVhbGx5LmJlXG4gICAgICAgICAgLnJlamVjdGVkKVxuICAgIH0pXG4gIH0pXG5cbiAgZGVzY3JpYmUoJ1doZW4gY29udmVydGluZyB4bWwgdG8ganNvbiAoMiknLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICB4bWwyanMgPSB4bWwyanNNb2NrKClcbiAgICAgIG1vY2tzID0gW3htbDJqcy5wYXJzZVN0cmluZ11cbiAgICAgIHhtbDJqcy5wYXJzZVN0cmluZy5vbmNlKCkud2l0aEFyZ3MoeG1sKVxuICAgIH0pXG5cbiAgICBpdCgnc2hvdWxkIGJlIGNhbGxlZCB3aXRoIHByb3BlciBhcmd1bWVudHMnLCAoKSA9PiB7XG4gICAgICB4bWwyanNXcmFwcGVyKHsgeG1sMmpzLCB1dGlscyB9KS5jb252ZXJ0KHhtbClcbiAgICAgICcxJy5zaG91bGQuZXF1YWwoJzEnKVxuICAgIH0pXG4gIH0pXG59KVxuIl19
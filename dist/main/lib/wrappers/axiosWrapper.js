'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsUtils = require('js-utils');

/**
 * A wrapper for the axios http library
 * @param {object} axios the core axios library
 * @param {object} Rx the Rx library
 * @param {number} maxPollTries the maximum polls to try to get the response
  * @param {number} pollingInterval time interval between polling requests
 */
exports.default = function (_ref) {
  var axios = _ref.axios,
      Rx = _ref.Rx,
      maxPollTries = _ref.maxPollTries,
      pollingInterval = _ref.pollingInterval;
  return {

    get: axios.get.bind(axios),

    postWithPolling: function postWithPolling(url, data) {
      return (0, _jsUtils.createDefensivePromise)(async function (resolve, reject) {
        var postResponse = await axios.post(url, data).catch(function (e) {
          return e.response || e;
        });

        if (postResponse.status === 202) {
          // Request has been accepted for processing
          var requestToken = postResponse.data.requestToken;
          var _pollResult = {
            requestToken: requestToken,
            locked: false,
            completed: false,
            succeeded: false,
            error: null
          };

          Rx.Observable.interval(pollingInterval).take(maxPollTries).map(function (_) {
            return _pollResult;
          }).map(function (pollResult) {
            if (!pollResult.locked && !pollResult.completed) {
              pollResult.locked = true;
              axios.post(url, { requestToken: requestToken }).catch(function (e) {
                return e.response || e;
              }).then(function (pollResponse) {
                if (pollResponse.status === 200) {
                  // successfully posted data
                  pollResult.completed = true;
                  pollResult.succeeded = true;
                } else if (pollResponse.status === 202) {
                  // still processing
                  pollResult.completed = false;
                  pollResult.locked = true;
                } else if (pollResponse.status === 500) {
                  // failed to post data
                  pollResult.completed = true;
                  pollResult.succeeded = false;
                  pollResult.error = new Error('Failed: ' + pollResponse.data);
                } else if (pollResponse.status === 404) {
                  // requestToken not found
                  pollResult.completed = true;
                  pollResult.succeeded = false;
                  pollResult.error = new Error('RequestID (' + requestToken + ') not found');
                } else {
                  // unknown error
                  pollResult.completed = true;
                  pollResult.succeeded = false;
                  pollResult.error = new Error(pollResponse.status + ': ' + pollResponse.data);
                }
              }).catch(function (err) {
                pollResult.completed = true;
                pollResult.succeeded = false;
                pollResult.error = err;
              });
            }

            return pollResult;
          }).takeWhile(function (pollResult) {
            return !pollResult.completed;
          }).takeLast(1).map(function (pollResult) {
            return resolve({
              requestToken: pollResult.requestToken,
              succeeded: pollResult.succeeded,
              error: pollResult.error });
          })
          // unknown errors
          .catch(function (err) {
            return reject(err);
          })
          // This can happen if maxPollTries are exhausted
          .finally(function (_) {
            return reject('Failed to poll back response');
          }).subscribe();
        } else if (postResponse.status === 503) {
          // Request queue is overloaded
          reject(new Error('Request queue is overloaded'));
        } else {
          // Unknown error
          reject(new Error(postResponse));
        }
      });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi93cmFwcGVycy9heGlvc1dyYXBwZXIuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJSeCIsIm1heFBvbGxUcmllcyIsInBvbGxpbmdJbnRlcnZhbCIsImdldCIsImJpbmQiLCJwb3N0V2l0aFBvbGxpbmciLCJ1cmwiLCJkYXRhIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3RSZXNwb25zZSIsInBvc3QiLCJjYXRjaCIsImUiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlcXVlc3RUb2tlbiIsIl9wb2xsUmVzdWx0IiwibG9ja2VkIiwiY29tcGxldGVkIiwic3VjY2VlZGVkIiwiZXJyb3IiLCJPYnNlcnZhYmxlIiwiaW50ZXJ2YWwiLCJ0YWtlIiwibWFwIiwicG9sbFJlc3VsdCIsInRoZW4iLCJwb2xsUmVzcG9uc2UiLCJFcnJvciIsImVyciIsInRha2VXaGlsZSIsInRha2VMYXN0IiwiZmluYWxseSIsInN1YnNjcmliZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7a0JBT2U7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxFQUFWLFFBQVVBLEVBQVY7QUFBQSxNQUFjQyxZQUFkLFFBQWNBLFlBQWQ7QUFBQSxNQUE0QkMsZUFBNUIsUUFBNEJBLGVBQTVCO0FBQUEsU0FBbUQ7O0FBRWhFQyxTQUFLSixNQUFNSSxHQUFOLENBQVVDLElBQVYsQ0FBZUwsS0FBZixDQUYyRDs7QUFJaEVNLHFCQUFpQix5QkFBQ0MsR0FBRCxFQUFNQyxJQUFOO0FBQUEsYUFDZixxQ0FBdUIsZ0JBQU9DLE9BQVAsRUFBZ0JDLE1BQWhCLEVBQTJCO0FBQ2hELFlBQU1DLGVBQWUsTUFBTVgsTUFBTVksSUFBTixDQUFXTCxHQUFYLEVBQWdCQyxJQUFoQixFQUN4QkssS0FEd0IsQ0FDbEI7QUFBQSxpQkFBS0MsRUFBRUMsUUFBRixJQUFjRCxDQUFuQjtBQUFBLFNBRGtCLENBQTNCOztBQUdBLFlBQUlILGFBQWFL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TDtBQUFBLFdBdERYLEVBdURHeUIsU0F2REg7QUF3REQsU0FuRUQsTUFtRU8sSUFBSXhCLGFBQWFLLE1BQWIsS0FBd0IsR0FBNUIsRUFBaUM7QUFDdEM7QUFDQU4saUJBQU8sSUFBSW9CLEtBQUosQ0FBVSw2QkFBVixDQUFQO0FBQ0QsU0FITSxNQUdBO0FBQ0w7QUFDQXBCLGlCQUFPLElBQUlvQixLQUFKLENBQVVuQixZQUFWLENBQVA7QUFDRDtBQUNGLE9BOUVELENBRGU7QUFBQTtBQUorQyxHQUFuRDtBQUFBLEMiLCJmaWxlIjoiYXhpb3NXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSB9IGZyb20gJ2pzLXV0aWxzJ1xuXG4vKipcbiAqIEEgd3JhcHBlciBmb3IgdGhlIGF4aW9zIGh0dHAgbGlicmFyeVxuICogQHBhcmFtIHtvYmplY3R9IGF4aW9zIHRoZSBjb3JlIGF4aW9zIGxpYnJhcnlcbiAqIEBwYXJhbSB7b2JqZWN0fSBSeCB0aGUgUnggbGlicmFyeVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFBvbGxUcmllcyB0aGUgbWF4aW11bSBwb2xscyB0byB0cnkgdG8gZ2V0IHRoZSByZXNwb25zZVxuICAqIEBwYXJhbSB7bnVtYmVyfSBwb2xsaW5nSW50ZXJ2YWwgdGltZSBpbnRlcnZhbCBiZXR3ZWVuIHBvbGxpbmcgcmVxdWVzdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHsgYXhpb3MsIFJ4LCBtYXhQb2xsVHJpZXMsIHBvbGxpbmdJbnRlcnZhbCB9KSA9PiAoe1xuXG4gIGdldDogYXhpb3MuZ2V0LmJpbmQoYXhpb3MpLFxuXG4gIHBvc3RXaXRoUG9sbGluZzogKHVybCwgZGF0YSkgPT5cbiAgICBjcmVhdGVEZWZlbnNpdmVQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHBvc3RSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAuY2F0Y2goZSA9PiBlLnJlc3BvbnNlIHx8IGUpXG5cbiAgICAgIGlmIChwb3N0UmVzcG9uc2Uuc3RhdHVzID09PSAyMDIpIHtcbiAgICAgICAgLy8gUmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZ1xuICAgICAgICBjb25zdCByZXF1ZXN0VG9rZW4gPSBwb3N0UmVzcG9uc2UuZGF0YS5yZXF1ZXN0VG9rZW5cbiAgICAgICAgY29uc3QgX3BvbGxSZXN1bHQgPSB7XG4gICAgICAgICAgcmVxdWVzdFRva2VuLFxuICAgICAgICAgIGxvY2tlZDogZmFsc2UsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZWVkZWQ6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBSeC5PYnNlcnZhYmxlXG4gICAgICAgICAgLmludGVydmFsKHBvbGxpbmdJbnRlcnZhbClcbiAgICAgICAgICAudGFrZShtYXhQb2xsVHJpZXMpXG4gICAgICAgICAgLm1hcChfID0+IF9wb2xsUmVzdWx0KVxuICAgICAgICAgIC5tYXAocG9sbFJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoIShwb2xsUmVzdWx0LmxvY2tlZCkgJiYgIShwb2xsUmVzdWx0LmNvbXBsZXRlZCkpIHtcbiAgICAgICAgICAgICAgcG9sbFJlc3VsdC5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgIGF4aW9zLnBvc3QodXJsLCB7IHJlcXVlc3RUb2tlbiB9KS5jYXRjaChlID0+IGUucmVzcG9uc2UgfHwgZSlcbiAgICAgICAgICAgICAgICAudGhlbihwb2xsUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHBvbGxSZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsbHkgcG9zdGVkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5jb21wbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuc3VjY2VlZGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwb2xsUmVzcG9uc2Uuc3RhdHVzID09PSAyMDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RpbGwgcHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQubG9ja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwb2xsUmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFpbGVkIHRvIHBvc3QgZGF0YVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5zdWNjZWVkZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID0gbmV3IEVycm9yKGBGYWlsZWQ6ICR7cG9sbFJlc3BvbnNlLmRhdGF9YClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocG9sbFJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcXVlc3RUb2tlbiBub3QgZm91bmRcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5jb21wbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuc3VjY2VlZGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5lcnJvciA9XG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSZXF1ZXN0SUQgKCR7cmVxdWVzdFRva2VufSkgbm90IGZvdW5kYClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVua25vd24gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5jb21wbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuc3VjY2VlZGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5lcnJvciA9XG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKGAke3BvbGxSZXNwb25zZS5zdGF0dXN9OiAke3BvbGxSZXNwb25zZS5kYXRhfWApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuY29tcGxldGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5zdWNjZWVkZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwb2xsUmVzdWx0XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGFrZVdoaWxlKHBvbGxSZXN1bHQgPT4gIShwb2xsUmVzdWx0LmNvbXBsZXRlZCkpXG4gICAgICAgICAgLnRha2VMYXN0KDEpXG4gICAgICAgICAgLm1hcChwb2xsUmVzdWx0ID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgcmVxdWVzdFRva2VuOiBwb2xsUmVzdWx0LnJlcXVlc3RUb2tlbixcbiAgICAgICAgICAgIHN1Y2NlZWRlZDogcG9sbFJlc3VsdC5zdWNjZWVkZWQsXG4gICAgICAgICAgICBlcnJvcjogcG9sbFJlc3VsdC5lcnJvciB9KSlcbiAgICAgICAgICAvLyB1bmtub3duIGVycm9yc1xuICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIG1heFBvbGxUcmllcyBhcmUgZXhoYXVzdGVkXG4gICAgICAgICAgLmZpbmFsbHkoXyA9PiByZWplY3QoJ0ZhaWxlZCB0byBwb2xsIGJhY2sgcmVzcG9uc2UnKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKClcbiAgICAgIH0gZWxzZSBpZiAocG9zdFJlc3BvbnNlLnN0YXR1cyA9PT0gNTAzKSB7XG4gICAgICAgIC8vIFJlcXVlc3QgcXVldWUgaXMgb3ZlcmxvYWRlZFxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdSZXF1ZXN0IHF1ZXVlIGlzIG92ZXJsb2FkZWQnKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVua25vd24gZXJyb3JcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihwb3N0UmVzcG9uc2UpKVxuICAgICAgfVxuICAgIH0pXG59KVxuIl19
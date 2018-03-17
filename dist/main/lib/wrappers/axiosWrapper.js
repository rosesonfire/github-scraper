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
                  pollResult.error = null;
                } else if (pollResponse.status === 202) {
                  // still processing
                  pollResult.locked = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL2xpYi93cmFwcGVycy9heGlvc1dyYXBwZXIuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJSeCIsIm1heFBvbGxUcmllcyIsInBvbGxpbmdJbnRlcnZhbCIsImdldCIsImJpbmQiLCJwb3N0V2l0aFBvbGxpbmciLCJ1cmwiLCJkYXRhIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3RSZXNwb25zZSIsInBvc3QiLCJjYXRjaCIsImUiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlcXVlc3RUb2tlbiIsIl9wb2xsUmVzdWx0IiwibG9ja2VkIiwiY29tcGxldGVkIiwic3VjY2VlZGVkIiwiZXJyb3IiLCJFcnJvciIsIk9ic2VydmFibGUiLCJpbnRlcnZhbCIsInRha2UiLCJtYXAiLCJwb2xsUmVzdWx0IiwidGhlbiIsInBvbGxSZXNwb25zZSIsImVyciIsInRha2VXaGlsZSIsInRha2VMYXN0IiwiZmluYWxseSIsInN1YnNjcmliZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7a0JBT2U7QUFBQSxNQUFHQSxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxFQUFWLFFBQVVBLEVBQVY7QUFBQSxNQUFjQyxZQUFkLFFBQWNBLFlBQWQ7QUFBQSxNQUE0QkMsZUFBNUIsUUFBNEJBLGVBQTVCO0FBQUEsU0FBbUQ7O0FBRWhFQyxTQUFLSixNQUFNSSxHQUFOLENBQVVDLElBQVYsQ0FBZUwsS0FBZixDQUYyRDs7QUFJaEVNLHFCQUFpQix5QkFBQ0MsR0FBRCxFQUFNQyxJQUFOO0FBQUEsYUFDZixxQ0FBdUIsZ0JBQU9DLE9BQVAsRUFBZ0JDLE1BQWhCLEVBQTJCO0FBQ2hELFlBQU1DLGVBQWUsTUFBTVgsTUFBTVksSUFBTixDQUFXTCxHQUFYLEVBQWdCQyxJQUFoQixFQUN4QkssS0FEd0IsQ0FDbEI7QUFBQSxpQkFBS0MsRUFBRUMsUUFBRixJQUFjRCxDQUFuQjtBQUFBLFNBRGtCLENBQTNCOztBQUdBLFlBQUlILGFBQWFL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QUEsbUJBQUt4QixPQUFPLDhCQUFQLENBQUw7QUFBQSxXQXREWCxFQXVER3lCLFNBdkRIO0FBd0RELFNBbkVELE1BbUVPLElBQUl4QixhQUFhSyxNQUFiLEtBQXdCLEdBQTVCLEVBQWlDO0FBQ3RDO0FBQ0FOLGlCQUFPLElBQUlhLEtBQUosQ0FBVSw2QkFBVixDQUFQO0FBQ0QsU0FITSxNQUdBO0FBQ0w7QUFDQWIsaUJBQU8sSUFBSWEsS0FBSixDQUFVWixZQUFWLENBQVA7QUFDRDtBQUNGLE9BOUVELENBRGU7QUFBQTtBQUorQyxHQUFuRDtBQUFBLEMiLCJmaWxlIjoiYXhpb3NXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVmZW5zaXZlUHJvbWlzZSB9IGZyb20gJ2pzLXV0aWxzJ1xuXG4vKipcbiAqIEEgd3JhcHBlciBmb3IgdGhlIGF4aW9zIGh0dHAgbGlicmFyeVxuICogQHBhcmFtIHtvYmplY3R9IGF4aW9zIHRoZSBjb3JlIGF4aW9zIGxpYnJhcnlcbiAqIEBwYXJhbSB7b2JqZWN0fSBSeCB0aGUgUnggbGlicmFyeVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFBvbGxUcmllcyB0aGUgbWF4aW11bSBwb2xscyB0byB0cnkgdG8gZ2V0IHRoZSByZXNwb25zZVxuICAqIEBwYXJhbSB7bnVtYmVyfSBwb2xsaW5nSW50ZXJ2YWwgdGltZSBpbnRlcnZhbCBiZXR3ZWVuIHBvbGxpbmcgcmVxdWVzdHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKHsgYXhpb3MsIFJ4LCBtYXhQb2xsVHJpZXMsIHBvbGxpbmdJbnRlcnZhbCB9KSA9PiAoe1xuXG4gIGdldDogYXhpb3MuZ2V0LmJpbmQoYXhpb3MpLFxuXG4gIHBvc3RXaXRoUG9sbGluZzogKHVybCwgZGF0YSkgPT5cbiAgICBjcmVhdGVEZWZlbnNpdmVQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHBvc3RSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAuY2F0Y2goZSA9PiBlLnJlc3BvbnNlIHx8IGUpXG5cbiAgICAgIGlmIChwb3N0UmVzcG9uc2Uuc3RhdHVzID09PSAyMDIpIHtcbiAgICAgICAgLy8gUmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZ1xuICAgICAgICBjb25zdCByZXF1ZXN0VG9rZW4gPSBwb3N0UmVzcG9uc2UuZGF0YS5yZXF1ZXN0VG9rZW5cbiAgICAgICAgY29uc3QgX3BvbGxSZXN1bHQgPSB7XG4gICAgICAgICAgcmVxdWVzdFRva2VuLFxuICAgICAgICAgIGxvY2tlZDogZmFsc2UsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICBzdWNjZWVkZWQ6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBuZXcgRXJyb3IoYEV4aGF1c3RlZCBhbGwgKCR7bWF4UG9sbFRyaWVzfSkgcG9sbCB0cmllc2ApXG4gICAgICAgIH1cblxuICAgICAgICBSeC5PYnNlcnZhYmxlXG4gICAgICAgICAgLmludGVydmFsKHBvbGxpbmdJbnRlcnZhbClcbiAgICAgICAgICAudGFrZShtYXhQb2xsVHJpZXMpXG4gICAgICAgICAgLm1hcChfID0+IF9wb2xsUmVzdWx0KVxuICAgICAgICAgIC5tYXAocG9sbFJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoIShwb2xsUmVzdWx0LmxvY2tlZCkgJiYgIShwb2xsUmVzdWx0LmNvbXBsZXRlZCkpIHtcbiAgICAgICAgICAgICAgcG9sbFJlc3VsdC5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgIGF4aW9zLnBvc3QodXJsLCB7IHJlcXVlc3RUb2tlbiB9KS5jYXRjaChlID0+IGUucmVzcG9uc2UgfHwgZSlcbiAgICAgICAgICAgICAgICAudGhlbihwb2xsUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHBvbGxSZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsbHkgcG9zdGVkIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5jb21wbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuc3VjY2VlZGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID0gbnVsbFxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwb2xsUmVzcG9uc2Uuc3RhdHVzID09PSAyMDIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RpbGwgcHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmxvY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBvbGxSZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWlsZWQgdG8gcG9zdCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuY29tcGxldGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LnN1Y2NlZWRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHBvbGxSZXN1bHQuZXJyb3IgPSBuZXcgRXJyb3IoYEZhaWxlZDogJHtwb2xsUmVzcG9uc2UuZGF0YX1gKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwb2xsUmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdFRva2VuIG5vdCBmb3VuZFxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5zdWNjZWVkZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID1cbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJlcXVlc3RJRCAoJHtyZXF1ZXN0VG9rZW59KSBub3QgZm91bmRgKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5rbm93biBlcnJvclxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmNvbXBsZXRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5zdWNjZWVkZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID1cbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYCR7cG9sbFJlc3BvbnNlLnN0YXR1c306ICR7cG9sbFJlc3BvbnNlLmRhdGF9YClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgcG9sbFJlc3VsdC5jb21wbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LnN1Y2NlZWRlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICBwb2xsUmVzdWx0LmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBvbGxSZXN1bHRcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50YWtlV2hpbGUocG9sbFJlc3VsdCA9PiAhKHBvbGxSZXN1bHQuY29tcGxldGVkKSlcbiAgICAgICAgICAudGFrZUxhc3QoMSlcbiAgICAgICAgICAubWFwKHBvbGxSZXN1bHQgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICByZXF1ZXN0VG9rZW46IHBvbGxSZXN1bHQucmVxdWVzdFRva2VuLFxuICAgICAgICAgICAgc3VjY2VlZGVkOiBwb2xsUmVzdWx0LnN1Y2NlZWRlZCxcbiAgICAgICAgICAgIGVycm9yOiBwb2xsUmVzdWx0LmVycm9yIH0pKVxuICAgICAgICAgIC8vIHVua25vd24gZXJyb3JzXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSlcbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgbWF4UG9sbFRyaWVzIGFyZSBleGhhdXN0ZWRcbiAgICAgICAgICAuZmluYWxseShfID0+IHJlamVjdCgnRmFpbGVkIHRvIHBvbGwgYmFjayByZXNwb25zZScpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICAgfSBlbHNlIGlmIChwb3N0UmVzcG9uc2Uuc3RhdHVzID09PSA1MDMpIHtcbiAgICAgICAgLy8gUmVxdWVzdCBxdWV1ZSBpcyBvdmVybG9hZGVkXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1JlcXVlc3QgcXVldWUgaXMgb3ZlcmxvYWRlZCcpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVW5rbm93biBlcnJvclxuICAgICAgICByZWplY3QobmV3IEVycm9yKHBvc3RSZXNwb25zZSkpXG4gICAgICB9XG4gICAgfSlcbn0pXG4iXX0=
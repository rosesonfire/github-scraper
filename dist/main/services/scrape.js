'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Extracts only the required data set
var extract = function extract(_ref) {
  var jsonData = _ref.jsonData,
      baseUrl = _ref.baseUrl;

  var requiredData = jsonData.feed.entry.map(function (feedEntry) {
    var author = feedEntry.author[0];
    return {
      updateTime: new Date(Date.parse(feedEntry.updated[0])),
      event: feedEntry.id[0].split(':')[2].split('/')[0],
      author: {
        name: author.name[0],
        uri: author.uri[0].replace(baseUrl, '')
      }
    };
  });
  return requiredData;
};

// ETL's required data from endpoint to persistence

exports.default = function (_ref2) {
  var url = _ref2.url,
      getBaseUrl = _ref2.getBaseUrl,
      fetchData = _ref2.fetchData,
      convertXMLToJSON = _ref2.convertXMLToJSON,
      saveData = _ref2.saveData;
  return async function () {
    var _ref3 = await fetchData(url),
        data = _ref3.data;

    var jsonData = await convertXMLToJSON(data);
    var baseUrl = await getBaseUrl(url);
    var requiredDataSet = extract({ jsonData: jsonData, baseUrl: baseUrl });

    return saveData(requiredDataSet);
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL3NjcmFwZS5qcyJdLCJuYW1lcyI6WyJleHRyYWN0IiwianNvbkRhdGEiLCJiYXNlVXJsIiwicmVxdWlyZWREYXRhIiwiZmVlZCIsImVudHJ5IiwibWFwIiwiYXV0aG9yIiwiZmVlZEVudHJ5IiwidXBkYXRlVGltZSIsIkRhdGUiLCJwYXJzZSIsInVwZGF0ZWQiLCJldmVudCIsImlkIiwic3BsaXQiLCJuYW1lIiwidXJpIiwicmVwbGFjZSIsInVybCIsImdldEJhc2VVcmwiLCJmZXRjaERhdGEiLCJjb252ZXJ0WE1MVG9KU09OIiwic2F2ZURhdGEiLCJkYXRhIiwicmVxdWlyZWREYXRhU2V0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsSUFBTUEsVUFBVSxTQUFWQSxPQUFVLE9BQTJCO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDekMsTUFBTUMsZUFBZUYsU0FBU0csSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxHQUFwQixDQUF3QixxQkFBYTtBQUN4RCxRQUFNQyxTQUFTQyxVQUFVRCxNQUFWLENBQWlCLENBQWpCLENBQWY7QUFDQSxXQUFPO0FBQ0xFLGtCQUFZLElBQUlDLElBQUosQ0FBU0EsS0FBS0MsS0FBTCxDQUFXSCxVQUFVSSxPQUFWLENBQWtCLENBQWxCLENBQVgsQ0FBVCxDQURQO0FBRUxDLGFBQU9MLFVBQVVNLEVBQVYsQ0FBYSxDQUFiLEVBQWdCQyxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixFQUE4QkEsS0FBOUIsQ0FBb0MsR0FBcEMsRUFBeUMsQ0FBekMsQ0FGRjtBQUdMUixjQUFRO0FBQ05TLGNBQU1ULE9BQU9TLElBQVAsQ0FBWSxDQUFaLENBREE7QUFFTkMsYUFBS1YsT0FBT1UsR0FBUCxDQUFXLENBQVgsRUFBY0MsT0FBZCxDQUFzQmhCLE9BQXRCLEVBQStCLEVBQS9CO0FBRkM7QUFISCxLQUFQO0FBUUQsR0FWb0IsQ0FBckI7QUFXQSxTQUFPQyxZQUFQO0FBQ0QsQ0FiRDs7QUFlQTs7a0JBQ2U7QUFBQSxNQUFHZ0IsR0FBSCxTQUFHQSxHQUFIO0FBQUEsTUFBUUMsVUFBUixTQUFRQSxVQUFSO0FBQUEsTUFBb0JDLFNBQXBCLFNBQW9CQSxTQUFwQjtBQUFBLE1BQStCQyxnQkFBL0IsU0FBK0JBLGdCQUEvQjtBQUFBLE1BQWlEQyxRQUFqRCxTQUFpREEsUUFBakQ7QUFBQSxTQUNiLGtCQUFZO0FBQUEsZ0JBQ08sTUFBTUYsVUFBVUYsR0FBVixDQURiO0FBQUEsUUFDRkssSUFERSxTQUNGQSxJQURFOztBQUVWLFFBQU12QixXQUFXLE1BQU1xQixpQkFBaUJFLElBQWpCLENBQXZCO0FBQ0EsUUFBTXRCLFVBQVUsTUFBTWtCLFdBQVdELEdBQVgsQ0FBdEI7QUFDQSxRQUFNTSxrQkFBa0J6QixRQUFRLEVBQUVDLGtCQUFGLEVBQVlDLGdCQUFaLEVBQVIsQ0FBeEI7O0FBRUEsV0FBT3FCLFNBQVNFLGVBQVQsQ0FBUDtBQUNELEdBUlk7QUFBQSxDIiwiZmlsZSI6InNjcmFwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4dHJhY3RzIG9ubHkgdGhlIHJlcXVpcmVkIGRhdGEgc2V0XG5jb25zdCBleHRyYWN0ID0gKHsganNvbkRhdGEsIGJhc2VVcmwgfSkgPT4ge1xuICBjb25zdCByZXF1aXJlZERhdGEgPSBqc29uRGF0YS5mZWVkLmVudHJ5Lm1hcChmZWVkRW50cnkgPT4ge1xuICAgIGNvbnN0IGF1dGhvciA9IGZlZWRFbnRyeS5hdXRob3JbMF1cbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlVGltZTogbmV3IERhdGUoRGF0ZS5wYXJzZShmZWVkRW50cnkudXBkYXRlZFswXSkpLFxuICAgICAgZXZlbnQ6IGZlZWRFbnRyeS5pZFswXS5zcGxpdCgnOicpWzJdLnNwbGl0KCcvJylbMF0sXG4gICAgICBhdXRob3I6IHtcbiAgICAgICAgbmFtZTogYXV0aG9yLm5hbWVbMF0sXG4gICAgICAgIHVyaTogYXV0aG9yLnVyaVswXS5yZXBsYWNlKGJhc2VVcmwsICcnKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlcXVpcmVkRGF0YVxufVxuXG4vLyBFVEwncyByZXF1aXJlZCBkYXRhIGZyb20gZW5kcG9pbnQgdG8gcGVyc2lzdGVuY2VcbmV4cG9ydCBkZWZhdWx0ICh7IHVybCwgZ2V0QmFzZVVybCwgZmV0Y2hEYXRhLCBjb252ZXJ0WE1MVG9KU09OLCBzYXZlRGF0YSB9KSA9PlxuICBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBmZXRjaERhdGEodXJsKVxuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgY29udmVydFhNTFRvSlNPTihkYXRhKVxuICAgIGNvbnN0IGJhc2VVcmwgPSBhd2FpdCBnZXRCYXNlVXJsKHVybClcbiAgICBjb25zdCByZXF1aXJlZERhdGFTZXQgPSBleHRyYWN0KHsganNvbkRhdGEsIGJhc2VVcmwgfSlcblxuICAgIHJldHVybiBzYXZlRGF0YShyZXF1aXJlZERhdGFTZXQpXG4gIH1cbiJdfQ==
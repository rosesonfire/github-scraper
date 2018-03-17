'use strict';

var _setup = require('./../setup');

var _convertXMLToJSON = require('./../../main/services/convertXMLToJSON');

var _convertXMLToJSON2 = _interopRequireDefault(_convertXMLToJSON);

var _xml2jsWrapper = require('./../mocks/lib/wrappers/xml2jsWrapper');

var _xml2jsWrapper2 = _interopRequireDefault(_xml2jsWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unit
(0, _setup.describe)('ConvertXMLToJSON', function () {
  var mocks = void 0,
      converter = void 0,
      asyncConverter = void 0,
      xml = void 0,
      jsonData = void 0;

  (0, _setup.before)(function () {
    xml =
    /* eslint-disable */
    '<?xml version="1.0" encoding="UTF-8"?>\n<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:lang="en-US">\n  <id>tag:github.com,2008:/timeline</id>\n  <link type="text/html" rel="alternate" href="https://github.com/timeline" />\n  <link type="application/atom+xml" rel="self" href="https://github.com/timeline" />\n  <title>GitHub Public Timeline Feed</title>\n  <updated>2018-03-01T23:58:35Z</updated>\n  <entry>\n    <id>tag:github.com,2008:IssueCommentEvent/7319278825</id>\n    <published>2018-03-01T23:58:35Z</published>\n    <updated>2018-03-01T23:58:35Z</updated>\n    <link type="text/html" rel="alternate" href="https://github.com/ansible/ansible/pull/36931#issuecomment-369773515" />\n    <title type="html">ansibot commented on pull request ansible/ansible#36931</title>\n    <author>\n      <name>ansibot</name>\n      <email />\n      <uri>https://github.com/ansibot</uri>\n    </author>\n    <media:thumbnail height="30" width="30" url="https://avatars3.githubusercontent.com/u/6585283?s=30&amp;v=4" />\n    <content type="html">&lt;!-- issue_comment --&gt;\n&lt;div class="d-flex border-bottom border-gray-light py-3"&gt;\n  \n&lt;span class="position-relative mr-3"&gt;\n  &lt;a href="/ansibot" rel="noreferrer"&gt;&lt;img alt="@ansibot" class="avatar" height="32" src="https://avatars0.githubusercontent.com/u/6585283?s=64&amp;amp;v=4" width="32"&gt;&lt;/a&gt;\n&lt;/span&gt;\n\n  &lt;div class="d-flex flex-column width-full"&gt;\n    &lt;div&gt;\n      &lt;div class="d-flex flex-justify-between flex-items-baseline"&gt;\n        &lt;div&gt;\n          &lt;a href="/ansibot" class="link-gray-dark text-bold wb-break-all" data-ga-click="News feed, event click, Event click type:IssueCommentEvent target:actor" data-hydro-click-hmac="0b4c656b7b6559ca7cc93b318e042cf312ca3b7b2bc151806fb59a52ce1ff73d" data-hydro-click="{&amp;quot;event_type&amp;quot;:&amp;quot;news_feed.event.click&amp;quot;,&amp;quot;payload&amp;quot;:{&amp;quot;action_target&amp;quot;:&amp;quot;actor&amp;quot;,&amp;quot;event&amp;quot;:{&amp;quot;repo_id&amp;quot;:3638964,&amp;quot;actor_id&amp;quot;:6585283,&amp;quot;public&amp;quot;:true,&amp;quot;type&amp;quot;:&amp;quot;IssueCommentEvent&amp;quot;,&amp;quot;target_id&amp;quot;:null,&amp;quot;id&amp;quot;:7319278825,&amp;quot;additional_details_shown&amp;quot;:false},&amp;quot;org_id&amp;quot;:null,&amp;quot;originating_request_id&amp;quot;:&amp;quot;D108:869F:2AD6D14:3E2C216:5A9893AA&amp;quot;}}" rel="noreferrer"&gt;ansibot&lt;/a&gt; commented on pull request &lt;a href="/ansible/ansible/pull/36931#issuecomment-369773515" class="link-gray-dark text-bold" data-ga-click="News feed, event click, Event click type:IssueCommentEvent target:issue-comment" data-hydro-click-hmac="b86b9b2886e58465af52445692e372f5075f8190e9eec90cb8f8d60253b315a5" data-hydro-click="{&amp;quot;event_type&amp;quot;:&amp;quot;news_feed.event.click&amp;quot;,&amp;quot;payload&amp;quot;:{&amp;quot;action_target&amp;quot;:&amp;quot;issue-comment&amp;quot;,&amp;quot;event&amp;quot;:{&amp;quot;repo_id&amp;quot;:3638964,&amp;quot;actor_id&amp;quot;:6585283,&amp;quot;public&amp;quot;:true,&amp;quot;type&amp;quot;:&amp;quot;IssueCommentEvent&amp;quot;,&amp;quot;target_id&amp;quot;:null,&amp;quot;id&amp;quot;:7319278825,&amp;quot;additional_details_shown&amp;quot;:false},&amp;quot;org_id&amp;quot;:null,&amp;quot;originating_request_id&amp;quot;:&amp;quot;D108:869F:2AD6D14:3E2C216:5A9893AA&amp;quot;}}" title="postgresql_user: set encrypted as default and fix empty password reporting changed" rel="noreferrer"&gt;ansible/ansible#36931&lt;/a&gt;\n        &lt;/div&gt;\n        &lt;span class="f6 text-gray-light ml-4"&gt;\n          &lt;relative-time datetime="2018-03-01T23:58:35Z"&gt;Mar 2, 2018&lt;/relative-time&gt;\n        &lt;/span&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="message markdown-body mt-3"&gt;\n      &lt;blockquote&gt;\n        &lt;p&gt;cc &lt;a href="https://github.com/matburt" class="user-mention" rel="noreferrer"&gt;@matburt&lt;/a&gt; &lt;a href="https://github.com/nerzhul" class="user-mention" rel="noreferrer"&gt;@nerzhul&lt;/a&gt;\n&lt;a href="https://github.com/ansible/ansibullbot/blob/master/ISSUE_HELP.md" rel="noreferrer"&gt;click here for bot help&lt;/a&gt;\n&lt;/p&gt;\n      &lt;/blockquote&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;</content>\n  </entry>\n</feed>';
    /* eslint-enable */
    jsonData = {};
  });

  (0, _setup.afterEach)(function () {
    return mocks.forEach(function (mock) {
      return mock.verify();
    });
  });

  (0, _setup.describe)('When converting data with sync converter', function () {
    (0, _setup.beforeEach)(function () {
      converter = (0, _xml2jsWrapper2.default)();
      mocks = [converter.convert];
      converter.convert.once().withExactArgs(xml).returns(jsonData);
    });

    (0, _setup.it)('should return a promise', function () {
      return (0, _convertXMLToJSON2.default)({ converter: converter })(xml).should.be.a('promise');
    });

    (0, _setup.it)('should get converted data', function () {
      return (0, _convertXMLToJSON2.default)({ converter: converter })(xml).should.eventually.equal(jsonData);
    });
  });

  (0, _setup.describe)('When converting data with async converter', function () {
    (0, _setup.beforeEach)(function () {
      asyncConverter = (0, _xml2jsWrapper2.default)();
      mocks = [asyncConverter.convert];
      asyncConverter.convert.once().withExactArgs(xml).returns(Promise.resolve(jsonData));
    });

    (0, _setup.it)('should get converted data', function () {
      return (0, _convertXMLToJSON2.default)({ converter: asyncConverter })(xml).should.eventually.equal(jsonData);
    });
  });
});
// mocks
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NlcnZpY2VzL2NvbnZlcnRYTUxUb0pTT04uc3BlYy5qcyJdLCJuYW1lcyI6WyJtb2NrcyIsImNvbnZlcnRlciIsImFzeW5jQ29udmVydGVyIiwieG1sIiwianNvbkRhdGEiLCJmb3JFYWNoIiwibW9jayIsInZlcmlmeSIsImNvbnZlcnQiLCJvbmNlIiwid2l0aEV4YWN0QXJncyIsInJldHVybnMiLCJzaG91bGQiLCJiZSIsImEiLCJldmVudHVhbGx5IiwiZXF1YWwiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7OztBQUVBOzs7Ozs7QUFIQTtBQUtBLHFCQUFTLGtCQUFULEVBQTZCLFlBQU07QUFDakMsTUFDRUEsY0FERjtBQUFBLE1BRUVDLGtCQUZGO0FBQUEsTUFHRUMsdUJBSEY7QUFBQSxNQUlFQyxZQUpGO0FBQUEsTUFLRUMsaUJBTEY7O0FBT0EscUJBQU8sWUFBTTtBQUNYRDtBQUNKO0FBREk7QUFrREo7QUFDSUMsZUFBVyxFQUFYO0FBQ0QsR0FyREQ7O0FBdURBLHdCQUFVO0FBQUEsV0FBTUosTUFBTUssT0FBTixDQUFjO0FBQUEsYUFBUUMsS0FBS0MsTUFBTCxFQUFSO0FBQUEsS0FBZCxDQUFOO0FBQUEsR0FBVjs7QUFFQSx1QkFBUywwQ0FBVCxFQUFxRCxZQUFNO0FBQ3pELDJCQUFXLFlBQU07QUFDZk4sa0JBQVksOEJBQVo7QUFDQUQsY0FBUSxDQUFFQyxVQUFVTyxPQUFaLENBQVI7QUFDQVAsZ0JBQVVPLE9BQVYsQ0FBa0JDLElBQWxCLEdBQXlCQyxhQUF6QixDQUF1Q1AsR0FBdkMsRUFBNENRLE9BQTVDLENBQW9EUCxRQUFwRDtBQUNELEtBSkQ7O0FBTUEsbUJBQUcseUJBQUgsRUFBOEI7QUFBQSxhQUM1QixnQ0FBaUIsRUFBRUgsb0JBQUYsRUFBakIsRUFBZ0NFLEdBQWhDLEVBQXFDUyxNQUFyQyxDQUE0Q0MsRUFBNUMsQ0FBK0NDLENBQS9DLENBQWlELFNBQWpELENBRDRCO0FBQUEsS0FBOUI7O0FBR0EsbUJBQUcsMkJBQUgsRUFBZ0M7QUFBQSxhQUM5QixnQ0FBaUIsRUFBRWIsb0JBQUYsRUFBakIsRUFBZ0NFLEdBQWhDLEVBQXFDUyxNQUFyQyxDQUE0Q0csVUFBNUMsQ0FDR0MsS0FESCxDQUNTWixRQURULENBRDhCO0FBQUEsS0FBaEM7QUFHRCxHQWJEOztBQWVBLHVCQUFTLDJDQUFULEVBQXNELFlBQU07QUFDMUQsMkJBQVcsWUFBTTtBQUNmRix1QkFBaUIsOEJBQWpCO0FBQ0FGLGNBQVEsQ0FBRUUsZUFBZU0sT0FBakIsQ0FBUjtBQUNBTixxQkFBZU0sT0FBZixDQUF1QkMsSUFBdkIsR0FBOEJDLGFBQTlCLENBQTRDUCxHQUE1QyxFQUNHUSxPQURILENBQ1dNLFFBQVFDLE9BQVIsQ0FBZ0JkLFFBQWhCLENBRFg7QUFFRCxLQUxEOztBQU9BLG1CQUFHLDJCQUFILEVBQWdDO0FBQUEsYUFDOUIsZ0NBQWlCLEVBQUVILFdBQVdDLGNBQWIsRUFBakIsRUFBZ0RDLEdBQWhELEVBQXFEUyxNQUFyRCxDQUNHRyxVQURILENBQ2NDLEtBRGQsQ0FDb0JaLFFBRHBCLENBRDhCO0FBQUEsS0FBaEM7QUFHRCxHQVhEO0FBWUQsQ0E1RkQ7QUFIQSIsImZpbGUiOiJjb252ZXJ0WE1MVG9KU09OLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXNjcmliZSwgYmVmb3JlLCBiZWZvcmVFYWNoLCBhZnRlckVhY2gsIGl0IH0gZnJvbSAnLi8uLi9zZXR1cCdcbi8vIHVuaXRcbmltcG9ydCBjb252ZXJ0WE1MVG9KU09OIGZyb20gJy4vLi4vLi4vbWFpbi9zZXJ2aWNlcy9jb252ZXJ0WE1MVG9KU09OJ1xuLy8gbW9ja3NcbmltcG9ydCB4bWwyanNXcmFwcGVyTW9jayBmcm9tICcuLy4uL21vY2tzL2xpYi93cmFwcGVycy94bWwyanNXcmFwcGVyJ1xuXG5kZXNjcmliZSgnQ29udmVydFhNTFRvSlNPTicsICgpID0+IHtcbiAgbGV0XG4gICAgbW9ja3MsXG4gICAgY29udmVydGVyLFxuICAgIGFzeW5jQ29udmVydGVyLFxuICAgIHhtbCxcbiAgICBqc29uRGF0YVxuXG4gIGJlZm9yZSgoKSA9PiB7XG4gICAgeG1sID1cbi8qIGVzbGludC1kaXNhYmxlICovXG5gPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XG48ZmVlZCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDUvQXRvbVwiIHhtbG5zOm1lZGlhPVwiaHR0cDovL3NlYXJjaC55YWhvby5jb20vbXJzcy9cIiB4bWw6bGFuZz1cImVuLVVTXCI+XG4gIDxpZD50YWc6Z2l0aHViLmNvbSwyMDA4Oi90aW1lbGluZTwvaWQ+XG4gIDxsaW5rIHR5cGU9XCJ0ZXh0L2h0bWxcIiByZWw9XCJhbHRlcm5hdGVcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3RpbWVsaW5lXCIgLz5cbiAgPGxpbmsgdHlwZT1cImFwcGxpY2F0aW9uL2F0b20reG1sXCIgcmVsPVwic2VsZlwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdGltZWxpbmVcIiAvPlxuICA8dGl0bGU+R2l0SHViIFB1YmxpYyBUaW1lbGluZSBGZWVkPC90aXRsZT5cbiAgPHVwZGF0ZWQ+MjAxOC0wMy0wMVQyMzo1ODozNVo8L3VwZGF0ZWQ+XG4gIDxlbnRyeT5cbiAgICA8aWQ+dGFnOmdpdGh1Yi5jb20sMjAwODpJc3N1ZUNvbW1lbnRFdmVudC83MzE5Mjc4ODI1PC9pZD5cbiAgICA8cHVibGlzaGVkPjIwMTgtMDMtMDFUMjM6NTg6MzVaPC9wdWJsaXNoZWQ+XG4gICAgPHVwZGF0ZWQ+MjAxOC0wMy0wMVQyMzo1ODozNVo8L3VwZGF0ZWQ+XG4gICAgPGxpbmsgdHlwZT1cInRleHQvaHRtbFwiIHJlbD1cImFsdGVybmF0ZVwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYW5zaWJsZS9hbnNpYmxlL3B1bGwvMzY5MzEjaXNzdWVjb21tZW50LTM2OTc3MzUxNVwiIC8+XG4gICAgPHRpdGxlIHR5cGU9XCJodG1sXCI+YW5zaWJvdCBjb21tZW50ZWQgb24gcHVsbCByZXF1ZXN0IGFuc2libGUvYW5zaWJsZSMzNjkzMTwvdGl0bGU+XG4gICAgPGF1dGhvcj5cbiAgICAgIDxuYW1lPmFuc2lib3Q8L25hbWU+XG4gICAgICA8ZW1haWwgLz5cbiAgICAgIDx1cmk+aHR0cHM6Ly9naXRodWIuY29tL2Fuc2lib3Q8L3VyaT5cbiAgICA8L2F1dGhvcj5cbiAgICA8bWVkaWE6dGh1bWJuYWlsIGhlaWdodD1cIjMwXCIgd2lkdGg9XCIzMFwiIHVybD1cImh0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjU4NTI4Mz9zPTMwJmFtcDt2PTRcIiAvPlxuICAgIDxjb250ZW50IHR5cGU9XCJodG1sXCI+Jmx0OyEtLSBpc3N1ZV9jb21tZW50IC0tJmd0O1xuJmx0O2RpdiBjbGFzcz1cImQtZmxleCBib3JkZXItYm90dG9tIGJvcmRlci1ncmF5LWxpZ2h0IHB5LTNcIiZndDtcbiAgXG4mbHQ7c3BhbiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG1yLTNcIiZndDtcbiAgJmx0O2EgaHJlZj1cIi9hbnNpYm90XCIgcmVsPVwibm9yZWZlcnJlclwiJmd0OyZsdDtpbWcgYWx0PVwiQGFuc2lib3RcIiBjbGFzcz1cImF2YXRhclwiIGhlaWdodD1cIjMyXCIgc3JjPVwiaHR0cHM6Ly9hdmF0YXJzMC5naXRodWJ1c2VyY29udGVudC5jb20vdS82NTg1MjgzP3M9NjQmYW1wO2FtcDt2PTRcIiB3aWR0aD1cIjMyXCImZ3Q7Jmx0Oy9hJmd0O1xuJmx0Oy9zcGFuJmd0O1xuXG4gICZsdDtkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gd2lkdGgtZnVsbFwiJmd0O1xuICAgICZsdDtkaXYmZ3Q7XG4gICAgICAmbHQ7ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtanVzdGlmeS1iZXR3ZWVuIGZsZXgtaXRlbXMtYmFzZWxpbmVcIiZndDtcbiAgICAgICAgJmx0O2RpdiZndDtcbiAgICAgICAgICAmbHQ7YSBocmVmPVwiL2Fuc2lib3RcIiBjbGFzcz1cImxpbmstZ3JheS1kYXJrIHRleHQtYm9sZCB3Yi1icmVhay1hbGxcIiBkYXRhLWdhLWNsaWNrPVwiTmV3cyBmZWVkLCBldmVudCBjbGljaywgRXZlbnQgY2xpY2sgdHlwZTpJc3N1ZUNvbW1lbnRFdmVudCB0YXJnZXQ6YWN0b3JcIiBkYXRhLWh5ZHJvLWNsaWNrLWhtYWM9XCIwYjRjNjU2YjdiNjU1OWNhN2NjOTNiMzE4ZTA0MmNmMzEyY2EzYjdiMmJjMTUxODA2ZmI1OWE1MmNlMWZmNzNkXCIgZGF0YS1oeWRyby1jbGljaz1cInsmYW1wO3F1b3Q7ZXZlbnRfdHlwZSZhbXA7cXVvdDs6JmFtcDtxdW90O25ld3NfZmVlZC5ldmVudC5jbGljayZhbXA7cXVvdDssJmFtcDtxdW90O3BheWxvYWQmYW1wO3F1b3Q7OnsmYW1wO3F1b3Q7YWN0aW9uX3RhcmdldCZhbXA7cXVvdDs6JmFtcDtxdW90O2FjdG9yJmFtcDtxdW90OywmYW1wO3F1b3Q7ZXZlbnQmYW1wO3F1b3Q7OnsmYW1wO3F1b3Q7cmVwb19pZCZhbXA7cXVvdDs6MzYzODk2NCwmYW1wO3F1b3Q7YWN0b3JfaWQmYW1wO3F1b3Q7OjY1ODUyODMsJmFtcDtxdW90O3B1YmxpYyZhbXA7cXVvdDs6dHJ1ZSwmYW1wO3F1b3Q7dHlwZSZhbXA7cXVvdDs6JmFtcDtxdW90O0lzc3VlQ29tbWVudEV2ZW50JmFtcDtxdW90OywmYW1wO3F1b3Q7dGFyZ2V0X2lkJmFtcDtxdW90OzpudWxsLCZhbXA7cXVvdDtpZCZhbXA7cXVvdDs6NzMxOTI3ODgyNSwmYW1wO3F1b3Q7YWRkaXRpb25hbF9kZXRhaWxzX3Nob3duJmFtcDtxdW90OzpmYWxzZX0sJmFtcDtxdW90O29yZ19pZCZhbXA7cXVvdDs6bnVsbCwmYW1wO3F1b3Q7b3JpZ2luYXRpbmdfcmVxdWVzdF9pZCZhbXA7cXVvdDs6JmFtcDtxdW90O0QxMDg6ODY5RjoyQUQ2RDE0OjNFMkMyMTY6NUE5ODkzQUEmYW1wO3F1b3Q7fX1cIiByZWw9XCJub3JlZmVycmVyXCImZ3Q7YW5zaWJvdCZsdDsvYSZndDsgY29tbWVudGVkIG9uIHB1bGwgcmVxdWVzdCAmbHQ7YSBocmVmPVwiL2Fuc2libGUvYW5zaWJsZS9wdWxsLzM2OTMxI2lzc3VlY29tbWVudC0zNjk3NzM1MTVcIiBjbGFzcz1cImxpbmstZ3JheS1kYXJrIHRleHQtYm9sZFwiIGRhdGEtZ2EtY2xpY2s9XCJOZXdzIGZlZWQsIGV2ZW50IGNsaWNrLCBFdmVudCBjbGljayB0eXBlOklzc3VlQ29tbWVudEV2ZW50IHRhcmdldDppc3N1ZS1jb21tZW50XCIgZGF0YS1oeWRyby1jbGljay1obWFjPVwiYjg2YjliMjg4NmU1ODQ2NWFmNTI0NDU2OTJlMzcyZjUwNzVmODE5MGU5ZWVjOTBjYjhmOGQ2MDI1M2IzMTVhNVwiIGRhdGEtaHlkcm8tY2xpY2s9XCJ7JmFtcDtxdW90O2V2ZW50X3R5cGUmYW1wO3F1b3Q7OiZhbXA7cXVvdDtuZXdzX2ZlZWQuZXZlbnQuY2xpY2smYW1wO3F1b3Q7LCZhbXA7cXVvdDtwYXlsb2FkJmFtcDtxdW90Ozp7JmFtcDtxdW90O2FjdGlvbl90YXJnZXQmYW1wO3F1b3Q7OiZhbXA7cXVvdDtpc3N1ZS1jb21tZW50JmFtcDtxdW90OywmYW1wO3F1b3Q7ZXZlbnQmYW1wO3F1b3Q7OnsmYW1wO3F1b3Q7cmVwb19pZCZhbXA7cXVvdDs6MzYzODk2NCwmYW1wO3F1b3Q7YWN0b3JfaWQmYW1wO3F1b3Q7OjY1ODUyODMsJmFtcDtxdW90O3B1YmxpYyZhbXA7cXVvdDs6dHJ1ZSwmYW1wO3F1b3Q7dHlwZSZhbXA7cXVvdDs6JmFtcDtxdW90O0lzc3VlQ29tbWVudEV2ZW50JmFtcDtxdW90OywmYW1wO3F1b3Q7dGFyZ2V0X2lkJmFtcDtxdW90OzpudWxsLCZhbXA7cXVvdDtpZCZhbXA7cXVvdDs6NzMxOTI3ODgyNSwmYW1wO3F1b3Q7YWRkaXRpb25hbF9kZXRhaWxzX3Nob3duJmFtcDtxdW90OzpmYWxzZX0sJmFtcDtxdW90O29yZ19pZCZhbXA7cXVvdDs6bnVsbCwmYW1wO3F1b3Q7b3JpZ2luYXRpbmdfcmVxdWVzdF9pZCZhbXA7cXVvdDs6JmFtcDtxdW90O0QxMDg6ODY5RjoyQUQ2RDE0OjNFMkMyMTY6NUE5ODkzQUEmYW1wO3F1b3Q7fX1cIiB0aXRsZT1cInBvc3RncmVzcWxfdXNlcjogc2V0IGVuY3J5cHRlZCBhcyBkZWZhdWx0IGFuZCBmaXggZW1wdHkgcGFzc3dvcmQgcmVwb3J0aW5nIGNoYW5nZWRcIiByZWw9XCJub3JlZmVycmVyXCImZ3Q7YW5zaWJsZS9hbnNpYmxlIzM2OTMxJmx0Oy9hJmd0O1xuICAgICAgICAmbHQ7L2RpdiZndDtcbiAgICAgICAgJmx0O3NwYW4gY2xhc3M9XCJmNiB0ZXh0LWdyYXktbGlnaHQgbWwtNFwiJmd0O1xuICAgICAgICAgICZsdDtyZWxhdGl2ZS10aW1lIGRhdGV0aW1lPVwiMjAxOC0wMy0wMVQyMzo1ODozNVpcIiZndDtNYXIgMiwgMjAxOCZsdDsvcmVsYXRpdmUtdGltZSZndDtcbiAgICAgICAgJmx0Oy9zcGFuJmd0O1xuICAgICAgJmx0Oy9kaXYmZ3Q7XG4gICAgJmx0Oy9kaXYmZ3Q7XG4gICAgJmx0O2RpdiBjbGFzcz1cIm1lc3NhZ2UgbWFya2Rvd24tYm9keSBtdC0zXCImZ3Q7XG4gICAgICAmbHQ7YmxvY2txdW90ZSZndDtcbiAgICAgICAgJmx0O3AmZ3Q7Y2MgJmx0O2EgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXRidXJ0XCIgY2xhc3M9XCJ1c2VyLW1lbnRpb25cIiByZWw9XCJub3JlZmVycmVyXCImZ3Q7QG1hdGJ1cnQmbHQ7L2EmZ3Q7ICZsdDthIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmVyemh1bFwiIGNsYXNzPVwidXNlci1tZW50aW9uXCIgcmVsPVwibm9yZWZlcnJlclwiJmd0O0BuZXJ6aHVsJmx0Oy9hJmd0O1xuJmx0O2EgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hbnNpYmxlL2Fuc2lidWxsYm90L2Jsb2IvbWFzdGVyL0lTU1VFX0hFTFAubWRcIiByZWw9XCJub3JlZmVycmVyXCImZ3Q7Y2xpY2sgaGVyZSBmb3IgYm90IGhlbHAmbHQ7L2EmZ3Q7XG4mbHQ7L3AmZ3Q7XG4gICAgICAmbHQ7L2Jsb2NrcXVvdGUmZ3Q7XG4gICAgJmx0Oy9kaXYmZ3Q7XG4gICZsdDsvZGl2Jmd0O1xuJmx0Oy9kaXYmZ3Q7PC9jb250ZW50PlxuICA8L2VudHJ5PlxuPC9mZWVkPmBcbi8qIGVzbGludC1lbmFibGUgKi9cbiAgICBqc29uRGF0YSA9IHt9XG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IG1vY2tzLmZvckVhY2gobW9jayA9PiBtb2NrLnZlcmlmeSgpKSlcblxuICBkZXNjcmliZSgnV2hlbiBjb252ZXJ0aW5nIGRhdGEgd2l0aCBzeW5jIGNvbnZlcnRlcicsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGNvbnZlcnRlciA9IHhtbDJqc1dyYXBwZXJNb2NrKClcbiAgICAgIG1vY2tzID0gWyBjb252ZXJ0ZXIuY29udmVydCBdXG4gICAgICBjb252ZXJ0ZXIuY29udmVydC5vbmNlKCkud2l0aEV4YWN0QXJncyh4bWwpLnJldHVybnMoanNvbkRhdGEpXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGEgcHJvbWlzZScsICgpID0+XG4gICAgICBjb252ZXJ0WE1MVG9KU09OKHsgY29udmVydGVyIH0pKHhtbCkuc2hvdWxkLmJlLmEoJ3Byb21pc2UnKSlcblxuICAgIGl0KCdzaG91bGQgZ2V0IGNvbnZlcnRlZCBkYXRhJywgKCkgPT5cbiAgICAgIGNvbnZlcnRYTUxUb0pTT04oeyBjb252ZXJ0ZXIgfSkoeG1sKS5zaG91bGQuZXZlbnR1YWxseVxuICAgICAgICAuZXF1YWwoanNvbkRhdGEpKVxuICB9KVxuXG4gIGRlc2NyaWJlKCdXaGVuIGNvbnZlcnRpbmcgZGF0YSB3aXRoIGFzeW5jIGNvbnZlcnRlcicsICgpID0+IHtcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIGFzeW5jQ29udmVydGVyID0geG1sMmpzV3JhcHBlck1vY2soKVxuICAgICAgbW9ja3MgPSBbIGFzeW5jQ29udmVydGVyLmNvbnZlcnQgXVxuICAgICAgYXN5bmNDb252ZXJ0ZXIuY29udmVydC5vbmNlKCkud2l0aEV4YWN0QXJncyh4bWwpXG4gICAgICAgIC5yZXR1cm5zKFByb21pc2UucmVzb2x2ZShqc29uRGF0YSkpXG4gICAgfSlcblxuICAgIGl0KCdzaG91bGQgZ2V0IGNvbnZlcnRlZCBkYXRhJywgKCkgPT5cbiAgICAgIGNvbnZlcnRYTUxUb0pTT04oeyBjb252ZXJ0ZXI6IGFzeW5jQ29udmVydGVyIH0pKHhtbCkuc2hvdWxkXG4gICAgICAgIC5ldmVudHVhbGx5LmVxdWFsKGpzb25EYXRhKSlcbiAgfSlcbn0pXG4iXX0=
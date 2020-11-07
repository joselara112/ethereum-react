webpackHotUpdate(5,{

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(1476);

var _layout2 = _interopRequireDefault(_layout);

var _routes = __webpack_require__(906);

var _semanticUiReact = __webpack_require__(532);

var _campaign = __webpack_require__(1496);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(1505);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\josel\\Documents\\SmartContracts\\kickstart\\pages\\campaigns\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRow',
        value: function renderRow() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    id: index,
                    request: request,
                    address: _this2.props.address,
                    approversCount: _this2.props.approversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body; /**destructuring Table 
                                                    para no escribir Table.Body, Table.Header etc */

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Approval'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, this.renderRow())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Found ', this.props.requestCount, ' requests'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approversCount().call();

                            case 7:
                                approversCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 10:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJUYWJsZSIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvdyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQVMsQUFBUTs7QUFDakIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7OztvQ0FnQlU7eUJBQ1I7O3dCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDL0M7dUNBQ0ksQUFBQzt5QkFBRCxBQUNTLEFBQ0w7d0JBRkosQUFFUSxBQUNKOzZCQUhKLEFBR2EsQUFDVDs2QkFBUyxPQUFBLEFBQUssTUFKbEIsQUFJd0IsQUFDcEI7b0NBQWdCLE9BQUEsQUFBSyxNQUx6QixBQUsrQjs7a0NBTC9CO29DQURKLEFBQ0ksQUFRUDtBQVJPO0FBQ0ksaUJBREo7QUFGUixBQUFPLEFBV1YsYUFYVTs7OztpQ0FhRjtnQkFBQSxBQUNHLFNBREgsQUFDcUMsdUJBRHJDLEFBQ0c7Z0JBREgsQUFDVyxNQURYLEFBQ3FDLHVCQURyQyxBQUNXO2dCQURYLEFBQ2dCLGFBRGhCLEFBQ3FDLHVCQURyQyxBQUNnQjtnQkFEaEIsQUFDNEIsT0FENUIsQUFDcUMsdUJBRHJDLEFBQzRCLE1BQWUsQUFFaEQ7OzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw2QkFBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQU8sRUFBQyxjQUF4QyxBQUF1QyxBQUFlOzhCQUF0RDtnQ0FBQTtBQUFBO2VBSlosQUFFSSxBQUNJLEFBQ0ksQUFLUixrQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsdUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLGdDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSwyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTEosQUFLSSxBQUNBLDZCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQU5KLEFBTUksQUFDQSw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFUWixBQUNJLEFBQ0ksQUFPSSxBQUdSLCtCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQXJCUixBQVNJLEFBWUksQUFDSyxBQUFLLEFBR2QsK0JBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVksZUFBQSxBQUFLLE1BQWpCLEFBQXVCLGNBMUIvQixBQUNJLEFBeUJJLEFBR1g7Ozs7O2lILEFBN0Q0Qjs7Ozs7aUNBQ2pCO0EsMENBQVksTSxBQUFNLE0sQUFBbEIsQUFDRjtBLDJDQUFXLHdCLEFBQUEsQUFBUzs7dUNBQ0MsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUIsQUFBakIsQUFBb0M7O2lDQUF6RDtBOzt1Q0FDdUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUIsQUFBakIsQUFBa0M7O2lDQUF6RDtBOzt5REFFaUIsQUFBUSxVQUNyQixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQThCLE9BQTlCLEFBQXFDLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3pEOzJDQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDM0M7QSxBQUhrQixBQUNuQixpQ0FBQSxDQURtQjs7aUNBQWpCO0E7aUVBS0MsRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixjQUFyQixjQUFtQyxnQixBQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEZixBLEFBakUyQjs7a0JBaUUzQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2pvc2VsL0RvY3VtZW50cy9TbWFydENvbnRyYWN0cy9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\josel\\Documents\\SmartContracts\\kickstart\\pages\\campaigns\\requests\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\josel\\Documents\\SmartContracts\\kickstart\\pages\\campaigns\\requests\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\requests\\index")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MzA3ZTFlZmRmNTA0Zjk0N2NhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2YyNjc0NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1JlcXVlc3RSb3cnO1xyXG5cclxuY2xhc3MgUmVxdWVzdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTsvKipmYW5jeSBKUyBwYXJhIG5vIGxsYW1hciB1bm8gcG9yIHVubyBhIG1ldGhvZHMucmVxdWVzdChpbmRleCkgKi9cclxuICAgICAgICByZXR1cm4geyBhZGRyZXNzLCByZXF1ZXN0cywgcmVxdWVzdENvdW50LCBhcHByb3ZlcnNDb3VudCB9Oy8qKlxyXG4gICAgICAgIHJlcXVlc3QgZXMgdW4gb2JqZXRvIGNvbiB2YXJpb3Mga2V5cyBkZXNjcmlwdGlvbiwgdmFsdWUsIHJlY2lwaWVudCwgY29tcGxldGUsIGFwcHJvdmFsQ291bnQsIGFwcHJvdmFscyAqL1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclJvdygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UmVxdWVzdFJvdyBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0PXtyZXF1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudD17dGhpcy5wcm9wcy5hcHByb3ZlcnNDb3VudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGU7LyoqZGVzdHJ1Y3R1cmluZyBUYWJsZSBcclxuICAgICAgICBwYXJhIG5vIGVzY3JpYmlyIFRhYmxlLkJvZHksIFRhYmxlLkhlYWRlciBldGMgKi9cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGgzPlJlcXVlc3RzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbG9hdGVkPVwicmlnaHRcIiBzdHlsZT17e21hcmdpbkJvdHRvbTogMTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBSZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+Rm91bmQge3RoaXMucHJvcHMucmVxdWVzdENvdW50fSByZXF1ZXN0czwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0SW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUxBO0FBUUE7QUFSQTtBQUNBO0FBUUE7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUF6REE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFFQTtBQUVBO0FBREE7QUFDQTtBQUZBOztBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
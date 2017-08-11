'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marker = require('../marker/marker.jsx');

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerLayer = function (_React$Component) {
  _inherits(MarkerLayer, _React$Component);

  function MarkerLayer(props) {
    _classCallCheck(this, MarkerLayer);

    var _this = _possibleConstructorReturn(this, (MarkerLayer.__proto__ || Object.getPrototypeOf(MarkerLayer)).call(this, props));

    _this.onClick = function (event) {
      _this.props.onClick && _this.props.onClick(event);
    };

    _this.onMouseOut = function (event) {
      _this.props.onMouseOut && _this.props.onMouseOut(event);
    };

    _this.onMouseOver = function (event) {
      _this.props.onMouseOver && _this.props.onMouseOver(event);
    };

    return _this;
  }

  _createClass(MarkerLayer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dataSource = _props.dataSource,
          zIndex = _props.zIndex,
          cursor = _props.cursor;

      if (!dataSource || dataSource.length === 0) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'datamap-markder-layer' },
        dataSource.map(function (marker) {
          return _react2.default.createElement(
            _marker2.default,
            { position: marker.position,
              cursor: cursor,
              title: marker.title,
              event: {
                click: _this2.onClick,
                mouserout: _this2.onMouseOut,
                onMouseOver: _this2.onMouseOver
              } },
            marker.content
          );
        })
      );
    }
  }]);

  return MarkerLayer;
}(_react2.default.Component);

MarkerLayer.PropTypes = {
  dataSource: _react.PropTypes.array.isRequired,
  zIndex: _react.PropTypes.number,
  cursor: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  onMouseOut: _react.PropTypes.func,
  onMouseOver: _react.PropTypes.func
};
MarkerLayer.defaultProps = {
  dataSource: []
};
exports.default = MarkerLayer;
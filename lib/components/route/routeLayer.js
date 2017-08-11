'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteLayer = function (_React$Component) {
  _inherits(RouteLayer, _React$Component);

  function RouteLayer(props) {
    _classCallCheck(this, RouteLayer);

    var _this = _possibleConstructorReturn(this, (RouteLayer.__proto__ || Object.getPrototypeOf(RouteLayer)).call(this, props));

    _this.handleAllDiffs = function (diffs) {
      Object.keys(diffs).forEach(function (key) {
        if (key === 'events') {
          // 注销所有的事件，然后在重新绑定
          // this.unRegisterEvent();
          // this.registerEvent();
          return;
        }
      });
    };

    _this.events = {};
    return _this;
  }

  _createClass(RouteLayer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextOption = omit(nextProps, ['key']);
      var preOption = omit(this.props, ['key']);
      var diffs = diff(preOption, nextOption);
      this.handleAllDiffs(diffs);
    }
  }, {
    key: 'componentDidMount',


    // 如何处理事件？？？

    value: function componentDidMount() {
      var _props = this.props,
          strokeColor = _props.strokeColor,
          lineWidth = _props.lineWidth,
          strokeStyle = _props.strokeStyle,
          paths = _props.paths;

      var canvas = this.refs['routeLayer'];
      var context = canvas.getContext("2d");

      paths.forEach(function (path) {
        context.strokeStyle = path.strokeColor;
        context.lineWidth = path.lineWidth;
        if (path.strokeStyle === 'dash') {
          context.setLineDash([5, 3]); /*dashes are 5px and spaces are 3px*/
        } else {
          context.setLineDash([]);
        }
        var start = true;
        context.beginPath();
        context.lineJoin = "round";
        var pathDots = path.path;
        for (var i = 0; i < pathDots.length; i++) {
          if (start) {
            start = false;
            context.moveTo.apply(context, _toConsumableArray(pathDots[i]));
          } else {
            context.lineTo.apply(context, _toConsumableArray(pathDots[i]));
          }
        }
        context.stroke();
      });
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      this.events = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          width = _props2.width,
          height = _props2.height,
          zIndex = _props2.zIndex,
          visible = _props2.visible;

      var style = {
        position: 'absolute',
        zIndex: zIndex,
        visibility: visible ? 'visible' : 'hidden'
      };
      return _react2.default.createElement('canvas', { ref: 'routeLayer', width: width, height: height, style: style });
    }
  }]);

  return RouteLayer;
}(_react2.default.Component);

RouteLayer.PropTypes = {
  width: _react.PropTypes.string,
  height: _react.PropTypes.string,
  paths: _react.PropTypes.array,
  zIndex: _react.PropTypes.number,
  visible: _react.PropTypes.bool
};
RouteLayer.defaultProps = {
  width: '600px',
  height: '600px',
  paths: [],
  zIndex: 50,
  visible: true
};
exports.default = RouteLayer;
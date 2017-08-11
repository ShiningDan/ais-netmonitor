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

var RouteLayerHaloBreath = function (_React$Component) {
  _inherits(RouteLayerHaloBreath, _React$Component);

  function RouteLayerHaloBreath(props) {
    _classCallCheck(this, RouteLayerHaloBreath);

    var _this = _possibleConstructorReturn(this, (RouteLayerHaloBreath.__proto__ || Object.getPrototypeOf(RouteLayerHaloBreath)).call(this, props));

    _this.getLineWidth = function (bandwidth) {
      if (bandwidth <= 0) {
        return 0;
      } else if (bandwidth > 0 && bandwidth < 1) {
        return 1;
      } else if (bandwidth >= 1 && bandwidth < 1000) {
        return 3;
      } else if (bandwidth >= 1000 && bandwidth < 100000) {
        return 5;
      } else {
        return 7;
      }
    };

    _this.getStatusColor = function (status) {
      var color = _this.statusColor[status];
      if (!color) {
        color = _this.statusColor['good'];
      }
      return color;
    };

    _this.getStatusStyle = function (status) {
      var style = _this.statusStyle[status];
      if (!style) {
        style = _this.statusStyle['good'];
      }
      return style;
    };

    _this.getshadowColor = function (status) {
      var style = _this.shadowColor[status];
      if (!style) {
        style = _this.shadowColor['good'];
      }
      return style;
    };

    _this.animate = function () {
      var context = _this.context;
      var paths = _this.state.paths;
      // context.fillStyle = "rgba(0, 0, 0,0.03)";

      context.shadowBlur = 0;
      context.clearRect(0, 0, 2800, 2100);
      paths.forEach(function (path) {
        // 目前的策略是，只有 lineWidth 为 5 的数据流才有动画的效果
        if (path.lineWidth >= 5) {
          context.strokeStyle = path.strokeColor;
          context.lineWidth = path.lineWidth;
          context.shadowColor = path.shadowColor;
          context.shadowBlur = _this.shadowBlurWide / 40;
          context.beginPath();
          context.lineJoin = "round";
          var pathDots = path.path;

          var start = true;
          for (var i = 0; i < pathDots.length; i++) {
            if (start) {
              start = false;
              context.moveTo.apply(context, _toConsumableArray(pathDots[i]));
            } else {
              context.lineTo.apply(context, _toConsumableArray(pathDots[i]));
            }
          }
          context.stroke();

          if (!_this.shadowDirection) {
            _this.shadowBlurWide += 2;
            if (_this.shadowBlurWide === 1000) {
              _this.shadowDirection = true;
            }
          } else {
            _this.shadowBlurWide--;
            if (_this.shadowBlurWide === 0) {
              _this.shadowDirection = false;
            }
          }
        }
      });
      requestAnimationFrame(_this.animate);
    };

    _this.state = {
      paths: []
    };
    _this.statusColor = {
      good: '#66B737',
      warnning: '#EDC543',
      error: '#F05729',
      destroy: '#F05729'
    };
    _this.statusStyle = {
      good: 'solid',
      warnning: 'solid',
      error: 'solid',
      destroy: 'dash'
    };
    _this.shadowColor = {
      good: '#FFFFFF',
      warnning: '#FFFFFF',
      error: '#FFFFFF',
      destroy: '#FFFFFF'
    };
    _this.context = null;
    _this.shadowBlurWide = 0;
    _this.shadowDirection = false;
    return _this;
  }

  _createClass(RouteLayerHaloBreath, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var canvas = this.refs['routeLayer'];
      var _props = this.props,
          width = _props.width,
          height = _props.height;

      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      this.context = canvas.getContext('2d');

      if (this.context) {
        var links = this.props.links;

        var paths = links.map(function (link) {
          return {
            path: link.path,
            strokeColor: _this2.getStatusColor(link.status),
            strokeStyle: _this2.getStatusStyle(link.status),
            lineWidth: _this2.getLineWidth(link.bandwidth),
            shadowColor: _this2.getshadowColor(link.status)
          };
        });
        this.setState({
          paths: paths
        }, this.animate);
      }
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

  return RouteLayerHaloBreath;
}(_react2.default.Component);

RouteLayerHaloBreath.PropTypes = {
  width: _react.PropTypes.string,
  height: _react.PropTypes.string,
  links: _react.PropTypes.array,
  zIndex: _react.PropTypes.number,
  visible: _react.PropTypes.bool
};
RouteLayerHaloBreath.defaultProps = {
  width: '600px',
  height: '600px',
  links: [],
  zIndex: 50,
  visible: true
};
exports.default = RouteLayerHaloBreath;
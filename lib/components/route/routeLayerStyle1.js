'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routeLayer = require('./routeLayer.jsx');

var _routeLayer2 = _interopRequireDefault(_routeLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteLayerStyle1 = function (_React$Component) {
  _inherits(RouteLayerStyle1, _React$Component);

  function RouteLayerStyle1(props) {
    _classCallCheck(this, RouteLayerStyle1);

    var _this = _possibleConstructorReturn(this, (RouteLayerStyle1.__proto__ || Object.getPrototypeOf(RouteLayerStyle1)).call(this, props));

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
    return _this;
  }

  _createClass(RouteLayerStyle1, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var links = this.props.links;

      var paths = links.map(function (link) {
        return {
          path: link.path,
          strokeColor: _this2.getStatusColor(link.status),
          strokeStyle: _this2.getStatusStyle(link.status),
          lineWidth: _this2.getLineWidth(link.bandwidth)
        };
      });

      return _react2.default.createElement(_routeLayer2.default, _extends({}, this.props, { paths: paths }));
    }
  }]);

  return RouteLayerStyle1;
}(_react2.default.Component);

RouteLayerStyle1.PropTypes = {
  width: _react.PropTypes.string,
  height: _react.PropTypes.string,
  links: _react.PropTypes.array,
  zIndex: _react.PropTypes.number,
  visible: _react.PropTypes.bool
};
RouteLayerStyle1.defaultProps = {
  links: []
};
exports.default = RouteLayerStyle1;
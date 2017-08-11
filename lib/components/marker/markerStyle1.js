'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marker = require('./marker.jsx');

var _marker2 = _interopRequireDefault(_marker);

require('./markerStyle1.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerStyle1 = function (_React$Component) {
  _inherits(MarkerStyle1, _React$Component);

  function MarkerStyle1(props) {
    _classCallCheck(this, MarkerStyle1);

    return _possibleConstructorReturn(this, (MarkerStyle1.__proto__ || Object.getPrototypeOf(MarkerStyle1)).call(this, props));
  }

  _createClass(MarkerStyle1, [{
    key: 'render',
    value: function render() {
      var onClick = function onClick(event) {
        event.stopPropagation();
        console.log(event.currentTarget);
      };

      var _props = this.props,
          status = _props.status,
          width = _props.width,
          height = _props.height;

      var style = {
        position: 'absolute',
        top: height ? 'calc(-' + height + ' * 0.5)' : '-8px',
        left: width ? 'calc(-' + width + ' * 0.5)' : '-8px',
        width: width ? 'calc(' + width + ' * 0.9)' : '15px',
        height: height ? 'calc(' + height + ' * 0.9)' : '15px',
        borderWidth: width ? 'calc(' + width + ' * 0.1)' : '1px'
      };
      var innerStyle = {
        width: width ? 'calc(' + width + ' * 0.6)' : '9px',
        height: height ? 'calc(' + height + ' * 0.6)' : '9px',
        margin: width ? 'calc(' + width + ' * 0.15)' : '3px'
      };

      return _react2.default.createElement(
        _marker2.default,
        _extends({}, this.props, {
          events: {
            click: onClick
          } }),
        _react2.default.createElement(
          'div',
          { className: 'marker-style1 ' + status, style: style },
          _react2.default.createElement('div', { style: innerStyle })
        )
      );
    }
  }]);

  return MarkerStyle1;
}(_react2.default.Component);

MarkerStyle1.PropTypes = {
  status: _react.PropTypes.oneOf(['good', 'warnning', 'error']),
  width: _react.PropTypes.string,
  height: _react.PropTypes.string,
  position: _react.PropTypes.array,
  visible: _react.PropTypes.bool,
  events: _react.PropTypes.object,
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
  subTitle: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
  titleRelativePosition: _react.PropTypes.array,
  titleFontStyle: _react.PropTypes.string,
  subTitleFontStyle: _react.PropTypes.string,
  titleColor: _react.PropTypes.string,
  subTitleColor: _react.PropTypes.string,
  cursor: _react.PropTypes.string,
  zIndex: _react.PropTypes.number
};
MarkerStyle1.defaultProps = {
  visible: true,
  status: 'good',
  width: '16px',
  height: '16px',
  titleFontStyle: '22px',
  subTitleFontStyle: '22px',
  titleColor: '#FAFAFA',
  subTitleColor: '#FAFAFA'
};
exports.default = MarkerStyle1;
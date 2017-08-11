'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./tipbox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tipbox = function (_React$Component) {
  _inherits(Tipbox, _React$Component);

  function Tipbox(props) {
    _classCallCheck(this, Tipbox);

    return _possibleConstructorReturn(this, (Tipbox.__proto__ || Object.getPrototypeOf(Tipbox)).call(this, props));
  }

  _createClass(Tipbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          title = _props.title,
          position = _props.position,
          visible = _props.visible;

      var _position = _slicedToArray(position, 2),
          left = _position[0],
          top = _position[1];

      var containerStyle = {
        position: 'absolute',
        top: top,
        left: left,
        width: width,
        height: height,
        visibility: visible ? 'visible' : 'hidden'
      };

      return _react2.default.createElement(
        'div',
        { style: containerStyle, className: 'tipbox-container' },
        _react2.default.createElement(
          TipboxBorder,
          { width: width, height: height, title: title },
          this.props.children
        )
      );
    }
  }]);

  return Tipbox;
}(_react2.default.Component);

Tipbox.PropTypes = {
  width: _react.PropTypes.string,
  height: _react.PropTypes.string,
  position: _react.PropTypes.array,
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
  visible: _react.PropTypes.bool
};
Tipbox.defaultProps = {
  width: '400px',
  height: '200px',
  position: [0, 0],
  title: "",
  visible: true
};
exports.default = Tipbox;


var TipboxBorder = function TipboxBorder(_ref) {
  var width = _ref.width,
      height = _ref.height,
      title = _ref.title,
      children = _ref.children;


  var rightBottomStyle = {
    width: '180px',
    height: 'calc(' + height + ' - 30px)',
    top: '30px',
    left: 'calc(' + width + ' - 177px)'
  };

  var leftBottomStyle = {
    width: 'calc(' + width + ' - 180px)',
    height: 'calc(' + height + ' - 30px)',
    top: '33px',
    left: 0
  };

  var leftTopStyle = {
    width: 'calc(' + width + ' - 180px)',
    height: '30px',
    top: 0,
    left: 0
  };

  var holderStyle = {
    top: '100px'
  };

  return _react2.default.createElement(
    'div',
    { className: 'tipbox-border-container' },
    _react2.default.createElement('div', { className: 'left-top-div', style: leftTopStyle }),
    _react2.default.createElement('div', { className: 'left-bottom-div', style: leftBottomStyle }),
    _react2.default.createElement('div', { className: 'right-bottom-div', style: rightBottomStyle }),
    _react2.default.createElement(
      'div',
      { className: 'tipbox-title' },
      title
    ),
    _react2.default.createElement(
      'div',
      { className: 'tipbox-holder', style: holderStyle },
      children
    )
  );
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./bgImage.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BgImage = function (_React$PureComponent) {
  _inherits(BgImage, _React$PureComponent);

  function BgImage(props) {
    _classCallCheck(this, BgImage);

    return _possibleConstructorReturn(this, (BgImage.__proto__ || Object.getPrototypeOf(BgImage)).call(this, props));
  }

  _createClass(BgImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          position = _props.position,
          visible = _props.visible,
          imageUrl = _props.imageUrl,
          zIndex = _props.zIndex;

      var _position = _slicedToArray(position, 2),
          left = _position[0],
          top = _position[1];

      var containerStyle = {
        width: width,
        height: height,
        top: top,
        left: left,
        visibility: visible ? 'visible' : 'hidden',
        backgroundImage: 'url(' + imageUrl + ')',
        zIndex: zIndex
      };

      return _react2.default.createElement(
        'div',
        { className: 'bg-image-container', style: containerStyle },
        this.props.children
      );
    }
  }]);

  return BgImage;
}(_react2.default.PureComponent);

BgImage.PropTypes = {
  width: _react.PropTypes.string,
  height: _react.PropTypes.string,
  position: _react.PropTypes.array,
  visible: _react.PropTypes.bool,
  imageUrl: _react.PropTypes.string,
  zIndex: _react.PropTypes.string
};
BgImage.defaultProps = {
  width: '100px',
  height: '100px',
  position: [0, 0],
  visible: true,
  zIndex: '1'
};
exports.default = BgImage;
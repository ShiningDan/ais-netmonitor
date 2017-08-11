'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _omit = require('../../utils/omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _isObject = require('../../utils/isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _objectDiff = require('object-diff');

var _objectDiff2 = _interopRequireDefault(_objectDiff);

require('./marker.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Marker = function (_React$Component) {
  _inherits(Marker, _React$Component);

  function Marker(props) {
    _classCallCheck(this, Marker);

    var _this = _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).call(this, props));

    _this.handleAllDiffs = function (diffs) {
      Object.keys(diffs).forEach(function (key) {
        if (key === 'events') {
          // 注销所有的事件，然后在重新绑定
          _this.unRegisterEvent();
          _this.registerEvent();
          return;
        }
      });
    };

    _this.registerEvent = function () {
      var events = _this.props.events;
      //isObject 逻辑？？？

      if (events && (0, _isObject2.default)(events)) {
        Object.keys(events).forEach(function (eventName) {
          var func = events[eventName];
          if (!func || typeof func !== 'function') {
            return;
          }
          if (!_this.events[eventName]) {
            _this.events[eventName] = [];
          }
          _this.events[eventName].push(func);
          _this.events[eventName].forEach(function (handler) {
            _this.refs['markderWarper'].addEventListener(eventName, handler);
          });
        });
      }
    };

    _this.unRegisterEvent = function () {
      Object.keys(_this.events).forEach(function (eventName) {
        _this.events[eventName].forEach(function (handler) {
          _this.refs['markderWarper'].removeEventListener(eventName, handler);
        });
      });
    };

    _this.events = {};
    return _this;
  }

  _createClass(Marker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextOption = (0, _omit2.default)(nextProps, ['key']);
      var preOption = (0, _omit2.default)(this.props, ['key']);
      var diffs = (0, _objectDiff2.default)(preOption, nextOption);
      this.handleAllDiffs(diffs);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.registerEvent();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unRegisterEvent();
      this.events = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          position = _props.position,
          visible = _props.visible,
          title = _props.title,
          cursor = _props.cursor,
          zIndex = _props.zIndex,
          subTitle = _props.subTitle,
          titleRelativePosition = _props.titleRelativePosition,
          titleFontStyle = _props.titleFontStyle,
          subTitleFontStyle = _props.subTitleFontStyle,
          titleColor = _props.titleColor,
          subTitleColor = _props.subTitleColor;

      var _position = _slicedToArray(position, 2),
          left = _position[0],
          top = _position[1];

      var _titleRelativePositio = _slicedToArray(titleRelativePosition, 2),
          titleLeft = _titleRelativePositio[0],
          titleTop = _titleRelativePositio[1];

      var style = {
        width: '1px',
        height: '1px',
        position: 'absolute',
        top: top,
        left: left,
        visibility: visible ? 'visible' : 'hidden',
        cursor: cursor,
        zIndex: zIndex
      };

      var titleContainerStyle = {
        position: 'absolute',
        whiteSpace: 'nowrap',
        left: titleLeft,
        top: titleTop
      };

      var titleStyle = {
        font: titleFontStyle,
        color: titleColor
      };

      var subTitleStyle = {
        font: subTitleFontStyle,
        color: subTitleColor
      };

      return _react2.default.createElement(
        'div',
        { ref: 'markderWarper', style: style },
        _react2.default.createElement(
          'div',
          { className: 'marker-title-container', style: titleContainerStyle },
          _react2.default.createElement(
            'div',
            { style: titleStyle },
            title
          ),
          _react2.default.createElement(
            'div',
            { style: subTitleStyle },
            subTitle
          )
        ),
        this.props.children ? this.props.children : _react2.default.createElement('div', { className: 'marker-default-style' })
      );
    }
  }]);

  return Marker;
}(_react2.default.Component);

Marker.PropTypes = {
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
Marker.defaultProps = {
  position: [0, 0],
  titleRelativePosition: [0, 0],
  visible: true,
  zIndex: 100
};
exports.default = Marker;
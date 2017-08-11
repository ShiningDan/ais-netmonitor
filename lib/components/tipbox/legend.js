'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markerStyle = require('../marker/markerStyle1.jsx');

var _markerStyle2 = _interopRequireDefault(_markerStyle);

require('./legend.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Legend = function (_React$PureComponent) {
  _inherits(Legend, _React$PureComponent);

  function Legend(props) {
    _classCallCheck(this, Legend);

    return _possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).call(this, props));
  }

  _createClass(Legend, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'legend-container' },
        _react2.default.createElement(
          'div',
          { className: 'legend-column' },
          _react2.default.createElement(
            'div',
            { className: 'legend-subtitle' },
            '\u5229\u7528\u7387\uFF08%\uFF09'
          ),
          _react2.default.createElement(
            'div',
            { className: 'legend-item' },
            _react2.default.createElement(
              'div',
              { className: 'legend-desc' },
              '0 ~ 40'
            ),
            _react2.default.createElement('div', { className: 'legend-fig legend-good' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'legend-item' },
            _react2.default.createElement(
              'div',
              { className: 'legend-desc' },
              '40 ~ 70'
            ),
            _react2.default.createElement('div', { className: 'legend-fig legend-warnning' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'legend-item' },
            _react2.default.createElement(
              'div',
              { className: 'legend-desc' },
              '70 ~ 100'
            ),
            _react2.default.createElement('div', { className: 'legend-fig legend-error' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'legend-item' },
            _react2.default.createElement(
              'div',
              { className: 'legend-desc' },
              '\u4E0D\u53EF\u7528'
            ),
            _react2.default.createElement('div', { className: 'legend-fig legend-destroy' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'legend-column' },
          _react2.default.createElement(
            'div',
            { className: 'legend-subtitle' },
            '\u6D41\u91CF'
          ),
          _react2.default.createElement(
            'div',
            { className: 'legend-item' },
            _react2.default.createElement(
              'div',
              { className: 'legend-desc' },
              '0 ~ 1M'
            ),
            _react2.default.createElement('div', { className: 'legend-fig legend-small' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'legend-item' },
            _react2.default.createElement(
              'div',
              { className: 'legend-desc' },
              '1M ~ 1G'
            ),
            _react2.default.createElement('div', { className: 'legend-fig legend-medium' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'legend-item' },
            _react2.default.createElement(
              'div',
              { className: 'legend-desc' },
              '1G ~ 100G'
            ),
            _react2.default.createElement('div', { className: 'legend-fig legend-large' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'legend-item' },
            _react2.default.createElement(
              'div',
              { className: 'legend-desc' },
              '100G+'
            ),
            _react2.default.createElement('div', { className: 'legend-fig legend-very-large' })
          )
        ),
        _react2.default.createElement('div', { className: 'legend-divide' }),
        _react2.default.createElement(
          'div',
          { className: 'legend-marker' },
          _react2.default.createElement(_markerStyle2.default, { status: 'good', width: '48px', height: '48px', position: [24, 24] }),
          _react2.default.createElement(
            'div',
            { className: 'legend-icon-desc' },
            '\u7F51\u7EDC\u6B63\u5E38'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'legend-marker' },
          _react2.default.createElement(_markerStyle2.default, { status: 'error', width: '48px', height: '48px', position: [24, 24] }),
          _react2.default.createElement(
            'div',
            { className: 'legend-icon-desc' },
            '\u7F51\u7EDC\u6545\u969C'
          )
        )
      );
    }
  }]);

  return Legend;
}(_react2.default.PureComponent);

exports.default = Legend;
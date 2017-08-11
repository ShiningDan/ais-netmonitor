'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _world = require('../../../resources/maps/world');

var _world2 = _interopRequireDefault(_world);

var _worldCountries = require('../../../resources/maps/world-countries');

var _worldCountries2 = _interopRequireDefault(_worldCountries);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BgMap = function (_React$Component) {
  _inherits(BgMap, _React$Component);

  function BgMap(props) {
    _classCallCheck(this, BgMap);

    return _possibleConstructorReturn(this, (BgMap.__proto__ || Object.getPrototypeOf(BgMap)).call(this, props));
  }

  _createClass(BgMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var svg = d3.select('#mapContainer').append('svg');
      var width = window.innerWidth;
      var height = window.innerHeight;

      var features = _worldCountries2.default.features.filter(function (d) {
        return d.properties.name != 'Antarctica';
      });

      var projection = d3.geoEquirectangular();
      var oldScala = projection.scale();
      var oldTranslate = projection.translate();
      // 设置新的投影後的地圖大小
      var newScala = oldScala * (width / (2 * oldTranslate[0])) * 0.9;
      // 设置新的投影後的中心位置
      var newTranslate = [width / 2, height / 2];
      var xy = projection.scale(newScala).translate(newTranslate);

      var path = d3.geoPath(xy);
      svg.attr('width', width).attr('height', height);

      svg.selectAll('path').data(features).enter().append('svg:path').attr('d', path).attr("fill", "#274F5F").attr('d', path).attr("stroke", "#274F5F");
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'mapContainer' },
        this.props.children
      );
    }
  }]);

  return BgMap;
}(_react2.default.Component);

exports.default = BgMap;
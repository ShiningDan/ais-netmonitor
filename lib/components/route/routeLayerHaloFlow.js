'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getLength = require('../../utils/getLength.js');

var _getLength2 = _interopRequireDefault(_getLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteLayerHalo = function (_React$Component) {
  _inherits(RouteLayerHalo, _React$Component);

  function RouteLayerHalo(props) {
    _classCallCheck(this, RouteLayerHalo);

    var _this = _possibleConstructorReturn(this, (RouteLayerHalo.__proto__ || Object.getPrototypeOf(RouteLayerHalo)).call(this, props));

    _this.getshadowColor = function (status) {
      var style = _this.shadowColor[status];
      if (!style) {
        style = _this.shadowColor['good'];
      }
      return style;
    };

    _this.handleAllDiffs = function (diffs) {
      Object.keys(diffs).forEach(function (key) {
        if (key === 'events') {
          // 注销所有的事件，然后在重新绑定
          // this.unRegisterEvent();
          // this.registerEvent();
          return;
        } else if (key === 'links') {
          var links = diffs['links'];
          var flows = _this.state.flows;
          flows = _this.updateFlowsFromLinks(links, flows);
          _this.setState({
            flows: flows,
            links: links
          });
        }
      });
    };

    _this.updateFlowsFromLinks = function (links, flows) {
      // 目前的策略是，只有 lineWidth 为 5 的数据流才有动画的效果
      // 首先判断当前 flows 中有哪些已经消失
      Object.keys(flows).forEach(function (flow) {
        var isExist = false;
        for (var i = links.length - 1; i >= 0; i--) {
          var link = links[i];
          if (link.from + "," + link.to === flow || link.to + "," + link.from === flow) {
            isExist = true;
            break;
          }
        }
        if (!isExist) {
          // 该 flow 已经不在 paths 中，需要删除该 flow
          flows.delete(flow);
        }
      });
      // 其次，再判断哪些路径需要被新添加到 flows 中
      links.forEach(function (link) {
        if (_this.getLineWidth(link.bandwidth) >= 5) {
          var exist = flows[link.from + "," + link.to] || flows[link.to + "," + link.from];
          if (!exist && link.path.length > 1) {
            // 添加 link 到 flows 中
            var flowName = link.from + "," + link.to;
            var shadowColor = _this.getshadowColor(link.status);
            var sections = [];
            for (var i = 0; i < link.path.length - 1; i++) {
              var dots = [];
              dots.push(new Dot(link.path[i][0], link.path[i][1], shadowColor, 25, link.path[i + 1], dots, _this.context));
              sections.push({
                from: link.path[i],
                to: link.path[i + 1],
                dots: dots
              });
            }
            flows[flowName] = {
              sections: sections,
              shadowColor: shadowColor
            };
          }
        }
      });
      return flows;
    };

    _this.animate = function () {
      _this.step++;
      var flows = _this.state.flows;
      var _this$props = _this.props,
          width = _this$props.width,
          height = _this$props.height;

      _this.context.globalCompositeOperation = "source-over";
      _this.context.fillStyle = "rgba(0, 0, 0, 0.03)";
      _this.context.shadowBlur = 0;
      _this.context.fillRect(0, 0, width, height);
      // this.context.clearRect(0, 0, width, height);
      // this.context.globalCompositeOperation = "lighter";

      // this.context.shadowColor = "rgba(43, 205, 255, 1)";
      // this.context.shadowBlur = 25;


      // 然后控制所有的 Dot 运动
      Object.keys(flows).forEach(function (flow) {
        flows[flow]['sections'].forEach(function (section) {
          section['dots'].forEach(function (dot) {
            dot.walk();
          });
        });
      });
      if (_this.step === 100) {
        _this.step = 0;
        _this.isBlur = !_this.isBlur;
        // 添加新的 Dot
        Object.keys(flows).forEach(function (flow) {
          flows[flow]['sections'].forEach(function (section) {
            var dots = section['dots'];
            //link.path[i][0], link.path[i][1], 25, link.path[i + 1], dots, this.context
            section['dots'].push(new Dot(section['from'][0], section['from'][1], flows[flow]['shadowColor'], _this.isBlur ? 25 : 25, section['to'], dots, _this.context));
          });
        });
      }

      requestAnimationFrame(_this.animate);
    };

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

    _this.state = {
      links: [],
      flows: {}
      /**
       * flows 中的数据结构为：
       *  {
       *    "上海,新加坡" : {
       *       sections: [{
       *                      from: [100, 200],
       *                      to: [300, 400],
       *                      dots: [Dot, Dot]
       *                   }],
       *        shadowColor: 'rgba(43, 205, 255, 1)'
       *     }
       *  }
       */
    };_this.events = {};

    _this.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

    _this.context = null;
    _this.step = 0;
    _this.isBlur = false;
    _this.shadowColor = {
      good: '#66B737',
      warnning: '#EDC543',
      error: '#F05729',
      destroy: '#F05729'
    };
    return _this;
  }

  _createClass(RouteLayerHalo, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextOption = omit(nextProps, ['key']);
      var preOption = omit(this.props, ['key']);
      var diffs = diff(preOption, nextOption);
      this.handleAllDiffs(diffs);
    }

    // 通过 links 的更新来更新 flows


    // 如何处理事件？？？

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var canvas = this.refs['routeLayer'];
      var _props = this.props,
          width = _props.width,
          height = _props.height;

      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      this.context = canvas.getContext('2d');
      if (this.context) {
        Dot.prototype.context = this.context;
        var flows = this.state.flows;
        flows = this.updateFlowsFromLinks(this.props.links, flows);
        this.setState({
          links: this.props.links
        });
        this.animate();
      }
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

  return RouteLayerHalo;
}(_react2.default.Component);

RouteLayerHalo.PropTypes = {
  width: _react.PropTypes.string,
  height: _react.PropTypes.string,
  links: _react.PropTypes.array,
  zIndex: _react.PropTypes.number,
  visible: _react.PropTypes.bool
};
RouteLayerHalo.defaultProps = {
  width: '600px',
  height: '600px',
  links: [],
  zIndex: 50,
  visible: true
};
exports.default = RouteLayerHalo;

var Dot = function Dot(x, y, shadowColor, shadowBlur, destination, dots, context) {
  _classCallCheck(this, Dot);

  this.x = x;
  this.y = y;
  this.shadowBlur = shadowBlur;
  this.speed = 1;
  this.r = 4;
  // this.color = 'rgba(43, 205, 255, 1)';
  this.color = shadowColor;
  this.destination = destination;
  this.dots = dots;
  // this.context = context;
  var length = (0, _getLength2.default)(x, y, destination[0], destination[1]);
  this.direction = [(destination[0] - x) / length, (destination[1] - y) / length];
};

Dot.prototype.walk = function () {
  var destinationLength = (0, _getLength2.default)(this.x, this.y, this.destination[0], this.destination[1]);
  if (destinationLength <= this.speed) {
    this.die();
  } else {
    this.x += this.speed * this.direction[0];
    this.y += this.speed * this.direction[1];
    this.draw();
  }
};

Dot.prototype.draw = function () {
  var context = this.context;
  context.beginPath();
  context.fillStyle = this.color;
  context.shadowColor = this.color;
  context.shadowBlur = this.shadowBlur;
  context.fillRect(this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
  context.fill();
  context.closePath();
};

Dot.prototype.die = function () {
  var dots = this.dots;
  dots = dots.splice(dots.indexOf(this), 1);
};
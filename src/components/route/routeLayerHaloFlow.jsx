import React, {PropTypes} from 'react';
import getLength from '../../utils/getLength.js';

export default class RouteLayerHalo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [],
      flows: {},
    }
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
    this.events = {};

    this.requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame || 
    function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };

    this.context = null;
    this.step = 0;
    this.isBlur = false;
    this.shadowColor = {
      good: '#66B737',
      warnning: '#EDC543',
      error: '#F05729',
      destroy: '#F05729',
    }
  }

  static PropTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    links: PropTypes.array,
    zIndex: PropTypes.number,
    visible: PropTypes.bool
  }

  static defaultProps = {
    width: '600px',
    height: '600px',
    links: [],
    zIndex: 50,
    visible: true,
  }

  getshadowColor = (status) => {
    let style = this.shadowColor[status];
    if (!style) {
      style = this.shadowColor['good'];
    }
    return style;
  }

  componentWillReceiveProps(nextProps) {
    const nextOption = omit(nextProps, ['key']);
    const preOption = omit(this.props, ['key']);
    const diffs = diff(preOption, nextOption);
    this.handleAllDiffs(diffs);
  }

  handleAllDiffs = (diffs) => {
    Object.keys(diffs).forEach( key => {
      if ( key === 'events') {
        // 注销所有的事件，然后在重新绑定
        // this.unRegisterEvent();
        // this.registerEvent();
        return ;
      } else if(key === 'links') {
        let links = diffs['links'];
        let flows = this.state.flows;
        flows = this.updateFlowsFromLinks(links, flows);
        this.setState({
          flows: flows,
          links: links,
        })
      }
    })
  }

  // 通过 links 的更新来更新 flows
  updateFlowsFromLinks = (links, flows) => {
    // 目前的策略是，只有 lineWidth 为 5 的数据流才有动画的效果
    // 首先判断当前 flows 中有哪些已经消失
    Object.keys(flows).forEach( flow => {
      let isExist = false;
      for (let i = links.length - 1; i >= 0; i--) {
        let link = links[i];
        if ((link.from + "," + link.to) === flow || (link.to + "," + link.from) === flow) {
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        // 该 flow 已经不在 paths 中，需要删除该 flow
        flows.delete(flow);
      }
    })
    // 其次，再判断哪些路径需要被新添加到 flows 中
    links.forEach( link => {
      if (this.getLineWidth(link.bandwidth) >= 5) {
        let exist = flows[link.from + "," + link.to] || flows[link.to + "," + link.from];
        if (!exist && link.path.length > 1) {
          // 添加 link 到 flows 中
          let flowName = link.from + "," + link.to;
          let shadowColor = this.getshadowColor(link.status);
          let sections = [];
          for (let i = 0; i < link.path.length - 1; i++) {
            let dots = [];
            dots.push(new Dot(link.path[i][0], link.path[i][1], shadowColor, 25, link.path[i + 1], dots, this.context))
            sections.push({
              from: link.path[i],
              to: link.path[i + 1],
              dots: dots,
            })
          }
          flows[flowName] = {
            sections: sections,
            shadowColor: shadowColor
          }
        }
      }
    })
    return flows;
  }

  // 如何处理事件？？？

  animate = () => {
    this.step++;
    let {flows} = this.state;
    const {width, height} = this.props;
    this.context.globalCompositeOperation = "source-over";
    this.context.fillStyle = "rgba(0, 0, 0, 0.03)";
    this.context.shadowBlur = 0;
    this.context.fillRect(0, 0, width, height);
    // this.context.clearRect(0, 0, width, height);
    // this.context.globalCompositeOperation = "lighter";

    // this.context.shadowColor = "rgba(43, 205, 255, 1)";
    // this.context.shadowBlur = 25;


    // 然后控制所有的 Dot 运动
    Object.keys(flows).forEach( flow => {
      flows[flow]['sections'].forEach( section => {
        section['dots'].forEach( dot => {
          dot.walk();
        })
      })
    })
    if (this.step === 100) {
      this.step = 0;
      this.isBlur = !this.isBlur;
      // 添加新的 Dot
      Object.keys(flows).forEach( flow => {
        flows[flow]['sections'].forEach( section => {
          let dots = section['dots'];
          //link.path[i][0], link.path[i][1], 25, link.path[i + 1], dots, this.context
          section['dots'].push(new Dot(section['from'][0], section['from'][1], flows[flow]['shadowColor'], this.isBlur ? 25 : 25, section['to'], dots, this.context))
        })
      })
    }

    requestAnimationFrame(this.animate);
  }

  getLineWidth = (bandwidth) => {
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
  }

  componentDidMount() {
    const canvas = this.refs['routeLayer'];
    const {width, height} = this.props;
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    this.context = canvas.getContext('2d');
    if (this.context) {
      Dot.prototype.context = this.context;
      let flows = this.state.flows;
      flows = this.updateFlowsFromLinks(this.props.links, flows);
      this.setState({
        links: this.props.links
      })
      this.animate();
    }
  }

  componentWillUnMount() {
    this.events = null;
  }

  render() {
    const {width, height, zIndex, visible} = this.props;
    const style = {
      position: 'absolute',
      zIndex: zIndex,
      visibility: visible ? 'visible' : 'hidden', 
    }
    return (
      <canvas ref='routeLayer' width={width} height={height} style={style}></canvas>
    );
  }
}

class Dot {
  constructor(x, y, shadowColor, shadowBlur, destination, dots, context) {
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
    let length = getLength(x, y, destination[0], destination[1]);
    this.direction = [(destination[0] - x)/length, (destination[1] - y)/length];
  }

}

Dot.prototype.walk = function() {
  let destinationLength = getLength(this.x, this.y, this.destination[0], this.destination[1]) ;
  if ( destinationLength <= this.speed) {
    this.die();
  } else {
    this.x += this.speed * this.direction[0];
    this.y += this.speed * this.direction[1];
    this.draw();
  } 
}

Dot.prototype.draw = function() {
  let context = this.context;
  context.beginPath();
  context.fillStyle = this.color;
  context.shadowColor = this.color;
  context.shadowBlur = this.shadowBlur;
  context.fillRect(this.x - this.r/2, this.y - this.r/2, this.r, this.r);
  context.fill();
  context.closePath();
}

Dot.prototype.die = function() {
  let dots = this.dots;
  dots = dots.splice(dots.indexOf(this), 1)
}
import React, {PropTypes} from 'react';

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
     *    "上海,新加坡" : sections: [{
     *                      from: [100, 200],
     *                      to: [300, 400],
     *                      dots: [Dot, Dot]
     *                   }]
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
        this.setState({
          links: diffs[key]
        })
      }
    })
  }

  // 如何处理事件？？？

  animate = () => {
    const {links, flows} = this.state;
    // 目前的策略是，只有 lineWidth 为 7 的数据流才有动画的效果
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
      if (getLineWidth(link.bandwidth) >= 7) {
        let exist = flows[link.from + "," + link.to] || flows[link.to + "," + link.from];
        if (!exist && link.path.length > 1) {
          // 添加 link 到 flows 中
          let sections = [];
          for (let i = 0; i < link.path.length - 1; i++) {
            sections.push({
              from: link.path[i],
              to: link.path[i + 1],
              dots: [new Dot(link.path[i][0], link.path[i][1])]
            })
          }
          flows[link.from + "," + link.to] = sections;
        }
      }
    })

    // 然后控制所有的 Dot 运动

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
    animate();
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
  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.speed = 1;
    this.r = 4;
    // 统计该点已经移动了多少步
    this.step = 0;
  }
}

Dot.prototype.draw = function() {

}

Dot.prototype.die = function() {
  
}
import React, {PropTypes} from 'react';

export default class RouteLayerHaloBreath extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      paths: [],
    }
    this.statusColor = {
      good: '#66B737',
      warnning: '#EDC543',
      error: '#F05729',
      destroy: '#F05729',
    }
    this.statusStyle = {
      good: 'solid',
      warnning: 'solid',
      error: 'solid',
      destroy: 'dash',
    }
    this.shadowColor = {
      good: '#FFFFFF',
      warnning: '#FFFFFF',
      error: '#FFFFFF',
      destroy: '#FFFFFF',
    }
    this.context = null;
    this.shadowBlurWide = 0;
    this.shadowDirection = false;
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

  getStatusColor = (status) => {
    let color = this.statusColor[status];
    if (!color) {
      color = this.statusColor['good'];
    }
    return color;
  }

  getStatusStyle = (status) => {
    let style = this.statusStyle[status];
    if (!style) {
      style = this.statusStyle['good'];
    }
    return style;
  }

  getshadowColor = (status) => {
    let style = this.shadowColor[status];
    if (!style) {
      style = this.shadowColor['good'];
    }
    return style;
  }

  animate = () => {
    let context = this.context;
    let {paths} = this.state;
    // context.fillStyle = "rgba(0, 0, 0,0.03)";
    context.shadowBlur = 0;
    context.clearRect(0, 0, 2800, 2100);
    paths.forEach( path => {
      // 目前的策略是，只有 lineWidth 为 5 的数据流才有动画的效果
      if (path.lineWidth >= 5) {
        context.strokeStyle = path.strokeColor;
        context.lineWidth = path.lineWidth;
        context.shadowColor = path.shadowColor;
        context.shadowBlur = this.shadowBlurWide/40;
        context.beginPath();
        context.lineJoin = "round";
        const pathDots = path.path;

        let start = true;
        for (let i = 0; i < pathDots.length; i++) {
          if (start) {
            start = false;
            context.moveTo(...pathDots[i]);
          } else {
            context.lineTo(...pathDots[i]);
          }
        }
        context.stroke();

        if (!this.shadowDirection) {
          this.shadowBlurWide += 2;
          if (this.shadowBlurWide === 1000) {
            this.shadowDirection = true
          }
        } else {
          this.shadowBlurWide --;
          if (this.shadowBlurWide === 0) {
            this.shadowDirection = false;
          }
        }
      }
    })
    requestAnimationFrame(this.animate);
  }

  componentDidMount() {
    const canvas = this.refs['routeLayer'];
    const {width, height} = this.props;
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    this.context = canvas.getContext('2d');

    if (this.context) {
      let {links} = this.props;
      let paths = links.map((link) => {
        return {
          path: link.path,
          strokeColor: this.getStatusColor(link.status),
          strokeStyle: this.getStatusStyle(link.status),
          lineWidth: this.getLineWidth(link.bandwidth),
          shadowColor: this.getshadowColor(link.status),
        }
      })
      this.setState({
        paths: paths,
      }, this.animate)
    }
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
    )
  }
}
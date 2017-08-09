import React, {PropTypes} from 'react';

export default class RouteLayer extends React.Component {

  constructor(props) {
    super(props);
    this.events = {};
  }

  static PropTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    paths: PropTypes.array,
    zIndex: PropTypes.number,
    visible: PropTypes.bool
  }

  static defaultProps = {
    width: '600px',
    height: '600px',
    paths: [],
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
      }
    })
  }

  // 如何处理事件？？？

  componentDidMount() {
    const {strokeColor, lineWidth, strokeStyle, paths} = this.props;
    const canvas = this.refs['routeLayer'];
    const context=canvas.getContext("2d");

    paths.forEach((path) => {
      context.strokeStyle = path.strokeColor;
      context.lineWidth = path.lineWidth;
      if (path.strokeStyle === 'dash') {
        context.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
      } else {
        context.setLineDash([]);
      }
      let start = true;
      context.beginPath();
      context.lineJoin = "round";
      const pathDots = path.path;
      for (let i = 0; i < pathDots.length; i++) {
        if (start) {
          start = false;
          context.moveTo(...pathDots[i]);
        } else {
          context.lineTo(...pathDots[i]);
        }
      }
      context.stroke();
    });
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
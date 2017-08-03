import React from 'react';

export default class Route extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {lineColor, lineWidth} = this.props;
    const canvas = this.refs['myCanvas'];
    const paths = this.props.paths;
    const context=canvas.getContext("2d");
    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;
    paths.forEach((path) => {
      let start = true;
      context.beginPath();
      for (let i = 0; i < path.length; i++) {
        if (start) {
          start = false;
          context.moveTo(...path[i]);
        } else {
          context.lineTo(...path[i]);
        }
      }
      context.stroke();
    });
  }

  render() {
    const {width, height} = this.props;
    return (
      <canvas ref='myCanvas' width={width} height={height} style={{position : 'absolute'}}></canvas>
    );
  }
}
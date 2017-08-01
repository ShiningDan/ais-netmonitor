import React from 'react';

export default class Route extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const canvas = this.refs['myCanvas'];
    const paths = this.props.paths;
    const context=canvas.getContext("2d");
    paths.forEach((path) => {
      let start = true;
      for (let i = path.length; i >= 0; i--) {
        if (start) {
          start = false;
          context.moveTo(path[i]);
        } else {
          context.lineTo(path[i]);
        }
      }
    });
    context.stroke();
  }

  render() {
    const {width, height} = this.props;
    return (
      <canvas ref='myCanvas'></canvas>
    );
  }
}
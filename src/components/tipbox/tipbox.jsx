import React, {PropTypes} from 'react';
import './tipbox.css'

export default class Tipbox extends React.Component {
  constructor(props) {
    super(props);
  }

  static PropTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.array,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    visible: PropTypes.bool
  }

  static defaultProps = {
    width: '400px',
    height: '200px',
    position: [0, 0],
    title: "",
    visible: true
  }

  render() {

    const {width, height, title, position, visible} = this.props;
    const [left, top] = position;
    const containerStyle = {
      position: 'absolute',
      top: top,
      left: left,
      width: width,
      height: height,
      visibility: visible ? 'visible' : 'hidden'
    }

    const holderStyle = {
      width: width,
      height: `calc(${height} - 40px)`,
    }

    const titleStyle = {
      width: `calc(${width} - 100px)`,
      height: '40px'
    }

    return (
      <div style={containerStyle} className='tipbox-container'>
        <div className='tipbox-title' style={titleStyle}>{title}</div>
        <div className='tipbox-holder' style={holderStyle}>{this.props.children}</div>
      </div>
    );
  }
}
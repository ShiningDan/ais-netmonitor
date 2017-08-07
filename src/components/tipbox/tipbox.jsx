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

    return (
      <div style={containerStyle} className='tipbox-container'>
        {/*<div className='tipbox-title' style={titleStyle}>{title}</div>
        <div className='tipbox-holder' style={holderStyle}>{this.props.children}</div>*/}
        <TipboxBorder width={width} height={height} title={title}>{this.props.children}</TipboxBorder>        
      </div>
    );
  }
}

const TipboxBorder = ({width, height, title, children}) => {

  const rightBottomStyle = {
    width: '180px',
    height: `calc(${height} - 30px)`,
    top: '30px',
    left: `calc(${width} - 177px)`,
  }

  const leftBottomStyle = {
    width: `calc(${width} - 180px)`,
    height: `calc(${height} - 30px)`,
    top: '33px',
    left: 0,
  }

  const leftTopStyle = {
    width: `calc(${width} - 180px)`,
    height: '30px',
    top: 0,
    left: 0,
  }

  const holderStyle = {
    top: '100px',
  }

  return (
    <div className='tipbox-border-container'>
      <div className='left-top-div' style={leftTopStyle}></div>
      <div className='left-bottom-div' style={leftBottomStyle}></div>
      <div className='right-bottom-div' style={rightBottomStyle}></div>
      <div className='tipbox-title' >{title}</div>
      <div className='tipbox-holder' style={holderStyle}>{children}</div>
    </div> 
  );
}
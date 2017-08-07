import React, {PropTypes} from 'react'
import Marker from './marker.jsx';
import './markerStyle1.css'

export default class MarkerStyle1 extends Marker {

  constructor(props) {
    super(props);
  }

  static PropTypes = {
    status: PropTypes.oneOf(['good', 'warnning', 'error']),
    width: PropTypes.string,
    height: PropTypes.string,
  }

  static defaultProps = {
    visible: true,
    status: 'good',
    width: '16px',
    height: '16px',
    titleFontStyle: '22px',
    subTitleFontStyle: '22px',
    titleColor: '#FAFAFA',
    subTitleColor: '#FAFAFA',
  }

  render() {
    const onClick = (event) => {
      event.stopPropagation();
      console.log(event.currentTarget);
    }

    const {status, width, height} = this.props;
    const style = {
      width: width ? width : '16px',
      height: height ? height : '16px',
      borderWidth: width? `calc(${width} * 0.1)` : '1px',
    }
    const innerStyle = {
      width: width ? `calc(${width} * 0.7)` : '10px',
      height: height ? `calc(${height} * 0.7)` : '10px',
      margin: width ? `calc(${width} * 0.15)` : '3px',
    }

    return (
      <Marker {...this.props}
        events={{
          click: onClick
        }}>
        <div className={`marker-style1 ${status}`} style={style}>
          <div style={innerStyle}></div>
        </div>
      </Marker>
    );
  }
}
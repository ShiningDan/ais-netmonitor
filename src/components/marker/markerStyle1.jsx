import React, {PropTypes} from 'react'
import Marker from './marker.jsx';
import './markerStyle1.css'

export default class MarkerStyle1 extends React.Component{

  constructor(props) {
    super(props);
  }

  static PropTypes = {
    status: PropTypes.oneOf(['good', 'warnning', 'error']),
    width: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.array,
    visible: PropTypes.bool,
    events: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    titleRelativePosition: PropTypes.array,
    titleFontStyle: PropTypes.string,
    subTitleFontStyle: PropTypes.string, 
    titleColor: PropTypes.string,
    subTitleColor: PropTypes.string,
    cursor: PropTypes.string,
    zIndex: PropTypes.number,
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
      position: 'absolute',
      top: height ? `calc(-${height} * 0.5)` : '-8px',
      left: width ? `calc(-${width} * 0.5)` : '-8px',
      width: width ? `calc(${width} * 0.9)` : '15px',
      height: height ? `calc(${height} * 0.9)` : '15px',
      borderWidth: width? `calc(${width} * 0.1)` : '1px',
    }
    const innerStyle = {
      width: width ? `calc(${width} * 0.6)` : '9px',
      height: height ? `calc(${height} * 0.6)` : '9px',
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
import React, {PropTypes} from 'react';
import './bgImage.css'

export default class BgImage extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  static PropTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    position: PropTypes.array,
    visible: PropTypes.bool,
    imageUrl: PropTypes.string,
  }

  static defaultProps = {
    width: '100px',
    height: '100px',
    position: [0, 0],
    visible: true
  }

  render() {

    const {width, height, position, visible, imageUrl} = this.props;
    const [left, top] = position;

    const containerStyle = {
      width: width,
      height: height,
      top: top,
      left: left,
      visibility: visible ? 'visible' : 'hidden',
      backgroundImage: `url(${imageUrl})`
    }

    return (
      <div className='bg-image-container' style={containerStyle}>
        {this.props.children}
      </div>
    );
  }
}
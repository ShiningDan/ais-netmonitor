import React, {PropTypes} from 'react';
import './title.css'

export default class Title extends React.Component {

  constructor(props) {
    super(props);
  }

  static PropTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    position: PropTypes.array,
    visible: PropTypes.bool,
    titleSize: PropTypes.string,
    subtitleSize: PropTypes.string,
  }

  static defaultProps = {
    title: '',
    subtitle: '',
    position: [0, 0],
    visible: true,
    titleSize: '44px',
    subtitleSize: '36px',
  }

  render() {

    const {title, subtitle, position, visible, titleSize, subtitleSize} = this.props;
    const [left,top] = position;

    const containerStyle = {
      top: top,
      left: left,
      visibility: visible ? 'visible' : 'hidden'
    }

    const titleStyle = {
      fontSize: titleSize,
    }

    const subtitleStyle = {
      fontSize: subtitleSize,
    }

    return (
      <div className='title-container' style={containerStyle}>
        <div className='title-content' style={titleStyle}>{title}</div>
        <div className='title-subtitle' style={subtitleStyle}>{subtitle}</div>
      </div>
    );
  }

}
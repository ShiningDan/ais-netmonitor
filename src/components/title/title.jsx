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
  }

  static defaultProps = {
    title: '',
    subtitle: '',
    position: [0, 0],
    visible: true,
  }

  render() {

    const {title, subtitle, position, visible} = this.props;
    const [left,top] = position;

    const containerStyle = {
      top: top,
      left: left,
      visibility: visible ? 'visible' : 'hidden'
    }

    return (
      <div className='title-container' style={containerStyle}>
        <div className='title-content'>{title}</div>
        <div className='title-subtitle'>{subtitle}</div>
      </div>
    );
  }

}
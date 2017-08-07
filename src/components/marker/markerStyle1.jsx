import React, {PropTypes} from 'react'
import Marker from './marker.jsx';
import './markerStyle1.css'

export default class MarkerStyle1 extends Marker {

  constructor(props) {
    super(props);
  }

  static PropTypes = {
    status: PropTypes.oneOf(['good', 'warnning', 'error']),
  }

  static defaultProps = {
    visible: true,
    status: 'good'
  }

  render() {
    const onClick = (event) => {
      event.stopPropagation();
      console.log(event.currentTarget);
    }

    const {status} = this.props;

    return (
      <Marker {...this.props}
        events={{
          click: onClick
        }}>
        <div className={`marker-style1 ${status}`}>
          <div></div>
        </div>
      </Marker>
    );
  }
}
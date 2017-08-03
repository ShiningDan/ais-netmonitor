import React from 'react'
import Marker from './marker.jsx';

export default class MarkerStyle1 extends Marker {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Marker {...this.props}>
        <div className='marker-style1'>
          <div></div>
        </div>
      </Marker>
    );
  }
}
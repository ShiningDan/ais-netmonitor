import React from 'react';
import ReactDOM from 'react-dom';

import Map from '../src/components/map/map.jsx';

class Index extends React.Component {

  render() {
    return (
      <Map />
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('container'))
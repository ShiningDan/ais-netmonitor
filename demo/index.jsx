import React from 'react';
import ReactDOM from 'react-dom';

import Map from '../src/components/map/map.jsx';
import Route from '../src/components/route/route.jsx';
import Marker from '../src/components/marker/markerStyle1.jsx';

class Index extends React.Component {

  render() {
    let paths = [
      [[200, 300], [200, 400], [300, 600]],,
      [[100, 300], [200, 500]],
      [[300, 300], [400, 500]]
    ];
    return (
      <Map>
        <Route width='600px' height='600px' paths={paths} lineColor='#589ABE' lineWidth='4px'/>
        <Marker position={[100, 100]} cursor='pointer' visible={true}></Marker>
      </Map>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('container'))
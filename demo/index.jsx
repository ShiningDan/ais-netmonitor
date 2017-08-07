import React from 'react';
import ReactDOM from 'react-dom';

import Map from '../src/components/map/map.jsx';
import RouteLayer from '../src/components/route/routeLayer.jsx';
import Marker from '../src/components/marker/markerStyle1.jsx';
import Tipbox from '../src/components/tipbox/tipbox.jsx';
import Legend from '../src/components/tipbox/legend.jsx';

class Index extends React.Component {

  render() {
    let paths = [
      {
        path: [[200, 300], [200, 400], [300, 600]], 
        strokeColor: '#66B737',
        strokeStyle: 'solid',
        lineWidth: '2',
      },
      {
        path: [[100, 300], [200, 500]],
        strokeColor: '#EDC543',
        strokeStyle: 'solid',
        lineWidth: '2',
      },
      {
        path: [[300, 300], [400, 500]],
        strokeColor: '#F05729',
        strokeStyle: 'dash',
        lineWidth: '2',
      }
    ];
    return (
      <Map>
        <RouteLayer width='600px' height='600px' paths={paths}/>
        <Marker position={[200, 400]} cursor='pointer' status='warnning'></Marker>
        <Legend />
        {/*<Tipbox position={[200, 400]} width='600px' height='300px' title='利用率 & 流量状态'/>*/}
      </Map>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('container'))
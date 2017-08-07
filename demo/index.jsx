import React from 'react';
import ReactDOM from 'react-dom';

import Map from '../src/components/map/map.jsx';
import RouteLayer from '../src/components/route/routeLayer.jsx';
import Marker from '../src/components/marker/markerStyle1.jsx';
import Tipbox from '../src/components/tipbox/tipbox.jsx';
import Legend from '../src/components/tipbox/legend.jsx';
import Title from '../src/components/title/title.jsx';

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
        <Title title='Server Network Data Visualization Analysis System | Global'
          subtitle='机房可视化大数据分析系统 | 全球概况'
          position={[100, 100]}></Title>
        <Marker position={[200, 400]} cursor='pointer' status='warnning'></Marker>
        {/*<Tipbox position={[200, 400]} width='640px' height='418px' title='利用率 & 流量状态'><Legend /></Tipbox>*/}
      </Map>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('container'))
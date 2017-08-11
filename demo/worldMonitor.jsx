import React from 'react';
import ReactDOM from 'react-dom';

import Map from '../src/components/map/map.jsx';
import RouteLayer from '../src/components/route/routeLayerStyle1.jsx';
// import RouteLayerHalo from '../src/components/route/routeLayerHaloFlow.jsx';
import RouteLayerHalo from '../src/components/route/routeLayerHaloBreath.jsx';
import Marker from '../src/components/marker/markerStyle1.jsx';
import Tipbox from '../src/components/tipbox/tipbox.jsx';
import Legend from '../src/components/tipbox/legend.jsx';
import Title from '../src/components/title/title.jsx';
import BgImage from '../src/components/bgImage/bgImage.jsx';
import {links, citys} from './world-data.js'
import {autoRefreshInterval} from '../src/constrants.js';

export default class WorldMonitor extends React.Component {

  constructor(props) {
    super(props);
    this.intervalId = null;
  }

  setAutoRefresh = () => {
    this.intervalId = setInterval( () => {
      this.refresh()
    }, autoRefreshInterval)
  }

  stopAutoRefresh = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  refresh = () => {
    // 获取的数据有：链路流量，健康状况等信息，成交交易量等信息，告警信息
  }

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
      <BgImage width='2800px' height='2100px' imageUrl='../resources/images/bg-world-map.png'>
        <RouteLayer width='2800px' height='2100px' links={links}/>
        <RouteLayerHalo width='2800' height='2100' links={links} zIndex='49'/>
        <Title title='Server Network Data Visualization Analysis System | Global'
          subtitle='网络机房可视化大数据分析系统 | 全球概况'
          position={[60, 68]}>
        </Title>
        <div>
          {
            citys.map((city, index) => {
              return <Marker key={index} position={city.position} cursor='pointer' status='good' title={city.name} subTitle={city.EnglishName} titleRelativePosition={city.titleRelativePosition}></Marker>
            })
          }
        </div>
        <Tipbox position={[40, 1632]} width='640px' height='418px' title='利用率 & 流量'><Legend /></Tipbox>
        <Tipbox position={[770, 1702]} width='1982px' height='346px' title='利用率 & 流量状态'></Tipbox>        
      </BgImage>
    );
  }
}

ReactDOM.render(<WorldMonitor />, document.getElementById('container'))
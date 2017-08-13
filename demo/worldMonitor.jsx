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

    getLineWidth = (bandwidth) => {
    if (bandwidth <= 0) {
      return 0;
    } else if (bandwidth > 0 && bandwidth < 1) {
      return 1;
    } else if (bandwidth >= 1 && bandwidth < 1000) {
      return 3;
    } else if (bandwidth >= 1000 && bandwidth < 100000) {
      return 5;
    } else {
      return 7;
    }
  }

  getStatusColor = (status) => {
    switch(status) {
      case 'good': 
        return '#66B737';
      case 'warnning':
        return '#EDC543';
      case 'error':
        return '#F05729';
      case 'destroy':
        return '#F05729';
      default: 
        return '#66B737';
    }
  }

  getStatusStyle = (status) => {
    switch(status) {
      case 'good': 
        return 'solid';
      case 'warnning':
        return 'solid';
      case 'error':
        return 'solid';
      case 'destroy':
        return 'dash';
      default: 
        return 'solid';
    }
  }

  getshadowColor = (status) => {
    return '#FFFFFF';
  }

  render() {

    let paths = links.map((link) => {
      return {
        path: link.path,
        strokeColor: this.getStatusColor(link.status),
        strokeStyle: this.getStatusStyle(link.status),
        lineWidth: this.getLineWidth(link.bandwidth),
        shadowColor: this.getshadowColor(link.status),
      }
    })

    return (
      <BgImage width='2800px' height='2100px' imageUrl='../resources/images/bg-world-map.png'>
        <RouteLayer width='2800px' height='2100px' paths={paths}/>
        <RouteLayerHalo width='2800' height='2100' paths={paths} zIndex='49'/>
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

// ReactDOM.render(<WorldMonitor />, document.getElementById('container'))
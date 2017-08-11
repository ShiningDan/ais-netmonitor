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
import {links, citys} from './china-data.js'
import {autoRefreshInterval} from '../src/constrants.js';

export default class ChinaMonitor extends React.Component {

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
    return (
      <BgImage width='2800px' height='2100px' imageUrl='../resources/images/bg-china-map.png'>
        <RouteLayer width='2800px' height='2100px' links={links}/>
        <RouteLayerHalo width='2800' height='2100' links={links} zIndex='49'/>
        <Title title='Server Network Data Visualization Analysis System | China'
          subtitle='网络机房可视化大数据分析系统 | 中国概况'
          position={[60, 68]}>
        </Title>
        <div>
          {
            citys.map((city, index) => {
              return <Marker key={index} position={city.position} width='42px' height='42px' cursor='pointer' status='good' title={city.name} subTitle={city.EnglishName} titleRelativePosition={city.titleRelativePosition} fontSize={'32px'}></Marker>
            })
          }
        </div>
        <Tipbox position={[40, 1632]} width='640px' height='418px' title='利用率 & 流量'><Legend /></Tipbox>
        <Tipbox position={[770, 1702]} width='1982px' height='346px' title='利用率 & 流量状态'></Tipbox>        
      </BgImage>
    );
  }
}

ReactDOM.render(<ChinaMonitor />, document.getElementById('container'))
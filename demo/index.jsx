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
import {links, citys} from './data.js'
import {autoRefreshInterval} from '../src/constrants.js';

class Index extends React.Component {

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
        {/*<RouteLayer width='2800px' height='2100px' links={links}/>*/}
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
        {/*<Marker position={[440, 870]} cursor='pointer' status='good' title='圣何塞' subTitle='San Jose' titleRelativePosition={['0px', '20px']}></Marker>
        <Marker position={[724, 740]} cursor='pointer' status='good' title='艾斯本' subTitle='Ashburn' titleRelativePosition={['0px', '70px']}></Marker>
        <Marker position={[946, 1320]} cursor='pointer' status='good' title='圣保罗' subTitle='San Paulo' titleRelativePosition={['0px', '70px']}></Marker>
        <Marker position={[1286, 700]} cursor='pointer' status='good' title='伦敦' subTitle='London' titleRelativePosition={['0px', '70px']}></Marker>
        <Marker position={[1390, 640]} cursor='pointer' status='good' title='法兰克福' subTitle='Frankfurt' titleRelativePosition={['0px', '70px']}></Marker>
        <Marker position={[1618, 610]} cursor='pointer' status='good' title='莫斯科' subTitle='Moscow' titleRelativePosition={['30px', '40px']}></Marker>
        <Marker position={[1724, 930]} cursor='pointer' status='good' title='迪拜' subTitle='Dubai' titleRelativePosition={['30px', '26px']}></Marker>
        <Marker position={[1860, 1000]} cursor='pointer' status='good' title='孟买' subTitle='Mumbai' titleRelativePosition={['0px', '70px']}></Marker>
        <Marker position={[2050, 1130]} cursor='pointer' status='good' title='新加坡' subTitle='Singapore' titleRelativePosition={['0px', '70px']}></Marker>
        <Marker position={[2140, 980]} cursor='pointer' status='good' title='香港' subTitle='HongKong' titleRelativePosition={['0px', '70px']}></Marker>
        <Marker position={[2190, 910]} cursor='pointer' status='good' title='上海' subTitle='Shanghai' titleRelativePosition={['30px', '30px']}></Marker>
        <Marker position={[2338, 850]} cursor='pointer' status='good' title='东京' subTitle='Tokyo' titleRelativePosition={['30px', '40px']}></Marker>
        <Marker position={[2410, 1390]} cursor='pointer' status='good' title='悉尼' subTitle='Sydney' titleRelativePosition={['30px', '40px']}></Marker>  
        <Marker position={[0, 0]} cursor='pointer' status='good' title='测试' subTitle='Test' titleRelativePosition={['30px', '40px']}></Marker>  */}
        <Tipbox position={[40, 1632]} width='640px' height='418px' title='利用率 & 流量'><Legend /></Tipbox>
        <Tipbox position={[770, 1702]} width='1982px' height='346px' title='利用率 & 流量状态'></Tipbox>        
      </BgImage>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('container'))
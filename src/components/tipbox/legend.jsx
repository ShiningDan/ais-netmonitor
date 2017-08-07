import React from 'react'
import MarkerStyle1 from '../marker/markerStyle1.jsx'
import './legend.css';

export default class Legend extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='legend-container'>
        <div className='legend-column'>
          <div className='legend-subtitle'>利用率（%）</div>
          <div className='legend-item'>
            <div className='legend-desc'>0 ~ 40</div>
            <div className='legend-fig legend-good'></div>
          </div>
          <div className='legend-item'>
            <div className='legend-desc'>40 ~ 70</div>
            <div className='legend-fig legend-warnning'></div>
          </div>
          <div className='legend-item'>
            <div className='legend-desc'>70 ~ 100</div>
            <div className='legend-fig legend-error'></div>
          </div>
          <div className='legend-item'>
            <div className='legend-desc'>不可用</div>
            <div className='legend-fig legend-destroy'></div>
          </div>
        </div>
        <div className='legend-column'>
          <div className='legend-subtitle'>流量</div>
          <div className='legend-item'>
            <div className='legend-desc'>0 ~ 1M</div>
            <div className='legend-fig legend-small'></div>
          </div>
          <div className='legend-item'>
            <div className='legend-desc'>1M ~ 1G</div>
            <div className='legend-fig legend-medium'></div>
          </div>
          <div className='legend-item'>
            <div className='legend-desc'>1G ~ 100G</div>
            <div className='legend-fig legend-large'></div>
          </div>
          <div className='legend-item'>
            <div className='legend-desc'>100G+</div>
            <div className='legend-fig legend-very-large'></div>
          </div>
        </div>
        <div className='legend-divide'></div>
        <div className='legend-marker'>
          <MarkerStyle1 status='good' width='48px' height='48px'></MarkerStyle1>
          <div className='legend-icon-desc'>网络正常</div>
        </div>
        <div className='legend-marker'>
          <MarkerStyle1 status='error' width='48px' height='48px'></MarkerStyle1>
          <div className='legend-icon-desc'>网络故障</div>
        </div>
      </div>
    );
  }
}
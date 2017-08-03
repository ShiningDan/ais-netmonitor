import React from 'react';
import * as d3 from "d3";
import data from '../../../resources/maps/world';
import geoData from '../../../resources/maps/world-countries';

export default class BgMap extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const svg = d3.select('#mapContainer').append('svg');
    const width = window.innerWidth;
    const height = window.innerHeight;

    let features = geoData.features.filter((d) => {
      return d.properties.name != 'Antarctica';
    })
    
    var projection = d3.geoEquirectangular();
    let oldScala = projection.scale();
    let oldTranslate = projection.translate();
    // 设置新的投影後的地圖大小
    let newScala = oldScala * (width / ( 2 * oldTranslate[0])) * 0.9;
    // 设置新的投影後的中心位置
    let newTranslate = [width / 2, height / 2];
    let xy = projection.scale(newScala)
      .translate(newTranslate);
    
    
    let path = d3.geoPath(xy);
    svg.attr('width', width).attr('height', height);

    svg.selectAll('path').data(features).enter().append('svg:path')
      .attr('d', path).attr("fill", "#274F5F")
      .attr('d', path).attr("stroke", "#274F5F");
  }

  render() {
    return (
      <div id='mapContainer'>{this.props.children}</div>
    );
  }
}
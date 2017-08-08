import React, {PropTypes} from 'react';
import RouteLayer from './routeLayer.jsx';

export default class RouteLayerStyle1 extends React.Component {

  constructor(props) {
    super(props);
    this.statusColor = {
      good: '#66B737',
      warnning: '#EDC543',
      error: '#F05729',
      destroy: '#F05729',
    }
    this.statusStyle = {
      good: 'solid',
      warnning: 'solid',
      error: 'solid',
      destroy: 'dash',
    }
  }

  static PropTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    links: PropTypes.array,
    zIndex: PropTypes.number,
    visible: PropTypes.bool,
  }

  static defaultProps = {
    links: [],
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
    let color = this.statusColor[status];
    if (!color) {
      color = this.statusColor['good'];
    }
    return color;
  }

  getStatusStyle = (status) => {
    let style = this.statusStyle[status];
    if (!style) {
      style = this.statusStyle['good'];
    }
    return style;
  }

  render() {

    let {links} = this.props;
    let paths = links.map((link) => {
      return {
        path: link.path,
        strokeColor: this.getStatusColor(link.status),
        strokeStyle: this.getStatusStyle(link.status),
        lineWidth: this.getLineWidth(link.bandwidth),
      }
    })

    return (
      <RouteLayer {...this.props} paths={paths}></RouteLayer>
    );
  }
}
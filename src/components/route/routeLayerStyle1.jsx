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
    paths: PropTypes.array,
  }

  static defaultProps = {
    paths: [],
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

  render() {

    let {paths} = this.props;


    return (
      <RouteLayer></RouteLayer>
    );
  }
}
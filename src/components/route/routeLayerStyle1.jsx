import React, {PropTypes} from 'react';
import RouteLayer from './routeLayer.jsx';

export default class RouteLayerStyle1 extends React.Component {

  constructor(props) {
    super(props);
  }

  static PropTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    paths: PropTypes.array,
    zIndex: PropTypes.number,
    visible: PropTypes.bool,
  }

  static defaultProps = {
    paths: [],
  }

  render() {
    let {paths} = this.props;
    return (
      <RouteLayer {...this.props} paths={paths}></RouteLayer>
    );
  }
}
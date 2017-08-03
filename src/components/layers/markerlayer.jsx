import React, {PropTypes} from 'react'
import Marker from '../marker/marker.jsx'

export default class MarkerLayer extends React.Component {

  constructor(props) {
    super(props);
  }

  static PropTypes = {
    dataSource: PropTypes.array.isRequired,
    zIndex: PropTypes.number,
    cursor: PropTypes.string,
    onClick: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
  }

  static defaultProps = {
    dataSource: []
  }

  onClick = (event) => {
    this.props.onClick && this.props.onClick(event);
  }

  onMouseOut = (event) => {
    this.props.onMouseOut && this.props.onMouseOut(event);
  }

  onMouseOver = (event) => {
    this.props.onMouseOver && this.props.onMouseOver(event);
  }

  render() {
    const {dataSource, zIndex, cursor} = this.props;
    if (!dataSource || dataSource.length === 0) {
      return null;
    }
    return (
      <div className='datamap-markder-layer'>
        {dataSource.map( marker => {
          return (<Marker position={marker.position}
            cursor={cursor}
            title={marker.title}
            event={{
              click: this.onClick,
              mouserout: this.onMouseOut,
              onMouseOver: this.onMouseOver
            }}>
            {marker.content}
            </Marker>);
        })}
      </div>
    );
  }
}
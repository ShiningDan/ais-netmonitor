import React, {PropTypes} from 'react'
import omit from '../../utils/omit.js'
import isObject from '../../utils/isObject.js'
import diff from 'object-diff'

import './marker.css'

export default class Marker extends React.Component {

  constructor(props) {
    super(props);
    this.events = {};
  }

  static PropTypes = {
    position: PropTypes.array,
    visible: PropTypes.bool,
    events: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    titleRelativePosition: PropTypes.array,
    titleFontStyle: PropTypes.string,
    subTitleFontStyle: PropTypes.string, 
    titleColor: PropTypes.string,
    subTitleColor: PropTypes.string,
    cursor: PropTypes.string,
    zIndex: PropTypes.number,
  }

  static defaultProps = {
    position: [0, 0],
    titleRelativePosition: [0, 0],
    visible: true,
    zIndex: 100,
  }

  componentWillReceiveProps(nextProps) {
    const nextOption = omit(nextProps, ['key']);
    const preOption = omit(this.props, ['key']);
    const diffs = diff(preOption, nextOption);
    this.handleAllDiffs(diffs);
  }

  handleAllDiffs = (diffs) => {
    Object.keys(diffs).forEach( key => {
      if ( key === 'events') {
        // 注销所有的事件，然后在重新绑定
        this.unRegisterEvent();
        this.registerEvent();
        return ;
      }
    })
  }

  registerEvent = () => {
    const {events} = this.props;
    //isObject 逻辑？？？
    if (events && isObject(events)) {
      Object.keys(events).forEach(eventName => {
        let func = events[eventName];
        if (!func || typeof func !== 'function') {
          return ;
        }
        if (!this.events[eventName]) {
          this.events[eventName] = [];
        }
        this.events[eventName].push(func);
        this.events[eventName].forEach( handler => {
          this.refs['markderWarper'].addEventListener(eventName, handler);
        })
      })
    }
  }

  unRegisterEvent = () => {
    Object.keys(this.events).forEach( eventName => {
      this.events[eventName].forEach( handler => {
        this.refs['markderWarper'].removeEventListener(eventName, handler);
      })
    })
  }

  componentDidMount() {
    this.registerEvent();
  }

  componentWillUnmount() {
    this.unRegisterEvent();
    this.events = null;
  }

  render() {
    const {position, visible, title, cursor, zIndex, subTitle, titleRelativePosition, titleFontStyle, subTitleFontStyle, titleColor, subTitleColor} = this.props;
    const [left, top] = position;
    const [titleLeft, titleTop] = titleRelativePosition;
    const style = {
      width: '1px',
      height: '1px',
      position: 'absolute', 
      top: top, 
      left: left, 
      visibility: visible ? 'visible' : 'hidden', 
      cursor: cursor, 
      zIndex: zIndex
    }

    const titleContainerStyle = {
      position: 'absolute',
      whiteSpace: 'nowrap',
      left: titleLeft,
      top: titleTop,
    }

    const titleStyle = {
      font: titleFontStyle,
      color: titleColor,
    }

    const subTitleStyle = {
      font: subTitleFontStyle,
      color: subTitleColor,
    }

    return (
      <div ref='markderWarper' style={style}>
        <div className='marker-title-container' style={titleContainerStyle}>
          <div style={titleStyle}>{title}</div>
          <div style={subTitleStyle}>{subTitle}</div>
        </div>
        {this.props.children ? this.props.children : <div className='marker-default-style'></div>}
      </div>
    );
  }
}
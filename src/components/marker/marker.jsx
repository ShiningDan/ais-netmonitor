import React, {PropTypes} from 'react'
import omit from '../../utils/omit.js'
import isObject from '../../utils/isObject.js'
import diff from 'object-diff'

import './marker.css'

export default class Marker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      position: [0, 0],
      title: '',
      cursor: 'inherit'
    }
    this.events = {};
  }

  static PropTypes = {
    position: PropTypes.array,
    cursor: PropTypes.string,
    visible: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    events: PropTypes.object
  }

  static defaultProps = {
    visible: true
  }

  componentWillReceiveProps(nextProps) {
    const nextOption = omit(nextProps, ['key']);
    const preOption = omit(this.props, ['key']);
    const diffs = diff(preOption, nextOption);
    this.handleAllDiffs(diffs);
  }

  handleAllDiffs = (diffs) => {
    Object.keys(diffs).forEach( key => {
      if ( key === 'event') {
        // 注销所有的事件，然后在重新绑定
        this.unRegisterEvent();
        this.registerEvent();
        return ;
      }
    })
  }

  registerEvent = () => {
    // 未测试！！！！
    const {events} = this.props;
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
    // 未测试！！！
    Object.keys(this.events).forEach( eventName => {
      this.events[eventName].forEach( handler => {
        this.refs['markderWarper'].removeEventListener(eventName, handler);
      })
    })
  }

  componentDidMount() {
    const option = omit(this.props, ['event', 'key']);
    const {position, visible, title, cursor} = option;
    this.setState({
      position: position,
      visible: visible,
      title: title,
      cursor: cursor
    });
    this.registerEvent();
  }

  componentWillUnmount() {
    this.unRegisterEvent();
    this.events = null;
  }

  render() {
    const {position, visible, title, cursor} = this.state;
    const [left, top] = position;
    return (
      <div ref='markderWarper' style={{position: 'absolute', top: top, left: left, visibility: visible ? 'visible' : 'hidden', cursor: cursor}}>
        {title}
        {this.props.children ? this.props.children : <div className='marker-default-style'></div>}
      </div>
    );
  }
}
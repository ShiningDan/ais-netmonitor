import React from 'react';
import ReactDOM from 'react-dom';
import ChinaMonitor from './chinaMonitor.jsx';
import WorldMonitor from './worldMonitor.jsx';

class Index extends React.Component {
  render() {
    return (
      <ChinaMonitor />
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('container'));
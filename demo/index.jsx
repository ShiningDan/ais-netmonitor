import React from 'react';
import ReactDOM from 'react-dom';
import ChinaMonitor from './chinaMonitor.jsx';
import WorldMonitor from './worldMonitor.jsx';
import {Route, Switch, HashRouter} from 'react-router-dom';

class Index extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={ChinaMonitor} />
          <Route path='/china' component={ChinaMonitor} />
          <Route path='/world' component={WorldMonitor} />
        </Switch>
      </HashRouter> 
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('container'));
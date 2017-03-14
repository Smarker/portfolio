import React, { PropTypes, Component } from 'react';

import Routes from '../../routes';
import { browserHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes history={browserHistory} />
      </div>
    );
  }
}

export default App;

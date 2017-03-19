import React from 'react';

import test from '../../../public/images/icon.svg';
import MtSvgLines from 'react-mt-svg-lines';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={test} />
      </div>
    );
  }
}

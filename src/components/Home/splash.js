import React from 'react';

import test from '../../../public/images/icon.svg';
import test2 from '../../../public/images/icon2.svg';
import test3 from '../../../public/images/icon-small.svg';


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

export class SmallSplash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={test3} />
      </div>
    );
  }
}

//medium splash
export class Splash5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={test2} />
      </div>
    );
  }
}

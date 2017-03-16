import React from 'react';

import splash from '../../../public/images/splash.jpg';

import { Button } from 'semantic-ui-react';

import Blog from '../Blog';

import scrollToComponent from 'react-scroll-to-component';

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    //binding necessary to get 'this' to work in callback
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    scrollToComponent(this.refs.content, {
      offset: 0,
      align: 'top',
      duration: 1000
    });
  }

  render() {
    return (
      <div>
        THIS IS HOME
        <Button onClick={this.handleScroll}>
          Click Here
        </Button>
        <img src={splash} alt="splash" height="1000" width="1000"/>
        <img src={splash} alt="splash" height="1000" width="1000"/>
        <img src={splash} alt="splash" height="1000" width="1000"/>
        <Blog ref="content"/>
        <img src={splash} alt="splash" height="1000" width="1000"/>
        <img src={splash} alt="splash" height="1000" width="1000"/>
        <img src={splash} alt="splash" height="1000" width="1000"/>
      </div>
    );
  }
}


class Home extends React.Component {
  render() {
    return (
      <div>
        this is home

        <Scroll />

        <br />

      </div>
    );
  }
}

export default Home;

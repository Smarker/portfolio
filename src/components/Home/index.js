import React from 'react';

import ReactDOM from 'react-dom';

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
        <Button onClick={this.handleScroll}>
          Click Here
        </Button>
        <img src={splash} height="1000" width="1000"/>
        <img src={splash} height="1000" width="1000"/>
        <img src={splash} height="1000" width="1000"/>
        <Blog ref="content"/>
        <img src={splash} height="1000" width="1000"/>
        <img src={splash} height="1000" width="1000"/>
        <img src={splash} height="1000" width="1000"/>
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

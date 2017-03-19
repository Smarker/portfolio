import React from 'react';

import './style.css';


import splash2 from '../../../public/images/splash.jpg';

import { Grid, Button, Container, Header, Image } from 'semantic-ui-react';

import Splash from './splash.js';

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
        <Blog ref="content"/>
        <img src={splash2} alt="splash2" height="1000" width="1000"/>
        <img src={splash2} alt="splash2" height="1000" width="1000"/>
        <img src={splash2} alt="splash2" height="1000" width="1000"/>
      </div>
    );
  }
}


class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <Grid padded columns={2} stackable>
            <Grid.Row color='teal' stretched>
              <Grid.Column width={4} textAlign='center'>
                <Splash />
              </Grid.Column>
              <Grid.Column width={12} textAlign='center'>
                <Header as='h1' style={{color: 'white'}}>Stephanie Marker</Header>
              </Grid.Column>
            </Grid.Row>
        </Grid>
        <Image src={splash2} size='massive'/>
      </div>
    );
  }
}

export default Home;

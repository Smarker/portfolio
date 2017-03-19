import React from 'react';

import './style.css';

import prof from '../../../public/images/prof.jpg';
import splash1 from '../../../public/images/splash2.jpg'


import { Grid, Button, Container, Header, Image, Icon } from 'semantic-ui-react';

import Splash from './splash.js';
import {Splash5} from './splash.js';

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
        <img src={splash1} alt="splash2" height="1000" width="1000"/>
        <img src={splash1} alt="splash2" height="1000" width="1000"/>
        <img src={splash1} alt="splash2" height="1000" width="1000"/>
      </div>
    );
  }
}


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.name = "";
    //binding necessary to get 'this' to work in callback
    this.githubClick = this.githubClick.bind(this);
    this.linkedinClick = this.linkedinClick.bind(this);
  }

  githubClick() {
      location.href = 'https://github.com/Smarker';
  }

  linkedinClick() {
    location.href = 'https://www.linkedin.com/in/stephaniemarker/';
  }

  emailClick() {
    location.href = 'mailto:StephanieMarker93@gmail.com';
  }

  //TODO separate out content into 3 sections for mobile, tablet, computer
  //TODO move container sections into component to reduce amount of code
  render() {
    return (
      <div className="content">

        <Grid className="computer only" padded columns={2} stackable>
            <Grid.Row style={{background: '#22252C'}} stretched>
              <Grid.Column width={6} textAlign='center' verticalAlign='middle'>
                <Splash />
              </Grid.Column>
              <Grid.Column width={10} textAlign='center' verticalAlign='middle'>
                <Container text>
                  {/*Use below image for about page*/}
                  {/*<Image src={prof} className='bordered-image-white' size='small' shape='circular' centered />*/}
                  <Header as='h1' inverted>Stephanie Marker</Header>
                  <Header as='h3' inverted>Software Engineer</Header>
                  <p style={{color: 'white'}}>I am a full stack software engineer from New Jersey. </p>
                  <p style={{color: 'white'}}>Check out some of my projects.</p>
                  <Button inverted icon='github' size='small' onClick={this.githubClick}  />
                  <Button inverted icon='linkedin' size='small' onClick={this.linkedinClick}  />
                  <Button inverted icon='mail' size='small' onClick={this.emailClick}  />
                </Container>
              </Grid.Column>
            </Grid.Row>
        </Grid>

        <Grid className="tablet only" padded columns={2} stackable>
            <Grid.Row style={{background: '#22252C'}} stretched>
              <Grid.Column width={5} textAlign='center' verticalAlign='middle'>
                <Splash5 />
              </Grid.Column>
              <Grid.Column width={8} textAlign='center' verticalAlign='middle'>
                <Container text>
                  {/*<Image src={prof} className='bordered-image-white' size='small' shape='circular' centered />*/}
                  <Header as='h1' inverted>Stephanie Marker</Header>
                  <Header as='h3' inverted>Software Engineer</Header>
                  <p style={{color: 'white'}}>I am a full stack software engineer from New Jersey. </p>
                  <p style={{color: 'white'}}>Check out some of my projects.</p>
                  <Button inverted icon='github' size='small' onClick={this.githubClick}  />
                  <Button inverted icon='linkedin' size='small' onClick={this.linkedinClick}  />
                  <Button inverted icon='mail' size='small' onClick={this.emailClick}  />
                </Container>
              </Grid.Column>
            </Grid.Row>
        </Grid>

        <Grid className="mobile only" padded columns={2} stackable>
            <Grid.Row style={{background: '#22252C'}} stretched>
              <Grid.Column className="mobile only" width={10} textAlign='center' verticalAlign='middle'>
                <Container text>
                  {/*<Image src={prof} className='bordered-image-white' size='small' shape='circular' centered />*/}
                  <Header as='h1' style={{color:'#E14658'}} inverted>Stephanie Marker</Header>
                  <Header as='h3' style={{color:'#E14658'}}inverted>Software Engineer</Header>
                  <p style={{color:'white'}}>I am a full stack software engineer from New Jersey. </p>
                  <p style={{color:'white'}}>Check out some of my projects.</p>
                  <Button inverted icon='github' size='small' onClick={this.githubClick}  />
                  <Button inverted icon='linkedin' size='small' onClick={this.linkedinClick}  />
                  <Button inverted icon='mail' size='small' onClick={this.emailClick}  />
                </Container>
              </Grid.Column>
            </Grid.Row>
        </Grid>

        <Blog ref="content"/>
        <Blog />

      </div>
    );
  }
}

export default Home;

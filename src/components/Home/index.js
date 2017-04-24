import React from 'react';

import './style.css';

import { Grid, Button, Container, Header, Image } from 'semantic-ui-react';

import {Splash5, SmallSplash} from './splash.js';

import SettingUpAPortfolioPreviewPost from '../../markdown/blog/2017/march/SettingUpAPortfolio.js';
import SettingUpCustomDomainWithHerokuAndNamecheapPreviewPost from '../../markdown/blog/2017/april/SettingUpCustomDomainWithHerokuAndNamecheap.js';
import VSCodePreviewPost from '../../markdown/blog/2017/april/VSCode.js';
import ReactMeteorTutorialPreviewPost from '../../markdown/blog/2017/april/ReactMeteorTutorial.js';

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

  //TODO move container sections into component to reduce amount of code
  //TODO add scroll up sticky
  render() {
    return (
      <div className="content">

        <Grid className="computer only" padded columns={2} stackable>
            <Grid.Row style={{'background-image': 'url("/images/splash2.jpg")', 'background-size':'cover'}} stretched>
              <Grid.Column width={6} textAlign='center' verticalAlign='middle'>
              </Grid.Column>
              <Grid.Column width={10} textAlign='center' verticalAlign='middle'>
                <Container text>
                  {/*Use below image for about page*/}
                  {/*<Image src={prof} className='bordered-image-white' size='small' shape='circular' centered />*/}
                  <Header as='h1' style={{'font-size': '3em'}} inverted>Stephanie Marker</Header>
                  <Header as='h3' style={{'font-size': '1.5em'}} inverted>Software Engineer</Header>
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
            <Grid.Row style={{'background-image': 'url("/images/splash2.jpg")', 'background-size':'cover'}} stretched>
              <Grid.Column width={5} textAlign='center' verticalAlign='middle'>
              </Grid.Column>
              <Grid.Column width={8} textAlign='center' verticalAlign='middle'>
                <Container text>
                  {/*<Image src={prof} className='bordered-image-white' size='small' shape='circular' centered />*/}
                  <Header as='h1' style={{'font-size': '2em'}} inverted>Stephanie Marker</Header>
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
            <Grid.Row style={{'background-image': 'url("/images/splash2.jpg")', 'background-size':'cover'}} stretched>
              <Grid.Column className="mobile only" width={10} textAlign='center' verticalAlign='middle'>
                <Container text>
                  {/*<Image src={prof} className='bordered-image-white' size='small' shape='circular' centered />*/}
                  <Header as='h1' inverted>Stephanie Marker</Header>
                  <Header as='h3' inverted>Software Engineer</Header>
                  <p style={{color:'white'}}>I am a full stack software engineer from New Jersey. </p>
                  <p style={{color:'white'}}>Check out some of my projects.</p>
                  <Button inverted icon='github' size='small' onClick={this.githubClick}  />
                  <Button inverted icon='linkedin' size='small' onClick={this.linkedinClick}  />
                  <Button inverted icon='mail' size='small' onClick={this.emailClick}  />
                </Container>
              </Grid.Column>
            </Grid.Row>
        </Grid>

        <ReactMeteorTutorialPreviewPost />

        <VSCodePreviewPost />

        <SettingUpCustomDomainWithHerokuAndNamecheapPreviewPost />

        <SettingUpAPortfolioPreviewPost />

        <Container fluid textAlign='center' style={{background: '#545A6A', 'padding-top': '10px', 'padding-bottom': '50px', 'margin-top': '40px'}}>
          <Header as='h1' style={{color:'white'}}>
            <Header.Content>
              Want to work together?
            </Header.Content>
          </Header>
          <Button inverted className='navy-button' size='large' onClick={this.emailClick}> Contact Me </Button>
        </Container>
        <Container fluid textAlign='center' style={{background: '#22252C', 'padding-bottom': '5px'}}>
          <SmallSplash alt="small-splash" />
          <Header sub style={{color:'white', 'margin': '0'}}> Made by Stephanie Marker &copy; 2017 </Header>
        </Container>
      </div>
    );
  }
}

export default Home;

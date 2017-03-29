import React from 'react';

import './style.css';

import { Grid, Container, Header, Image, Icon, Label, Divider, Card } from 'semantic-ui-react';

import slack from '../../../public/images/projects/slack-logo.svg';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="content">
        <Container textAlign='center' className="parallax-projects" fluid>
          <Header as='h1' className='parallax-text' style={{color:'white', 'font-size': '4rem'}}>
            <Header.Content style={{'margin-top': '100px'}}>
              Projects
            </Header.Content>
          </Header>
        </Container>
        <Container text style={{'padding-top': '50px'}}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src={slack} />
              </Grid.Column>
              <Grid.Column>
                <Header as='h1' style={{color:'#E14658', 'font-size': '3rem'}}>
                  <Header.Content>
                    Chattybot
                  </Header.Content>
                </Header>
                <p style={{color:'#883677'}}>
                  Chattybot is a chatbot built with Github's Hubot using Slack as an adapter. 
                  It's customized to respond to your command 'play [song name]'  by sending you a link to that song on spotify.
                </p>
                <Label.Group className="label-style" size='large'>
                  <Label>
                    Hubot
                  </Label>
                  <Label>
                    Slack
                  </Label>
                  <Label>Spotify API</Label>
                </Label.Group>
              </Grid.Column>
            </Grid.Row>

            <Divider section />

            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src={slack} />
              </Grid.Column>
              <Grid.Column>
                <Header as='h1' style={{color:'#E14658', 'font-size': '3rem'}}>
                  <Header.Content>
                    Chattybot
                  </Header.Content>
                </Header>
                <p style={{color:'#883677'}}>
                  Chattybot is a chatbot built with Github's Hubot using Slack as an adapter. 
                  It's customized to respond to your command 'play [song name]'  by sending you a link to that song on spotify.
                </p>
                <Label.Group className="label-style" size='large'>
                  <Label>
                    Hubot
                  </Label>
                  <Label>
                    Slack
                  </Label>
                  <Label>Spotify API</Label>
                </Label.Group>
              </Grid.Column>
            </Grid.Row>

            <Divider section />

            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src={slack} />
              </Grid.Column>
              <Grid.Column>
                <Header as='h1' style={{color:'#E14658', 'font-size': '3rem'}}>
                  <Header.Content>
                    Chattybot
                  </Header.Content>
                </Header>
                <p style={{color:'#883677'}}>
                  Chattybot is a chatbot built with Github's Hubot using Slack as an adapter. 
                  It's customized to respond to your command 'play [song name]'  by sending you a link to that song on spotify.
                </p>
                <Label.Group className="label-style" size='large'>
                  <Label>
                    Hubot
                  </Label>
                  <Label>
                    Slack
                  </Label>
                  <Label>Spotify API</Label>
                </Label.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

import React from 'react';

import './style.css';

import { Card, Container, Header, Image, Icon, Label, Divider, Segment, Button } from 'semantic-ui-react';

import slack from '../../../public/images/projects/slack-logo.svg';
import hubot from '../../../public/images/projects/hubot.png';
import mirror from '../../../public/images/projects/smart-mirror.jpg';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.githubChatbotClick = this.githubChatbotClick.bind(this);
  }

  githubChatbotClick() {
    location.href = 'https://github.com/Smarker/chattybot';
  }

  /* add button for see on Github
  update github readme for chatbot to only include the important parts
  possibly add a new page for chattybot
*/
  render() {
    return (
      <div className="content" id="projects-container">
        <Container text style={{'padding-top': '50px'}}>

          <Card.Group stackable>
            <Card>
              <Image src={hubot} className="zoom-image" />
              <Card.Content>
                <Divider horizontal> <Button className="circle-button" circular icon='github'  onClick={this.githubChatbotClick}/> </Divider>
                <Card.Header style={{'color':'#E14658'}}>Chattybot</Card.Header>
                <Card.Meta style={{'color':'#883677'}}>December 2016</Card.Meta>
                <Card.Description style={{'color':'#22252C'}}>Chattybot is a chatbot built with Github's Hubot using Slack as an adapter. 
                    It's customized to respond to your command 'play [song name]'  by sending you a link to that song on spotify.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label.Group className="label-style" size='large'>
                  <Label>
                    Hubot
                  </Label>
                  <Label>
                    Slack
                  </Label>
                  <Label>Spotify API</Label>
                </Label.Group>
              </Card.Content>
            </Card>

            <Card>
              <Image src={mirror} className="zoom-image" />
              <Card.Content>
                <Divider horizontal> <Button className="circle-button" circular icon='github' disabled/> </Divider>
                <Card.Header style={{'color':'#E14658'}}>Smart Mirror</Card.Header>
                <Card.Meta style={{'color':'#883677'}}>January 2017</Card.Meta>
                <Card.Description style={{'color':'#22252C'}}>I am currently working on a raspberry pi smart mirror with voice recognition. The mirror can understand basic commands 
                    like 'Show me a map of New Jersey' or 'Tell me the time'. 
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label.Group className="label-style" size='large'>
                  <Label>
                    Raspberry Pi
                  </Label>
                  <Label>
                    smart-mirror API
                  </Label>
                  <Label>
                    Evan Cohen
                  </Label>
                </Label.Group>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </div>
    );
  }
}

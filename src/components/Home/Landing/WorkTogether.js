import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';

export default class WorkTogether extends React.Component {
  constructor(props) {
    super(props);
    this.emailClick = this.emailClick.bind(this);
  }

  emailClick = () => {
    location.href = 'mailto:StephanieMarker93@gmail.com';
  }

  render() {
    return (
      <Container fluid textAlign='center' style={{background: '#545A6A', 'padding-top': '10px', 'padding-bottom': '50px', 'margin-top': '40px'}}>
        <Header as='h1' style={{color:'white'}}>
          <Header.Content>
            Want to work together?
          </Header.Content>
        </Header>
        <Button inverted className='navy-button' size='large' onClick={this.emailClick}> Contact Me </Button>
      </Container>
    );
  }
}
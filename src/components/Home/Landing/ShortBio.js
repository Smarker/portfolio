import React from 'react';
import { Header } from 'semantic-ui-react';

const ShortBio = props => (
  <div>
    <Header as='h1' style={props.style.name} inverted>Stephanie Marker</Header>
    <Header as='h3' style={props.style.title} inverted>Software Engineer</Header>
    <p style={{color: 'white'}}>Currently living in Cambridge, Massachusetts</p>
    <p style={{color: 'white'}}>Check out some of my projects.</p>
  </div>
);

export default ShortBio;
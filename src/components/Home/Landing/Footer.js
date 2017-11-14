import React from 'react';
import {SmallSplash} from '../splash.js';
import { Container, Header } from 'semantic-ui-react';

const Footer = props => (
  <Container fluid textAlign='center' style={{background: '#22252C', 'padding-bottom': '5px'}}>
    <SmallSplash alt="small-splash" />
    <Header sub style={{color:'white', 'margin': '0'}}> Made by Stephanie Marker &copy; 2017 </Header>
  </Container>
);

export default Footer;
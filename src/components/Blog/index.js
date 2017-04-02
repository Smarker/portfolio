import React from 'react';

import './style.css';

import { Container, Header } from 'semantic-ui-react'

import ReactMarkdown from 'react-markdown';

import SettingUpAPortfolio from '../../markdown/blog/2017/march/SettingUpAPortfolio.js';

/*
TODO: Show a preview of the blog post and link it to a new page
*/
export default class Post extends React.Component {
  render() {
    return (
        <Container text style={{'margin-top':'50px', 'padding-top':'50px', 'padding-bottom': '50px'}}>
          <Header as='h1' style={{color:'#E14658', 'font-size': '3rem'}}>
            <Header.Content>
              Creating a Developer Portfolio
              <Header sub style={{color:'#883677'}}>March 27, 2017</Header>
            </Header.Content>
          </Header>
          <ReactMarkdown source={SettingUpAPortfolio} className="blog-style" />
        </Container>
    );
  }
}

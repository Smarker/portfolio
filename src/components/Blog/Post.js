import React from 'react';

import './style.css';

import { Container, Header, Image, Button, Label } from 'semantic-ui-react'

import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom'


/* Get this working for mobile */
let Post = (props) => {
    {/* Post Preview */}
    if(props.link !== "") {
      return (
        <Container text className="post-padding-preview">
          <Link to={props.link}>
            <Image src={props.image} size='huge' className="image-style" />
            <Header as='h1' className="pink-header">
              <Header.Content>
                {props.title}
                <Header sub className="purple-subheader">
                  {props.created}
                </Header>
              </Header.Content>
            </Header>
          </Link>
          <ReactMarkdown source={props.markdown} className="blog-style" />
          <Link to={props.link}>
            <Button floated='right' inverted className="see-more-button">
              See More
            </Button>
          </Link>
        </Container>
      );
    {/* Full Post */}
    } else {
      return (
        <div className="post-padding-full">
          <Image src={props.image} className="image-style" fluid />
          <Container text>
              <Header as='h1' className="pink-header">
                <Header.Content>
                  {props.title}
                  <Header sub className="purple-subheader">
                    {props.created}
                  </Header>
                </Header.Content>
              </Header>
            <ReactMarkdown source={props.markdown} className="blog-style" />
          </Container>
        </div>
      );
    }
};

export default Post;

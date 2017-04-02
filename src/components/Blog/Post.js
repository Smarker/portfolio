import React from 'react';

import './style.css';

import { Container, Header, Image } from 'semantic-ui-react'

import ReactMarkdown from 'react-markdown';

/* Get this working for mobile */
let Post = (props) => (
      <Container text className="post-padding" >
        <Image src={props.image} size='huge' className="image-style" />
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
);

export default Post;

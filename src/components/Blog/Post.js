import React from 'react';

import './style.css';

import { Container, Header, Image, Button } from 'semantic-ui-react'

import { Link } from 'react-router-dom'


/* Get this working for mobile */
let Post = (props) => {
    if(props.link !== "") {
      return (
        <Container text className="post-padding-preview">
          <Link to={props.link}>
            <Image src={props.image} size='huge' className="image-style-preview" />
            <Header as='h1' className="pink-header">
              <Header.Content>
                {props.title}
                <Header sub className="purple-subheader">
                  {props.created}
                </Header>
              </Header.Content>
            </Header>
          </Link>
          {props.content}
          <Link to={props.link}>
            <Button floated='right' inverted className="see-more-button">
              See More
            </Button>
          </Link>
        </Container>
      );
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
            {/* Images don't display well unless formatted with semantic ui react */}
            {props.content}
          </Container>
        </div>
      );
    }
};

export default Post;

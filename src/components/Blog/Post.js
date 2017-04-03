import React from 'react';

import './style.css';

import { Container, Header, Image, Button, Grid } from 'semantic-ui-react'

import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom'


/* Get this working for mobile */
let Post = (props) => {
    {/* Post Preview */}
    if(props.link !== "") {
      return (
        <Grid centered columns={1}>
          <Grid.Column className="mobile only" rows={2} >
            <Grid.Row>
              <Link to={props.link}>
                <Image src={props.image} className="image-style" fluid />
              </Link>
            </Grid.Row>
            <Grid.Row>
                <Link to={props.link}>
                  <Header as='h1' className="pink-header-mobile">
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
            </Grid.Row>
          </Grid.Column>
          <Grid.Column className="computer only" style={{'margin-top':'75px'}}>
            <Container text>
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
          </Grid.Column>
          <Grid.Column className="tablet only" style={{'margin-top':'75px'}}>
            <Container text>
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
          </Grid.Column>
        </Grid>
      );
    {/* Full Post */}
    } else {
      return (
        <div>
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

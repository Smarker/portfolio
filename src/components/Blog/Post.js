import React from 'react';

import './style.css';

import { Container, Header, Image, Button, Icon } from 'semantic-ui-react'

import { Link } from 'react-router-dom'


/* Get this working for mobile */
class Post extends React.Component {
  constructor(props) {
    super(props);

    this.githubClick = this.githubClick.bind(this);
  }

  githubClick() {
    location.href = this.props.github;
  }

  render() {
    if(this.props.link !== "") {
      return (
        <Container text className="post-padding-preview">
          <Link to={this.props.link}>
            <Image src={this.props.image} size='huge' className="image-style-preview" />
            <Header as='h1' className="pink-header">
              <Header.Content>
                {this.props.title}
                <Header sub className="purple-subheader">
                  {this.props.created}
                </Header>
              </Header.Content>
            </Header>
          </Link>
          {this.props.content}
          
          <Link to={this.props.link}>
            <Button floated='right' inverted className="see-more-button">
              See More
            </Button>
          </Link>

          {this.props.github !== "" &&
            <Button floated='right' inverted className="see-more-button" icon='github' onClick={this.githubClick} />
          }
        </Container>
      );
    } else {
      return (
        <div className="post-padding-full">
          <Image src={this.props.image} className="image-style" fluid />
          <Container text>
              <Header as='h1' className="pink-header">
                <Header.Content>
                  {this.props.title}
                  <Header sub className="purple-subheader">
                    {this.props.created}
                  </Header>
                </Header.Content>
              </Header>
            {/* Images don't display well unless formatted with semantic ui react */}
            {this.props.content}
          </Container>
        </div>
      );
    }
  }
};

export default Post;

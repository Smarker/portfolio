// src/components/About/index.js
import React from 'react';

import './style.css';

import profile from '../../../public/images/profile.jpg';
import climb from '../../../public/images/iceland-climb.jpg';
import hike from '../../../public/images/hiking.jpg';
import ski from '../../../public/images/ski.jpg';

import { Container, Header, Item, Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div className="parallax"></div>
        <Container style={{'padding-top': '50px', 'padding-bottom': '50px', 'background-color': '#22252C'}} fluid>
          <Container text>
            <Header as='h1' style={{'font-size': '3rem'}} inverted>About</Header>
            <Item.Group relaxed>
              <Item>
                <Item.Image size='tiny' src={profile} className='bordered-image-white' size='small' shape='circular' />
                <Item.Content verticalAlign='middle'>
                  <p className="paragraph-white">
                    Stephanie is a software developer who enjoys solving complex problems from a mathematical viewpoint. She seeks out challenges and learning opportunities. When she has free time, she likes to work on <Link to="/projects" className="link-underline">personal projects</Link>.
                  </p>
                </Item.Content>
              </Item>
            </Item.Group>
            <p className="paragraph-white">
              She aspires to attain a master&rsquo;s degree in machine learning or AI.
            </p>
            <p className="paragraph-white">
              She loves teaching high school students through volunteering for the <a className="about-link" href="https://www.middlesexcc.edu/new-brunswick-center/empower-high-school-mentoring-program/">EMPOWER program</a>
            </p>
            </Container>
        </Container>

        <div className="parallax"></div>
        <Container style={{'padding-top': '50px', 'padding-bottom': '50px', 'background-color': '#22252C'}} fluid>
          <Container text textAlign='center'>
            <Image.Group size='small'>
              <Image src={climb} className='bordered-image-white spaced-image' shape='circular' />
              <Image src={hike} className='bordered-image-white spaced-image' shape='circular' />
              <Image src={ski} className='bordered-image-white spaced-image' shape='circular' />
            </Image.Group>
            <p className="paragraph-white">When she is not coding, she likes playing volleyball, skiing, bouldering, and backpacking. Last September, she visited Iceland to go exploring and appreciate nature. Her favorite part of the trip was glacier hiking!</p>
          </Container>
        </Container>

      </div>
    );
  }
}

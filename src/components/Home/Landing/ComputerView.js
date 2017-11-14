import React from 'react';
import ShortBio from './ShortBio';
import ContactButtonGroup from './ContactButtonGroup';
import { Grid, Container } from 'semantic-ui-react';

const ComputerView = props => (
  <Grid className="computer only" padded columns={2} stackable>
    <Grid.Row className="parallax-home" stretched>
      <Grid.Column width={6} textAlign='center' verticalAlign='middle'>
      </Grid.Column>
      <Grid.Column width={10} textAlign='center' verticalAlign='middle'>
        <Container text>
          <ShortBio style={{name: {'font-size': '3em'}, title: {'font-size': '1.5em'}}}/>
          <ContactButtonGroup />
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ComputerView;
import React from 'react';
import ShortBio from './ShortBio';
import ContactButtonGroup from './ContactButtonGroup';
import { Grid, Container } from 'semantic-ui-react';

const TabletView = props => (
  <Grid className="tablet only" padded columns={2} stackable>
    <Grid.Row style={{'background-image': 'url("/images/splash2.jpg")', 'background-size':'cover'}} stretched>
      <Grid.Column width={5} textAlign='center' verticalAlign='middle'>
      </Grid.Column>
      <Grid.Column width={8} textAlign='center' verticalAlign='middle'>
        <Container text>
          <ShortBio style={{name: {'font-size': '2em'}, title: {}}}/>
          <ContactButtonGroup />
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default TabletView;
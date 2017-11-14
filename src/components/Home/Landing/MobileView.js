import React from 'react';
import ShortBio from './ShortBio';
import ContactButtonGroup from './ContactButtonGroup';
import { Grid, Container } from 'semantic-ui-react';

const MobileView = props => (
  <Grid className="mobile only" padded columns={2} stackable>
    <Grid.Row style={{'background-image': 'url("/images/splash2.jpg")', 'background-size':'cover'}} stretched>
      <Grid.Column className="mobile only" width={10} textAlign='center' verticalAlign='middle'>
        <Container text>
          <ShortBio style={{name: {}, title: {}}}/>
          <ContactButtonGroup />
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default MobileView;
import React from 'react';

import { Item } from 'semantic-ui-react';

import slack from '../../../public/images/projects/slack-logo.svg';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src={slack} />

            <Item.Content>
              <Item.Header>Arrowhead Valley Camp</Item.Header>
              <Item.Meta>
                <span className='price'>$1200</span>
                <span className='stay'>1 Month</span>
              </Item.Meta>
              <Item.Description>yoooo</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
}

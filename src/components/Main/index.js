import React from 'react';

import { Sidebar, Segment, Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

//see: https://facebook.github.io/react/docs/composition-vs-inheritance.html
class Main extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu stackable>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/about">About</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/">Projects</Link>
          </Menu.Item>
        </Menu>
        <div className="container">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;

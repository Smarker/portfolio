import React from 'react';

import './style.css';



import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

//see: https://facebook.github.io/react/docs/composition-vs-inheritance.html
class Main extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className="main-content">
        <div className="ui top fixed sticky" style={{width: '100%'}}>
            <Menu size='large' attached='top'>
              <Menu.Menu position='right'>
                <Menu.Item onClick={null}>
                  <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item onClick={null}>
                  <Link to="/about">About</Link>
                </Menu.Item>

                <Menu.Item onClick={null}>
                  <Link to="/">Projects</Link>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
import React from 'react';

import './style.css';

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

//see: https://facebook.github.io/react/docs/composition-vs-inheritance.html
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-content">
        <div className="ui top fixed sticky" style={{width: '100%'}}>
          <Menu size='large' attached='top' className="nav-dark">
            <Menu.Item onClick={this.handleItemClick}>
              <Link to="/" className="nav-link">SM</Link>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item onClick={this.handleItemClick}>
                <Link to="/about" className="nav-link">About</Link>
              </Menu.Item>
              <Menu.Item onClick={this.handleItemClick}>
                <Link to="/projects" className="nav-link">Projects</Link>
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

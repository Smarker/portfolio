import React from 'react';

import './style.css';

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

//see: https://facebook.github.io/react/docs/composition-vs-inheritance.html
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: 0,
      navStyle: "nav-dark"
    };

    //binding necessary to get 'this' to work in callback
    //this.handleScroll = this.handleScroll.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('click', this.handleItemClick);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.addEventListener('click', this.handleItemClick);
  }

  handleScroll(event) {
    let height = window.innerHeight;

    this.setState({ scrollPosition: event.pageY });

    if(this.state.scrollPosition > height - 50) { //for 50px nav height
      this.setState({ navStyle: 'nav-dark-fade' });
    } else {
      this.setState({ navStyle: 'nav-white-fade' });
    }
  }

  handleItemClick(e) {
    this.setState({ name: this.props.name });
  }

  render() {
    return (
      <div className="main-content">
        <div className="ui top fixed sticky" style={{width: '100%'}}>
            <Menu size='large' attached='top' className={this.state.navStyle}>
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

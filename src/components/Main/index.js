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
      styleName: "nav-white"
    };

    //binding necessary to get 'this' to work in callback
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let height = window.innerHeight;
    this.setState({ scrollPosition: event.pageY });

    if(this.state.scrollPosition > height - 50) { //for 50px nav height
      this.setState({ styleName: 'nav-dark' });
    } else {
      this.setState({ styleName: 'nav-white' });
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className="main-content">
        <div className="ui top fixed sticky" style={{width: '100%'}}>
            <Menu size='large' attached='top' className={this.state.styleName}>
              <Menu.Item onClick={null}>
              <Link to="/">SM</Link>
              </Menu.Item>
              <Menu.Menu position='right'>

                <Menu.Item onClick={null}>
                  <Link to="/about">About</Link>
                </Menu.Item>

                <Menu.Item onClick={null}>
                  <Link to="/projects">Projects</Link>
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

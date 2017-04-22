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

    console.log("you are on this page: " + this.props.name);
    let height = window.innerHeight;

    this.setState({ scrollPosition: event.pageY });

    if(this.state.scrollPosition > height - 50 && name != 'about' && name != 'projects') { //for 50px nav height
      this.setState({ styleName: 'nav-dark-fade' });
    } else {
      this.setState({ styleName: 'nav-white-fade' });
    }
    
  }

  handleItemClick(e, { name }) {
    console.log(name);
    this.setState({ activeItem: name });
    if(name == 'projects' || name == 'about' ) {
      this.setState({ styleName: 'nav-dark' });
    } else {
      this.setState({ styleName: 'nav-white' });
    }
  }

  render() {
    const { activeItem } = this.state
    return (
      <div className="main-content">
        <div className="ui top fixed sticky" style={{width: '100%'}}>
            <Menu size='large' attached='top' className={this.state.styleName}>
              <Menu.Item onClick={this.handleItemClick} name="home">
              <Link to="/">SM</Link>
              </Menu.Item>
              <Menu.Menu position='right'>

                <Menu.Item onClick={this.handleItemClick} name="about">
                  <Link to="/about">About</Link>
                </Menu.Item>

                <Menu.Item onClick={this.handleItemClick} name="projects">
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

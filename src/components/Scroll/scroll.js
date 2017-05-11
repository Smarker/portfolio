import React from 'react';
import ReactDOM from 'react-dom';

class Scroll extends React.Component {
  getInitialState() {
    return {
      scrollTo: 0
    }
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({scrollTo: $(window).scrollToBottom()});
  }

  scrollToBottom() {
    this.setState({scrollTo: $window.scrollTo($window.height)});
  }

  render() {
    return (
      <Button onClick={this.scrollToBottom}>
        Click Here
      </Button>
    );
  }
}

export default Scroll

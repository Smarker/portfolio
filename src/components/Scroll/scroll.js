import React from 'react';
import ReactDOM from 'react-dom';

class Scroll extends React.Component {
  getInitialState: function() {
    return {
      scrollTo: 0;
    }
  },

  componentWillMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function() {
    this.setState({scrollTo: $(window).scrollToBottom()});
  },

  scrollToBottom: function() {
    this.setState({scrollTo: $window.scrollTo($window.height)});
  },

  render: function() {
    return (
      <Button onClick={this.scrollToBottom}>
        Click Here
      </Button>
    );
  }
}

export default Scroll

import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./index.js";

it('renders without crashing', () => {
  ReactDOM.render(<Root />,
  document.getElementById('root'));
});

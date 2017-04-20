// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/semantic-ui-css/semantic.min.css';

import { browserHistory } from 'react-router';

import './index.css';

//using ES6 modules
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { SettingUpAPortfolioPost } from './markdown/blog/2017/march/SettingUpAPortfolio';
import { SettingUpCustomDomainWithHerokuAndNamecheapPost } from './markdown/blog/2017/april/SettingUpCustomDomainWithHerokuAndNamecheap';
import { VSCodePost } from './markdown/blog/2017/april/VSCode';

/*TODO: change file name to routes.js*/
const routes = (
  <Router history={browserHistory}>
    <Main>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/creating-a-developer-portfolio' component={SettingUpAPortfolioPost} />
      <Route path='/setting-up-custom-domain-with-heroku-and-namecheap' component={SettingUpCustomDomainWithHerokuAndNamecheapPost} />
      <Route path='/vs-code' component={VSCodePost} />
      <Route path='/about' component={About}/>
      <Route path='/projects' component={Projects}/>
    </Main>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);

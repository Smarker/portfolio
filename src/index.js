// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/semantic-ui-css/semantic.min.css';

import './index.css';

//using ES6 modules
import {
  BrowserRouter as Router
} from 'react-router-dom'

import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { SettingUpAPortfolioPost } from './markdown/blog/2017/march/SettingUpAPortfolio';
import { SettingUpCustomDomainWithHerokuAndNamecheapPost } from './markdown/blog/2017/april/SettingUpCustomDomainWithHerokuAndNamecheap';
import { VSCodePost } from './markdown/blog/2017/april/VSCode';
import { ReactMeteorTutorialPost } from './markdown/blog/2017/april/ReactMeteorTutorial';
import { ChattybotPost } from './markdown/blog/2017/may/Chattybot';

import {render} from "react-dom";
import {browserHistory, match} from "react-router";

import createRoutes from "./routes";

const Root = () => (
  <Router history={browserHistory}>{createRoutes()}</Router>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

export default Root;
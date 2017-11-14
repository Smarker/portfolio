import React from 'react';

import './style.css';

import SettingUpAPortfolioPreviewPost from '../../markdown/blog/2017/march/SettingUpAPortfolio.js';
import SettingUpCustomDomainWithHerokuAndNamecheapPreviewPost from '../../markdown/blog/2017/april/SettingUpCustomDomainWithHerokuAndNamecheap.js';
import VSCodePreviewPost from '../../markdown/blog/2017/april/VSCode.js';
import ReactMeteorTutorialPreviewPost from '../../markdown/blog/2017/april/ReactMeteorTutorial.js';
import ChattybotPreviewPost from '../../markdown/blog/2017/may/Chattybot.js';

import ComputerView from './Landing/ComputerView';
import TabletView from './Landing/TabletView';
import MobileView from './Landing/MobileView';
import ShortBio from './Landing/ShortBio';
import ContactButtonGroup from './Landing/ContactButtonGroup';
import WorkTogether from './Landing/WorkTogether';
import Footer from './Landing/Footer';

class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <ComputerView />
        <TabletView />
        <MobileView />

        <ChattybotPreviewPost />
        <ReactMeteorTutorialPreviewPost />
        <VSCodePreviewPost />
        <SettingUpCustomDomainWithHerokuAndNamecheapPreviewPost />
        <SettingUpAPortfolioPreviewPost />

        <WorkTogether />
        <Footer />
      </div>
    );
  }
}

export default Home;

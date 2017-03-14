import React from 'react'

//using ES6 modules
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import splash from '../public/images/splash.jpg';

import '../node_modules/semantic-ui-css/semantic.min.css';

import { Button } from 'semantic-ui-react';

const ButtonExampleButton = () => (
  <Button>
    Click Here
  </Button>
)

import Home from './components/Home';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  { path: '/',
    exact: true,
    sidebar: () => (<div>
       <img src={splash} height="300" width="300"/>
       </div>),
    main: () => <Home />
  },
  { path: '/about',
    sidebar: () => <div><ButtonExampleButton /></div>,
    main: () => <h2>about</h2>
  },
  { path: '/projects',
    sidebar: () => <div>projects!</div>,
    main: () => <h2>projects</h2>
  }
]

const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/projects">projects</Link></li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default SidebarExample

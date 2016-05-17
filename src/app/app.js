import React from 'react'
import { ReactDOM, render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// All the views and inner views
import Main from './Main'

import All from '../views/all'
import Downloading from '../views/downloading'
import Downloaded from '../views/downloaded'
import Settings from '../views/settings'
import About from '../views/about'

//Needed for onTouchTap
//Can go away when react 1.0 release
//NOTE https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render

render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      // TODO add a first run logic to initiate the settings for the first time
      <IndexRoute component={All}/>
      <Route path="/downloading" component={Downloading}/>
      <Route path="/downloaded" component={Downloaded}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))

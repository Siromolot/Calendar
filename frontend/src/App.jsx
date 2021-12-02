import React from 'react';
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Main from './pages/Main';

function App() {

    const pages = [
        {
            path: '/',
            component: Main
        },
    ];

    const pageItem = pages.map(page => (
        <Route
            key={page.path}
            exact
            path={page.path}
            component={page.component}
        />
    ))

  return (
      <HashRouter>
          <Switch>
              {pageItem}
          </Switch>
      </HashRouter>
  )
}

export default App;

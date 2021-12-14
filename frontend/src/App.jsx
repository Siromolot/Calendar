import React from 'react';
import { Route, Routes } from "react-router-dom";

import Main from './pages/Main';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {

    const pages = [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'auth',
        element: <Auth />
      },
      {
        path: 'admin',
        element: <Admin />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ];

    const pageItem = pages.map(page => (
        <Route
            key={page.path}
            path={page.path}
            element={page.element}
        />
    ))
  
  const notFoundPage = <Route return component={NotFound} />
  const resultPageItem = [...pageItem, notFoundPage]

  return (
        <Routes>
            {resultPageItem}
        </Routes>
  )
}

export default App;

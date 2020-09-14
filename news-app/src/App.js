import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import TopNews from './components/TopNews';
import Categories from './components/Categories';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Route
          exact
          path={['/', '/top-news']}
          component={TopNews}
        ></Route>
        <Route path="/categories" component={Categories}></Route>
        <Route path="/search" component={Search}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
